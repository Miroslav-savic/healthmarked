'use client';

import { useEffect } from 'react';
import { incrementViews } from '@/lib/api';

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    incrementViews(slug).catch(() => {});
  }, [slug]);

  return null;
}
