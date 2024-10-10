import { configureStore } from '@reduxjs/toolkit';
import iconsReducer from '../features/iconsSlice';

export const store = configureStore({
  reducer: {
    icons: iconsReducer,
  },
});
