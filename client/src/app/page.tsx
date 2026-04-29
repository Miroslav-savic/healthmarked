import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategories, getLatestPosts } from '@/lib/api';
import type { Category, PostSummary } from '@/lib/api';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'HealthBlog — Evidence-Based Health Information',
  description: 'Evidence-based health articles across cardiology, oncology, nutrition, neurology, mental health, and more. Sourced from peer-reviewed research.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'HealthBlog — Evidence-Based Health Information',
    description: 'Evidence-based health articles across cardiology, oncology, nutrition, neurology, mental health, and more.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    title: 'HealthBlog — Evidence-Based Health Information',
    description: 'Evidence-based health articles across cardiology, oncology, nutrition, neurology, mental health, and more.',
  },
};

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/${cat.slug}`}
      className="flex flex-col gap-2 p-5 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all"
    >
      <span className="text-3xl">{cat.icon}</span>
      <h3 className="font-semibold text-gray-900">{cat.name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{cat.description}</p>
    </Link>
  );
}

function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
        <span>{post.category.icon}</span>
        <span>{post.category.name}</span>
      </div>
      <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2">{post.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
      <div className="text-xs text-gray-400 mt-auto">{post.readTime} min read</div>
    </Link>
  );
}

export default async function HomePage() {
  const [categories, latestPosts] = await Promise.all([
    getCategories(),
    getLatestPosts(6),
  ]);

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Evidence-Based Health Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Accurate, sourced health articles across cardiology, oncology, nutrition, neurology, and more.
          </p>
          <Link
            href="/search"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors"
          >
            Search Articles
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <section aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} cat={cat} />
            ))}
          </div>
        </section>

        <section aria-labelledby="latest-heading">
          <h2 id="latest-heading" className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
