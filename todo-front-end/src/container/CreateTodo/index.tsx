import Box from '@mui/system/Box';
import React from 'react';
import Input from '../../components/Input';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../app/hooks';
import { createTodo } from '../../features/todo/todoAction';

type FormValues = {
    title: string;
    endDate: string;
};

const CreateTodo = () => {

    const dispatch = useAppDispatch();

    const methods = useForm<FormValues>();

    const { handleSubmit } = methods;

    const onSubmit: SubmitHandler<FormValues> = async data => {
        dispatch(createTodo(data))
    }

    return (
        <Box sx={{ mt: 12, width: 400, maxWidth: '90%' }}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='title' label='Title' required />
                    <Input name='endDate' label='End Date' type='date' required />
                    <Button type='submit' variant='contained' sx={{ mt: 2 }}>Save</Button>
                </form>
            </FormProvider>
        </Box>
    );
};

export default CreateTodo;