import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/api';
import ViewTracker from '@/components/ViewTracker';
import CommentSection from '@/components/CommentSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import TableOfContents from '@/components/TableOfContents';
import { injectHeadingIds } from '@/lib/headings';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const REVIEWER = {
  name: 'Dr. Sarah Mitchell, MD',
  url: `${SITE_URL}/about`,
  jobTitle: 'Medical Director & Chief Editor',
};

export async function generateMetadata(props: PageProps<'/[category]/[slug]'>): Promise<Metadata> {
  const { category: categorySlug, slug } = await props.params;
  try {
    const post = await getPostBySlug(slug);
    const url = `${SITE_URL}/${categorySlug}/${slug}`;
    const description = post.metaDescription || post.excerpt;

    return {
      title: post.title,
      description,
      keywords: post.keywords,
      alternates: { canonical: url },
      openGraph: {
        title: post.title,
        description,
        url,
        type: 'article',
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt || post.createdAt,
        section: post.category.name,
        tags: post.keywords,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
      },
    };
  } catch {
    return { title: 'Article' };
  }
}

export default async function ArticlePage(props: PageProps<'/[category]/[slug]'>) {
  const { category: categorySlug, slug } = await props.params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const [relatedPosts, processedContent] = await Promise.all([
    getRelatedPosts(categorySlug, slug, 3),
    Promise.resolve(injectHeadingIds(post.content)),
  ]);

  const pageUrl = `${SITE_URL}/${categorySlug}/${slug}`;
  const categoryUrl = `${SITE_URL}/${categorySlug}`;
  const reviewedDate = post.updatedAt || post.createdAt;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: post.category.name, item: categoryUrl },
      { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    url: pageUrl,
    datePublished: post.createdAt,
    dateModified: reviewedDate,
    dateReviewed: reviewedDate,
    keywords: post.keywords?.join(', '),
    articleSection: post.category.name,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: 'HealthBlog Editorial Team',
      url: `${SITE_URL}/about`,
    },
    reviewedBy: {
      '@type': 'Person',
      name: REVIEWER.name,
      url: REVIEWER.url,
      jobTitle: REVIEWER.jobTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HealthBlog',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    about: { '@type': 'MedicalCondition', name: post.category.name },
    audience: { '@type': 'MedicalAudience', audienceType: 'patient' },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'patient' },
    isPartOf: { '@type': 'WebSite', name: 'HealthBlog', url: SITE_URL },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ViewTracker slug={slug} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${categorySlug}`} className="hover:text-emerald-600">
          {post.category.icon} {post.category.name}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-gray-600 line-clamp-1">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <Link
            href={`/${post.category.slug}`}
            className="text-xs font-medium bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-200 transition-colors"
          >
            {post.category.icon} {post.category.name}
          </Link>
          <span className="text-xs text-gray-400">{post.readTime} min read</span>
          {(post.views ?? 0) >= 50 && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {(post.views ?? 0).toLocaleString()} views
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">{post.excerpt}</p>

        {/* Byline — Medically Reviewed */}
        <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
            SM
          </div>
          <div className="text-xs text-gray-500 leading-tight">
            <p>
              <span className="text-gray-400">Medically reviewed by </span>
              <Link href="/about" className="font-semibold text-gray-700 hover:text-emerald-600">
                {REVIEWER.name}
              </Link>
            </p>
            <p className="text-gray-400">
              Published{' '}
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              {reviewedDate !== post.createdAt && (
                <>
                  {' · '}Reviewed{' '}
                  <time dateTime={reviewedDate}>
                    {new Date(reviewedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </>
              )}
            </p>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <TableOfContents html={processedContent} />

      {/* Content */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />

      {/* Medical Disclaimer */}
      <MedicalDisclaimer />

      {/* Sources */}
      {post.sources && post.sources.length > 0 && (
        <aside className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources</h2>
          <ul className="space-y-1">
            {post.sources.map((src, i) => (
              <li key={i} className="text-sm text-gray-600">{i + 1}. {src}</li>
            ))}
          </ul>
        </aside>
      )}

      {/* Keywords */}
      {post.keywords && post.keywords.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Article tags">
          {post.keywords.map((kw) => (
            <span key={kw} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{kw}</span>
          ))}
        </div>
      )}

      {/* Comments */}
      <CommentSection slug={slug} />

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related._id}
                href={`/${related.category.slug}/${related.slug}`}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-gray-100 hover:border-emerald-300 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-3 group-hover:text-emerald-700 transition-colors">
                  {related.title}
                </h3>
                <span className="text-xs text-gray-400 mt-auto">{related.readTime} min read</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link href={`/${categorySlug}`} className="text-sm text-emerald-600 hover:underline">
          ← Back to {post.category.name}
        </Link>
      </div>
    </div>
  );
}
