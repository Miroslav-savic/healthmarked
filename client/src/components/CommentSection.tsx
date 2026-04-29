'use client';

import { useState, useEffect, useTransition } from 'react';
import { getComments, postComment } from '@/lib/api';
import type { Comment } from '@/lib/api';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex flex-col gap-1 py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center uppercase">
          {comment.name[0]}
        </span>
        <span className="font-medium text-gray-800 text-sm">{comment.name}</span>
        <span className="text-xs text-gray-400 ml-auto">{formatDate(comment.createdAt)}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed pl-10">{comment.content}</p>
    </div>
  );
}

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getComments(slug).then(setComments).catch(() => {});
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    startTransition(async () => {
      try {
        const comment = await postComment(slug, name, content);
        setComments((prev) => [comment, ...prev]);
        setName('');
        setContent('');
        setSuccess(true);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    });
  };

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Comments {comments.length > 0 && <span className="text-gray-400 font-normal text-base">({comments.length})</span>}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Leave a comment</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={80}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            placeholder="Write your comment…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            maxLength={2000}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-emerald-600">Comment posted!</p>}
          <button
            type="submit"
            disabled={isPending}
            className="self-end bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {isPending ? 'Posting…' : 'Post comment'}
          </button>
        </div>
      </form>

      {/* List */}
      {comments.length === 0 ? (
        <p className="text-sm text-gray-400">No comments yet. Be the first!</p>
      ) : (
        <div className="divide-y divide-gray-100">
          {comments.map((c) => (
            <CommentItem key={c._id} comment={c} />
          ))}
        </div>
      )}
    </section>
  );
}
