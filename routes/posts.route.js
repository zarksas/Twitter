const { Router } = require('express');
const router = Router();

const { postsControllers } = require('../controllers/posts.controllers');

router.post('/posts', postsControllers.createPost);
router.delete('/posts', postsControllers.deletePostById);
router.patch('/posts/like/:id', postsControllers.patchLikePost);
router.get('/posts/getposts', postsControllers.getPosts)







module.exports = router;