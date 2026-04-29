const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostBySlug,
  getPostsByCategory,
  getLatestPosts,
  incrementPostViews,
} = require('../controllers/postController');
const { getComments, addComment } = require('../controllers/commentController');

router.get('/latest', getLatestPosts);
router.get('/category/:categorySlug', getPostsByCategory);

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);
router.patch('/:slug/views', incrementPostViews);
router.get('/:slug/comments', getComments);
router.post('/:slug/comments', addComment);

module.exports = router;
