import { configureStore } from '@reduxjs/toolkit';
import openReducer from './slices/openSlicer';
import serviceReducer from './slices/servicesSlicer';

export const store = configureStore({
  reducer: {
    open: openReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
