import { getTodoById } from './../actions/todoActions';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface IState {
    todos: [];
    todo: {};
}
const initialState: IState = {
    todos: [],
    todo: {},
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodos(state, action: PayloadAction<any>) {
            state.todos = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoById.pending, (state) => {
            state.todo = {};
        });
        builder.addCase(getTodoById.fulfilled, (state, action) => {
            state.todo = action.payload;
        });
        builder.addCase(getTodoById.rejected, (state) => {
            state.todo = {};
        });
    },
});
export const { getTodos } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
