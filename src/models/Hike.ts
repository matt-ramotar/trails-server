import {Document, Model, model, Schema} from 'mongoose';

export interface IHike extends Document {
    userId: string;
    trailId: string;
    startPoint: string;
    endPoint: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    distance: number;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}

const hikeSchema = new Schema<IHike>({
    userId: {type: String, required: true},
    trailId: {type: String, required: true},
    startPoint: {type: String},
    endPoint: {type: String},
    startTime: {type: Date},
    endTime: {type: Date},
    duration: {type: Number},
    distance: {type: Number},
    notes: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const Hike: Model<IHike> = model<IHike>('Hike', hikeSchema);
