import { Request, Response } from 'express';
import { ReviewService } from '../services/reviewService';

export default class ReviewController {
    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    createReview = async (req: Request, res: Response) => {
        try {
            const reviewData = req.body;
            const newReview = await this.reviewService.createReview(reviewData);
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create review' });
        }
    };

    getReviews = async (req: Request, res: Response) => {
        try {
            const trailId = req.query.trailId as string;
            const reviews = await this.reviewService.getReviews(trailId);
            res.json(reviews);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve reviews' });
        }
    };

    getReviewById = async (req: Request, res: Response) => {
        try {
            const reviewId = req.params.id;
            const review = await this.reviewService.getReviewById(reviewId);
            if (review) {
                res.json(review);
            } else {
                res.status(404).json({ error: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve review' });
        }
    };

    updateReview = async (req: Request, res: Response) => {
        try {
            const reviewId = req.params.id;
            const reviewData = req.body;
            const updatedReview = await this.reviewService.updateReview(reviewId, reviewData);
            if (updatedReview) {
                res.json(updatedReview);
            } else {
                res.status(404).json({ error: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update review' });
        }
    };

    deleteReview = async (req: Request, res: Response) => {
        try {
            const reviewId = req.params.id;
            await this.reviewService.deleteReview(reviewId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete review' });
        }
    };
}