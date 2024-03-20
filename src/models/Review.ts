import {Document, Model, model, Schema} from 'mongoose';

export interface IReview extends Document {
    userId: string;
    trailId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema<IReview>({
    userId: {type: String, required: true},
    trailId: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const Review: Model<IReview> = model<IReview>('Review', reviewSchema);