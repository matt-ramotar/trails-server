import { Request, Response } from 'express';
import { ActivityService } from '../services/activityService';

export class ActivityController {
    private activityService: ActivityService;

    constructor() {
        this.activityService = new ActivityService();
    }

    getActivities = async (req: Request, res: Response) => {
        try {
            const userId = req.query.userId as string;
            const activities = await this.activityService.getActivities(userId);
            res.json(activities);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve activities' });
        }
    };
}