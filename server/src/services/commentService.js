const Comment = require('../models/Comment');
const Post = require('../models/Post');

const getComments = async (postId) => {
  return Comment.find({ post: postId })
    .sort({ createdAt: -1 })
    .select('name content createdAt')
    .lean();
};

const addComment = async (postId, { name, content }) => {
  const comment = await Comment.create({ post: postId, name, content });
  return { _id: comment._id, name: comment.name, content: comment.content, createdAt: comment.createdAt };
};

const getPostIdBySlug = async (slug) => {
  const post = await Post.findOne({ slug, isPublished: true }).select('_id').lean();
  if (!post) {
    const err = new Error(`Post '${slug}' not found`);
    err.statusCode = 404;
    throw err;
  }
  return post._id;
};

module.exports = { getComments, addComment, getPostIdBySlug };
