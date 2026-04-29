import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'HealthMarked publishes evidence-based health articles reviewed by board-certified physicians. Learn about our editorial standards and medical review process.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const team = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr. Sarah Mitchell, MD',
    role: 'Medical Director & Chief Editor',
    credentials: 'Board-certified Internal Medicine physician. MD from Johns Hopkins University School of Medicine. 14 years of clinical practice.',
    bio: 'Dr. Mitchell oversees all editorial content on HealthMarked, ensuring every article meets the highest standards of medical accuracy. She reviews articles across internal medicine, mental health, and general preventive health.',
    specialties: ['Internal Medicine', 'Preventive Health', 'Chronic Disease Management'],
  },
  {
    id: 'dr-james-okafor',
    name: 'Dr. James Okafor, MD, PhD',
    role: 'Cardiology Advisor',
    credentials: 'Fellowship-trained cardiologist. MD/PhD from Harvard Medical School. Specialises in preventive cardiology and heart failure.',
    bio: 'Dr. Okafor reviews all cardiology and cardiovascular content on HealthMarked. His research focuses on reducing heart disease risk through early intervention, lifestyle modification, and evidence-based pharmacotherapy.',
    specialties: ['Cardiology', 'Hypertension', 'Heart Failure'],
  },
  {
    id: 'dr-elena-vasquez',
    name: 'Dr. Elena Vasquez, MD',
    role: 'Neurology Advisor',
    credentials: 'Board-certified neurologist. MD from Stanford University. Clinical focus on headache disorders, epilepsy, and cognitive neurology.',
    bio: 'Dr. Vasquez reviews all neurology-related content, including articles on migraines, stroke, cognitive decline, and nervous system disorders. She is passionate about translating complex neurological science into accessible patient guidance.',
    specialties: ['Neurology', 'Headache Medicine', 'Cognitive Health'],
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair, RD, PhD',
    role: 'Nutrition Science Advisor',
    credentials: 'Registered Dietitian and PhD in Nutritional Sciences from Cornell University. Research focus on diet-disease relationships.',
    bio: 'Dr. Nair reviews all nutrition and metabolic health content. Her research examines how dietary patterns influence chronic disease risk, gut microbiome composition, and long-term metabolic outcomes.',
    specialties: ['Nutrition', 'Metabolic Health', 'Gut Microbiome'],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About HealthBlog</h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        HealthBlog publishes evidence-based health information reviewed by board-certified physicians and medical specialists. Our mission is to make accurate, clinically-grounded health knowledge accessible to everyone.
      </p>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Editorial Standards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Evidence-Based',
              desc: 'Every article is grounded in peer-reviewed research, clinical guidelines from major medical organisations (AHA, WHO, CDC, NIH), and current medical consensus.',
            },
            {
              title: 'Medically Reviewed',
              desc: 'All content is reviewed by at least one board-certified physician or specialist before publication. Articles are updated when new evidence emerges.',
            },
            {
              title: 'Transparent Sources',
              desc: 'Every article includes citations to the primary medical literature — journals, clinical trials, and systematic reviews — so readers can verify information independently.',
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Medical Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div key={member.name} id={member.id} className="p-6 bg-white border border-gray-200 rounded-xl scroll-mt-20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl flex-shrink-0">
                  {member.name.split(' ')[1][0]}{member.name.split(' ')[member.name.split(' ').length - 1][0]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{member.credentials}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{member.bio}</p>
              <div className="flex flex-wrap gap-1">
                {member.specialties.map((s) => (
                  <span key={s} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Review Process</h2>
        <ol className="space-y-4">
          {[
            'A health writer drafts the article using primary medical literature, clinical guidelines, and expert consensus.',
            'A relevant specialist reviews the draft for medical accuracy, completeness, and appropriate nuance.',
            'The article is revised to reflect reviewer feedback and published with source citations.',
            'Articles are reviewed and updated periodically — or immediately when significant new evidence emerges.',
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
              <p className="text-gray-600 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h2 className="text-lg font-bold text-amber-900 mb-2">Medical Disclaimer</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          The information on HealthBlog is intended for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making any health decisions. In a medical emergency, call your local emergency services immediately.{' '}
          <Link href="/disclaimer" className="underline font-medium">Read our full disclaimer →</Link>
        </p>
      </section>
    </div>
  );
}
