import Link from 'next/link';

export default function MedicalDisclaimer() {
  return (
    <aside className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">⚕️</span>
        <div>
          <p className="font-semibold mb-1">Medical Disclaimer</p>
          <p className="leading-relaxed text-amber-800">
            This article is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making health decisions. If you are experiencing a medical emergency, call 911 immediately.{' '}
            <Link href="/disclaimer" className="underline font-medium hover:text-amber-900">
              Full disclaimer →
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
