const Post = require('../models/Post');
const Category = require('../models/Category');

const buildPagination = (page, limit, total) => ({
  page,
  limit,
  total,
  pages: Math.ceil(total / limit),
});

const buildSearchQuery = (search) => {
  const r = new RegExp(search.trim(), 'i');
  return {
    $or: [
      { title: r },
      { excerpt: r },
      { keywords: r },
      { content: r },
      { sources: r },
    ],
  };
};

const getAllPosts = async ({ page = 1, limit = 10, search = '' } = {}) => {
  const skip = (page - 1) * limit;
  const query = { isPublished: true, ...(search ? buildSearchQuery(search) : {}) };

  const [posts, total] = await Promise.all([
    Post.find(query)
      .populate('category', 'name slug icon')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-content')
      .lean(),
    Post.countDocuments(query),
  ]);

  return { posts, pagination: buildPagination(page, limit, total) };
};

const getPostBySlug = async (slug) => {
  const post = await Post.findOne({ slug, isPublished: true })
    .populate('category', 'name slug icon')
    .lean();

  if (!post) {
    const err = new Error(`Post '${slug}' not found`);
    err.statusCode = 404;
    throw err;
  }
  return post;
};

const getPostsByCategory = async (categorySlug, { page = 1, limit = 10 } = {}) => {
  const category = await Category.findOne({ slug: categorySlug }).lean();
  if (!category) {
    const err = new Error(`Category '${categorySlug}' not found`);
    err.statusCode = 404;
    throw err;
  }

  const skip = (page - 1) * limit;
  const query = { category: category._id, isPublished: true };

  const [posts, total] = await Promise.all([
    Post.find(query)
      .populate('category', 'name slug icon')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-content')
      .lean(),
    Post.countDocuments(query),
  ]);

  return { category, posts, pagination: buildPagination(page, limit, total) };
};

const incrementViews = async (slug) => {
  const post = await Post.findOneAndUpdate(
    { slug, isPublished: true },
    { $inc: { views: 1 } },
    { new: true, select: 'views' }
  ).lean();
  if (!post) {
    const err = new Error(`Post '${slug}' not found`);
    err.statusCode = 404;
    throw err;
  }
  return post.views;
};

const getLatestPosts = async (limit = 5) => {
  return Post.find({ isPublished: true })
    .populate('category', 'name slug icon')
    .sort({ createdAt: -1 })
    .limit(limit)
    .select('title slug excerpt category readTime createdAt featuredImage')
    .lean();
};

module.exports = { getAllPosts, getPostBySlug, getPostsByCategory, getLatestPosts, incrementViews };
