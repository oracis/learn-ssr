import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/slice/HomeSlice';
import Helmet from 'react-helmet';

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.home.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ul>
        {articles?.map((article) => (
          <li key={article?.id}>
            <div>{article?.title}</div>
            <div>{article?.content}</div>
          </li>
        ))}
        <button onClick={handleClick}>Click</button>
      </ul>
    </>
  );
};

Home.getInitialData = (store) => {
  return store.dispatch(fetchArticles());
};

export default Home;
