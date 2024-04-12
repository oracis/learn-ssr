import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import RoutesList, { routesConfig } from './routes';
import { Provider } from 'react-redux';
import createStoreInstance from './store';
import Helmet from 'react-helmet';

const express = require('express');
const { renderToString } = require('react-dom/server');

const helmet = Helmet.renderStatic();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('dist/public'));

app.get('*', (req, res) => {
  const store = createStoreInstance();
  const promises = routesConfig.map((route) => {
    if (req.url === route.path && route?.element?.getInitialData) {
      return route.element.getInitialData(store);
    } else {
      return null;
    }
  });
  Promise.all(promises.filter((promise) => promise)).then(() => {
    const preloadedState = store.getState();
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <RoutesList />
        </StaticRouter>
      </Provider>
    );
    const html = `<!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${helmet.title.toString()}</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>window.__preloadedState__=${JSON.stringify(preloadedState)}</script>
          <script src="bundle_client.js"></script>
        </body>
      </html>`;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
