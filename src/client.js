import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes";
import { Provider } from "react-redux";
import createStoreInstance from "./store";

const store = createStoreInstance(window.__preloadedState__);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </Provider>
  );
};

const root = document.getElementById("root");
hydrateRoot(root, <App />);
