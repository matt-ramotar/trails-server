import express from 'express';
import {HikeController} from "../controllers/HikeController";

const router = express.Router();
const hikeController = new HikeController();

router.post('/', hikeController.createHike);
router.get('/', hikeController.getHikes);
router.get('/:id', hikeController.getHikeById);
router.put('/:id', hikeController.updateHike);
router.delete('/:id', hikeController.deleteHike);

export default router;