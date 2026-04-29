const categoryService = require('../services/categoryService');

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json({ categories });
  } catch (err) {
    next(err);
  }
};

const getCategoryBySlug = async (req, res, next) => {
  try {
    const category = await categoryService.getCategoryBySlug(req.params.slug);
    res.json({ category });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, getCategoryBySlug };
