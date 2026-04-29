'use client';

import { useState, useTransition } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    startTransition(() => {
      // In production, wire this to an API route or email service
      setTimeout(() => setSent(true), 600);
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">
        Have a question about our content, a correction to suggest, or a media enquiry? We read every message and aim to respond within 2 business days.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Editorial', desc: 'Article corrections, topic suggestions, sourcing questions' },
          { label: 'Medical Review', desc: 'Healthcare professionals wishing to contribute or review content' },
          { label: 'General', desc: 'Any other questions or feedback' },
        ].map((item) => (
          <div key={item.label} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="font-semibold text-gray-800 text-sm mb-1">{item.label}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {sent ? (
        <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <div className="text-3xl mb-3">✓</div>
          <h2 className="text-lg font-bold text-emerald-800 mb-1">Message sent</h2>
          <p className="text-sm text-emerald-700">Thank you for reaching out. We&apos;ll get back to you within 2 business days.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="What is this regarding?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
              placeholder="Tell us how we can help..."
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-emerald-600 text-white font-medium py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-60"
          >
            {isPending ? 'Sending…' : 'Send Message'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            By submitting this form you agree to our{' '}
            <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
          </p>
        </form>
      )}
    </div>
  );
}
