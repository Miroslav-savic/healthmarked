const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, maxlength: 320 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    keywords: [{ type: String, trim: true }],
    metaDescription: { type: String, maxlength: 160 },
    featuredImage: { type: String, default: null },
    sources: [{ type: String }],
    readTime: { type: Number, default: 5 },
    isPublished: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Full-text index across all searchable fields
postSchema.index(
  { title: 'text', content: 'text', excerpt: 'text', keywords: 'text', sources: 'text' },
  { weights: { title: 10, keywords: 5, excerpt: 3, content: 1, sources: 1 }, name: 'post_fulltext' }
);
postSchema.index({ category: 1, createdAt: -1 });

module.exports = mongoose.model('Post', postSchema);
