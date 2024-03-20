import express from 'express';
import TrailController from "../controllers/TrailController";

const router = express.Router();
const trailController = new TrailController();

router.post('/', trailController.createTrail);
router.get('/', trailController.getTrails);
router.get('/:id', trailController.getTrailById);
router.delete('/:id', trailController.deleteTrail);
router.put('/:id', trailController.updateTrail)

export default router;