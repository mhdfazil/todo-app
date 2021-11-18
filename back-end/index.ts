import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import todoRoute from './routes/todo.route';
import mongoose from 'mongoose';
import cors from 'cors';

const app: Application = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', todoRoute);

const connectionUri: string = process.env.MONGO_URI || '';
const port: string = process.env.PORT || '3000';

// connect to database
mongoose
    .connect(connectionUri)
    .then(() => {
        console.log('database connected');
    })
    .catch(err => {
        console.log(err)
    })

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(404).send({ message: 'Bad request' })
})

app.listen(port, () => {
    console.log(`Todo app running on http://localhost:${port}`)
})