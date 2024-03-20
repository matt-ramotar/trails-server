import {Request, Response} from 'express';
import {BookmarkService} from '../services/bookmarkService';

export default class BookmarkController {
    private bookmarkService: BookmarkService;

    constructor() {
        this.bookmarkService = new BookmarkService();
    }

    createBookmark = async (req: Request, res: Response) => {
        try {
            const bookmarkData = req.body;
            const newBookmark = await this.bookmarkService.createBookmark(bookmarkData);
            res.status(201).json(newBookmark);
        } catch (error) {
            res.status(500).json({error: 'Failed to create bookmark'});
        }
    };

    getBookmarks = async (req: Request, res: Response) => {
        try {
            const userId = req.query.userId as string;
            const bookmarks = await this.bookmarkService.getBookmarks(userId);
            res.json(bookmarks);
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve bookmarks'});
        }
    };

    deleteBookmark = async (req: Request, res: Response) => {
        try {
            const bookmarkId = req.params.id;
            await this.bookmarkService.deleteBookmark(bookmarkId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: 'Failed to delete bookmark'});
        }
    };
}