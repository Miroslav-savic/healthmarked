const commentService = require('../services/commentService');

const getComments = async (req, res, next) => {
  try {
    const postId = await commentService.getPostIdBySlug(req.params.slug);
    const comments = await commentService.getComments(postId);
    res.json({ comments });
  } catch (err) {
    next(err);
  }
};

const addComment = async (req, res, next) => {
  try {
    const { name, content } = req.body;
    if (!name || !String(name).trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!content || !String(content).trim()) {
      return res.status(400).json({ error: 'Comment text is required' });
    }
    if (String(content).trim().length < 5) {
      return res.status(400).json({ error: 'Comment is too short' });
    }
    const postId = await commentService.getPostIdBySlug(req.params.slug);
    const comment = await commentService.addComment(postId, {
      name: String(name).trim().slice(0, 80),
      content: String(content).trim().slice(0, 2000),
    });
    res.status(201).json({ comment });
  } catch (err) {
    next(err);
  }
};

module.exports = { getComments, addComment };
