import { ICategory } from './../../models/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ICategory[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const id = new Date().to;
      state.push;
    },
  },
});

export default tasksSlice.reducer;
