import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { updateObject } from '../../shared/utility';
import { createTodo, deleteTodo, fetchTodos, updateTodo } from './todoAction';

interface TodosState {
    todos: Todo[],
    loading: boolean,
    error: string | null
}

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        fetch_start: state => 
            updateObject(state, { loading: true }),
        fetch_success: (state, action: PayloadAction<Array<Todo>>) => 
            updateObject(state, { loading: false, todos: action.payload }),
        fetch_fail: state => 
            updateObject(state, { loading: true, error: 'error' })
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
            state.todos = payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchTodos.rejected, (state, { payload }) => {
            state.error = 'Oops! Something went wrong.';
            state.loading = false;
        });
        builder.addCase(deleteTodo.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo._id !== payload);
            state.loading = false;
            state.error = null;
        });
        builder.addCase(deleteTodo.rejected, (state, { payload }) => {
            state.error = 'Oops! Something went wrong.';
            state.loading = false;
        });
        builder.addCase(updateTodo.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
            const index = state.todos.findIndex(todo => todo._id === payload._id);
            state.todos[index] = payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(updateTodo.rejected, (state, { payload }) => {
            state.error = 'Oops! Something went wrong.';
            state.loading = false;
        });
        builder.addCase(createTodo.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createTodo.fulfilled, (state, { payload }) => {
            state.todos.push(payload);
            state.loading = false;
            state.error = null;
        });
        builder.addCase(createTodo.rejected, (state, { payload }) => {
            state.error = 'Oops! Something went wrong.';
            state.loading = false;
        });
    }
})

export const { fetch_start, fetch_success, fetch_fail } = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: RootState) => state.todos;

export const selectLoading = (state: RootState) => state.loading;

export const selectError = (state: RootState) => state.error;
