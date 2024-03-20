import {Document, Model, model, Schema} from 'mongoose';

export interface IActivity extends Document {
    userId: string;
    trailId: string;
    type: string;
    timestamp: Date;
}

const activitySchema = new Schema<IActivity>({
    userId: {type: String, required: true},
    trailId: {type: String, required: true},
    type: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
});

export const Activity: Model<IActivity> = model<IActivity>('Activity', activitySchema);
