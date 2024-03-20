import {BookmarkDAO} from "../dao/BookmarkDAO";
import {IBookmark} from "../models/Bookmark";

export class BookmarkService {
    private bookmarkDAO: BookmarkDAO;

    constructor() {
        this.bookmarkDAO = new BookmarkDAO();
    }

    createBookmark = async (bookmarkData: IBookmark) => {
        return this.bookmarkDAO.createBookmark(bookmarkData);
    };

    getBookmarks = async (userId: string) => {
        return this.bookmarkDAO.getBookmarks(userId);
    };

    deleteBookmark = async (bookmarkId: string) => {
        return this.bookmarkDAO.deleteBookmark(bookmarkId);
    };
}