const Category = require('../models/Category');

const getAllCategories = async () => {
  return Category.find().sort({ name: 1 }).lean();
};

const getCategoryBySlug = async (slug) => {
  const category = await Category.findOne({ slug }).lean();
  if (!category) {
    const err = new Error(`Category '${slug}' not found`);
    err.statusCode = 404;
    throw err;
  }
  return category;
};

module.exports = { getAllCategories, getCategoryBySlug };
