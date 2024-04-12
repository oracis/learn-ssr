import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../store/slice/PersonalSlice';
import Helmet from 'react-helmet';

const Personal = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);
  return (
    <>
      <Helmet>
        <title>Personal</title>
      </Helmet>
      <div>
        <h4>{userInfo.name}</h4>
        <p>{userInfo.job}</p>
      </div>
    </>
  );
};

Personal.getInitialData = (store) => {
  return store.dispatch(fetchUserInfo());
};

export default Personal;
