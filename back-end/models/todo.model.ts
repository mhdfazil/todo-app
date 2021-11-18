import mongoose, { Schema, Model, Document } from 'mongoose';

type todoDocument = Document & {
    title: string,
    activeStatus: boolean,
    endDate: Date | null
}

type todoDto = {
    title: string,
    activeStatus: boolean,
    endDate: Date | null
}

const todoSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true
    },
    activeStatus: {
        type: Schema.Types.Boolean,
        default: true
    },
    endDate: {
        type: Schema.Types.Date
    }
}, {
    collection: 'todos',
    timestamps: true
})

const Todo: Model<todoDocument> = mongoose.model<todoDocument>('Todo', todoSchema)

export { Todo, todoDocument, todoDto }