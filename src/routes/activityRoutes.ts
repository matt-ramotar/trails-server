import express from 'express';
import { ActivityController } from '../controllers/activityController';

const router = express.Router();
const activityController = new ActivityController();

router.get('/', activityController.getActivities);

export default router;