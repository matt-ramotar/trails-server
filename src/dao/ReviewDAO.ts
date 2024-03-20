import {IReview, Review} from '../models/review';
import {Types} from 'mongoose';

export class ReviewDAO {
    async createReview(reviewData: IReview): Promise<IReview> {
        const newReview = await Review.create(reviewData);
        return newReview;
    }

    async getReviews(trailId: string): Promise<IReview[]> {
        const reviews = await Review.find({trailId: new Types.ObjectId(trailId)})
            .populate('userId')
            .populate('trailId')
            .sort({createdAt: -1});
        return reviews;
    }

    async getReviewById(reviewId: string): Promise<IReview | null> {
        const review = await Review.findById(reviewId)
            .populate('userId')
            .populate('trailId');
        return review;
    }

    async getReviewsByUserId(userId: string): Promise<IReview[]> {
        const reviews = await Review.find({userId: new Types.ObjectId(userId)})
            .populate('userId')
            .populate('trailId')
            .sort({createdAt: -1});
        return reviews;
    }

    async updateReview(reviewId: string, reviewData: Partial<IReview>): Promise<IReview | null> {
        const updatedReview = await Review.findByIdAndUpdate(reviewId, reviewData, {new: true})
            .populate('userId')
            .populate('trailId');
        return updatedReview;
    }

    async deleteReview(reviewId: string): Promise<void> {
        await Review.findByIdAndDelete(reviewId);
    }
}