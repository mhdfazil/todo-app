import { Request, Response } from 'express';
import { Todo, todoDto } from '../models/todo.model';

export const create = async (req: Request, res: Response) => {
    const { title, activeStatus, endDate } = req.body;
    if(!title) {
        return res.status(422).json({ message: 'Title is required' })
    }
    const todo: todoDto = { title, activeStatus, endDate }
    const createdTodo = await Todo.create(todo);
    return res.status(201).json({ data: createdTodo });
}

export const getAll = async (req: Request, res: Response) => {
    const todos = await Todo.find().exec();
    return res.status(200).json({ data: todos });
}

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findOne({ _id: id }).exec();
        if(!todo) {
            return res.status(404).json({ message: `Todo with id ${id} not found.` })
        }
        return res.status(200).json({ data: todo });
    } 
    catch(err) {
        return res.status(404).json({ message: `Todo with id ${id} not found.` })
    }
}

export const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, activeStatus, endDate } = req.body;
    const todo = await Todo.findOne({ _id: id }).exec();
    if (!todo) {
        return res.status(404).json({ message: `Todo with id ${id} not found.` })
    }
    if(!title) {
        return res.status(422).json({ message: 'Title is required' })
    }

    const updatingTodo: todoDto = { title, activeStatus, endDate }
    const updatedTodo = await Todo.findByIdAndUpdate({ _id: id }, updatingTodo, { new: true })

    return res.status(200).json({ data: updatedTodo });
}

export const remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id)
    return res.status(200).json({ message: 'Todo deleted successfully.', id })
}