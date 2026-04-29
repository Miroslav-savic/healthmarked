require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Post = require('../models/Post');
const { fullArticles } = require('./content/fullArticles');
const { outlineArticles } = require('./content/outlineArticles');
const { symptomArticles } = require('./content/symptomArticles');
const { moreArticles } = require('./content/moreArticles');
const { moreSymptomArticles } = require('./content/moreSymptomArticles');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthblog';

const categoriesData = [
  { name: 'Cardiology',         slug: 'cardiology',         icon: '❤️',  description: 'Expert articles on heart health, cardiovascular disease prevention, and cardiac treatments.' },
  { name: 'Oncology',           slug: 'oncology',           icon: '🔬',  description: 'Cancer types, treatment advances, screening guidelines, and patient-centred guidance.' },
  { name: 'Dermatology',        slug: 'dermatology',        icon: '🧴',  description: 'Skin conditions, evidence-based treatments, and everyday skincare best practices.' },
  { name: 'Internal Medicine',  slug: 'internal-medicine',  icon: '🏥',  description: 'Chronic conditions, metabolic health, and whole-body internal medicine.' },
  { name: 'Neurology',          slug: 'neurology',          icon: '🧠',  description: 'Brain and nervous system disorders, neurological treatments, and cognitive health.' },
  { name: 'Nutrition',          slug: 'nutrition',          icon: '🥗',  description: 'Dietary science, nutritional guidelines, and evidence-based healthy eating.' },
  { name: 'Mental Health',      slug: 'mental-health',      icon: '🧘',  description: 'Mental wellness, psychological conditions, therapy approaches, and coping strategies.' },
  { name: 'Fitness & Prevention', slug: 'fitness-prevention', icon: '💪', description: 'Exercise science, preventive healthcare, and lifestyle strategies for long-term wellness.' },
];

const getPostsData = (catMap) => [
  ...fullArticles(catMap),
  ...outlineArticles(catMap),
  ...symptomArticles(catMap),
  ...moreArticles(catMap),
  ...moreSymptomArticles(catMap),
];

// Spread posts across the past 12 months with realistic publication cadence
function assignDates(posts) {
  const now = new Date('2026-04-29T12:00:00Z');
  const twelveMonthsAgo = new Date('2025-04-15T10:00:00Z');
  const rangeMs = now - twelveMonthsAgo;

  // Use deterministic spacing so re-seeding produces the same dates
  return posts.map((post, i) => {
    const fraction = i / (posts.length - 1);
    const baseMs = twelveMonthsAgo.getTime() + fraction * rangeMs;
    // Add a small per-post offset (0–3 days) based on index to break uniform spacing
    const jitterMs = ((i * 7919) % (3 * 24 * 60 * 60 * 1000));
    const createdAt = new Date(baseMs + jitterMs);

    // ~30% of articles have an updatedAt 2-8 weeks after publish
    let updatedAt;
    if (i % 3 === 0) {
      const weeksMs = (2 + (i % 7)) * 7 * 24 * 60 * 60 * 1000;
      const candidate = new Date(createdAt.getTime() + weeksMs);
      updatedAt = candidate < now ? candidate : undefined;
    }

    return { ...post, createdAt, ...(updatedAt ? { updatedAt } : {}) };
  });
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    await Category.deleteMany({});
    await Post.deleteMany({});
    // Drop all text indexes so Mongoose can recreate with updated weights/fields
    try { await Post.collection.dropIndexes(); } catch (_) {}
    console.log('🗑  Cleared existing data');

    const cats = await Category.insertMany(categoriesData);
    const catMap = {};
    cats.forEach((c) => { catMap[c.slug] = c._id; });
    console.log(`✅ Inserted ${cats.length} categories`);

    const postsData = assignDates(getPostsData(catMap));
    const posts = await Post.insertMany(postsData);
    console.log(`✅ Inserted ${posts.length} posts`);

    await Post.syncIndexes();
    console.log('✅ Indexes synced\n');

    console.log('🎉 Database seeded successfully!\n');
    cats.forEach((c) => console.log(`  • ${c.name}  →  /${c.slug}`));
  } catch (err) {
    console.error('❌ Seed error:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
