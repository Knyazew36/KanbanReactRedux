import { ICategory } from './../../models/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const savedState = localStorage.getItem('taskState')
const initialState: ICategory[] = savedState ? JSON.parse(savedState) : []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const id = new Date().getTime();
      state.push({ title: action.payload, id, status: 'backlog' });
      localStorage.setItem('taskState', JSON.stringify(state))
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
      localStorage.setItem('taskState', JSON.stringify(state))
    },
    objectChange: (state, action: PayloadAction<{ id: number, title: string, description?: string }>) => {
      const { id, title, description } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id)
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], title, description }
      }
      localStorage.setItem('taskState', JSON.stringify(state))
    }
  },
});

export default tasksSlice.reducer;
export const { createTask, updateTaskStatus, objectChange } = tasksSlice.actions;
