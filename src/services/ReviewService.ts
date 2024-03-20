import {ReviewDAO} from '../dao/reviewDAO';
import {IReview} from '../models/review';

export class ReviewService {
    private reviewDAO: ReviewDAO;

    constructor() {
        this.reviewDAO = new ReviewDAO();
    }

    createReview = async (reviewData: IReview) => {
        return this.reviewDAO.createReview(reviewData);
    };

    getReviews = async (trailId: string) => {
        return this.reviewDAO.getReviews(trailId);
    };

    getReviewById = async (reviewId: string) => {
        return this.reviewDAO.getReviewById(reviewId);
    };

    updateReview = async (reviewId: string, reviewData: Partial<IReview>) => {
        return this.reviewDAO.updateReview(reviewId, reviewData);
    };

    deleteReview = async (reviewId: string) => {
        return this.reviewDAO.deleteReview(reviewId);
    };
}
