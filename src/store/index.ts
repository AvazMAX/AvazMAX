import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './test/testSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [testSlice.name]: testSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = () => useSelector((state: RootState) => state);
