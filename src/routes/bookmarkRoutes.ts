import express from 'express';
import BookmarkController from '../controllers/bookmarkController';

const router = express.Router();
const bookmarkController = new BookmarkController();

router.post('/', bookmarkController.createBookmark);
router.get('/:id', bookmarkController.deleteBookmark);

export default router;