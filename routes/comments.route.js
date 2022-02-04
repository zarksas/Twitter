const { Router } = require('express');
const router = Router();

const { commentsControllers } = require('../controllers/comments.controllers');

router.post('/comments', commentsControllers.postComment);
router.delete('/comments/:id', commentsControllers.deleteCommentById);
router.patch('comments/:id', commentsControllers.patchCommentById)








module.exports = router;