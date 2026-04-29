import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'Important information about the limitations of health content on HealthBlog and when to seek professional medical advice.',
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: true, follow: false },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Disclaimer</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose space-y-8">
        <section>
          <h2>Not Medical Advice</h2>
          <p>
            The content published on HealthBlog — including articles, guides, symptom descriptions, and any other material — is provided for <strong>general informational and educational purposes only</strong>. It does not constitute medical advice, professional diagnosis, or a recommendation for treatment.
          </p>
          <p>
            No content on this website should be used as a substitute for consultation with a qualified physician, specialist, or other licensed healthcare provider. Always seek the advice of a healthcare professional for any questions you may have regarding a medical condition, treatment, or medication.
          </p>
        </section>

        <section>
          <h2>No Doctor-Patient Relationship</h2>
          <p>
            Use of HealthBlog does not create a doctor-patient relationship between you and any physician, contributor, or reviewer associated with this website. Reading, commenting on, or otherwise engaging with content on this site does not establish any professional healthcare relationship.
          </p>
        </section>

        <section>
          <h2>Emergency Situations</h2>
          <p>
            <strong>If you are experiencing a medical emergency, call your local emergency services (911 in the US) immediately or go to your nearest emergency room.</strong> Do not rely on information from this website in emergency situations.
          </p>
          <p>Warning signs that require immediate emergency care include: chest pain, sudden severe headache, stroke symptoms (facial drooping, arm weakness, speech difficulty), difficulty breathing, loss of consciousness, or any other sudden severe symptom.
          </p>
        </section>

        <section>
          <h2>Accuracy and Currency of Information</h2>
          <p>
            Medical knowledge evolves rapidly. While we strive to ensure that the information on HealthBlog is accurate and up to date at the time of publication, we cannot guarantee that all content reflects the most current medical evidence, clinical guidelines, or regulatory approvals. Medical guidelines are updated frequently; always verify important health information with your healthcare provider.
          </p>
        </section>

        <section>
          <h2>Individual Variation</h2>
          <p>
            Health information presented on this site is general in nature and may not apply to every individual. Medical conditions, treatments, medications, and health recommendations vary significantly based on personal history, genetics, age, co-existing conditions, and many other factors. Only a healthcare professional who has examined you can provide advice tailored to your specific situation.
          </p>
        </section>

        <section>
          <h2>Third-Party Sources</h2>
          <p>
            Articles on HealthBlog cite peer-reviewed medical literature and clinical guidelines from recognised medical organisations. These citations are provided for transparency and reference; inclusion of a citation does not imply endorsement by the cited organisation, nor does it guarantee the accuracy of our interpretation of that source.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            HealthBlog, its editors, medical reviewers, and contributors assume no responsibility or liability for any errors or omissions in the content, or for any actions taken based on information provided on this website. Use of this website is at your own risk.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about the content on this website or our editorial process, please visit our <a href="/about">About page</a> or use our <a href="/contact">contact form</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
