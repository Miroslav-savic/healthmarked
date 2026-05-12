const evenMoreArticles = (catMap) => [
  // ─── CARDIOLOGY ───────────────────────────────────────────────────────────
  {
    title: 'Heart Failure: Symptoms, Stages, and How It Is Managed',
    slug: 'heart-failure-symptoms-stages-management',
    excerpt: 'Heart failure does not mean the heart has stopped — it means the heart can no longer pump efficiently. Learn the warning signs, the four stages, and the treatments that significantly extend and improve life.',
    category: catMap['cardiology'],
    keywords: ['heart failure', 'congestive heart failure', 'ejection fraction', 'shortness of breath heart', 'heart failure treatment', 'HFrEF', 'diuretics heart'],
    metaDescription: 'Heart failure symptoms, four stages (A–D), ejection fraction explained, and evidence-based treatments including medications and lifestyle changes.',
    readTime: 10,
    sources: [
      'McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599–3726.',
      'Heidenreich PA et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. JACC. 2022;79(17):e263–e421.',
      'Savarese G, Lund LH. Global public health burden of heart failure. Card Fail Rev. 2017;3(1):7–11.',
    ],
    content: `<h2>What Is Heart Failure?</h2>
<p>Heart failure (HF) is a clinical syndrome in which the heart cannot pump enough blood to meet the body's needs, or can only do so at abnormally elevated filling pressures. It affects more than 64 million people worldwide and is the leading cause of hospitalisation in adults over 65. "Congestive heart failure" is an older term still commonly used when fluid backs up into the lungs or body tissues.</p>
<p>Heart failure is categorised by <strong>ejection fraction (EF)</strong> — the percentage of blood the left ventricle pumps out with each beat (normal ≥55%). HF with reduced EF (HFrEF, EF &lt;40%) and HF with preserved EF (HFpEF, EF ≥50%) have different underlying mechanisms and slightly different treatments.</p>

<h2>Symptoms to Recognise</h2>
<ul>
  <li><strong>Breathlessness</strong> — initially on exertion, progressing to rest or lying flat (orthopnoea)</li>
  <li><strong>Paroxysmal nocturnal dyspnoea</strong> — waking suddenly at night gasping for air</li>
  <li><strong>Persistent fatigue and weakness</strong> — reduced cardiac output limits oxygen delivery to muscles</li>
  <li><strong>Ankle and leg swelling</strong> — fluid retention (oedema) from impaired venous return</li>
  <li><strong>Rapid or irregular heartbeat</strong></li>
  <li><strong>Reduced ability to exercise</strong> — a key functional marker tracked in clinical visits</li>
  <li><strong>Persistent cough or wheeze</strong> — sometimes producing pink, foamy mucus</li>
  <li><strong>Sudden weight gain</strong> — 2 kg or more in 2–3 days signals fluid accumulation; patients are taught to weigh daily</li>
</ul>

<h2>The Four Stages (ACC/AHA Classification)</h2>
<ul>
  <li><strong>Stage A</strong> — High risk but no structural heart disease or symptoms. Includes patients with hypertension, diabetes, or family history of cardiomyopathy.</li>
  <li><strong>Stage B</strong> — Structural heart disease (e.g. reduced EF, prior MI) but no HF symptoms yet. Intervention at this stage can prevent progression.</li>
  <li><strong>Stage C</strong> — Structural heart disease with current or prior HF symptoms. The largest treatment group.</li>
  <li><strong>Stage D</strong> — Advanced, refractory HF despite optimal therapy. Requires specialised interventions: intravenous inotropes, mechanical circulatory support, transplant evaluation, or palliative care.</li>
</ul>

<h2>NYHA Functional Classes</h2>
<p>The New York Heart Association (NYHA) classes describe symptom severity:</p>
<ul>
  <li><strong>Class I</strong> — No symptoms with ordinary activity</li>
  <li><strong>Class II</strong> — Slight limitation; comfortable at rest but symptoms with moderate exertion</li>
  <li><strong>Class III</strong> — Marked limitation; comfortable at rest but symptoms with minimal activity</li>
  <li><strong>Class IV</strong> — Symptoms at rest; unable to carry on any activity without discomfort</li>
</ul>

<h2>Common Causes</h2>
<p>Coronary artery disease and prior heart attack cause about two-thirds of HFrEF cases. Other causes include:</p>
<ul>
  <li>Long-standing, poorly controlled hypertension (most common cause of HFpEF)</li>
  <li>Dilated cardiomyopathy (genetic or idiopathic)</li>
  <li>Valvular heart disease (aortic stenosis, mitral regurgitation)</li>
  <li>Diabetes</li>
  <li>Viral myocarditis</li>
  <li>Chemotherapy-related cardiac toxicity (e.g. anthracyclines, trastuzumab)</li>
  <li>Atrial fibrillation — sustained rapid rate leads to tachycardia-induced cardiomyopathy</li>
  <li>Alcohol-related cardiomyopathy</li>
</ul>

<h2>Diagnosis</h2>
<p>Diagnosis requires symptoms, signs, and objective evidence of cardiac dysfunction. Key investigations:</p>
<ul>
  <li><strong>Echocardiogram</strong> — gold standard for measuring EF and assessing valve function and wall motion</li>
  <li><strong>BNP / NT-proBNP</strong> — natriuretic peptides rise when the ventricle is under stress; levels help confirm diagnosis and guide treatment intensity</li>
  <li><strong>ECG</strong> — may reveal prior MI, left bundle branch block, or arrhythmia</li>
  <li><strong>Chest X-ray</strong> — pulmonary oedema (bilateral haziness), cardiomegaly, pleural effusions</li>
  <li><strong>Blood tests</strong> — full blood count, renal function, electrolytes, thyroid function (hypothyroidism can cause HF), iron studies</li>
</ul>

<h2>Treatment: Medications That Save Lives</h2>
<p>For HFrEF, four drug classes are the foundation of modern therapy — often called the "four pillars":</p>
<ul>
  <li><strong>ACE inhibitors / ARBs / ARNI</strong> (e.g. sacubitril/valsartan, ramipril) — block the renin-angiotensin system, reduce afterload, improve EF</li>
  <li><strong>Beta-blockers</strong> (e.g. carvedilol, bisoprolol, metoprolol succinate) — reduce heart rate and oxygen demand, prevent sudden cardiac death</li>
  <li><strong>Mineralocorticoid receptor antagonists</strong> (e.g. spironolactone, eplerenone) — block aldosterone, reduce fluid retention, improve survival</li>
  <li><strong>SGLT2 inhibitors</strong> (e.g. dapagliflozin, empagliflozin) — originally diabetes drugs, now proven to reduce HF hospitalisations and cardiovascular death in both HFrEF and HFpEF</li>
  <li><strong>Diuretics</strong> (e.g. furosemide) — relieve congestion and breathlessness; do not improve survival but dramatically improve quality of life</li>
</ul>

<h2>Device Therapy</h2>
<ul>
  <li><strong>ICD (implantable cardioverter-defibrillator)</strong> — prevents sudden cardiac death from ventricular arrhythmias; indicated in EF ≤35% on optimal therapy</li>
  <li><strong>CRT (cardiac resynchronisation therapy)</strong> — biventricular pacemaker for patients with left bundle branch block and EF ≤35%; improves EF, symptoms, and survival</li>
  <li><strong>LVAD (left ventricular assist device)</strong> — mechanical pump implanted in Stage D HF as a bridge to transplant or destination therapy</li>
</ul>

<h2>Self-Management and Lifestyle</h2>
<ul>
  <li>Weigh yourself every morning; contact your care team if you gain &gt;2 kg in 48 hours</li>
  <li>Limit sodium to &lt;2,000 mg/day to reduce fluid retention</li>
  <li>Fluid restriction (typically 1.5–2 L/day) in advanced cases</li>
  <li>Supervised cardiac rehabilitation programmes improve exercise capacity and quality of life</li>
  <li>Abstain from alcohol (alcohol worsens cardiomyopathy and interacts with medications)</li>
  <li>Influenza and pneumococcal vaccinations reduce hospitalisation risk</li>
</ul>`,
  },

  // ─── ONCOLOGY ─────────────────────────────────────────────────────────────
  {
    title: 'Prostate Cancer: PSA Screening, Symptoms, and Treatment Options',
    slug: 'prostate-cancer-psa-screening-symptoms-treatment',
    excerpt: 'Prostate cancer is the most common cancer in men. Most grow slowly and may never cause harm, but some are aggressive. Understanding PSA testing, Gleason scores, and your treatment options helps you make informed decisions.',
    category: catMap['oncology'],
    keywords: ['prostate cancer', 'PSA test', 'Gleason score', 'prostate cancer symptoms', 'prostatectomy', 'active surveillance', 'prostate cancer treatment'],
    metaDescription: 'Prostate cancer PSA screening, Gleason grading, symptoms to know, and treatment options from active surveillance to surgery and radiation.',
    readTime: 11,
    sources: [
      'Siegel RL et al. Cancer statistics, 2024. CA Cancer J Clin. 2024;74(1):12–49.',
      'Mottet N et al. EAU-EANM-ESTRO-ESUR-SIOG Guidelines on Prostate Cancer. Eur Urol. 2021;79(2):243–262.',
      'Sanda MG et al. Clinically Localized Prostate Cancer: AUA/ASTRO/SUO Guideline. J Urol. 2018;199(3):683–690.',
    ],
    content: `<h2>How Common Is Prostate Cancer?</h2>
<p>Prostate cancer is the most frequently diagnosed cancer in men (excluding skin cancers), accounting for roughly 1 in 8 male cancer diagnoses in the United States. The lifetime risk of diagnosis is approximately 12.5%. However, death from prostate cancer is far less common — about 1 in 44 men — because the vast majority of prostate cancers are slow-growing and either never become clinically significant or are caught early.</p>

<h2>Risk Factors</h2>
<ul>
  <li><strong>Age</strong> — rare before 50; incidence rises sharply after 65</li>
  <li><strong>Family history</strong> — first-degree relative with prostate cancer doubles risk; BRCA2 mutation carriers have 5–8× higher risk</li>
  <li><strong>Race/ethnicity</strong> — Black men have the highest incidence and mortality rates globally; reasons are multifactorial (biological, access to care, diet)</li>
  <li><strong>Diet</strong> — high intake of red and processed meat; evidence for protective effect of tomatoes (lycopene) and fish is suggestive but not definitive</li>
  <li><strong>Obesity</strong> — associated with more aggressive disease and worse outcomes</li>
</ul>

<h2>Symptoms</h2>
<p>Early prostate cancer typically causes <strong>no symptoms</strong>. Symptoms usually only appear with locally advanced or metastatic disease:</p>
<ul>
  <li>Difficulty starting urination or weak urine stream</li>
  <li>Frequent urination, especially at night (nocturia)</li>
  <li>Blood in urine (haematuria) or semen (haematospermia)</li>
  <li>Painful ejaculation</li>
  <li>Erectile dysfunction (if nerves are involved)</li>
  <li>Bone pain in hips, spine, or pelvis (sign of metastasis)</li>
</ul>
<p>These urinary symptoms overlap significantly with benign prostatic hyperplasia (BPH), a non-cancerous prostate enlargement that is extremely common in older men. A PSA test and biopsy are needed to differentiate.</p>

<h2>PSA Screening: What It Tells You (and What It Doesn't)</h2>
<p>Prostate-specific antigen (PSA) is a protein produced by prostate cells. Elevated levels (&gt;4 ng/mL) can indicate cancer, BPH, prostatitis, or even vigorous exercise or sexual activity. PSA is not a yes/no cancer test — it is a risk stratifier.</p>
<p><strong>Current screening recommendations vary:</strong></p>
<ul>
  <li><strong>USPSTF</strong> (US): Shared decision-making discussion for men aged 55–69; not recommended for 70+</li>
  <li><strong>AUA</strong>: Baseline PSA at age 40–45 for high-risk men (Black men, BRCA2 carriers, strong family history); discuss at 45–50 for average-risk men</li>
  <li><strong>EAU</strong>: Risk-adapted early detection strategy; annual PSA for men with PSA &gt;1 ng/mL at 40, or &gt;2 ng/mL at 60</li>
</ul>
<p>The benefit of screening is reducing metastatic cancer deaths; the harm is overdiagnosis and overtreatment of clinically insignificant cancers.</p>

<h2>Diagnosis: Biopsy and Gleason Score</h2>
<p>An elevated PSA prompts further investigation. MRI-guided prostate biopsy (MRI fusion biopsy) is now the preferred diagnostic method — it identifies clinically significant cancers while reducing unnecessary biopsies of low-risk areas.</p>
<p>The <strong>Gleason score</strong> grades the biopsy tissue from 6 (low grade) to 10 (most aggressive), based on the two most prevalent tumour patterns. Scores are now grouped into Grade Groups 1–5:</p>
<ul>
  <li><strong>Grade Group 1</strong> (Gleason 6) — very low risk; grows very slowly</li>
  <li><strong>Grade Group 2</strong> (Gleason 3+4=7) — favourable intermediate risk</li>
  <li><strong>Grade Group 3</strong> (Gleason 4+3=7) — unfavourable intermediate risk</li>
  <li><strong>Grade Group 4</strong> (Gleason 8) — high risk</li>
  <li><strong>Grade Group 5</strong> (Gleason 9–10) — very high risk</li>
</ul>

<h2>Treatment Options</h2>
<h3>Active Surveillance</h3>
<p>For Grade Group 1 (and carefully selected Grade Group 2) cancer: regular PSA testing, repeat MRI, and periodic rebiopsy. Treatment is deferred unless the cancer progresses. This avoids overtreatment and preserves quality of life — about 50–60% of eligible men remain on surveillance at 10 years without treatment.</p>
<h3>Surgery (Radical Prostatectomy)</h3>
<p>Removal of the entire prostate gland and seminal vesicles. Robotic-assisted laparoscopic prostatectomy is the most common approach. Potential side effects: urinary incontinence (usually temporary) and erectile dysfunction (varies by nerve-sparing technique and baseline function).</p>
<h3>Radiation Therapy</h3>
<p>External beam radiation therapy (EBRT) with intensity-modulated radiotherapy (IMRT) or stereotactic body radiotherapy (SBRT), or brachytherapy (radioactive seed implants). Equivalent cure rates to surgery for localised disease; different side effect profile (bowel symptoms more common than with surgery).</p>
<h3>Hormone Therapy (ADT)</h3>
<p>Androgen deprivation therapy — either LHRH agonists/antagonists or surgical castration. Used for high-risk localised disease (with radiation) and metastatic disease. Side effects: hot flushes, loss of libido, bone loss, metabolic syndrome.</p>
<h3>Advanced and Metastatic Disease</h3>
<p>Newer agents have transformed metastatic prostate cancer management: enzalutamide, abiraterone, apalutamide, and darolutamide extend survival. PARP inhibitors (olaparib, rucaparib) for BRCA-mutated disease. Lutetium-177 PSMA therapy (a targeted radionuclide therapy) is approved for metastatic castration-resistant disease.</p>`,
  },

  // ─── DERMATOLOGY ──────────────────────────────────────────────────────────
  {
    title: 'Psoriasis: Types, Triggers, and Evidence-Based Treatments',
    slug: 'psoriasis-types-triggers-evidence-based-treatment',
    excerpt: 'Psoriasis is a chronic immune-mediated skin condition affecting around 2–3% of the global population. It causes more than skin plaques — it raises cardiovascular risk and is strongly linked to psoriatic arthritis. Here is what the evidence says about management.',
    category: catMap['dermatology'],
    keywords: ['psoriasis', 'plaque psoriasis', 'psoriasis treatment', 'biologics psoriasis', 'psoriasis triggers', 'psoriatic arthritis', 'psoriasis causes'],
    metaDescription: 'Psoriasis types, immune mechanisms, common triggers, and treatments from topical steroids to biologics like TNF inhibitors and IL-17 blockers.',
    readTime: 9,
    sources: [
      'Nast A et al. EuroGuiDerm Guideline on the systemic treatment of Psoriasis vulgaris. J Eur Acad Dermatol Venereol. 2021;35(11):2229–2282.',
      'Armstrong AW et al. Psoriasis Comorbidities and Associations. Dermatol Ther (Heidelb). 2021;11(4):1075–1086.',
      'Griffiths CEM et al. Psoriasis. Lancet. 2021;397(10281):1301–1315.',
    ],
    content: `<h2>What Is Psoriasis?</h2>
<p>Psoriasis is a chronic, relapsing-remitting inflammatory skin disease driven by dysregulated immune activity. T-cells and dendritic cells produce an excess of cytokines — particularly TNF-α, IL-17, and IL-23 — that accelerate the skin cell cycle from the normal 28–30 days down to 3–5 days. Immature keratinocytes accumulate faster than they can be shed, forming the characteristic thick, scaly plaques.</p>
<p>Psoriasis affects approximately 2–3% of the global population (around 125 million people) and is not merely a skin condition. It is a systemic inflammatory disease associated with psoriatic arthritis, cardiovascular disease, metabolic syndrome, depression, and reduced quality of life.</p>

<h2>Types of Psoriasis</h2>
<ul>
  <li><strong>Plaque psoriasis (psoriasis vulgaris)</strong> — 80–90% of cases. Well-demarcated, raised, red plaques covered with silvery-white scales, typically on the scalp, elbows, knees, and lower back.</li>
  <li><strong>Guttate psoriasis</strong> — Small, drop-shaped lesions scattered over the trunk. Often triggered by streptococcal throat infection; more common in children and young adults.</li>
  <li><strong>Inverse psoriasis</strong> — Smooth, shiny red patches in skin folds (groin, axillae, under breasts). The scale is minimal because friction keeps skin moist.</li>
  <li><strong>Pustular psoriasis</strong> — Pus-filled blisters (sterile) surrounded by red skin. Can be localised (palms/soles) or generalised — the generalised form is a medical emergency requiring hospitalisation.</li>
  <li><strong>Erythrodermic psoriasis</strong> — Widespread redness covering most of the body surface. Rare but serious; causes temperature dysregulation and protein loss.</li>
  <li><strong>Nail psoriasis</strong> — Affects up to 50% of patients: nail pitting, onycholysis (nail detachment), oil spots, and subungual hyperkeratosis. Strongly associated with psoriatic arthritis.</li>
</ul>

<h2>Common Triggers</h2>
<p>Psoriasis has a genetic basis (over 80 associated genetic loci, including HLA-Cw6), but triggers provoke flares:</p>
<ul>
  <li><strong>Stress</strong> — psychological stress is the most commonly reported trigger</li>
  <li><strong>Infections</strong> — especially streptococcal throat infection (guttate psoriasis), and HIV</li>
  <li><strong>Medications</strong> — lithium, beta-blockers, antimalarials, NSAIDs, rapid steroid withdrawal</li>
  <li><strong>Skin injury (Koebner phenomenon)</strong> — cuts, burns, tattoos, sunburn can produce new lesions at injury sites</li>
  <li><strong>Alcohol</strong> — heavy consumption worsens psoriasis and reduces treatment response</li>
  <li><strong>Smoking</strong> — significantly increases severity and is linked to palmoplantar pustular psoriasis</li>
  <li><strong>Obesity</strong> — adipose tissue produces pro-inflammatory cytokines; weight loss improves disease and treatment response</li>
</ul>

<h2>Assessment: The PASI Score</h2>
<p>The Psoriasis Area and Severity Index (PASI) quantifies disease extent and severity (scale 0–72). A PASI &gt;10 with significant quality-of-life impairment generally warrants systemic therapy. The Dermatology Life Quality Index (DLQI) captures psychosocial impact.</p>

<h2>Treatment: Topical Therapy (Mild–Moderate)</h2>
<ul>
  <li><strong>Corticosteroids</strong> — first-line; reduce inflammation and cell proliferation. Potency selected by body site (avoid high-potency on face/flexures).</li>
  <li><strong>Vitamin D analogues</strong> (calcipotriol, calcitriol) — slow keratinocyte proliferation; often combined with steroids for synergistic effect</li>
  <li><strong>Calcineurin inhibitors</strong> (tacrolimus, pimecrolimus) — second-line for facial and flexural psoriasis; no skin atrophy risk</li>
  <li><strong>Coal tar</strong> — older but effective antipruritic and antiproliferative agent; useful for scalp psoriasis</li>
  <li><strong>Tazarotene</strong> — topical retinoid; effective but irritating; used with steroids to improve tolerability</li>
</ul>

<h2>Treatment: Phototherapy (Moderate)</h2>
<p>Narrowband UVB (NB-UVB) is the preferred phototherapy modality — administered 3× weekly in a phototherapy unit. Effective in 70–80% of patients. PUVA (psoralen + UVA) is more potent but increases skin cancer risk with long-term use.</p>

<h2>Treatment: Systemic Therapy (Moderate–Severe)</h2>
<ul>
  <li><strong>Methotrexate</strong> — weekly oral/subcutaneous anti-metabolite; effective and inexpensive; requires LFT monitoring (hepatotoxicity risk)</li>
  <li><strong>Ciclosporin</strong> — fast-acting for acute flares; limited to short courses due to nephrotoxicity and hypertension</li>
  <li><strong>Acitretin</strong> — oral retinoid; especially useful for pustular and erythrodermic psoriasis; teratogenic (contraceptive requirement)</li>
  <li><strong>Apremilast</strong> — oral PDE4 inhibitor; well tolerated (no monitoring required); moderate efficacy; good for difficult-to-treat areas</li>
</ul>

<h2>Treatment: Biologics (Severe / Refractory)</h2>
<p>Biologics are targeted therapies that block specific cytokines driving psoriasis inflammation. They achieve PASI 90 (90% clearance) in 50–70% of patients:</p>
<ul>
  <li><strong>TNF-α inhibitors</strong> (adalimumab, etanercept, infliximab, certolizumab) — first-generation biologics; effective for both skin and joints</li>
  <li><strong>IL-12/23 inhibitor</strong> (ustekinumab) — durable responses with 12-weekly maintenance dosing</li>
  <li><strong>IL-17 inhibitors</strong> (secukinumab, ixekizumab, bimekizumab) — currently the fastest and most complete clearance; bimekizumab (IL-17A/F dual block) achieves PASI 90 in ~90% at 16 weeks</li>
  <li><strong>IL-23 inhibitors</strong> (guselkumab, risankizumab, tildrakizumab) — highly selective; durable responses; some maintain remission after drug holiday</li>
</ul>

<h2>Psoriatic Arthritis</h2>
<p>Up to 30% of people with psoriasis develop psoriatic arthritis (PsA) — inflammatory joint disease causing pain, stiffness, and progressive joint damage. Nail psoriasis, scalp psoriasis, and inverse psoriasis are the strongest skin predictors. Early rheumatology referral is critical to prevent irreversible joint damage. Biologics treat both the skin and joint components simultaneously.</p>`,
  },

  // ─── INTERNAL MEDICINE ────────────────────────────────────────────────────
  {
    title: 'Chronic Kidney Disease: Early Signs, Stages, and How to Slow Progression',
    slug: 'chronic-kidney-disease-stages-symptoms-management',
    excerpt: 'Chronic kidney disease affects 1 in 10 adults globally and often causes no symptoms until it is advanced. Understanding the five stages, the silent warning signs, and the evidence-based steps to protect kidney function can prevent dialysis.',
    category: catMap['internal-medicine'],
    keywords: ['chronic kidney disease', 'CKD stages', 'kidney disease symptoms', 'GFR kidney', 'proteinuria', 'kidney disease diet', 'dialysis prevention'],
    metaDescription: 'Chronic kidney disease: five stages by GFR, early symptoms, causes, and evidence-based management to slow progression and avoid dialysis.',
    readTime: 10,
    sources: [
      'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117–S314.',
      'GBD Chronic Kidney Disease Collaboration. Global, regional, and national burden of chronic kidney disease. Lancet. 2020;395(10225):709–733.',
      'Heerspink HJL et al. Dapagliflozin in Patients with Chronic Kidney Disease. N Engl J Med. 2020;383:1436–1446.',
    ],
    content: `<h2>What Are the Kidneys and What Can Go Wrong?</h2>
<p>The kidneys — two fist-sized organs sitting below the rib cage — filter approximately 180 litres of blood daily, excreting waste products in urine, regulating blood pressure via the renin-angiotensin system, controlling fluid and electrolyte balance, activating vitamin D, and stimulating red blood cell production (erythropoietin). Chronic kidney disease (CKD) is a sustained reduction in kidney function or structural damage lasting more than three months.</p>
<p>CKD affects approximately 850 million people worldwide — about 1 in 10 adults. It is a major cause of cardiovascular disease and premature death, and is the 12th leading cause of global mortality.</p>

<h2>The Five Stages of CKD</h2>
<p>CKD is staged by estimated glomerular filtration rate (eGFR), which estimates how much blood the kidneys filter per minute per 1.73 m² body surface area:</p>
<ul>
  <li><strong>Stage 1</strong> — eGFR ≥90: Kidney damage (e.g. proteinuria) with normal or high function. Often no symptoms.</li>
  <li><strong>Stage 2</strong> — eGFR 60–89: Mildly reduced function. Usually asymptomatic.</li>
  <li><strong>Stage 3a/3b</strong> — eGFR 30–59: Moderately reduced function. Fatigue, anaemia, and fluid retention may begin. Blood pressure often rises.</li>
  <li><strong>Stage 4</strong> — eGFR 15–29: Severely reduced function. Symptoms more prominent. Dialysis planning begins.</li>
  <li><strong>Stage 5</strong> — eGFR &lt;15: Kidney failure. Dialysis or transplantation required to sustain life.</li>
</ul>

<h2>Proteinuria: The Other Key Marker</h2>
<p>Protein in the urine (proteinuria or albuminuria) is an independent marker of CKD severity and cardiovascular risk. The urine albumin-to-creatinine ratio (uACR) classifies kidney damage:</p>
<ul>
  <li>Normal: &lt;3 mg/mmol</li>
  <li>Moderately increased (A2): 3–30 mg/mmol</li>
  <li>Severely increased (A3): &gt;30 mg/mmol</li>
</ul>
<p>Both eGFR and albuminuria together determine prognosis more accurately than either alone.</p>

<h2>What Causes CKD?</h2>
<ul>
  <li><strong>Diabetes</strong> — diabetic nephropathy is the leading cause globally, accounting for ~30–40% of cases</li>
  <li><strong>Hypertension</strong> — the second most common cause; high pressure damages glomerular capillaries</li>
  <li><strong>Glomerulonephritis</strong> — immune-mediated inflammation of the filtering units</li>
  <li><strong>Polycystic kidney disease</strong> — genetic disorder causing progressive cyst growth</li>
  <li><strong>Obstructive uropathy</strong> — chronic urinary tract obstruction (e.g. enlarged prostate, kidney stones)</li>
  <li><strong>NSAIDs and nephrotoxic medications</strong> — chronic analgesic use is an underappreciated cause</li>
  <li><strong>Recurrent kidney infections</strong></li>
</ul>

<h2>Early Warning Signs</h2>
<p>CKD is often called a "silent disease" because it produces no symptoms until Stage 3–4. When present, symptoms include:</p>
<ul>
  <li>Persistent fatigue and weakness (anaemia of CKD)</li>
  <li>Foamy or frothy urine (sign of proteinuria)</li>
  <li>Blood in urine (haematuria)</li>
  <li>Swelling in ankles, feet, or around the eyes (fluid retention)</li>
  <li>Reduced urine output or conversely needing to urinate at night</li>
  <li>Loss of appetite, nausea, vomiting (uraemia — toxin accumulation)</li>
  <li>Dry, itchy skin</li>
  <li>Difficulty concentrating</li>
  <li>High blood pressure that is difficult to control</li>
</ul>

<h2>Treatment and Slowing Progression</h2>
<h3>Blood Pressure Control</h3>
<p>Target &lt;130/80 mmHg. ACE inhibitors or ARBs are first-line in CKD — beyond blood pressure lowering, they reduce glomerular pressure and proteinuria directly, slowing CKD progression regardless of diabetes status.</p>

<h3>SGLT2 Inhibitors (Game-Changer)</h3>
<p>Dapagliflozin and canagliflozin are now recommended for CKD patients with proteinuria, regardless of diabetes status (DAPA-CKD and CREDENCE trials). They reduce the risk of kidney failure by 30–40% and cardiovascular events simultaneously.</p>

<h3>Finerenone</h3>
<p>A non-steroidal mineralocorticoid receptor antagonist approved for CKD in type 2 diabetes. Reduces CKD progression and cardiovascular events beyond RAS blockade alone.</p>

<h3>Glycaemic Control in Diabetes</h3>
<p>HbA1c target of approximately 7% (53 mmol/mol) in diabetic CKD reduces proteinuria progression. Metformin requires dose adjustment (eGFR &lt;30: contraindicated). Insulin remains safe at all stages.</p>

<h3>Dietary Management</h3>
<ul>
  <li><strong>Protein</strong>: Low-protein diet (0.6–0.8 g/kg/day) in non-dialysis CKD may slow progression; excessive protein increases urea burden</li>
  <li><strong>Salt</strong>: Limit to &lt;5 g/day (sodium &lt;2 g/day) for blood pressure control and to reduce proteinuria</li>
  <li><strong>Potassium</strong>: Restriction needed in later stages (CKD 4–5) when hyperkalaemia risk rises</li>
  <li><strong>Phosphate</strong>: Restrict processed foods high in phosphate additives; phosphate binders prescribed in advanced CKD</li>
</ul>

<h3>Anaemia Management</h3>
<p>Erythropoiesis-stimulating agents (ESAs) and oral iron (or IV iron when oral is insufficient) treat CKD anaemia. Target haemoglobin 100–120 g/L — over-correction increases cardiovascular risk.</p>`,
  },

  // ─── NEUROLOGY ────────────────────────────────────────────────────────────
  {
    title: 'Multiple Sclerosis: Early Signs, Diagnosis, and Modern Disease-Modifying Therapies',
    slug: 'multiple-sclerosis-early-signs-diagnosis-treatment',
    excerpt: 'Multiple sclerosis is an immune-mediated disease of the central nervous system affecting 2.9 million people worldwide. Early diagnosis and treatment with modern disease-modifying therapies can significantly slow disability progression.',
    category: catMap['neurology'],
    keywords: ['multiple sclerosis', 'MS symptoms', 'MS treatment', 'relapsing remitting MS', 'optic neuritis MS', 'disease modifying therapy', 'MS diagnosis'],
    metaDescription: 'Multiple sclerosis early symptoms, MRI diagnosis, types of MS, and disease-modifying therapies from interferons to high-efficacy agents like natalizumab.',
    readTime: 11,
    sources: [
      'Thompson AJ et al. Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria. Lancet Neurol. 2018;17(2):162–173.',
      'Giovannoni G et al. Brain health: time matters in multiple sclerosis. Mult Scler Relat Disord. 2016;9 Suppl 1:S5–48.',
      'Kappos L et al. Ocrelizumab in Relapsing and Primary Progressive Multiple Sclerosis. N Engl J Med. 2016;376:209–220.',
    ],
    content: `<h2>What Is Multiple Sclerosis?</h2>
<p>Multiple sclerosis (MS) is a chronic immune-mediated disease of the central nervous system (CNS) in which the immune system attacks the myelin sheath — the fatty insulating layer around nerve fibres — and, over time, the nerve fibres themselves. "Multiple sclerosis" literally means "multiple scars" — referring to the plaques of demyelination visible on MRI scattered throughout the brain, spinal cord, and optic nerves.</p>
<p>MS affects approximately 2.9 million people worldwide. It is the most common cause of non-traumatic neurological disability in young adults, with onset typically between ages 20 and 40. Women are affected 2–3× more often than men.</p>

<h2>Types of MS</h2>
<ul>
  <li><strong>Relapsing-remitting MS (RRMS)</strong> — 85% of initial diagnoses. Discrete episodes of neurological dysfunction (relapses) followed by partial or complete recovery (remission). May transition to secondary progressive MS over time.</li>
  <li><strong>Secondary progressive MS (SPMS)</strong> — Follows RRMS; disability accumulates steadily between or instead of relapses.</li>
  <li><strong>Primary progressive MS (PPMS)</strong> — 15% of diagnoses. Steady disability accumulation from onset without relapses. Older age of onset, slight male predominance; historically harder to treat.</li>
  <li><strong>Clinically isolated syndrome (CIS)</strong> — A first demyelinating episode. With characteristic MRI lesions, risk of conversion to MS is high; early DMT reduces this risk.</li>
</ul>

<h2>Early Warning Signs</h2>
<p>Symptoms depend on the location of demyelinating lesions in the CNS. Common early presentations include:</p>
<ul>
  <li><strong>Optic neuritis</strong> — painful loss of vision or blurred vision in one eye; often the first MS symptom. Vision usually recovers over weeks to months.</li>
  <li><strong>Sensory symptoms</strong> — numbness, tingling, or a "band-like" tightness around the torso or limbs ("MS hug")</li>
  <li><strong>Uhthoff's phenomenon</strong> — temporary worsening of existing symptoms with heat or exercise (not a relapse; a useful diagnostic clue)</li>
  <li><strong>Motor weakness</strong> — usually one limb; may present as foot drop or clumsiness</li>
  <li><strong>Lhermitte's sign</strong> — electric shock sensation down the spine when flexing the neck; indicates cervical cord involvement</li>
  <li><strong>Balance and coordination problems</strong> — unsteady gait, dizziness</li>
  <li><strong>Fatigue</strong> — the most common MS symptom; disproportionate, often worst in the afternoon ("MS fatigue" differs from tiredness)</li>
  <li><strong>Bladder dysfunction</strong> — urgency, frequency, difficulty emptying</li>
  <li><strong>Cognitive symptoms</strong> — slowed processing speed, memory and word-finding difficulties ("cog fog")</li>
</ul>

<h2>Diagnosis: McDonald Criteria</h2>
<p>MS is diagnosed using the 2017 McDonald criteria, which require evidence of <strong>dissemination in space</strong> (lesions in at least two different CNS regions) and <strong>dissemination in time</strong> (episodes at different time points). MRI is central to diagnosis:</p>
<ul>
  <li><strong>MRI brain and spinal cord</strong> — characteristic lesions in periventricular, juxtacortical, infratentorial, and spinal cord locations. Gadolinium-enhancing lesions indicate active inflammation.</li>
  <li><strong>Cerebrospinal fluid (CSF)</strong> — oligoclonal bands (IgG) present in &gt;90% of MS patients; normal in healthy individuals</li>
  <li><strong>Visual evoked potentials</strong> — slowed conduction reflects optic nerve demyelination; useful when MRI is inconclusive</li>
</ul>
<p>Key differentials include neuromyelitis optica spectrum disorder (NMOSD) — now distinguishable by AQP4 and MOG antibodies — migraine with white matter changes, and small vessel disease.</p>

<h2>Relapse Management</h2>
<p>Relapses (attacks lasting &gt;24 hours, separated from prior relapse by &gt;30 days) are treated with high-dose IV methylprednisolone (500–1,000 mg/day for 3–5 days). Steroids shorten relapse duration but do not alter long-term disability trajectory.</p>

<h2>Disease-Modifying Therapies (DMTs)</h2>
<p>DMTs reduce relapse frequency and slow disability accumulation. The field has expanded dramatically — there are now over 20 approved agents. Patients and neurologists choose between lower- and higher-efficacy agents:</p>
<h3>Moderate-Efficacy (Platform) Therapies</h3>
<ul>
  <li><strong>Interferon beta-1a/1b</strong> (Avonex, Betaferon, Rebif) — injectable; reduce relapses by ~30%</li>
  <li><strong>Glatiramer acetate</strong> (Copaxone) — injectable; similar efficacy to interferons; no flu-like side effects</li>
  <li><strong>Dimethyl fumarate</strong> (Tecfidera) — oral; ~50% relapse reduction; requires lymphocyte monitoring</li>
  <li><strong>Teriflunomide</strong> (Aubagio) — oral; ~30% relapse reduction; teratogenic</li>
</ul>
<h3>High-Efficacy Therapies</h3>
<ul>
  <li><strong>Natalizumab</strong> (Tysabri) — monthly IV infusion; blocks lymphocyte trafficking into the CNS; ~68% relapse reduction; risk of PML (rare brain infection) in JC-antibody positive patients</li>
  <li><strong>Ocrelizumab</strong> (Ocrevus) — 6-monthly IV infusion; anti-CD20, depletes B-cells; ~46% relative reduction in disability progression in PPMS — the first approved DMT for primary progressive MS</li>
  <li><strong>Ofatumumab</strong> (Kesimpta) — monthly subcutaneous anti-CD20; similar efficacy to ocrelizumab; self-administered</li>
  <li><strong>Alemtuzumab</strong> (Lemtrada) — two annual treatment courses; very high efficacy; significant autoimmune side effects requiring monthly monitoring for 4 years</li>
  <li><strong>Cladribine</strong> (Mavenclad) — oral; two short treatment courses in two years; ~50% disability progression reduction</li>
  <li><strong>Autologous haematopoietic stem cell transplantation (aHSCT)</strong> — intensive immune reset; used in young patients with aggressive RRMS; can achieve sustained remission ("MIST trial")</li>
</ul>

<h2>Symptomatic Management</h2>
<ul>
  <li><strong>Fatigue</strong>: amantadine, modafinil, energy conservation strategies, graded exercise</li>
  <li><strong>Spasticity</strong>: baclofen, tizanidine, physiotherapy, cannabinoids (nabiximols/Sativex)</li>
  <li><strong>Bladder</strong>: anticholinergics, intermittent self-catheterisation for incomplete emptying</li>
  <li><strong>Neuropathic pain</strong>: gabapentin, pregabalin, duloxetine</li>
  <li><strong>Depression</strong>: very common in MS; SSRIs and psychological support are effective</li>
</ul>`,
  },

  // ─── NUTRITION ────────────────────────────────────────────────────────────
  {
    title: 'Intermittent Fasting: What the Evidence Actually Shows',
    slug: 'intermittent-fasting-evidence-health-effects',
    excerpt: 'Intermittent fasting has attracted significant scientific attention and media hype. Here is what the current clinical evidence says about its effects on weight, metabolic health, longevity — and who may benefit or be harmed.',
    category: catMap['nutrition'],
    keywords: ['intermittent fasting', '16:8 fasting', 'time-restricted eating', 'intermittent fasting weight loss', 'metabolic health fasting', 'IF diet', 'fasting benefits'],
    metaDescription: 'Intermittent fasting evidence: 16:8, 5:2, and alternate-day fasting effects on weight, insulin, cardiovascular risk, and longevity — what the science shows.',
    readTime: 9,
    sources: [
      'Lowe DA et al. Effects of Time-Restricted Eating on Weight Loss and Other Metabolic Parameters in Women and Men With Overweight and Obesity. JAMA Intern Med. 2020;180(11):1491–1499.',
      'de Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. N Engl J Med. 2019;381(26):2541–2551.',
      'Wilkinson MJ et al. Ten-Hour Time-Restricted Eating Reduces Weight, Blood Pressure, and Atherogenic Lipids in Patients with Metabolic Syndrome. Cell Metab. 2020;31(1):92–104.',
    ],
    content: `<h2>What Is Intermittent Fasting?</h2>
<p>Intermittent fasting (IF) is not a diet in the conventional sense — it is a pattern of eating that cycles between periods of eating and fasting. Rather than restricting what you eat, IF focuses on when you eat. The biological rationale is that during fasting periods, insulin levels fall, glycogen stores deplete, and the body shifts toward fat oxidation and cellular repair processes (particularly autophagy — the cellular "self-cleaning" mechanism).</p>
<p>Several IF protocols have been studied:</p>
<ul>
  <li><strong>16:8 (time-restricted eating)</strong> — eating within an 8-hour window daily; most popular and studied</li>
  <li><strong>18:6 or 20:4</strong> — narrower eating windows</li>
  <li><strong>5:2</strong> — eating normally 5 days, restricting to 500–600 kcal on 2 non-consecutive days</li>
  <li><strong>Alternate-day fasting (ADF)</strong> — alternating normal eating days with near-complete fasting</li>
  <li><strong>Prolonged fasting</strong> — 24–72+ hours; less studied for routine use, higher risk</li>
</ul>

<h2>Weight Loss: How Does IF Compare to Continuous Calorie Restriction?</h2>
<p>The most important finding from rigorous trials is that IF produces weight loss roughly equivalent to continuous calorie restriction — not significantly better. A 2020 JAMA Internal Medicine RCT (the TREAT trial) randomised 116 participants to 16:8 TRE or unrestricted eating for 12 weeks. The TRE group lost 0.94 kg vs 0.68 kg in controls — <strong>not statistically significant</strong>.</p>
<p>Meta-analyses of multiple trials consistently show:</p>
<ul>
  <li>IF produces 0.8–13% body weight loss, similar to equivalent calorie restriction</li>
  <li>No evidence of superior fat loss when protein intake and overall calories are matched</li>
  <li>Adherence and dropout rates are comparable between IF and conventional diets</li>
</ul>
<p>The practical appeal of IF is that some people find it easier to restrict calories by limiting their eating window than by continuously monitoring intake.</p>

<h2>Metabolic Effects Beyond Weight</h2>
<p>Several metabolic improvements have been documented in IF trials, some independent of weight loss:</p>
<ul>
  <li><strong>Insulin sensitivity</strong> — fasting lowers fasting insulin and improves HOMA-IR; particularly relevant for insulin-resistant individuals and type 2 diabetes prevention</li>
  <li><strong>Fasting glucose</strong> — modest reductions, most significant in people with elevated baseline glucose</li>
  <li><strong>Triglycerides</strong> — consistently reduced by IF protocols; one of the more robust findings</li>
  <li><strong>Blood pressure</strong> — a 10-hour eating window reduced systolic BP by ~3 mmHg in a metabolic syndrome cohort (Wilkinson et al.)</li>
  <li><strong>LDL cholesterol</strong> — inconsistent findings across studies; some trials show reduction, others no change</li>
  <li><strong>Inflammation markers</strong> (CRP, IL-6) — modest reductions in some but not all studies</li>
</ul>

<h2>Autophagy and Longevity: Promising but Unproven in Humans</h2>
<p>Autophagy — cellular recycling of damaged proteins and organelles — increases during fasting. This mechanism underlies much of the anti-aging and cancer-prevention interest in IF. Evidence from animal models is compelling: caloric restriction and IF extend lifespan in yeast, worms, flies, and rodents by 30–50%.</p>
<p>However, <strong>direct evidence in humans remains limited</strong>. No long-term human RCT has demonstrated that IF extends lifespan or reduces cancer incidence. The CALERIE trial showed that 25% calorie restriction over 2 years improved several biomarkers of longevity in humans, but outcomes like mortality will take decades to measure.</p>

<h2>A 2024 Cardiovascular Caution</h2>
<p>A 2024 preliminary American Heart Association report (presented, not yet peer-reviewed) found an association between 8-hour time-restricted eating and a 91% higher risk of cardiovascular death in a large observational analysis. Importantly, this was a correlation — not a controlled trial — and the TRE group may have already had poorer health. This finding requires cautious interpretation but should not be ignored, particularly for people with existing cardiovascular disease.</p>

<h2>Who May Benefit</h2>
<ul>
  <li>People who prefer meal skipping over calorie counting as a weight management strategy</li>
  <li>Adults with insulin resistance or pre-diabetes who struggle with conventional diets</li>
  <li>People who naturally eat within a shorter window without feeling deprived</li>
</ul>

<h2>Who Should Be Cautious or Avoid IF</h2>
<ul>
  <li><strong>Pregnancy and breastfeeding</strong> — caloric restriction is contraindicated</li>
  <li><strong>History of eating disorders</strong> — restrictive patterns can trigger relapse</li>
  <li><strong>Type 1 diabetes or insulin-dependent type 2 diabetes</strong> — hypoglycaemia risk; requires medical supervision if attempted</li>
  <li><strong>Underweight individuals</strong></li>
  <li><strong>Children and adolescents</strong></li>
  <li><strong>Those on certain medications</strong> (anticoagulants, lithium) requiring consistent food intake</li>
</ul>

<h2>Practical Approach</h2>
<p>If you choose to try IF, earlier eating windows (e.g. 8am–4pm or 10am–6pm) appear to be more metabolically beneficial than late eating windows based on circadian rhythm research. Ensure protein intake ≥1.2 g/kg/day to minimise lean mass loss. IF does not justify poor food quality — food choices within the eating window still matter substantially.</p>`,
  },

  // ─── MENTAL HEALTH ────────────────────────────────────────────────────────
  {
    title: 'ADHD in Adults: Signs You Might Have It and What Actually Helps',
    slug: 'adhd-adults-signs-diagnosis-treatment',
    excerpt: 'ADHD does not disappear in adulthood — it is underdiagnosed and frequently missed because it looks different to the hyperactive child stereotype. Understand the adult presentation, the diagnostic process, and the evidence-based treatments that work.',
    category: catMap['mental-health'],
    keywords: ['ADHD adults', 'adult ADHD symptoms', 'ADHD diagnosis', 'ADHD treatment', 'inattentive ADHD', 'ADHD medication', 'executive function ADHD'],
    metaDescription: 'Adult ADHD: how it presents differently to childhood ADHD, the diagnostic criteria, and treatments including stimulant medications, CBT, and lifestyle strategies.',
    readTime: 9,
    sources: [
      'Kooij JJS et al. Updated European Consensus Statement on diagnosis and treatment of adult ADHD. Eur Psychiatry. 2019;56:14–34.',
      'Faraone SV et al. The World Federation of ADHD International Consensus Statement. Neurosci Biobehav Rev. 2021;128:789–818.',
      'Cortese S et al. Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults. Lancet Psychiatry. 2018;5(9):727–738.',
    ],
    content: `<h2>ADHD Is Not Just a Childhood Condition</h2>
<p>Attention deficit hyperactivity disorder (ADHD) is one of the most common neurodevelopmental conditions, affecting approximately 5% of children — and 2.5–4% of adults. For decades, ADHD was considered something children outgrow. The reality is that 50–65% of children with ADHD have clinically significant symptoms into adulthood. Moreover, many adults are diagnosed for the first time — particularly women, who are historically underdiagnosed because the inattentive presentation is less obvious than the disruptive hyperactivity more common in boys.</p>

<h2>How Adult ADHD Looks Different</h2>
<p>The classic image of a child bouncing off the walls rarely applies to adults. In adults, hyperactivity becomes internalised — it manifests as restlessness, an inability to relax, constantly feeling "driven by a motor," or inner tension rather than physical overactivity. The core presentation shifts:</p>
<ul>
  <li><strong>Chronic disorganisation</strong> — missed deadlines, forgotten appointments, lost items, chaotic living or working spaces</li>
  <li><strong>Time blindness</strong> — difficulty estimating how long tasks take; chronic lateness; "time just disappears"</li>
  <li><strong>Difficulty sustaining attention</strong> — starting tasks is easier than finishing them; reading requires rereading; mind wanders in conversations</li>
  <li><strong>Hyperfocus</strong> — paradoxically, the ability to become intensely absorbed in highly interesting tasks (gaming, creative work, research) to the exclusion of everything else</li>
  <li><strong>Emotional dysregulation</strong> — quick to frustration or anger; intense emotional reactions; rejection sensitive dysphoria (RSD) — extreme emotional pain in response to perceived criticism</li>
  <li><strong>Executive function impairment</strong> — difficulty planning, prioritising, initiating tasks (especially boring ones), switching tasks</li>
  <li><strong>Impulsivity</strong> — interrupting, making impulsive decisions (financial, relational), difficulty waiting</li>
  <li><strong>Working memory deficits</strong> — forgetting what you were about to do; difficulty holding multiple pieces of information mentally</li>
</ul>

<h2>The Three Presentations</h2>
<ul>
  <li><strong>Predominantly Inattentive</strong> — most common in women and adults; often missed because it lacks disruptive behaviour</li>
  <li><strong>Predominantly Hyperactive-Impulsive</strong> — more typical in young boys; often the "classic" presentation</li>
  <li><strong>Combined presentation</strong> — meets criteria for both; most common overall</li>
</ul>

<h2>Conditions That Commonly Co-occur</h2>
<p>ADHD rarely travels alone. Comorbidities are the rule rather than the exception in adults:</p>
<ul>
  <li>Anxiety disorders (50% of adults with ADHD)</li>
  <li>Depression (30–50%)</li>
  <li>Sleep disorders — particularly delayed sleep phase syndrome and insomnia</li>
  <li>Substance use disorders (ADHD is a major risk factor; untreated ADHD triples the risk)</li>
  <li>Autism spectrum disorder</li>
  <li>Learning disabilities (dyslexia, dyscalculia)</li>
</ul>

<h2>Diagnosis</h2>
<p>ADHD diagnosis is clinical — there is no brain scan or blood test. DSM-5 requires at least 5 of 9 inattentive symptoms and/or 5 of 9 hyperactive-impulsive symptoms, present for ≥6 months, in at least two settings, causing functional impairment, with onset of symptoms before age 12 (not necessarily diagnosis).</p>
<p>Assessment typically involves:</p>
<ul>
  <li>Structured clinical interview (adult ADHD diagnostic scales: DIVA-5, CAARS, ADHD-RS)</li>
  <li>Retrospective childhood history (school reports, parental accounts where available)</li>
  <li>Ruling out alternative diagnoses: anxiety, depression, bipolar disorder, thyroid dysfunction, sleep apnoea</li>
  <li>Neuropsychological testing may be used but is not required for diagnosis</li>
</ul>

<h2>Medication: The Most Evidence-Based Treatment</h2>
<p>Stimulant medications are the most effective treatment for ADHD, with large effect sizes in network meta-analyses:</p>
<ul>
  <li><strong>Methylphenidate</strong> (Ritalin, Concerta, Medikinet) — first-line in most guidelines; immediate-release (3–4 hour duration) and extended-release formulations. Works by blocking reuptake of dopamine and norepinephrine.</li>
  <li><strong>Amphetamines</strong> (Adderall, Vyvanse/lisdexamfetamine) — also first-line in many guidelines; slightly larger effect size in adults than methylphenidate in some analyses</li>
  <li><strong>Atomoxetine</strong> (Strattera) — non-stimulant norepinephrine reuptake inhibitor; takes 4–6 weeks to work; preferred if stimulants are contraindicated (e.g. active psychosis, cardiovascular risk) or when anxiety is prominent</li>
  <li><strong>Bupropion</strong> — off-label antidepressant with mild ADHD efficacy; useful when depression coexists</li>
  <li><strong>Guanfacine / clonidine</strong> — alpha-2 agonists; help with emotional dysregulation and impulsivity; less effective for inattention</li>
</ul>
<p>Common concerns about stimulants:</p>
<ul>
  <li>Cardiovascular: modest increase in heart rate and BP; baseline ECG advised in those with cardiac risk factors; avoided in uncontrolled hypertension or structural heart disease</li>
  <li>Appetite suppression and weight loss — most pronounced early; consider taking with food, taking "medication holidays" on weekends (debated)</li>
  <li>Addiction risk is low when used as prescribed; conversely, treating ADHD with stimulants reduces long-term substance use disorder risk</li>
</ul>

<h2>Psychological Treatments</h2>
<p>Cognitive-behavioural therapy adapted for ADHD (CBT-ADHD) helps with:</p>
<ul>
  <li>Organisational skills and time management</li>
  <li>Managing procrastination</li>
  <li>Emotional regulation and coping with rejection sensitivity</li>
  <li>Addressing the secondary depression and low self-esteem that often accumulate from years of undiagnosed ADHD</li>
</ul>
<p>CBT is typically recommended alongside medication rather than instead of it for adults with significant functional impairment.</p>

<h2>Practical Strategies</h2>
<ul>
  <li>External structure compensates for impaired internal regulation: timers, alarms, visual reminders, body doubling (working alongside someone)</li>
  <li>Exercise — aerobic exercise acutely increases dopamine and norepinephrine; 30 minutes before a cognitively demanding task improves focus</li>
  <li>Consistent sleep schedule — sleep deprivation dramatically worsens ADHD symptoms</li>
  <li>Single-tasking environments — remove distractions rather than relying on willpower (phone in another room, website blockers)</li>
  <li>Task initiation strategies — "just two minutes," implementation intentions (if-then planning)</li>
</ul>`,
  },

  // ─── FITNESS & PREVENTION ─────────────────────────────────────────────────
  {
    title: 'HIIT vs Steady-State Cardio: What the Science Actually Says',
    slug: 'hiit-vs-steady-state-cardio-science-comparison',
    excerpt: 'High-intensity interval training has dominated fitness culture for over a decade. But is it actually better than traditional moderate-intensity continuous training? The science is more nuanced — and the best answer depends on your goals and health status.',
    category: catMap['fitness-prevention'],
    keywords: ['HIIT', 'steady state cardio', 'HIIT vs cardio', 'interval training benefits', 'VO2 max', 'cardio for fat loss', 'MICT exercise'],
    metaDescription: 'HIIT vs steady-state cardio: evidence on VO2 max, fat loss, cardiovascular risk, time efficiency, and who benefits most from each training approach.',
    readTime: 8,
    sources: [
      'Milanović Z et al. Effectiveness of High-Intensity Interval Training (HIT) and Continuous Endurance Training for VO2max Improvements. Sports Med. 2015;45(10):1469–1481.',
      'Viana RB et al. Is interval training the magic bullet for fat loss? A systematic review and meta-analysis comparing moderate-intensity continuous training with high-intensity interval training (HIIT). Br J Sports Med. 2019;53(10):655–664.',
      'Wisløff U et al. Superior cardiovascular effect of aerobic interval training versus moderate continuous training in heart failure patients. Circulation. 2007;115(24):3086–3094.',
    ],
    content: `<h2>Defining the Two Approaches</h2>
<p><strong>Steady-state (moderate-intensity continuous training, MICT)</strong> involves exercising at a sustained, moderate effort — typically 50–70% of maximum heart rate — for 30–60 minutes continuously. Examples: jogging, cycling, swimming at a comfortable pace.</p>
<p><strong>High-intensity interval training (HIIT)</strong> alternates short bursts of high-intensity effort (85–95% max HR) with recovery periods. Protocols vary widely: 4×4 (4 minutes hard, 4 minutes easy, repeated 4 times), Tabata (20 seconds all-out, 10 seconds rest × 8), Sprint Interval Training (6×30-second "all-out" efforts with 4-minute rest). Total HIIT sessions are typically 20–30 minutes.</p>

<h2>VO2 Max: The Fitness Benchmark</h2>
<p>VO2 max — maximum oxygen uptake — is the gold-standard measure of cardiorespiratory fitness and a powerful predictor of longevity and cardiovascular health.</p>
<p>A 2015 meta-analysis (Milanović et al.) comparing 723 HIIT participants to 783 MICT participants found:</p>
<ul>
  <li>HIIT improved VO2 max by an average of <strong>5.5 ml/kg/min</strong></li>
  <li>MICT improved VO2 max by <strong>3.5 ml/kg/min</strong></li>
  <li>HIIT produced approximately <strong>26% greater VO2 max gains</strong> per unit time</li>
</ul>
<p>This is HIIT's clearest advantage: superior cardiorespiratory fitness improvement in less time. The 4×4 Nordic protocol developed by Wisløff and colleagues at NTNU has the most consistent evidence base for VO2 max improvement.</p>

<h2>Fat Loss: The Surprising Finding</h2>
<p>HIIT was widely promoted as superior for fat loss due to the "afterburn effect" (excess post-exercise oxygen consumption, EPOC). The research is less impressive than the marketing:</p>
<ul>
  <li>A 2019 meta-analysis (Viana et al.) of 36 studies found HIIT and MICT produced <strong>comparable fat loss</strong> when total energy expenditure was matched</li>
  <li>HIIT burns significantly fewer calories per session due to shorter duration, often offsetting the afterburn benefit</li>
  <li>EPOC from HIIT adds approximately 6–15% to post-exercise calorie burn — real but modest</li>
  <li>Longer MICT sessions may suppress appetite less than HIIT, affecting total daily energy balance</li>
</ul>
<p>For fat loss specifically, <strong>the best exercise is the one you consistently do</strong> — both approaches work when sustained.</p>

<h2>Cardiovascular Disease Risk Reduction</h2>
<p>Both training modes reduce major cardiovascular risk factors. However, HIIT shows stronger effects on several markers:</p>
<ul>
  <li><strong>VO2 max improvement</strong> — each 1 ml/kg/min increase in VO2 max is associated with a ~2% reduction in cardiovascular mortality</li>
  <li><strong>Endothelial function</strong> — HIIT produces greater improvements in flow-mediated dilation than MICT</li>
  <li><strong>Left ventricular function</strong> — Wisløff's landmark 2007 trial in heart failure patients showed 4×4 HIIT improved VO2 max by 46% vs 14% for MICT, with superior improvements in left ventricular remodelling</li>
  <li><strong>Blood pressure</strong> — Both modalities reduce BP; HIIT shows marginally greater systolic BP reduction in meta-analyses</li>
  <li><strong>Insulin sensitivity</strong> — Comparable improvements; HIIT may have faster onset of effect</li>
</ul>

<h2>Time Efficiency: HIIT's Practical Advantage</h2>
<p>For the time-constrained, HIIT's efficiency advantage is real. A 25-minute HIIT session can produce similar or greater physiological adaptations to a 45–60-minute MICT session. WHO physical activity guidelines (150–300 minutes moderate or 75–150 minutes vigorous activity weekly) recognise vigorous exercise counts double.</p>
<p>However, HIIT requires adequate recovery — most guidelines recommend no more than 2–3 HIIT sessions per week to avoid overtraining and injury.</p>

<h2>Injury and Tolerability</h2>
<p>HIIT carries higher acute injury risk, particularly for:</p>
<ul>
  <li>Musculoskeletal injuries (especially with running-based HIIT)</li>
  <li>Cardiac events in unfit or older adults — HIIT should be introduced progressively, with medical clearance for those with cardiovascular disease</li>
</ul>
<p>MICT is better tolerated by deconditioned individuals, those with joint disease, and older adults beginning an exercise programme. Nordic walking and cycling provide effective MICT with minimal joint loading.</p>

<h2>Mental Health Effects</h2>
<p>Both HIIT and MICT reduce symptoms of anxiety and depression. Some evidence suggests:</p>
<ul>
  <li>HIIT produces more rapid antidepressant effects due to greater BDNF (brain-derived neurotrophic factor) release</li>
  <li>MICT at lower intensities may be preferable in people with anxiety disorders (high-intensity exertion can mimic panic symptoms)</li>
</ul>

<h2>Practical Recommendations</h2>
<ul>
  <li><strong>Best of both</strong>: combine 2 HIIT sessions with 1–2 MICT sessions weekly — this is what most elite training programmes do</li>
  <li><strong>For beginners or those returning from injury</strong>: start with MICT; build base fitness before adding intervals</li>
  <li><strong>For maximum VO2 max gains in minimum time</strong>: 4×4 HIIT protocol is the evidence leader</li>
  <li><strong>For fat loss</strong>: consistency matters more than modality — pick what you will stick to</li>
  <li><strong>For cardiovascular disease rehabilitation</strong>: supervised HIIT is now supported by cardiac rehab guidelines with appropriate monitoring</li>
</ul>`,
  },

  // ─── INTERNAL MEDICINE ────────────────────────────────────────────────────
  {
    title: 'Osteoporosis: Bone Density, Prevention, and When to Treat',
    slug: 'osteoporosis-bone-density-prevention-treatment',
    excerpt: 'Osteoporosis silently weakens bones until a fracture occurs — often from a minor fall. A hip fracture in an older adult carries a 20–30% one-year mortality rate. Understanding your risk and the evidence for prevention and treatment can prevent these life-changing injuries.',
    category: catMap['internal-medicine'],
    keywords: ['osteoporosis', 'bone density', 'DEXA scan', 'osteoporosis treatment', 'calcium vitamin D bones', 'bisphosphonates', 'fragility fracture'],
    metaDescription: 'Osteoporosis bone density, DEXA T-scores, fracture risk, calcium and vitamin D evidence, bisphosphonates, and who needs treatment.',
    readTime: 9,
    sources: [
      'Camacho PM et al. American Association of Clinical Endocrinologists/American College of Endocrinology Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis. Endocr Pract. 2020;26(Suppl 1):1–46.',
      'Eastell R et al. Pharmacological management of osteoporosis in postmenopausal women: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2019;104(5):1595–1622.',
      'Compston JE et al. Osteoporosis. Nat Rev Dis Primers. 2019;5(1):62.',
    ],
    content: `<h2>What Is Osteoporosis?</h2>
<p>Osteoporosis is a skeletal disease characterised by reduced bone density and deterioration of bone microarchitecture, leading to increased bone fragility and fracture risk. Bone is living tissue, constantly remodelled through a balance of osteoclast activity (bone breakdown) and osteoblast activity (bone formation). Osteoporosis occurs when bone resorption chronically exceeds formation — either because peak bone mass was never reached, because bone loss accelerated (particularly after menopause), or both.</p>
<p>Approximately 200 million people worldwide are affected by osteoporosis. It causes an estimated 8.9 million fractures annually. Hip fractures carry the most serious consequences: 20–30% of patients die within one year; 50% never regain their prior level of independence.</p>

<h2>Risk Factors</h2>
<h3>Non-Modifiable</h3>
<ul>
  <li>Female sex (4× higher prevalence than men)</li>
  <li>Postmenopausal status — oestrogen maintains bone density; its loss accelerates bone resorption</li>
  <li>Age — bone density peaks at 25–30 and declines thereafter</li>
  <li>White or Asian ethnicity (lower peak bone mass)</li>
  <li>Family history of osteoporosis or fragility fracture</li>
  <li>Prior fragility fracture (strongest predictor of future fracture)</li>
  <li>Early menopause (&lt;45 years) or primary hypogonadism in men</li>
</ul>
<h3>Modifiable</h3>
<ul>
  <li>Low calcium and vitamin D intake</li>
  <li>Physical inactivity — weight-bearing exercise maintains bone density</li>
  <li>Smoking — directly toxic to osteoblasts</li>
  <li>Excessive alcohol (&gt;3 units/day)</li>
  <li>Low body weight (BMI &lt;19)</li>
  <li>Falls risk factors (poor balance, muscle weakness, medications causing dizziness)</li>
</ul>
<h3>Secondary Causes (Diseases and Medications)</h3>
<ul>
  <li>Long-term glucocorticoid use (prednisolone ≥5 mg/day for ≥3 months) — most common drug cause</li>
  <li>Rheumatoid arthritis</li>
  <li>Coeliac disease and inflammatory bowel disease (malabsorption of calcium/vitamin D)</li>
  <li>Chronic kidney disease</li>
  <li>Hyperparathyroidism</li>
  <li>Type 1 diabetes</li>
  <li>Proton pump inhibitors (long-term use modestly increases fracture risk)</li>
  <li>Aromatase inhibitors (breast cancer treatment) and androgen deprivation therapy (prostate cancer)</li>
</ul>

<h2>Diagnosis: DEXA Scan and T-Scores</h2>
<p>Dual-energy X-ray absorptiometry (DEXA) measures bone mineral density (BMD) at the hip and lumbar spine. Results are reported as T-scores — the number of standard deviations above or below the mean BMD of a young healthy adult:</p>
<ul>
  <li><strong>T-score ≥ −1.0</strong>: Normal</li>
  <li><strong>T-score −1.0 to −2.5</strong>: Osteopenia (low bone density; increased fracture risk)</li>
  <li><strong>T-score ≤ −2.5</strong>: Osteoporosis</li>
  <li><strong>T-score ≤ −2.5 with prior fragility fracture</strong>: Severe osteoporosis</li>
</ul>
<p>DEXA alone does not capture all fracture risk. The <strong>FRAX tool</strong> (fracture risk assessment tool; freely available online) integrates BMD with clinical risk factors to calculate the 10-year probability of hip fracture and major osteoporotic fracture — guiding treatment decisions.</p>

<h2>Prevention: The Evidence Base</h2>
<h3>Calcium</h3>
<p>Adequate calcium intake is essential throughout life. Recommended daily intakes: 1,000 mg/day for adults, 1,200 mg/day for women &gt;50 and men &gt;70. Dietary sources are preferable to supplements — dairy products, fortified plant milks, sardines, kale, almonds. High-dose calcium supplements (&gt;1,000 mg/day) may slightly increase cardiovascular risk; supplements should fill dietary gaps rather than replace food sources.</p>
<h3>Vitamin D</h3>
<p>Vitamin D is essential for calcium absorption. Deficiency is widespread, particularly in northern latitudes, dark-skinned individuals, and the elderly. The UK recommends 400 IU/day for the general population; 800–1,000 IU/day is recommended in osteoporosis management guidelines. A meta-analysis shows that combined calcium and vitamin D supplementation (not D alone) reduces hip fracture risk by approximately 15–18% in older adults.</p>
<h3>Exercise</h3>
<p>Weight-bearing exercise (walking, jogging, dancing, resistance training) maintains and modestly increases bone density. Resistance training has the strongest evidence — particularly hip and spine exercises. Exercise also reduces falls risk through improved muscle strength and balance. Tai Chi is specifically recommended for fall prevention in older adults.</p>

<h2>Pharmacological Treatment</h2>
<p>Treatment is generally recommended for postmenopausal women and men &gt;50 with:</p>
<ul>
  <li>T-score ≤ −2.5</li>
  <li>Prior hip or vertebral fracture</li>
  <li>FRAX 10-year hip fracture risk ≥3% or major osteoporotic fracture risk ≥20%</li>
  <li>Long-term glucocorticoid use</li>
</ul>
<h3>Bisphosphonates (First-Line)</h3>
<p>Alendronate (weekly oral), risedronate, zoledronic acid (annual IV infusion). Inhibit osteoclast activity; reduce vertebral fractures by 40–70% and hip fractures by 40%. Well-tolerated; rare risk of atypical femoral fracture and osteonecrosis of the jaw with very long-term use. Drug holidays (after 3–5 years) are considered in low-to-moderate risk patients.</p>
<h3>Denosumab (RANKL Inhibitor)</h3>
<p>Subcutaneous injection every 6 months; highly effective; does not accumulate in bone so <strong>must not be stopped abruptly</strong> — discontinuation causes rapid bone loss and rebound vertebral fractures. Requires transition to a bisphosphonate when stopping.</p>
<h3>Anabolic Agents (Severe Osteoporosis)</h3>
<ul>
  <li><strong>Teriparatide</strong> (PTH analogue) — daily subcutaneous injection for up to 2 years; stimulates new bone formation; reserved for severe cases; followed by antiresorptive therapy</li>
  <li><strong>Romosozumab</strong> (sclerostin inhibitor) — monthly injections for 1 year; dual action (builds bone and reduces resorption); used in very high fracture risk; caution in cardiovascular disease</li>
</ul>`,
  },

  // ─── MENTAL HEALTH ────────────────────────────────────────────────────────
  {
    title: 'Panic Attacks and Panic Disorder: What Is Happening in Your Body and How to Treat It',
    slug: 'panic-attacks-panic-disorder-causes-treatment',
    excerpt: 'A panic attack feels like dying — racing heart, chest pain, dizziness, and overwhelming terror. But panic attacks are not medically dangerous, and panic disorder is one of the most treatable anxiety conditions. Here is what the research shows about why they happen and how to stop them.',
    category: catMap['mental-health'],
    keywords: ['panic attack', 'panic disorder', 'panic attack symptoms', 'panic attack treatment', 'CBT panic', 'agoraphobia', 'panic attack causes'],
    metaDescription: 'Panic attack symptoms, the physiology of the fight-or-flight response, panic disorder diagnosis, and evidence-based CBT and medication treatments.',
    readTime: 8,
    sources: [
      'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, 5th ed. (DSM-5). Washington DC: APA; 2013.',
      'Pompoli A et al. Psychological therapies for panic disorder with or without agoraphobia in adults. Cochrane Database Syst Rev. 2016;4:CD011004.',
      'Bandelow B et al. Efficacy of treatments for anxiety disorders: A meta-analysis. Int Clin Psychopharmacol. 2015;30(4):183–192.',
    ],
    content: `<h2>What Is a Panic Attack?</h2>
<p>A panic attack is a sudden surge of intense fear or discomfort that reaches a peak within minutes and includes multiple physical and cognitive symptoms. They are extremely common — up to 35% of the general population experience at least one panic attack in their lifetime. Panic attacks feel catastrophic but are not medically dangerous.</p>
<p>DSM-5 defines a panic attack by the abrupt onset of at least 4 of the following symptoms, peaking within minutes:</p>
<ul>
  <li>Palpitations, pounding heart, or accelerated heart rate</li>
  <li>Sweating</li>
  <li>Trembling or shaking</li>
  <li>Shortness of breath or smothering sensation</li>
  <li>Chest pain or discomfort</li>
  <li>Nausea or abdominal distress</li>
  <li>Dizziness, unsteadiness, or feeling faint</li>
  <li>Chills or hot flushes</li>
  <li>Numbness or tingling (paraesthesia)</li>
  <li>Feelings of unreality (derealisation) or being detached from oneself (depersonalisation)</li>
  <li>Fear of losing control or "going crazy"</li>
  <li>Fear of dying</li>
</ul>

<h2>The Physiology: Why It Feels So Terrifying</h2>
<p>Panic attacks are essentially a misfired fight-or-flight response. The amygdala — the brain's threat-detection centre — triggers the sympathetic nervous system, flooding the body with adrenaline (epinephrine). This is the same cascade that would save your life from a real predator:</p>
<ul>
  <li>Heart rate and force increase → palpitations</li>
  <li>Breathing becomes rapid and shallow → hyperventilation → CO2 drops → dizziness, tingling, chest tightness</li>
  <li>Blood redirected to large muscles → hands/feet may feel cold or numb</li>
  <li>Pupils dilate, senses sharpen → visual disturbances, feeling of unreality</li>
  <li>Digestion halts → nausea, abdominal cramps</li>
</ul>
<p>The problem is that panic attacks perceive threat when there is none — and the physical symptoms themselves become threatening, creating a vicious cycle: <em>fear → symptoms → more fear about symptoms → more symptoms</em>.</p>

<h2>Panic Disorder vs Isolated Panic Attacks</h2>
<p>An isolated panic attack does not constitute a disorder. <strong>Panic disorder</strong> (affecting 2–3% of the population) is diagnosed when:</p>
<ol>
  <li>Recurrent, unexpected panic attacks occur</li>
  <li>At least one attack is followed by ≥1 month of:
    <ul>
      <li>Persistent worry about more attacks or their consequences ("What if I'm having a heart attack?"), or</li>
      <li>Significant behavioural change — avoidance of situations associated with attacks</li>
    </ul>
  </li>
</ol>
<p>The avoidance dimension is critical. Many people with panic disorder develop <strong>agoraphobia</strong> — avoiding situations from which escape would be difficult or embarrassing during a panic attack (public transport, crowds, open spaces, being alone). Agoraphobia can become severely limiting, sometimes confining people to their homes.</p>

<h2>What Triggers Panic Attacks?</h2>
<p>Panic attacks can be situational (triggered by specific situations) or completely unexpected ("out of the blue"). Common contexts:</p>
<ul>
  <li>Physiological triggers: caffeine, stimulant medications, cannabis (especially high-THC), exercise, heat</li>
  <li>Sleep deprivation and jet lag</li>
  <li>Medical conditions that produce similar symptoms: hyperthyroidism, hypoglycaemia, cardiac arrhythmias, vestibular disorders — these must be excluded</li>
  <li>Stressful life events (often precipitate the first attack)</li>
  <li>Prior trauma (PTSD features can overlap)</li>
</ul>

<h2>Treatment: Cognitive-Behavioural Therapy (First-Line)</h2>
<p>CBT for panic disorder is the most evidence-based treatment with effect sizes exceeding medication in long-term follow-up. The core components:</p>
<h3>Psychoeducation</h3>
<p>Understanding exactly what is happening physiologically during a panic attack removes the catastrophic misinterpretation. When you understand that dizziness is caused by hyperventilation (not a stroke) and that palpitations are adrenaline (not a heart attack), their ability to amplify panic is reduced.</p>
<h3>Interoceptive Exposure</h3>
<p>Deliberately inducing the physical sensations of panic in controlled conditions (spinning in a chair for dizziness, breathing through a straw for breathlessness, staring at a light for visual disturbance). This desensitises the fear response to the sensations themselves — breaking the "symptoms = danger" association.</p>
<h3>Situational Exposure (with response prevention)</h3>
<p>Systematic, graduated exposure to avoided situations (public transport, shops, driving alone) while remaining until anxiety decreases. Avoidance maintains panic disorder; exposure extinguishes it.</p>
<h3>Breathing Retraining</h3>
<p>Slow diaphragmatic breathing (4 seconds inhale, 6 seconds exhale) counteracts hyperventilation. Useful as a coping tool but should not replace exposure work.</p>
<p>CBT typically requires 12–15 sessions. A 2016 Cochrane review found that psychological therapies (predominantly CBT) were more effective than control conditions at reducing panic attack frequency and agoraphobia severity, with gains maintained at follow-up.</p>

<h2>Medication</h2>
<p>Medication is often combined with CBT for moderate-to-severe panic disorder:</p>
<ul>
  <li><strong>SSRIs</strong> (sertraline, escitalopram, paroxetine) — first-line pharmacotherapy; reduce attack frequency and severity; take 4–6 weeks for full effect; started at low dose to avoid initial symptom worsening</li>
  <li><strong>SNRIs</strong> (venlafaxine) — equally effective; particularly useful with comorbid depression</li>
  <li><strong>Benzodiazepines</strong> (alprazolam, clonazepam) — rapid symptom relief but not recommended for routine long-term use due to dependence, tolerance, and impaired CBT learning (anxiolytic drugs reduce the anxiety signal needed for exposure therapy to work)</li>
  <li><strong>Tricyclic antidepressants</strong> (imipramine, clomipramine) — effective but less tolerated; second-line</li>
</ul>

<h2>Prognosis</h2>
<p>Panic disorder responds well to treatment. With CBT, 70–90% of patients are panic-free at end of treatment; gains are maintained at 2-year follow-up. Without treatment, panic disorder tends to follow a chronic waxing and waning course, with agoraphobia often worsening over time. Early intervention produces better outcomes.</p>`,
  },
];

module.exports = { evenMoreArticles };
