const moreArticles = (catMap) => [
  // ─── CARDIOLOGY ───────────────────────────────────────────────────────────
  {
    title: 'Atrial Fibrillation (AFib): Causes, Symptoms, and Treatment',
    slug: 'atrial-fibrillation-afib-causes-symptoms-treatment',
    excerpt: 'AFib is the most common heart rhythm disorder, affecting over 33 million people worldwide. Learn what causes it, how it feels, and how it\'s treated — including ablation and anticoagulation.',
    category: catMap['cardiology'],
    keywords: ['atrial fibrillation', 'AFib', 'irregular heartbeat', 'arrhythmia', 'blood thinners', 'cardioversion', 'stroke risk AFib'],
    metaDescription: 'Atrial fibrillation (AFib): causes, symptoms, stroke risk, and treatments including blood thinners, cardioversion, and catheter ablation.',
    readTime: 9,
    sources: [
      'January CT et al. 2019 AHA/ACC/HRS Focused Update: Management of Atrial Fibrillation. JACC. 2019;74(1):104–132.',
      'Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021;42(5):373–498.',
      'Colilla S et al. Estimates of current and future incidence and prevalence of atrial fibrillation in the U.S. adult population. Am J Cardiol. 2013;112(8):1142–1147.',
    ],
    content: `<h2>What Is Atrial Fibrillation?</h2>
<p>Atrial fibrillation (AFib) is a chaotic, irregular heart rhythm originating in the upper chambers (atria). Instead of beating in a coordinated fashion, the atria quiver rapidly — up to 400–600 times per minute — sending disordered impulses to the ventricles. The result is an irregular, often fast pulse. AFib affects more than 33 million people globally and is the most common sustained cardiac arrhythmia.</p>
<p>AFib is classified as <strong>paroxysmal</strong> (episodes that stop on their own within 7 days), <strong>persistent</strong> (lasting more than 7 days), or <strong>permanent</strong> (ongoing, where rhythm control is no longer pursued).</p>

<h2>Causes and Risk Factors</h2>
<ul>
  <li><strong>Hypertension</strong> — the single largest modifiable risk factor</li>
  <li><strong>Coronary artery disease</strong> and prior myocardial infarction</li>
  <li><strong>Heart failure</strong> and cardiomyopathy</li>
  <li><strong>Valvular heart disease</strong> (especially mitral valve disease)</li>
  <li><strong>Hyperthyroidism</strong> — excess thyroid hormone is a reversible trigger</li>
  <li><strong>Obstructive sleep apnoea</strong></li>
  <li><strong>Heavy alcohol use</strong> — "holiday heart" describes AFib triggered by binge drinking</li>
  <li><strong>Age over 65</strong> — prevalence roughly doubles each decade after 55</li>
  <li><strong>Obesity</strong> — visceral fat drives atrial inflammation and fibrosis</li>
</ul>

<h2>Symptoms</h2>
<p>Up to 30% of people with AFib are asymptomatic — it's discovered on a routine ECG. When symptoms occur they include palpitations (described as fluttering, racing, or irregular heartbeat), fatigue and reduced exercise capacity, shortness of breath, dizziness, and chest discomfort. Symptoms are often worse during episodes of rapid ventricular rate.</p>

<h2>Stroke Risk and the CHA₂DS₂-VASc Score</h2>
<p>The chaotically beating atria allow blood to pool, particularly in the left atrial appendage, where clots can form and embolise to the brain. AFib raises stroke risk fivefold. The CHA₂DS₂-VASc score estimates annual stroke risk:</p>
<ul>
  <li>Congestive heart failure (1 pt) · Hypertension (1 pt) · Age ≥75 (2 pts) · Diabetes (1 pt)</li>
  <li>Prior Stroke/TIA (2 pts) · Vascular disease (1 pt) · Age 65–74 (1 pt) · Female sex (1 pt)</li>
</ul>
<p>Anticoagulation is generally recommended for men scoring ≥2 and women scoring ≥3. Direct oral anticoagulants (apixaban, rivaroxaban, dabigatran) are preferred over warfarin.</p>

<h2>Treatment: Rate vs Rhythm Control</h2>
<p><strong>Rate control</strong> uses beta-blockers (metoprolol, bisoprolol) or calcium channel blockers (diltiazem, verapamil) to keep the resting ventricular rate below 110 bpm without necessarily restoring sinus rhythm. This is adequate for many older, less symptomatic patients.</p>
<p><strong>Rhythm control</strong> aims to restore and maintain sinus rhythm using antiarrhythmic drugs (flecainide, propafenone, amiodarone, dronedarone) or <strong>electrical cardioversion</strong> (a synchronised DC shock under sedation). The EAST-AFNET 4 trial showed early rhythm control significantly reduced cardiovascular death and hospitalisation compared with rate control alone.</p>

<h2>Catheter Ablation</h2>
<p>Pulmonary vein isolation (PVI) uses radiofrequency energy or cryoablation to electrically isolate the pulmonary veins — the most common source of AFib triggers. Success rates are 70–80% for paroxysmal AFib after a single procedure, lower for persistent AFib. Ablation is increasingly recommended for symptomatic patients who prefer not to take lifelong antiarrhythmic drugs.</p>

<h2>Lifestyle Modifications</h2>
<p>Aggressive risk-factor management significantly reduces AFib burden. Weight loss of ≥10% in obese patients can reduce AFib episodes by up to 50%. Treating hypertension, managing sleep apnoea, limiting alcohol, and regular moderate-intensity exercise all reduce recurrence rates.</p>`,
  },

  {
    title: 'Cholesterol Explained: LDL, HDL, Triglycerides, and What Your Numbers Mean',
    slug: 'cholesterol-ldl-hdl-triglycerides-numbers-explained',
    excerpt: 'A blood cholesterol test gives you four numbers that can predict your heart disease risk. Here\'s what LDL, HDL, total cholesterol, and triglycerides actually mean — and how to improve each.',
    category: catMap['cardiology'],
    keywords: ['cholesterol', 'LDL cholesterol', 'HDL cholesterol', 'triglycerides', 'statins', 'heart disease risk', 'lipid panel'],
    metaDescription: 'LDL, HDL, total cholesterol, triglycerides explained: what your numbers mean, target levels, and evidence-based ways to lower bad cholesterol.',
    readTime: 8,
    sources: [
      'Grundy SM et al. 2018 AHA/ACC Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082–e1143.',
      'Ference BA et al. Low-density lipoproteins cause atherosclerotic cardiovascular disease. Eur Heart J. 2017;38(32):2459–2472.',
      'Miller M et al. Triglycerides and cardiovascular disease: a scientific statement from the AHA. Circulation. 2011;123(20):2292–2333.',
    ],
    content: `<h2>The Four Numbers on Your Lipid Panel</h2>
<p>A standard fasting lipid panel measures four values: <strong>total cholesterol</strong>, <strong>LDL-C</strong> (low-density lipoprotein cholesterol), <strong>HDL-C</strong> (high-density lipoprotein cholesterol), and <strong>triglycerides</strong>. Each tells a different story about cardiovascular risk.</p>

<h2>LDL: The Primary Driver of Atherosclerosis</h2>
<p>LDL particles carry cholesterol to tissues. When LDL-C is elevated, LDL particles accumulate in arterial walls, triggering the inflammatory cascade that forms plaques — the root cause of heart attacks and strokes. The causal relationship is supported by Mendelian randomisation studies showing that people with naturally lower LDL have proportionally lower cardiovascular disease throughout life.</p>
<ul>
  <li><strong>Optimal:</strong> &lt;100 mg/dL (very high risk: &lt;70 mg/dL)</li>
  <li><strong>Near optimal:</strong> 100–129 mg/dL</li>
  <li><strong>Borderline high:</strong> 130–159 mg/dL</li>
  <li><strong>High:</strong> 160–189 mg/dL</li>
  <li><strong>Very high:</strong> ≥190 mg/dL</li>
</ul>

<h2>HDL: The "Good" Cholesterol</h2>
<p>HDL particles transport cholesterol from arterial walls back to the liver for excretion (reverse cholesterol transport). Higher HDL-C correlates with lower cardiovascular risk in observational studies. However, drugs that raise HDL (niacin, CETP inhibitors) have not reduced cardiovascular events in trials, suggesting HDL is more a marker than a direct protective agent. Nevertheless, very low HDL (&lt;40 mg/dL in men, &lt;50 mg/dL in women) is an independent risk factor.</p>

<h2>Triglycerides</h2>
<p>Triglycerides are the main form of fat in the bloodstream, reflecting dietary fat and carbohydrate intake, alcohol use, and metabolic health. Elevated triglycerides (&gt;150 mg/dL fasting) are associated with cardiovascular risk, particularly when combined with low HDL — the hallmark of metabolic syndrome. Very high triglycerides (&gt;500 mg/dL) also risk acute pancreatitis.</p>
<ul>
  <li>Normal: &lt;150 mg/dL · Borderline high: 150–199 · High: 200–499 · Very high: ≥500</li>
</ul>

<h2>How to Improve Your Cholesterol Profile</h2>
<h3>Diet</h3>
<p>Replace saturated fats (red meat, full-fat dairy, tropical oils) with unsaturated fats (olive oil, avocado, nuts). Eliminate trans fats entirely. Increase soluble fibre (oats, barley, legumes, psyllium) — 5–10 g/day of soluble fibre lowers LDL by 5–11 mg/dL. Reduce refined carbohydrates and sugar to lower triglycerides.</p>

<h3>Exercise</h3>
<p>Aerobic exercise (150+ min/week moderate intensity) raises HDL, lowers triglycerides, and modestly reduces LDL. Resistance training adds further metabolic benefit.</p>

<h3>Statins</h3>
<p>High-intensity statins (atorvastatin 40–80 mg, rosuvastatin 20–40 mg) reduce LDL by 50–60% and cardiovascular events by ~25% per mmol/L reduction in LDL. They are the cornerstone of pharmacotherapy for elevated cardiovascular risk. For patients who need additional LDL lowering, ezetimibe (adds ~20% reduction) or PCSK9 inhibitors (50–60% further reduction) can be added.</p>`,
  },

  // ─── ONCOLOGY ─────────────────────────────────────────────────────────────
  {
    title: 'Colorectal Cancer: Symptoms, Screening, and Prevention',
    slug: 'colorectal-cancer-symptoms-screening-prevention',
    excerpt: 'Colorectal cancer is the second leading cause of cancer death in the US, yet it\'s highly preventable with screening. Learn the warning signs, who needs a colonoscopy, and what you can do to reduce your risk.',
    category: catMap['oncology'],
    keywords: ['colorectal cancer', 'colon cancer', 'colonoscopy', 'colon cancer symptoms', 'colorectal cancer screening', 'polyps', 'FIT test'],
    metaDescription: 'Colorectal cancer symptoms, screening guidelines (colonoscopy, FIT test), risk factors, and evidence-based prevention strategies.',
    readTime: 8,
    sources: [
      'Siegel RL et al. Colorectal cancer statistics, 2023. CA Cancer J Clin. 2023;73(3):233–254.',
      'Rex DK et al. Colorectal Cancer Screening: Recommendations for Physicians and Patients From the U.S. Multi-Society Task Force. Gastroenterology. 2017;153(1):307–323.',
      'Doubeni CA et al. Effectiveness of Screening Colonoscopy in Reducing the Risk of Death from Right and Left Colon Cancer. Gut. 2018;67(2):291–298.',
    ],
    content: `<h2>How Common Is Colorectal Cancer?</h2>
<p>Colorectal cancer (CRC) — cancer of the colon or rectum — is the third most common cancer diagnosis and the second leading cause of cancer death in the United States, with approximately 153,000 new cases and 52,000 deaths annually. The encouraging news: screening can detect precancerous polyps before they become cancer, and when CRC is caught at an early stage, the 5-year survival rate exceeds 90%.</p>

<h2>Warning Signs and Symptoms</h2>
<p>Early colorectal cancer often causes no symptoms, which is precisely why screening matters. When symptoms do appear, they may include:</p>
<ul>
  <li>Blood in the stool (bright red or dark/tarry)</li>
  <li>A persistent change in bowel habits — diarrhoea, constipation, or narrowing of stool lasting more than a few weeks</li>
  <li>Rectal bleeding or the sensation that the bowel doesn't completely empty</li>
  <li>Abdominal cramping, pain, or discomfort</li>
  <li>Unexplained weight loss and fatigue (often from occult blood loss causing anaemia)</li>
</ul>
<p>These symptoms overlap with many benign conditions (haemorrhoids, IBS), but any persistent change warrants medical evaluation.</p>

<h2>Risk Factors</h2>
<ul>
  <li><strong>Age</strong> — risk rises significantly after 45</li>
  <li><strong>Personal or family history</strong> of colorectal cancer or polyps</li>
  <li><strong>Inflammatory bowel disease</strong> (Crohn's or ulcerative colitis)</li>
  <li><strong>Inherited syndromes</strong> — Lynch syndrome, familial adenomatous polyposis (FAP)</li>
  <li><strong>Diet</strong> high in red and processed meat; low in fibre</li>
  <li><strong>Obesity, physical inactivity, smoking, heavy alcohol use</strong></li>
  <li><strong>Type 2 diabetes</strong></li>
</ul>

<h2>Screening Options</h2>
<p>The US Multi-Society Task Force recommends starting screening at <strong>age 45</strong> for average-risk adults (down from 50). Options include:</p>
<ul>
  <li><strong>Colonoscopy every 10 years</strong> — the gold standard; allows direct visualisation and removal of polyps in the same procedure</li>
  <li><strong>Annual fecal immunochemical test (FIT)</strong> — a non-invasive stool test that detects blood; positive result requires follow-up colonoscopy</li>
  <li><strong>FIT-DNA test (Cologuard) every 1–3 years</strong> — detects blood and abnormal DNA in stool</li>
  <li><strong>CT colonography every 5 years</strong> — a "virtual colonoscopy" that images the colon by CT</li>
  <li><strong>Flexible sigmoidoscopy every 5 years</strong> — examines only the lower third of the colon</li>
</ul>
<p>Higher-risk individuals (personal/family history of CRC or polyps, IBD, Lynch syndrome) should begin screening earlier and more frequently — discuss timing with your doctor.</p>

<h2>Prevention</h2>
<p>Beyond screening, evidence-based strategies reduce CRC risk: eating a high-fibre diet (whole grains, vegetables, legumes), limiting red meat to &lt;3 servings/week and avoiding processed meat, maintaining a healthy weight, getting 150+ minutes of moderate exercise per week, limiting alcohol, and not smoking. Regular aspirin use reduces polyp recurrence but carries bleeding risks — don't take it for cancer prevention without medical advice.</p>`,
  },

  // ─── DERMATOLOGY ──────────────────────────────────────────────────────────
  {
    title: 'Eczema (Atopic Dermatitis): Causes, Triggers, and Treatment',
    slug: 'eczema-atopic-dermatitis-causes-triggers-treatment',
    excerpt: 'Eczema affects 31 million Americans and causes intensely itchy, inflamed skin. Here\'s what drives it, what makes it worse, and how modern treatments — including biologics — can bring lasting relief.',
    category: catMap['dermatology'],
    keywords: ['eczema', 'atopic dermatitis', 'itchy skin', 'eczema triggers', 'dupilumab', 'eczema treatment', 'skin barrier'],
    metaDescription: 'Eczema (atopic dermatitis) causes, common triggers, and treatment options from moisturisers and steroids to dupilumab and JAK inhibitors.',
    readTime: 7,
    sources: [
      'Wollenberg A et al. ETFAD/EADV Eczema task force 2020 position paper on diagnosis and treatment of atopic dermatitis. J Eur Acad Dermatol Venereol. 2020;34(12):2717–2744.',
      'Drucker AM et al. The Burden of Atopic Dermatitis: Summary of a Report for the National Eczema Association. J Invest Dermatol. 2017;137(1):26–30.',
      'Simpson EL et al. Two Phase 3 Trials of Dupilumab versus Placebo in Atopic Dermatitis. N Engl J Med. 2016;375(24):2335–2348.',
    ],
    content: `<h2>What Is Eczema?</h2>
<p>Atopic dermatitis (AD), commonly called eczema, is a chronic inflammatory skin condition characterised by dry, intensely itchy skin that flares in patches — most often on the face, neck, inner elbows, and behind the knees. It affects roughly 31 million Americans (10–20% of children, 3% of adults) and is strongly associated with asthma, allergic rhinitis, and food allergies — the "atopic march."</p>

<h2>What Causes Eczema?</h2>
<p>Eczema is driven by two interacting problems:</p>
<ul>
  <li><strong>A defective skin barrier</strong> — mutations in the <em>FLG</em> gene (encoding filaggrin, a key structural protein) cause excessive water loss and allow allergens and irritants to penetrate the skin</li>
  <li><strong>Immune dysregulation</strong> — type 2 inflammation (IL-4, IL-13, IL-31 pathways) drives the itch-scratch cycle and perpetuates inflammation</li>
</ul>
<p>Genetics play a major role: if one parent has atopy, a child has a 30–50% chance of developing eczema; if both parents are affected, the risk rises to 60–80%.</p>

<h2>Common Triggers</h2>
<ul>
  <li>Dry air, especially in winter with indoor heating</li>
  <li>Soaps, detergents, fragrances, and cleaning products</li>
  <li>Sweating and heat</li>
  <li>Wool or synthetic fabrics against the skin</li>
  <li>Stress (triggers neuroinflammatory flares)</li>
  <li>Certain foods (in children: egg, milk, peanut, wheat — rarely the primary cause in adults)</li>
  <li>House dust mites, pet dander, pollen</li>
  <li>Bacterial colonisation with <em>Staphylococcus aureus</em> — found on lesional skin in up to 90% of patients</li>
</ul>

<h2>Treatment: A Step-Up Approach</h2>
<h3>Baseline Care</h3>
<p>Regular moisturisation (emollients applied twice daily) is the foundation of eczema management — it restores the skin barrier, reduces flare frequency, and decreases the need for steroids. Apply within three minutes of bathing to lock in moisture.</p>

<h3>Topical Steroids</h3>
<p>Topical corticosteroids remain the first-line anti-inflammatory treatment for flares. Low-potency steroids (hydrocortisone 1%) for the face and skin folds; moderate to high potency (betamethasone, mometasone) for the body. Overuse risks skin thinning (atrophy), but appropriately used short courses are safe.</p>

<h3>Topical Calcineurin Inhibitors</h3>
<p>Tacrolimus (Protopic) and pimecrolimus (Elidel) are non-steroidal alternatives suitable for sensitive areas and long-term use. They work by blocking T-cell activation without causing skin atrophy.</p>

<h3>Biologics and Small Molecules</h3>
<p><strong>Dupilumab (Dupixent)</strong> — a monoclonal antibody blocking IL-4 and IL-13 receptors — has transformed moderate-to-severe eczema treatment. In phase 3 trials, 51% of patients achieved clear or almost clear skin at 16 weeks. JAK inhibitors (upadacitinib, abrocitinib) offer a fast-acting oral alternative for patients who fail biologics.</p>

<h2>Living with Eczema</h2>
<p>Identifying and avoiding personal triggers, using fragrance-free products, wearing loose cotton clothing, keeping nails short (to reduce damage from scratching), and managing stress all help reduce flare frequency. Eczema is not contagious and often improves with age.</p>`,
  },

  // ─── INTERNAL MEDICINE ────────────────────────────────────────────────────
  {
    title: 'Type 2 Diabetes: Prevention, Management, and Living Well',
    slug: 'type-2-diabetes-prevention-management-living-well',
    excerpt: 'Over 37 million Americans have diabetes and 96 million have prediabetes. Type 2 diabetes is largely preventable and manageable — here\'s everything you need to know about blood sugar, medications, and lifestyle.',
    category: catMap['internal-medicine'],
    keywords: ['type 2 diabetes', 'blood sugar', 'insulin resistance', 'metformin', 'diabetes prevention', 'HbA1c', 'prediabetes'],
    metaDescription: 'Type 2 diabetes: causes, diagnosis (HbA1c), prevention with lifestyle changes, and management with metformin, GLP-1 drugs, and SGLT2 inhibitors.',
    readTime: 10,
    sources: [
      'American Diabetes Association. Standards of Medical Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S1–S321.',
      'Knowler WC et al. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med. 2002;346(6):393–403.',
      'Zinman B et al. Empagliflozin, Cardiovascular Outcomes, and Mortality in Type 2 Diabetes. N Engl J Med. 2015;373(22):2117–2128.',
    ],
    content: `<h2>What Is Type 2 Diabetes?</h2>
<p>Type 2 diabetes (T2D) is a metabolic disorder in which the body's cells become resistant to insulin, and the pancreatic beta cells can no longer compensate with sufficient insulin production. The result is persistently elevated blood glucose levels that damage blood vessels and nerves over time. T2D accounts for 90–95% of all diabetes cases, affecting over 37 million Americans.</p>

<h2>How Is It Diagnosed?</h2>
<ul>
  <li><strong>HbA1c ≥ 6.5%</strong> — reflects average blood glucose over 2–3 months</li>
  <li><strong>Fasting plasma glucose ≥ 126 mg/dL</strong></li>
  <li><strong>2-hour glucose ≥ 200 mg/dL</strong> during oral glucose tolerance test</li>
  <li><strong>Random glucose ≥ 200 mg/dL</strong> with classic symptoms (polyuria, polydipsia, unexplained weight loss)</li>
</ul>
<p>Prediabetes is diagnosed at HbA1c 5.7–6.4% or fasting glucose 100–125 mg/dL. At this stage, intervention can prevent or significantly delay progression to T2D.</p>

<h2>Prevention: The Diabetes Prevention Program</h2>
<p>The landmark Diabetes Prevention Program (DPP) trial showed that intensive lifestyle intervention (7% weight loss + 150 min/week of moderate exercise) reduced the incidence of T2D by 58% in high-risk individuals with prediabetes — more effective than metformin (31% reduction). For every kilogram of weight lost, T2D risk fell by 16%. These benefits persist for over a decade after the intervention.</p>

<h2>Management</h2>
<h3>Lifestyle Foundation</h3>
<p>A diet low in refined carbohydrates and processed foods, regular aerobic exercise (150+ min/week), and sustained weight loss form the cornerstone of T2D management. A Mediterranean or low-carbohydrate diet can reduce HbA1c by 0.5–1.0% beyond medication effects alone.</p>

<h3>Metformin</h3>
<p>Metformin remains the preferred first-line oral medication — it lowers hepatic glucose production, is weight-neutral or causes modest weight loss, has an excellent safety profile, is inexpensive, and reduces cardiovascular events. It is contraindicated in severe kidney disease (eGFR &lt;30).</p>

<h3>GLP-1 Receptor Agonists</h3>
<p>Semaglutide (Ozempic/Wegovy), liraglutide (Victoza/Saxenda), and dulaglutide (Trulicity) lower HbA1c by 1–2%, cause significant weight loss (6–15%), and reduce major cardiovascular events and kidney disease progression. They are now recommended as second-line agents for patients with established cardiovascular disease or obesity.</p>

<h3>SGLT2 Inhibitors</h3>
<p>Empagliflozin (Jardiance), dapagliflozin (Farxiga), and canagliflozin (Invokana) lower blood sugar by causing the kidneys to excrete glucose in the urine. They also reduce heart failure hospitalisations by ~35% and slow CKD progression — benefits that are largely independent of glucose lowering.</p>

<h2>Monitoring and Targets</h2>
<p>The standard HbA1c target for most adults is &lt;7% (53 mmol/mol), though targets should be individualised — less strict for older patients with multiple comorbidities, more strict for younger patients early in their disease. Continuous glucose monitors (CGM) are increasingly used to identify postprandial glucose spikes and guide medication adjustments.</p>

<h2>Long-Term Complications</h2>
<p>Uncontrolled T2D damages the kidneys (diabetic nephropathy — leading cause of dialysis), retina (retinopathy — leading cause of blindness), peripheral nerves (neuropathy causing pain and loss of sensation), and blood vessels (increasing heart attack and stroke risk 2–4-fold). Good glycaemic control, blood pressure management, and statin therapy dramatically reduce complication risk.</p>`,
  },

  {
    title: 'Thyroid Disease: Hypothyroidism vs Hyperthyroidism Explained',
    slug: 'thyroid-disease-hypothyroidism-hyperthyroidism-explained',
    excerpt: 'An estimated 20 million Americans have thyroid disease, and up to 60% don\'t know it. Here\'s how to tell if your thyroid is underactive or overactive — and what treatment involves.',
    category: catMap['internal-medicine'],
    keywords: ['hypothyroidism', 'hyperthyroidism', 'thyroid disease', 'TSH test', 'levothyroxine', 'Graves disease', 'Hashimoto thyroiditis'],
    metaDescription: 'Hypothyroidism vs hyperthyroidism: symptoms, causes (Hashimoto, Graves), TSH testing, and treatment with levothyroxine or antithyroid drugs.',
    readTime: 8,
    sources: [
      'Garber JR et al. Clinical practice guidelines for hypothyroidism in adults. Thyroid. 2012;22(12):1200–1235.',
      'Ross DS et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016;26(10):1343–1421.',
      'Chaker L et al. Hypothyroidism. Lancet. 2017;390(10101):1550–1562.',
    ],
    content: `<h2>What Does the Thyroid Do?</h2>
<p>The thyroid is a butterfly-shaped gland at the base of the neck that produces thyroxine (T4) and triiodothyronine (T3) — hormones that regulate metabolism in every cell of the body. They govern heart rate, body temperature, energy production, mood, weight, and the function of nearly every organ. Too little thyroid hormone (hypothyroidism) slows everything down; too much (hyperthyroidism) speeds everything up.</p>

<h2>Hypothyroidism: Underactive Thyroid</h2>
<p><strong>Hashimoto's thyroiditis</strong> — an autoimmune condition in which the immune system attacks the thyroid — is the most common cause in developed countries. Other causes include prior thyroid surgery, radioiodine treatment, certain medications (lithium, amiodarone), and iodine deficiency (globally, the most common cause).</p>
<p><strong>Symptoms</strong> are often subtle and overlap with many other conditions:</p>
<ul>
  <li>Fatigue and sluggishness</li>
  <li>Unexplained weight gain</li>
  <li>Feeling cold (especially cold hands and feet)</li>
  <li>Constipation</li>
  <li>Dry skin, brittle nails, hair thinning or loss</li>
  <li>Brain fog, depression, poor memory</li>
  <li>Elevated cholesterol</li>
  <li>In women: heavy or irregular periods</li>
</ul>
<p><strong>Diagnosis</strong> is by TSH (thyroid-stimulating hormone) — elevated TSH (typically &gt;4.5 mIU/L) indicates the pituitary is working overtime because the thyroid is underperforming. Free T4 is measured to confirm the degree of deficiency.</p>
<p><strong>Treatment</strong>: Levothyroxine (synthetic T4) is the standard of care, taken once daily in the morning on an empty stomach. The goal is to normalise TSH to 0.5–2.5 mIU/L. Dosage is adjusted based on repeat TSH testing after 6–8 weeks.</p>

<h2>Hyperthyroidism: Overactive Thyroid</h2>
<p><strong>Graves' disease</strong> — another autoimmune condition, in which thyroid-stimulating antibodies (TSI) continuously stimulate the thyroid — causes 80% of hyperthyroidism cases. Other causes include toxic multinodular goitre, toxic adenoma, and thyroiditis (temporary inflammation releasing stored hormone).</p>
<p><strong>Symptoms</strong> reflect a revved-up metabolism:</p>
<ul>
  <li>Rapid or irregular heartbeat (palpitations, atrial fibrillation)</li>
  <li>Unintentional weight loss despite increased appetite</li>
  <li>Heat intolerance and excessive sweating</li>
  <li>Anxiety, irritability, tremors</li>
  <li>Diarrhoea or frequent bowel movements</li>
  <li>Muscle weakness</li>
  <li>Graves' ophthalmopathy: eye bulging, dryness, and double vision (specific to Graves')</li>
</ul>
<p><strong>Diagnosis</strong>: Suppressed TSH (&lt;0.1 mIU/L) with elevated free T3 and/or T4 confirms hyperthyroidism. TSI antibodies confirm Graves' disease.</p>
<p><strong>Treatment options</strong> include antithyroid medications (methimazole, propylthiouracil — PTU), radioactive iodine ablation (the most commonly chosen definitive treatment in the US), or surgical thyroidectomy. After radioiodine or thyroidectomy, most patients develop hypothyroidism and require lifelong levothyroxine.</p>

<h2>When to Test Your Thyroid</h2>
<p>Testing (TSH) is recommended if you have unexplained fatigue, weight changes, mood disturbances, palpitations, or hair loss — or if you're a woman over 35, pregnant, or postpartum (postpartum thyroiditis affects 5–10% of women). Thyroid disease runs strongly in families, so a positive family history lowers the threshold for testing.</p>`,
  },

  // ─── NEUROLOGY ────────────────────────────────────────────────────────────
  {
    title: 'Migraine: Triggers, Types, and Evidence-Based Treatment',
    slug: 'migraine-triggers-types-evidence-based-treatment',
    excerpt: 'Migraine affects 39 million Americans and is the third most prevalent illness worldwide. It\'s far more than a headache — and modern treatments, from triptans to CGRP drugs, can dramatically reduce attacks.',
    category: catMap['neurology'],
    keywords: ['migraine', 'migraine triggers', 'migraine treatment', 'CGRP', 'triptans', 'aura', 'chronic migraine'],
    metaDescription: 'Migraine causes, types (with/without aura), triggers, and evidence-based treatment: triptans, CGRP inhibitors, and preventive therapies.',
    readTime: 9,
    sources: [
      'GBD 2016 Headache Collaborators. Global, regional, and national burden of migraine and tension-type headache, 1990–2016. Lancet Neurol. 2018;17(11):954–976.',
      'Diener HC et al. Calcitonin gene-related peptide (CGRP) monoclonal antibodies for the prevention of migraine: a meta-analysis. Headache. 2020;60(1):165–173.',
      'Olesen J. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1–211.',
    ],
    content: `<h2>What Is a Migraine?</h2>
<p>A migraine is a neurological disorder characterised by recurrent attacks of moderate-to-severe, often one-sided, throbbing headache lasting 4–72 hours. It is accompanied by nausea, vomiting, and extreme sensitivity to light (photophobia) and sound (phonophobia). Unlike ordinary tension headaches, migraines are disabling — attacks prevent normal activity and often require lying down in a dark, quiet room.</p>

<h2>Types of Migraine</h2>
<ul>
  <li><strong>Migraine without aura (common migraine)</strong> — accounts for 75% of cases; no preceding neurological symptoms</li>
  <li><strong>Migraine with aura (classic migraine)</strong> — aura is a transient neurological phenomenon lasting 20–60 minutes before or during the headache: visual disturbances (zigzag lines, blind spots, flashing lights), sensory changes (tingling), or speech difficulties. Aura represents cortical spreading depression — a wave of electrical activity moving across the brain.</li>
  <li><strong>Chronic migraine</strong> — ≥15 headache days per month for &gt;3 months, with ≥8 meeting migraine criteria</li>
  <li><strong>Vestibular migraine</strong> — prominent vertigo and dizziness with or without headache</li>
</ul>

<h2>Common Triggers</h2>
<p>Triggers lower the threshold for attacks — they don't directly cause migraine, which requires an underlying genetic predisposition. Common triggers include:</p>
<ul>
  <li>Hormonal changes (falling oestrogen around menstruation)</li>
  <li>Sleep disruption (too much or too little)</li>
  <li>Skipping meals or dehydration</li>
  <li>Stress (or the "let-down" after stress ends)</li>
  <li>Alcohol (especially red wine and beer)</li>
  <li>Bright or flickering lights, strong smells</li>
  <li>Caffeine (withdrawal can trigger an attack)</li>
  <li>Weather changes (barometric pressure drops)</li>
</ul>

<h2>Acute (Abortive) Treatment</h2>
<p><strong>Triptans</strong> (sumatriptan, rizatriptan, eletriptan) are the first-line specific treatment for moderate-to-severe attacks. They are serotonin (5-HT₁B/1D) agonists that constrict dilated cranial vessels and block pain signal transmission. Take as early as possible during an attack — they are far less effective once the headache is fully established. They are contraindicated in patients with cardiovascular disease.</p>
<p><strong>Gepants</strong> (ubrogepant, rimegepant) are CGRP receptor antagonists — a newer acute treatment that does not cause vasoconstriction, making them safe for cardiovascular patients. Rimegepant also has preventive properties when taken every other day.</p>
<p><strong>NSAIDs</strong> (ibuprofen, naproxen, aspirin) with or without caffeine are effective for mild-to-moderate attacks. Caution: using any acute headache medication more than 10–15 days per month can cause medication overuse headache (rebound headache).</p>

<h2>Preventive Treatment</h2>
<p>Prevention is recommended when attacks occur ≥4 days/month or are severe and disabling. Traditional options include beta-blockers (propranolol, metoprolol), tricyclics (amitriptyline), anticonvulsants (topiramate, valproate), and calcium channel blockers (flunarizine).</p>
<p>The biggest advance in migraine prevention in decades has been <strong>anti-CGRP monoclonal antibodies</strong>: erenumab (Aimovig), fremanezumab (Ajovy), galcanezumab (Emgality), and eptinezumab (Vyepti). Monthly or quarterly injections reduce migraine days by 50% or more in ~50% of patients. They work specifically by blocking CGRP — a neuropeptide central to migraine pathophysiology — with minimal side effects.</p>
<p><strong>OnabotulinumtoxinA (Botox)</strong> is approved for chronic migraine: 31 injections around the head and neck every 12 weeks, reducing headache days by ~9 per month.</p>`,
  },

  // ─── NUTRITION ────────────────────────────────────────────────────────────
  {
    title: 'The Mediterranean Diet: What It Is, Why It Works, and How to Start',
    slug: 'mediterranean-diet-what-it-is-why-it-works',
    excerpt: 'Consistently ranked the world\'s healthiest diet, the Mediterranean pattern cuts cardiovascular events by 30%, protects against diabetes, and supports brain health. Here\'s the evidence — and how to actually eat it.',
    category: catMap['nutrition'],
    keywords: ['Mediterranean diet', 'Mediterranean diet benefits', 'PREDIMED study', 'heart healthy diet', 'olive oil', 'anti-inflammatory diet', 'longevity diet'],
    metaDescription: 'The Mediterranean diet explained: what to eat, proven benefits for heart disease and longevity, PREDIMED evidence, and practical meal tips.',
    readTime: 8,
    sources: [
      'Estruch R et al. Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts (PREDIMED). N Engl J Med. 2018;378(25):e34.',
      'Sofi F et al. Accruing evidence about benefits of adherence to the Mediterranean diet on health. Am J Clin Nutr. 2010;92(5):1189–1196.',
      'Martínez-González MA et al. A 14-Item Mediterranean Diet Assessment Score and 14-Year All-Cause Mortality in a Spanish Male Cohort. PLoS ONE. 2012;7(8):e43134.',
    ],
    content: `<h2>What Is the Mediterranean Diet?</h2>
<p>The Mediterranean diet is not a rigid plan but a traditional eating pattern from countries bordering the Mediterranean Sea — particularly Greece, southern Italy, and Spain in the 1960s, before westernisation. Its defining features are an abundance of plant foods, olive oil as the primary fat, moderate fish and poultry consumption, and low intake of red meat and processed foods.</p>

<h2>What to Eat — and What to Avoid</h2>
<ul>
  <li><strong>Eat abundantly:</strong> vegetables, fruits, legumes (beans, lentils, chickpeas), whole grains, nuts, seeds, herbs, and spices</li>
  <li><strong>Primary fat: extra-virgin olive oil</strong> — 4+ tablespoons daily in the PREDIMED trial</li>
  <li><strong>Eat regularly:</strong> fish and seafood (2+ times/week), especially oily fish rich in omega-3s</li>
  <li><strong>Eat in moderation:</strong> eggs, dairy (mainly as yoghurt and cheese), and poultry</li>
  <li><strong>Eat rarely:</strong> red and processed meat, butter, refined grains, added sugar, and ultra-processed foods</li>
  <li><strong>Optional: red wine</strong> — 1 glass with meals (no more than 1–2/day); do not start drinking for health reasons</li>
</ul>

<h2>The Evidence: PREDIMED and Beyond</h2>
<p>The PREDIMED trial — one of the most important nutrition studies ever conducted — randomised 7,447 high-risk Spanish adults to a Mediterranean diet supplemented with extra-virgin olive oil, a Mediterranean diet supplemented with mixed nuts, or a low-fat control diet. After 5 years, the Mediterranean diet groups had a <strong>30% lower rate of major cardiovascular events</strong> (heart attack, stroke, or cardiovascular death) compared with the low-fat group.</p>
<p>Beyond heart disease, meta-analyses show Mediterranean diet adherence is associated with:</p>
<ul>
  <li>30% lower risk of type 2 diabetes</li>
  <li>Slower cognitive decline and reduced dementia risk</li>
  <li>Lower rates of depression</li>
  <li>Reduced inflammation (lower CRP and IL-6)</li>
  <li>Lower all-cause mortality</li>
</ul>

<h2>Why It Works</h2>
<p>The Mediterranean diet is high in monounsaturated fats (olive oil) and omega-3 fatty acids (oily fish), both of which reduce inflammation and improve lipid profiles. High fibre from legumes and whole grains supports a diverse gut microbiome. Polyphenols in olive oil, red wine, tomatoes, and berries have antioxidant and anti-inflammatory properties. There is no single "active ingredient" — the benefit comes from the overall dietary pattern.</p>

<h2>How to Start</h2>
<p>You don't need to overhaul your diet overnight. Practical steps:</p>
<ul>
  <li>Switch from butter and seed oils to extra-virgin olive oil for cooking and dressings</li>
  <li>Have fish twice a week (salmon, sardines, mackerel, herring)</li>
  <li>Replace meat as a centrepiece with legumes or vegetables two to three nights per week</li>
  <li>Eat a handful of mixed nuts (walnuts, almonds) daily</li>
  <li>Base meals on vegetables, grains, and legumes; meat becomes a condiment rather than a main</li>
  <li>Finish meals with fruit instead of dessert</li>
</ul>`,
  },

  // ─── MENTAL HEALTH ────────────────────────────────────────────────────────
  {
    title: 'Anxiety Disorders: Types, Symptoms, and What Actually Works',
    slug: 'anxiety-disorders-types-symptoms-treatment-guide',
    excerpt: 'Anxiety disorders are the most common mental health condition in the US, affecting 40 million adults. From GAD to panic disorder to social anxiety — here\'s what distinguishes each type and what treatments have the strongest evidence.',
    category: catMap['mental-health'],
    keywords: ['anxiety disorder', 'generalized anxiety', 'panic disorder', 'social anxiety', 'CBT for anxiety', 'SSRI anxiety', 'anxiety treatment'],
    metaDescription: 'Anxiety disorders: types (GAD, panic, social anxiety, phobias), symptoms, and evidence-based treatments including CBT and SSRIs.',
    readTime: 9,
    sources: [
      'Bandelow B, Michaelis S, Wedekind D. Treatment of anxiety disorders. Dialogues Clin Neurosci. 2017;19(2):93–107.',
      'Kessler RC et al. Lifetime prevalence and age-of-onset distributions of DSM-IV disorders in the National Comorbidity Survey Replication. Arch Gen Psychiatry. 2005;62(6):593–602.',
      'Clark DM, Wells A. A cognitive model of social phobia. In: Heimberg RG et al, eds. Social Phobia: Diagnosis, Assessment, and Treatment. Guilford Press; 1995.',
    ],
    content: `<h2>What Are Anxiety Disorders?</h2>
<p>Anxiety is a normal, adaptive emotion that prepares us to respond to threat. An anxiety <em>disorder</em> exists when anxiety becomes persistent, disproportionate to the actual danger, and begins to impair daily functioning. Anxiety disorders are the most common mental health conditions globally, affecting 284 million people worldwide and 40 million adults in the United States.</p>

<h2>Types of Anxiety Disorders</h2>
<h3>Generalised Anxiety Disorder (GAD)</h3>
<p>Excessive, difficult-to-control worry about multiple everyday topics (work, health, finances, family) on most days for at least 6 months. Associated with restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbance. GAD affects ~6.8 million US adults.</p>

<h3>Panic Disorder</h3>
<p>Recurrent unexpected panic attacks — sudden surges of intense fear peaking within minutes — accompanied by physical symptoms (pounding heart, sweating, shortness of breath, chest pain, dizziness, feeling of unreality or detachment). Crucially, persistent worry about future attacks and behavioural changes to avoid them distinguish panic disorder from isolated panic attacks.</p>

<h3>Social Anxiety Disorder (Social Phobia)</h3>
<p>Intense fear of social situations in which the person might be scrutinised or judged — leading to avoidance of social interactions, public speaking, eating in public, or meeting new people. It is one of the most common anxiety disorders, often beginning in adolescence, and is consistently undertreated.</p>

<h3>Specific Phobias</h3>
<p>Marked, disproportionate fear of specific objects or situations — spiders, heights, flying, blood, needles — that provokes immediate anxiety and is actively avoided. Specific phobias are highly treatable with exposure therapy.</p>

<h3>Agoraphobia</h3>
<p>Fear and avoidance of situations where escape would be difficult or help unavailable during a panic attack — open spaces, public transport, crowds, queues, or being outside the home alone.</p>

<h2>What Causes Anxiety Disorders?</h2>
<p>Anxiety disorders arise from an interaction of genetic vulnerability (family history increases risk ~5-fold), early life adversity, temperament (behavioural inhibition in childhood), and environmental stressors. Neurobiologically, overactivation of the amygdala (fear centre) and underregulation by the prefrontal cortex play central roles.</p>

<h2>Evidence-Based Treatments</h2>
<h3>Cognitive Behavioural Therapy (CBT)</h3>
<p>CBT is the gold standard psychological treatment for all anxiety disorders, with the strongest evidence base. It targets the cognitive distortions (catastrophic thinking, overestimating threat) and behavioural patterns (avoidance) that maintain anxiety. <strong>Exposure therapy</strong> — systematically confronting feared situations — is the most powerful component, producing lasting improvements in 60–80% of patients.</p>

<h3>SSRIs and SNRIs</h3>
<p>Selective serotonin reuptake inhibitors (sertraline, escitalopram, paroxetine) and SNRIs (venlafaxine, duloxetine) are first-line pharmacotherapy for GAD, panic disorder, and social anxiety. They take 4–6 weeks to show full effect. SSRIs are generally well tolerated; common side effects include initial nausea, sleep changes, and sexual dysfunction. They should be continued for 9–12 months after response before gradual tapering.</p>

<h3>Buspirone</h3>
<p>A non-benzodiazepine anxiolytic effective for GAD. Not addictive, no sedation, but requires 2–4 weeks to work. Not effective for panic disorder.</p>

<h3>Benzodiazepines</h3>
<p>Fast-acting (lorazepam, diazepam, clonazepam) but carry significant risks: tolerance, dependence, cognitive impairment, falls in older adults, and withdrawal seizures on abrupt discontinuation. Generally reserved for short-term crisis use or situations where faster relief is needed while waiting for SSRIs to work.</p>`,
  },

  // ─── FITNESS & PREVENTION ─────────────────────────────────────────────────
  {
    title: 'Strength Training After 40: Why It\'s More Important Than Ever',
    slug: 'strength-training-after-40-why-it-matters',
    excerpt: 'After 40, we lose 3–8% of muscle mass per decade — and the losses accelerate with age. But resistance training can reverse sarcopenia, protect joints, strengthen bones, and slash metabolic disease risk at any age.',
    category: catMap['fitness-prevention'],
    keywords: ['strength training after 40', 'muscle loss aging', 'sarcopenia', 'resistance training benefits', 'weightlifting older adults', 'bone density exercise', 'metabolic health strength training'],
    metaDescription: 'Why strength training is essential after 40: reversing sarcopenia, improving bone density, metabolic health, and how to start safely.',
    readTime: 8,
    sources: [
      'Fragala MS et al. Resistance Training for Older Adults: Position Statement From the National Strength and Conditioning Association. J Strength Cond Res. 2019;33(8):2019–2052.',
      'Cruz-Jentoft AJ et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16–31.',
      'Liu CJ, Latham NK. Progressive resistance strength training for improving physical function in older adults. Cochrane Database Syst Rev. 2009;(3):CD002759.',
    ],
    content: `<h2>The Problem: Muscle Loss Accelerates After 40</h2>
<p>Sarcopenia — the age-related loss of muscle mass and strength — begins as early as your 30s but accelerates meaningfully from 40 onward. On average, adults lose 3–8% of muscle mass per decade after 30, a rate that doubles after 60. By 80, the average person has lost 30–40% of their peak muscle mass. This loss is not inevitable, and it has profound consequences for metabolic health, mobility, independence, and longevity.</p>

<h2>Why Muscle Mass Matters More Than You Think</h2>
<ul>
  <li><strong>Metabolic engine</strong> — skeletal muscle is the primary tissue responsible for glucose disposal. Loss of muscle mass directly worsens insulin resistance and increases type 2 diabetes risk</li>
  <li><strong>Bone protection</strong> — mechanical loading from resistance training stimulates bone remodelling and increases bone mineral density, reducing fracture risk</li>
  <li><strong>Joint protection</strong> — stronger surrounding muscles reduce compressive forces on joints, improving osteoarthritis symptoms</li>
  <li><strong>Mortality predictor</strong> — handgrip strength and lean muscle mass are among the strongest predictors of all-cause mortality — better than BMI</li>
  <li><strong>Functional independence</strong> — maintaining the strength to rise from a chair, carry groceries, and prevent falls determines quality of life in later decades</li>
</ul>

<h2>The Evidence for Resistance Training</h2>
<p>Progressive resistance training (PRT) is the most effective intervention to counter sarcopenia. A Cochrane review of 121 trials found PRT significantly improved muscle strength, walking speed, stair-climbing ability, and overall functional capacity in older adults. Even adults in their 70s, 80s, and 90s can increase muscle mass and strength with regular resistance training — the adaptation capacity doesn't disappear with age, though it slows.</p>

<h2>How to Start After 40</h2>
<h3>Frequency</h3>
<p>2–3 sessions per week targeting all major muscle groups (chest, back, shoulders, arms, core, legs) is sufficient for meaningful gains. Allow 48 hours of recovery between sessions for the same muscle group.</p>

<h3>Progressive Overload</h3>
<p>The key principle: consistently challenge your muscles with slightly more stress over time — more weight, more repetitions, or less rest. Without progressive overload, adaptation stalls. Use a weight that makes the last 2–3 reps of each set genuinely challenging.</p>

<h3>Exercise Selection</h3>
<p>Compound movements that work multiple joints simultaneously — squats, deadlifts, rows, presses, lunges — provide the most metabolic and functional benefit per unit of time. Machines are useful for beginners because they provide stability and reduce injury risk. Free weights develop stabilising muscles and more closely mimic real-world movement.</p>

<h3>Protein Intake</h3>
<p>After 40, anabolic signalling from protein becomes less efficient — a phenomenon called anabolic resistance. To offset this, protein intake should be 1.6–2.2 g per kilogram of body weight per day, with at least 0.4 g/kg per meal. Timing matters: consuming 20–40 g of high-quality protein (containing leucine, a key trigger for muscle protein synthesis) within 1–2 hours after training optimises recovery.</p>

<h2>Getting Started Safely</h2>
<p>If you're new to resistance training after 40, start with bodyweight or light resistance to master movement patterns before loading. Prioritise form over weight — poor technique under heavy load causes injury. A few sessions with a certified personal trainer can dramatically shorten the learning curve. Most people are ready to add meaningful load within 4–6 weeks of consistent training.</p>`,
  },
];

module.exports = { moreArticles };
