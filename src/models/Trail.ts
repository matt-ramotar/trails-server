import {Document, Model, model, Schema} from 'mongoose';

export interface ITrail extends Document {
    name: string;
    description: string;
    location: string;
    length: number;
    difficulty: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const trailSchema = new Schema<ITrail>({
    name: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    length: {type: Number},
    difficulty: {type: String},
    imageUrl: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const Trail: Model<ITrail> = model<ITrail>('Trail', trailSchema);