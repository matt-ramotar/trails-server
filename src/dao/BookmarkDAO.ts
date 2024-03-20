import {Bookmark, IBookmark} from '../models/bookmark';
import {Types} from 'mongoose';

export class BookmarkDAO {
    async createBookmark(bookmarkData: IBookmark): Promise<IBookmark> {
        const newBookmark = await Bookmark.create(bookmarkData);
        return newBookmark;
    }

    async getBookmarks(userId: string): Promise<IBookmark[]> {
        const bookmarks = await Bookmark.find({userId: new Types.ObjectId(userId)})
            .populate('userId')
            .populate('trailId');
        return bookmarks;
    }

    async getBookmarkById(bookmarkId: string): Promise<IBookmark | null> {
        const bookmark = await Bookmark.findById(bookmarkId)
            .populate('userId')
            .populate('trailId');
        return bookmark;
    }

    async getBookmarkByUserAndTrail(userId: string, trailId: string): Promise<IBookmark | null> {
        const bookmark = await Bookmark.findOne({
            userId: new Types.ObjectId(userId),
            trailId: new Types.ObjectId(trailId),
        })
            .populate('userId')
            .populate('trailId');
        return bookmark;
    }

    async deleteBookmark(bookmarkId: string): Promise<void> {
        await Bookmark.findByIdAndDelete(bookmarkId);
    }

    async deleteBookmarkByUserAndTrail(userId: string, trailId: string): Promise<void> {
        await Bookmark.findOneAndDelete({
            userId: new Types.ObjectId(userId),
            trailId: new Types.ObjectId(trailId),
        });
    }
}