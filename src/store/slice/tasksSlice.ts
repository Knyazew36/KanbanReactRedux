import { ICategory } from './../../models/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ICategory[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const id = new Date().getTime();
      state.push({ title: action.payload, id, status: 'backlog' });
    },
    taskToReady: (state, action: PayloadAction<number>) => {
      const itemId = state.findIndex((el) => el.id === action.payload);
      state[itemId] = { ...state[itemId], status: 'ready' };
    },
  },
});

export default tasksSlice.reducer;
export const { createTask, taskToReady } = tasksSlice.actions;
