import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HealthBlog privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose space-y-8">
        <section>
          <h2>Information We Collect</h2>
          <p>When you use HealthBlog, we may collect the following types of information:</p>
          <ul>
            <li><strong>Usage data</strong> — pages visited, time on page, referral source, browser type, and approximate location (country/region) via anonymised server logs</li>
            <li><strong>Comments</strong> — if you leave a comment on an article, we collect the name you provide and the content of your comment</li>
            <li><strong>Contact form submissions</strong> — name, email address, and message content when you contact us</li>
          </ul>
          <p>We do not require account registration to read content. We do not collect payment information.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To display your comments on articles (with the name you provide)</li>
            <li>To respond to contact form enquiries</li>
            <li>To analyse site performance and improve content (using anonymised, aggregated data)</li>
            <li>To detect and prevent spam and abuse</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>HealthBlog uses only essential technical cookies necessary for the site to function correctly. We do not use advertising cookies or cross-site tracking cookies. Analytics, if used, is configured with IP anonymisation.</p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>Comments are retained indefinitely unless you request deletion. Server logs are retained for a maximum of 90 days. Contact form submissions are retained only as long as necessary to respond to your enquiry.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold about you. To make a data request, contact us via the <a href="/contact">contact page</a>. We will respond within 30 days.</p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>HealthBlog is not directed at children under 13. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will delete it promptly.</p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Material changes will be noted with an updated &quot;Last updated&quot; date at the top of this page.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For privacy-related questions or data requests, please use our <a href="/contact">contact form</a>.</p>
        </section>
      </div>
    </div>
  );
}
