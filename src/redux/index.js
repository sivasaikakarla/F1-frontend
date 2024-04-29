import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice';
import dbSliceReducer from './dbSlice';

export const store = configureStore({
    reducer: {
    userSliceReducer,
  dbSliceReducer,
},
  });