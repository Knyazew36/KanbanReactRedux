import { createSlice } from '@reduxjs/toolkit';
const savedState = localStorage.getItem('taskState');
const initialState = savedState ? JSON.parse(savedState) : [];
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            const id = new Date().getTime();
            state.push({ title: action.payload, id, status: 'backlog' });
            localStorage.setItem('taskState', JSON.stringify(state));
        },
        updateTaskStatus: (state, action) => {
            const { id, status } = action.payload;
            const taskIndex = state.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state[taskIndex].status = status;
            }
            localStorage.setItem('taskState', JSON.stringify(state));
        },
        objectChange: (state, action) => {
            const { id, title, description } = action.payload;
            const taskIndex = state.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state[taskIndex] = { ...state[taskIndex], title, description };
            }
            localStorage.setItem('taskState', JSON.stringify(state));
        }
    },
});
export default tasksSlice.reducer;
export const { createTask, updateTaskStatus, objectChange } = tasksSlice.actions;
