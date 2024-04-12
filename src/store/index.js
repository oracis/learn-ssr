import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slice/HomeSlice";
import userReducer from "./slice/PersonalSlice";

const createStoreInstance = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      home: homeReducer,
      user: userReducer,
    },
    preloadedState,
  });
};

export default createStoreInstance;
