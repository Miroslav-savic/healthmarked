const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: { _id: string; name: string; slug: string; icon: string };
  featuredImage: string | null;
  readTime: number;
  createdAt: string;
}

export interface Comment {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
}

export interface Post extends PostSummary {
  views: number;
  content: string;
  keywords: string[];
  metaDescription: string;
  sources: string[];
  isPublished: boolean;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API}/categories`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data = await res.json();
  return data.categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const res = await fetch(`${API}/categories/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Category not found');
  const data = await res.json();
  return data.category;
}

export async function getPosts(params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<{ posts: PostSummary[]; pagination: Pagination }> {
  const q = new URLSearchParams();
  if (params?.page) q.set('page', String(params.page));
  if (params?.limit) q.set('limit', String(params.limit));
  if (params?.search) q.set('search', params.search);
  const res = await fetch(`${API}/posts?${q}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPostsByCategory(
  categorySlug: string,
  page = 1,
  limit = 9,
): Promise<{ posts: PostSummary[]; pagination: Pagination; category: Category }> {
  const res = await fetch(`${API}/posts/category/${categorySlug}?page=${page}&limit=${limit}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts by category');
  return res.json();
}

export async function getLatestPosts(limit = 6): Promise<PostSummary[]> {
  const res = await fetch(`${API}/posts/latest?limit=${limit}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Failed to fetch latest posts');
  const data = await res.json();
  return data.posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const res = await fetch(`${API}/posts/${slug}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Post not found');
  const data = await res.json();
  return data.post;
}

export async function incrementViews(slug: string): Promise<number> {
  const res = await fetch(`${API}/posts/${slug}/views`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Failed to increment views');
  const data = await res.json();
  return data.views;
}

export async function getComments(slug: string): Promise<Comment[]> {
  const res = await fetch(`${API}/posts/${slug}/comments`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch comments');
  const data = await res.json();
  return data.comments;
}

export async function postComment(slug: string, name: string, content: string): Promise<Comment> {
  const res = await fetch(`${API}/posts/${slug}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, content }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to post comment');
  }
  const data = await res.json();
  return data.comment;
}
