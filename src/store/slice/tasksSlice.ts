import { ICategory } from './../../models/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ICategory[] = [
  {
    title: 'backlog',
    categoryItems: [],
  },
  {
    title: 'finished',
    categoryItems: [],
  },
  {
    title: 'progress',
    categoryItems: [],
  },
  {
    title: 'ready',
    categoryItems: [],
  },
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createBacklogTask: (state, action: PayloadAction<string>) => {
      const id = new Date().getTime();
      state[0].categoryItems.push({
        id,
        title: action.payload,
      });
    },
    readyTask: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemIndex = state[0].categoryItems.findIndex(
        (el) => el.id === itemId
      );

      if (itemIndex !== -1) {
        state
          .find((category) => category.title === 'ready')
          ?.categoryItems.push(state[0].categoryItems[itemIndex]);

        state[0].categoryItems = [
          ...state[0].categoryItems.slice(0, itemIndex),
          ...state[0].categoryItems.slice(itemIndex + 1),
        ];
      }
    },
  },
});

export default tasksSlice.reducer;
export const { createBacklogTask, readyTask } = tasksSlice.actions;
