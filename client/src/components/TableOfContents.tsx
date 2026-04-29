'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function TableOfContents({ html }: { html: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const nodes = doc.querySelectorAll('h2, h3');
    const parsed: Heading[] = [];

    nodes.forEach((node) => {
      const text = node.textContent?.trim() || '';
      const id = node.id || slugify(text);
      node.id = id;
      parsed.push({ id, text, level: node.tagName === 'H2' ? 2 : 3 });
    });

    setHeadings(parsed);
  }, [html]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -60% 0px' },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label="Table of contents" className="mb-8 p-5 bg-gray-50 border border-gray-200 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">In this article</p>
      <ol className="space-y-1.5">
        {headings.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${id}`}
              className={`text-sm transition-colors hover:text-emerald-600 ${
                activeId === id ? 'text-emerald-600 font-medium' : 'text-gray-600'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
