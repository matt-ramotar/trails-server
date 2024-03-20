import express from 'express';
import ReviewController from '../controllers/reviewController';

const router = express.Router();
const reviewController = new ReviewController();

router.post('/', reviewController.createReview);
router.get('/', reviewController.getReviews);
router.get('/:id', reviewController.getReviewById);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

export default router;