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
    updateTaskStatus: (
      state,
      action: PayloadAction<{
        id: number;
        status: 'ready' | 'progress' | 'finished';
      }>
    ) => {
      const { id, status } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex].status = status;
      }
    },
  },
});

export default tasksSlice.reducer;
export const { createTask, updateTaskStatus } = tasksSlice.actions;
