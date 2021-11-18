import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Todo from '../../components/Todo';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteTodo, fetchTodos, updateTodo } from '../../features/todo/todoAction';
import { selectTodos } from '../../features/todo/todoSlice';
import moment from 'moment';

const Todos = () => {

    const dispatch = useAppDispatch();

    const todos: Todo[] = useAppSelector(selectTodos);

    const handleDelete = (id: TodoId) => {
        dispatch(deleteTodo(id))
    }

    const handleComplete = (todo: Todo) => {
        const updatedTodo = {...todo, activeStatus: false} as Todo;
        dispatch(updateTodo(updatedTodo));
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    return (
        <Box sx={{ mt: 6, mx: 2 }}>
            {todos && todos.map(todo => 
                <Todo 
                    key={todo._id} 
                    _id={todo._id} 
                    title={todo.title} 
                    endDate={moment(todo.endDate).format('DD/MM/YYYY')} 
                    activeStatus={todo.activeStatus}
                    onDelete={() => handleDelete(todo._id)}
                    onUpdate={() => handleComplete(todo)} />
            )}
        </Box>
    );
};

export default Todos;