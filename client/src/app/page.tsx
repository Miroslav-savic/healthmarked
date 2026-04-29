import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategories, getLatestPosts } from '@/lib/api';
import type { Category, PostSummary } from '@/lib/api';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'HealthMarked — Evidence-Based Health Information',
  description: 'Evidence-based health articles reviewed by board-certified physicians. Covering cardiology, oncology, nutrition, neurology, mental health, and more.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'HealthMarked — Evidence-Based Health Information',
    description: 'Evidence-based health articles reviewed by board-certified physicians.',
    url: SITE_URL,
    type: 'website',
  },
};

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/${cat.slug}`}
      className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:bg-emerald-100 transition-colors">
        {cat.icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{cat.description}</p>
      </div>
      <span className="text-xs text-emerald-600 font-medium group-hover:underline mt-auto">
        Browse articles →
      </span>
    </Link>
  );
}

function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm">{post.category.icon}</span>
        <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wide">{post.category.name}</span>
      </div>
      <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-50">
        <span className="text-xs text-gray-400">{post.readTime} min read</span>
        <span className="text-xs text-gray-300">·</span>
        <span className="text-xs text-gray-400">
          {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
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
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 border border-emerald-500/40 text-emerald-200 text-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Medically reviewed by board-certified physicians
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Health Information<br />
            <span className="text-emerald-300">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Evidence-based articles across cardiology, oncology, neurology, nutrition, and more — all cited from peer-reviewed research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-white text-emerald-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Search Articles
            </Link>
            <Link
              href="/about"
              className="border border-emerald-400/50 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-emerald-700/50 transition-colors"
            >
              Our Medical Team
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14">
            {[
              { value: '65+', label: 'Articles' },
              { value: '8', label: 'Specialties' },
              { value: '4', label: 'Physicians' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-emerald-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            {[
              { icon: '⚕️', text: 'Medically Reviewed' },
              { icon: '📚', text: 'Peer-Reviewed Sources' },
              { icon: '✅', text: 'Evidence-Based' },
              { icon: '🔄', text: 'Regularly Updated' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="font-medium text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Categories */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide mb-1">Explore</p>
              <h2 className="text-3xl font-bold text-gray-900">Browse by Specialty</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} cat={cat} />
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide mb-1">Fresh Content</p>
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <Link href="/search" className="text-sm text-emerald-600 font-medium hover:underline hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/search" className="text-sm text-emerald-600 font-medium hover:underline">
              View all articles →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Looking for something specific?</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Search across all 65+ articles by symptom, condition, or keyword.
          </p>
          <Link
            href="/search"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            Search All Articles
          </Link>
        </section>
      </div>
    </div>
  );
}
