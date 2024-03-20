import {Activity, IActivity} from '../models/activity';
import {Types} from 'mongoose';

export class ActivityDAO {
    async createActivity(activityData: IActivity): Promise<IActivity> {
        const newActivity = await Activity.create(activityData);
        return newActivity;
    }

    async getActivities(userId: string): Promise<IActivity[]> {
        const activities = await Activity.find({userId: new Types.ObjectId(userId)})
            .populate('userId')
            .populate('trailId')
            .sort({timestamp: -1});
        return activities;
    }

    async getActivitiesByTrailId(trailId: string): Promise<IActivity[]> {
        const activities = await Activity.find({trailId: new Types.ObjectId(trailId)})
            .populate('userId')
            .populate('trailId')
            .sort({timestamp: -1});
        return activities;
    }

    async getRecentActivities(limit: number): Promise<IActivity[]> {
        const activities = await Activity.find()
            .populate('userId')
            .populate('trailId')
            .sort({timestamp: -1})
            .limit(limit);
        return activities;
    }

    async deleteActivity(activityId: string): Promise<void> {
        await Activity.findByIdAndDelete(activityId);
    }
}