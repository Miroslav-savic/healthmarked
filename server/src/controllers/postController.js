const postService = require('../services/postService');

const parsePaginationParams = (query) => ({
  page: Math.max(1, parseInt(query.page) || 1),
  limit: Math.min(50, Math.max(1, parseInt(query.limit) || 10)),
});

const incrementPostViews = async (req, res, next) => {
  try {
    const views = await postService.incrementViews(req.params.slug);
    res.json({ views });
  } catch (err) {
    next(err);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const { page, limit } = parsePaginationParams(req.query);
    const { search = '' } = req.query;
    const result = await postService.getAllPosts({ page, limit, search });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getPostBySlug = async (req, res, next) => {
  try {
    const post = await postService.getPostBySlug(req.params.slug);
    res.json({ post });
  } catch (err) {
    next(err);
  }
};

const getPostsByCategory = async (req, res, next) => {
  try {
    const { page, limit } = parsePaginationParams(req.query);
    const result = await postService.getPostsByCategory(req.params.categorySlug, { page, limit });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getLatestPosts = async (req, res, next) => {
  try {
    const limit = Math.min(20, Math.max(1, parseInt(req.query.limit) || 5));
    const posts = await postService.getLatestPosts(limit);
    res.json({ posts });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPosts, getPostBySlug, getPostsByCategory, getLatestPosts, incrementPostViews };
