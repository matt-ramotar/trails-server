import {Document, Model, model, Schema} from 'mongoose';

export interface IBookmark extends Document {
    userId: string;
    trailId: string;
    createdAt: Date;
    updatedAt: Date;
}

const bookmarkSchema = new Schema<IBookmark>({
    userId: {type: String, required: true},
    trailId: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const Bookmark: Model<IBookmark> = model<IBookmark>('Bookmark', bookmarkSchema);
