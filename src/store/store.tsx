import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './slice/tasksSlice';
export const store = configureStore({
  reducer: { tasks: tasksSlice },
});

export type RootState = ReturnType<typeof store.getState>;
