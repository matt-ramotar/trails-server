import { ActivityDAO } from '../dao/activityDAO';

export class ActivityService {
    private activityDAO: ActivityDAO;

    constructor() {
        this.activityDAO = new ActivityDAO();
    }

    getActivities = async (userId: string) => {
        return this.activityDAO.getActivities(userId);
    };
}