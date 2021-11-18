import axios from '../../axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from 'axios';

export const fetchTodos = createAsyncThunk<Todo[]>(
    "todos/fetch", 
    async () => {
      const response: AxiosResponse = await axios.get('todos');
      const apiData: ApiData = response.data;
      const todos: Todo[] = apiData.data;
      return todos;
    }
);

export const deleteTodo = createAsyncThunk<TodoId, TodoId>(
  "todos/delete", 
  async (id: TodoId) => {
    const response: AxiosResponse = await axios.delete(`todos/${id}`);
    const apiData: ApiData = response.data;
    const deletedId: TodoId = apiData.id;
    return deletedId;
  }
);

export const updateTodo = createAsyncThunk<Todo, Todo>(
  "todos/update", 
  async (todo: Todo) => {
    const response: AxiosResponse = await axios.put(`todos/${todo._id}`);
    const apiData: SingleApiData = response.data;
    const updatedTodo: Todo = apiData.data;
    return updatedTodo;
  }
);