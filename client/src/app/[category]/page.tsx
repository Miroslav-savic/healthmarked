import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPostsByCategory } from '@/lib/api';
import type { PostSummary } from '@/lib/api';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata(props: PageProps<'/[category]'>): Promise<Metadata> {
  const { category: slug } = await props.params;
  try {
    const cat = await getCategoryBySlug(slug);
    const url = `${SITE_URL}/${slug}`;
    return {
      title: cat.name,
      description: cat.description,
      alternates: { canonical: url },
      openGraph: {
        title: `${cat.name} | HealthBlog`,
        description: cat.description,
        url,
        type: 'website',
      },
      twitter: {
        title: `${cat.name} | HealthBlog`,
        description: cat.description,
      },
    };
  } catch {
    return { title: 'Category' };
  }
}

function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-gray-900 leading-snug">{post.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
      <div className="text-xs text-gray-400 mt-auto">{post.readTime} min read</div>
    </Link>
  );
}

export default async function CategoryPage(props: PageProps<'/[category]'>) {
  const { category: slug } = await props.params;

  try {
    const { posts, category } = await getPostsByCategory(slug);
    const pageUrl = `${SITE_URL}/${slug}`;

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: category.name, item: pageUrl },
      ],
    };

    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${category.name} Articles`,
      description: category.description,
      url: pageUrl,
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    };

    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <div className="mb-8">
          <nav aria-label="Breadcrumb">
            <Link href="/" className="text-sm text-emerald-600 hover:underline">← Home</Link>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl" role="img" aria-label={category.name}>{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-500 mt-1">{category.description}</p>
            </div>
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">No articles in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    );
  } catch {
    notFound();
  }
}
