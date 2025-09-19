// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";   
//import counterReducer from "./reducers/counterSlice";
import authReducer from "./reducers/authSlice";
// 스토어 생성

const store = configureStore({
    reducer: {
      counter: counterReducer,
      auth : authReducer.reducer,
    },
  });

export default store;