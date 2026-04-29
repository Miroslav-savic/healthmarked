'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { PostSummary } from '@/lib/api';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

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
      <h3 className="font-semibold text-gray-900 leading-snug">{post.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
      <div className="text-xs text-gray-400 mt-auto">{post.readTime} min read</div>
    </Link>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [allPosts, setAllPosts] = useState<PostSummary[]>([]);
  const [results, setResults] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  // Load all posts on mount
  useEffect(() => {
    fetch(`${API}/posts?limit=50`)
      .then((r) => r.json())
      .then((d) => {
        setAllPosts(d.posts || []);
        setResults(d.posts || []);
      })
      .finally(() => setLoading(false));
  }, []);

  const search = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults(allPosts);
      return;
    }
    setSearching(true);
    try {
      const res = await fetch(`${API}/posts?search=${encodeURIComponent(q)}&limit=50`);
      const data = await res.json();
      setResults(data.posts || []);
    } finally {
      setSearching(false);
    }
  }, [allPosts]);

  useEffect(() => {
    const t = setTimeout(() => search(query), 350);
    return () => clearTimeout(t);
  }, [query, search]);

  const isFiltered = query.trim().length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Articles</h1>

      <div className="relative mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, content, keywords, sources…"
          className="w-full border border-gray-300 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
          autoFocus
        />
        {(loading || searching) && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        )}
      </div>

      {!loading && (
        <p className="text-sm text-gray-400 mb-5">
          {isFiltered
            ? results.length === 0
              ? `No results for "${query}"`
              : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
            : `${allPosts.length} articles`}
        </p>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-44 rounded-xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : results.length === 0 ? (
        <p className="text-gray-500 py-12 text-center">No articles found for <strong>{query}</strong>.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
