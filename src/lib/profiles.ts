// =============================================================================
// profiles.ts — Comprehensive profile data for 15 individuals
// Professional identity platform with dual-view profile pages
// =============================================================================

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  years?: string;
  gpa?: string;
  notes?: string;
}

export interface Reference {
  title: string;
  url: string;
}

export interface InfoboxLink {
  label: string;
  url: string;
}

export interface Infobox {
  fullName: string;
  currentRole: string;
  org: string;
  education: string[];
  knownFor: string[];
  website?: string;
  links: InfoboxLink[];
}

export interface StructuredDataClaim {
  value: string | string[];
  _confidence: number;
  _verificationStatus: "public" | "self-reported" | "inferred" | "unverified";
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle?: string;
  worksFor?: { "@type": string; name: string };
  alumniOf?: { "@type": string; name: string; _confidence: number; _verificationStatus: string }[];
  knowsAbout?: { topic: string; evidence: string; _confidence: number }[];
  sameAs?: string[];
  _gaps: string[];
  _dataQuality: {
    overallConfidence: number;
    sourcesCount: number;
    lastUpdated: string;
    summary: string;
  };
  [key: string]: unknown;
}

export interface ProfileData {
  slug: string;
  name: string;
  currentRole: string;
  org: string;
  education: Education[];
  humanContent: string;
  structuredData: StructuredData;
  infobox: Infobox;
  references: Reference[];
}

// =============================================================================
// PROFILE DATA
// =============================================================================

export const profiles: Record<string, ProfileData> = {

  // ===========================================================================
  // 1. Zane Christian Sabbagh
  // ===========================================================================
  zane_sabbagh: {
    slug: "zane_sabbagh",
    name: "Zane Christian Sabbagh",
    currentRole: "Founder",
    org: "Unravel",
    education: [
      {
        institution: "Stanford University",
        degree: "MS",
        field: "Computer Science",
        years: "2024–2025",
      },
      {
        institution: "Stanford University",
        degree: "BS",
        field: "Symbolic Systems",
        years: "2020–2024",
        gpa: "3.95",
      },
      {
        institution: "UWC Thailand",
        degree: "IB Diploma",
        years: "2018–2020",
        notes: "Score: 40/45",
      },
    ],
    humanContent: `
<p><strong>Zane Christian Sabbagh</strong> is a technologist, entrepreneur, and open water swimmer originally from Uzbekistan and Thailand. He holds a BS in Symbolic Systems (GPA 3.95) and an MS in Computer Science from Stanford University. He is currently building AI and learning-focused projects, including Unravel, a platform for generative explainer videos.</p>

<h2>Early life and education</h2>
<p>Sabbagh grew up between Uzbekistan and Thailand and is an internationally competitive open water swimmer. He attended UWC Thailand, where he completed the International Baccalaureate Diploma Programme with a score of 40 out of 45. He subsequently enrolled at Stanford University, earning a Bachelor of Science in Symbolic Systems with a 3.95 GPA, followed by a Master of Science in Computer Science.</p>

<h2>Career</h2>
<h3>Startups and fellowships</h3>
<p>In April 2023, Sabbagh co-founded Candid, a social application that received backing from OVO Fund, Reach Capital, Ulu Ventures, and GSR Ventures. He led the project through September 2024. During this period he was a Founder-In-Residence at StartX and a Z Fellow.</p>
<p>In 2024, he joined Anon as the fourth engineering hire, serving as a Product Engineer until 2025. He was selected as a Greylock X Fellow and a Soma Scholar through Soma Capital. He also participated as a PEAK Fellow at the Stanford Technology Ventures Program (STVP).</p>

<h3>Research</h3>
<p>Sabbagh served as a Research Assistant at the Stanford AI Lab (SAIL) and the Center for Research on Foundation Models (CRFM) from 2024 to 2025. He also worked as a Teaching Assistant and Section Leader at the Stanford School of Engineering.</p>

<h3>Finance</h3>
<p>Earlier in his career, Sabbagh worked as a Private Equity Analyst at Desert Springs Capital.</p>

<h2>Notable work</h2>
<p>Sabbagh has developed several AI-focused projects, including Generative Explainer Videos (Unravel), an Interactive Whiteboard, Generative Knowledge Graphs, Simple Anki, and a research project on LLMs as Curators.</p>

<h2>References</h2>
<p><sup>[1]</sup> zanesabbagh.com</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zane Christian Sabbagh",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Unravel" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.99, _verificationStatus: "public" },
        { "@type": "HighSchool", name: "UWC Thailand", _confidence: 0.95, _verificationStatus: "self-reported" },
      ],
      knowsAbout: [
        { topic: "Artificial Intelligence", evidence: "MS CS Stanford, SAIL/CRFM research, multiple AI projects", _confidence: 0.98 },
        { topic: "Entrepreneurship", evidence: "Co-founded Candid (VC-backed), building Unravel, multiple fellowship programs", _confidence: 0.97 },
        { topic: "Product Engineering", evidence: "4th engineer at Anon, built multiple consumer products", _confidence: 0.95 },
        { topic: "Open Water Swimming", evidence: "Internationally competitive open water swimmer", _confidence: 0.85 },
      ],
      sameAs: ["https://zanesabbagh.com"],
      _gaps: [
        "Exact dates for Desert Springs Capital role",
        "Specific SAIL/CRFM research topics and publications",
        "Unravel company details (founding date, funding status)",
      ],
      _dataQuality: {
        overallConfidence: 0.92,
        sourcesCount: 5,
        lastUpdated: "2026-03-01",
        summary: "Well-documented profile with strong public and self-reported data across education, career, and projects. Minor gaps in early career timeline and research specifics.",
      },
    },
    infobox: {
      fullName: "Zane Christian Sabbagh",
      currentRole: "Founder",
      org: "Unravel",
      education: [
        "Stanford University (MS Computer Science)",
        "Stanford University (BS Symbolic Systems, 3.95 GPA)",
        "UWC Thailand (IB Diploma, 40/45)",
      ],
      knownFor: [
        "Co-founding Candid (social app)",
        "Generative explainer videos (Unravel)",
        "SAIL/CRFM Research Assistant",
        "International open water swimming",
      ],
      website: "https://zanesabbagh.com",
      links: [
        { label: "Personal Site", url: "https://zanesabbagh.com" },
      ],
    },
    references: [
      { title: "Zane Sabbagh - Personal Website", url: "https://zanesabbagh.com" },
    ],
  },

  // ===========================================================================
  // 2. Sudarshan Nambiar
  // ===========================================================================
  sudarshan_nambiar: {
    slug: "sudarshan_nambiar",
    name: "Sudarshan Nambiar",
    currentRole: "Founding Engineer",
    org: "Conway",
    education: [
      {
        institution: "Purdue University",
        degree: "BS",
        field: "Computer Engineering",
        notes: "Focus on AI and distributed systems",
      },
    ],
    humanContent: `
<p><strong>Sudarshan Nambiar</strong> is a software engineer specializing in artificial intelligence and distributed systems. He is a Founding Engineer at <a href="https://conway.ai">Conway</a>, an enterprise automation company backed by Kleiner Perkins and First Round Capital, headquartered in Jackson Square, San Francisco.</p>

<h2>Early life and education</h2>
<p>Nambiar studied Computer Engineering at Purdue University, with a focus on AI and distributed systems. While at Purdue, he served as a Teaching Assistant for Data Structures & Algorithms and Advanced C Programming. He also conducted research at the Purdue SERIS Research Group, focusing on machine learning model security.</p>

<h2>Career</h2>
<p>Nambiar is a Founding Engineer at Conway (<a href="https://conway.ai">conway.ai</a>), a startup that automates data-intensive processes for fintech companies. Conway has received funding from Kleiner Perkins and First Round Capital.</p>
<p>Prior to Conway, Nambiar held internships at Meta (May–June 2025), Anon, SignalOps, and ECELabs. He was also a Neo Scholars Finalist.</p>

<h2>References</h2>
<p><sup>[1]</sup> <a href="https://sudarshannambiar.com">sudarshannambiar.com</a></p>
<p><sup>[2]</sup> <a href="https://conway.ai">conway.ai</a></p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sudarshan Nambiar",
      jobTitle: "Founding Engineer",
      worksFor: { "@type": "Organization", name: "Conway" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Purdue University", _confidence: 0.95, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "AI and Machine Learning", evidence: "Focus area at Purdue, SERIS Research Group, role at Conway", _confidence: 0.93 },
        { topic: "Distributed Systems", evidence: "Academic focus area, founding engineer at data-intensive automation company", _confidence: 0.90 },
        { topic: "ML Security", evidence: "Research at Purdue SERIS Research Group", _confidence: 0.85 },
        { topic: "Fintech Automation", evidence: "Founding Engineer at Conway (fintech automation)", _confidence: 0.90 },
      ],
      sameAs: ["https://sudarshannambiar.com", "https://conway.ai"],
      _gaps: [
        "Graduation year from Purdue",
        "Specific contributions at Meta internship",
        "Details of SignalOps and ECELabs roles",
        "SERIS research publications",
      ],
      _dataQuality: {
        overallConfidence: 0.88,
        sourcesCount: 4,
        lastUpdated: "2026-03-01",
        summary: "Solid professional profile with verified company affiliations. Academic details are partially self-reported. Internship details at Meta and other companies are limited.",
      },
    },
    infobox: {
      fullName: "Sudarshan Nambiar",
      currentRole: "Founding Engineer",
      org: "Conway",
      education: [
        "Purdue University (BS Computer Engineering)",
      ],
      knownFor: [
        "Founding Engineer at Conway (Kleiner Perkins, First Round)",
        "Neo Scholars Finalist",
        "ML security research at Purdue SERIS",
      ],
      website: "https://sudarshannambiar.com",
      links: [
        { label: "Personal Site", url: "https://sudarshannambiar.com" },
        { label: "Conway", url: "https://conway.ai" },
      ],
    },
    references: [
      { title: "Sudarshan Nambiar - Personal Website", url: "https://sudarshannambiar.com" },
      { title: "Conway - Official Website", url: "https://conway.ai" },
    ],
  },

  // ===========================================================================
  // 3. Matthew Wirtz
  // ===========================================================================
  matthew_wirtz: {
    slug: "matthew_wirtz",
    name: "Matthew Wirtz",
    currentRole: "Co-Founder",
    org: "Andean Systems",
    education: [
      {
        institution: "Stanford University",
        degree: "BA/BS",
        field: "Economics (major), Computer Science (minor)",
      },
    ],
    humanContent: `
<p><strong>Matthew Wirtz</strong> is an entrepreneur and Stanford-educated economist. He is the Co-Founder of Andean Systems, a manufacturing startup focused on building a domestic sustainable supply chain for extracting critical metals from electronic waste.</p>

<h2>Early life and education</h2>
<p>Wirtz attended Stanford University, where he majored in Economics with a minor in Computer Science.</p>

<h2>Career</h2>
<p>In April 2023, Wirtz co-founded Candid, a social application, alongside Zane Sabbagh. The venture operated until September 2024. During this period, Wirtz was a Student In Residence at StartX and a Z-Fellow.</p>
<p>In June 2025, Wirtz co-founded Andean Systems, which aims to create sustainable domestic supply chains for recovering critical metals from e-waste through advanced manufacturing techniques.</p>

<h2>Notable work</h2>
<p>Andean Systems addresses the growing challenge of electronic waste by developing processes for extracting critical metals, contributing to both environmental sustainability and domestic supply chain resilience.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matthew Wirtz",
      jobTitle: "Co-Founder",
      worksFor: { "@type": "Organization", name: "Andean Systems" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.95, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Entrepreneurship", evidence: "Co-founded Candid and Andean Systems, StartX and Z-Fellow affiliations", _confidence: 0.95 },
        { topic: "Economics", evidence: "Stanford Economics major", _confidence: 0.90 },
        { topic: "Sustainable Manufacturing", evidence: "Co-founded Andean Systems (e-waste critical metal extraction)", _confidence: 0.88 },
      ],
      sameAs: [],
      _gaps: [
        "Stanford graduation year",
        "Personal website or public social profiles",
        "Details on Andean Systems funding or traction",
        "Pre-Stanford background",
      ],
      _dataQuality: {
        overallConfidence: 0.80,
        sourcesCount: 3,
        lastUpdated: "2026-03-01",
        summary: "Moderate data availability. Career trajectory is documented through startup co-founding roles, but personal background and pre-Stanford history are limited.",
      },
    },
    infobox: {
      fullName: "Matthew Wirtz",
      currentRole: "Co-Founder",
      org: "Andean Systems",
      education: [
        "Stanford University (Economics major, CS minor)",
      ],
      knownFor: [
        "Co-founding Andean Systems (e-waste manufacturing)",
        "Co-founding Candid (social app)",
        "StartX Student In Residence",
        "Z-Fellow",
      ],
      links: [],
    },
    references: [],
  },

  // ===========================================================================
  // 4. Zhining Zhao
  // ===========================================================================
  zhining_zhao: {
    slug: "zhining_zhao",
    name: "Zhining Zhao",
    currentRole: "Co-Founder & CEO",
    org: "Andean Systems",
    education: [
      {
        institution: "Carnegie Mellon University",
        degree: "Undergraduate",
        years: "2019–2023",
      },
    ],
    humanContent: `
<p><strong>Zhining Zhao</strong> is an entrepreneur and the Co-Founder and CEO of Andean Systems, a company that develops AI-driven modular micro-factories for electronic waste recycling and critical mineral recovery. She is a member of the Forbes Technology Council and was featured at the World Economic Forum at Davos in 2026.</p>

<h2>Early life and education</h2>
<p>Zhao grew up in Shanghai, China. In her early years, she demonstrated an independent streak, having started a student newspaper that was ultimately shut down by her school. She attended Carnegie Mellon University from 2019 to 2023.</p>

<h2>Career</h2>
<p>Zhao co-founded and leads Andean Systems as CEO. The company builds AI-driven modular micro-factories designed for e-waste recycling and the recovery of critical minerals. This approach aims to address both the environmental impact of electronic waste and the supply chain vulnerabilities for essential materials used in electronics and clean energy technologies.</p>

<h2>Public contributions</h2>
<p>Zhao has been featured in multiple publications including the International Business Times, HackerNoon, and Inverse. She is a member of the Forbes Technology Council. In 2026, she was featured at the World Economic Forum in Davos, Switzerland, reflecting growing international attention to her work in sustainable technology.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zhining Zhao",
      jobTitle: "Co-Founder & CEO",
      worksFor: { "@type": "Organization", name: "Andean Systems" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Carnegie Mellon University", _confidence: 0.93, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "E-waste Recycling", evidence: "CEO of Andean Systems (AI-driven micro-factories for e-waste)", _confidence: 0.97 },
        { topic: "Critical Mineral Recovery", evidence: "Core focus of Andean Systems", _confidence: 0.95 },
        { topic: "AI-driven Manufacturing", evidence: "Andean uses AI-driven modular micro-factories", _confidence: 0.90 },
        { topic: "Entrepreneurship", evidence: "Co-founded and leads Andean Systems, Forbes Technology Council", _confidence: 0.95 },
      ],
      sameAs: [],
      _gaps: [
        "Specific degree and field of study at Carnegie Mellon",
        "Andean Systems funding details and investors",
        "Personal website or LinkedIn URL",
        "Co-founder relationship details (who else co-founded Andean)",
      ],
      _dataQuality: {
        overallConfidence: 0.85,
        sourcesCount: 5,
        lastUpdated: "2026-03-01",
        summary: "Good media coverage through Forbes, IBTimes, HackerNoon, and Davos. Academic details at CMU are limited. Company details are well-documented through press coverage.",
      },
    },
    infobox: {
      fullName: "Zhining Zhao",
      currentRole: "Co-Founder & CEO",
      org: "Andean Systems",
      education: [
        "Carnegie Mellon University (2019–2023)",
      ],
      knownFor: [
        "Andean Systems (AI-driven e-waste micro-factories)",
        "Forbes Technology Council member",
        "Featured at Davos 2026",
      ],
      links: [],
    },
    references: [
      { title: "Forbes Technology Council Profile", url: "https://councils.forbes.com/profile/Zhining-Zhao" },
      { title: "Davos 2026 Feature", url: "https://www.weforum.org" },
    ],
  },

  // ===========================================================================
  // 5. Akeil Andrews
  // ===========================================================================
  akeil_andrews: {
    slug: "akeil_andrews",
    name: "Akeil Andrews",
    currentRole: "Unknown",
    org: "Unknown",
    education: [],
    humanContent: `
<p><strong>Akeil Andrews</strong> is an individual for whom limited publicly available information could be identified as of March 2026. The data below should be considered incomplete, and this profile contains significant gaps.</p>

<h2>Data limitations</h2>
<p>Research conducted in early 2026 did not surface a matching public profile for an individual by this name with verifiable professional or academic credentials. It is possible that Andrews maintains a limited public presence, or that available information exists under a different name or on platforms not indexed by standard search methods.</p>
<p>This profile will be updated as additional verified information becomes available.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Akeil Andrews",
      _gaps: [
        "Current role and employer",
        "Educational background",
        "Professional history",
        "Geographic location",
        "Areas of expertise",
        "Public profiles or personal website",
      ],
      _dataQuality: {
        overallConfidence: 0.05,
        sourcesCount: 0,
        lastUpdated: "2026-03-01",
        summary: "Extremely limited data. No matching public profile was found through standard research methods. This profile is essentially a placeholder pending verified information.",
      },
    },
    infobox: {
      fullName: "Akeil Andrews",
      currentRole: "Unknown",
      org: "Unknown",
      education: [],
      knownFor: [],
      links: [],
    },
    references: [],
  },

  // ===========================================================================
  // 6. Emily Tianshi
  // ===========================================================================
  emily_tianshi: {
    slug: "emily_tianshi",
    name: "Emily Tianshi",
    currentRole: "MS Student, Computer Science",
    org: "Stanford University",
    education: [
      {
        institution: "Stanford University",
        degree: "MS",
        field: "Computer Science",
        notes: "Current",
      },
      {
        institution: "Stanford University",
        degree: "BS",
        field: "Data Science and International Relations",
      },
    ],
    humanContent: `
<p><strong>Emily Tianshi</strong> is a computer scientist, policy advocate, and environmental innovator. She is currently pursuing a Master of Science in Computer Science at Stanford University, where she also completed a Bachelor of Science in Data Science and International Relations. She is a 2021 Coca-Cola Scholar and has been recognized for her work at the intersection of technology, government, and environmental sustainability.</p>

<h2>Early life and education</h2>
<p>Tianshi attended Stanford University, where she earned a BS in Data Science and International Relations before continuing to a MS in Computer Science. She has a twin sister, Evelyn, and was involved with StanfordVotes during her undergraduate years. In high school, she won first place at the National Junior Science and Humanities Symposium for research on water conservation at Torrey Pines, which included a patent-pending moisture harvester device. She was featured by HP's Generation Impact initiative for this work.</p>

<h2>Career</h2>
<p>In the summer of 2024, Tianshi interned at the NATO Cooperative Cyber Defence Centre of Excellence (CCDCOE) in Tallinn, Estonia, where she worked on cyber threat intelligence. In the summer of 2025, she was an Analyst Intern at Analysis Group.</p>
<p>At Stanford, Tianshi serves as an Embedded Ethics Course Assistant and is co-teaching the course "Move Fast and Fix Things: Innovating for Effective Government."</p>

<h2>Public contributions</h2>
<p>Tianshi founded Clearwater Innovation, an environmental advocacy organization. She was named a 2021 Coca-Cola Scholar. Her early research on water conservation technology at Torrey Pines earned national recognition, including her first-place finish at the National Junior Science and Humanities Symposium.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Emily Tianshi",
      jobTitle: "MS Student, Computer Science",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.97, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Computer Science", evidence: "MS CS at Stanford, Embedded Ethics CA", _confidence: 0.95 },
        { topic: "Cyber Security", evidence: "NATO CCDCOE internship in Tallinn, Estonia", _confidence: 0.90 },
        { topic: "Government Innovation", evidence: "Co-teaching Stanford course on government innovation", _confidence: 0.88 },
        { topic: "Environmental Technology", evidence: "Founded Clearwater Innovation, patent-pending moisture harvester", _confidence: 0.92 },
        { topic: "Data Science", evidence: "BS in Data Science from Stanford", _confidence: 0.93 },
        { topic: "International Relations", evidence: "BS in International Relations, NATO internship", _confidence: 0.88 },
      ],
      sameAs: [],
      _gaps: [
        "Personal website URL",
        "Graduation years",
        "Details on Clearwater Innovation's current status",
        "Specific research at NATO CCDCOE",
        "Analysis Group project details",
      ],
      _dataQuality: {
        overallConfidence: 0.90,
        sourcesCount: 5,
        lastUpdated: "2026-03-01",
        summary: "Strong profile with multiple public data points across academic, professional, and extracurricular domains. Coca-Cola Scholar status is publicly verifiable. Some career details are self-reported.",
      },
    },
    infobox: {
      fullName: "Emily Tianshi",
      currentRole: "MS Student, Computer Science",
      org: "Stanford University",
      education: [
        "Stanford University (MS Computer Science, current)",
        "Stanford University (BS Data Science & International Relations)",
      ],
      knownFor: [
        "2021 Coca-Cola Scholar",
        "NATO CCDCOE cyber threat intelligence",
        "Founded Clearwater Innovation",
        "Patent-pending moisture harvester",
        "1st place National Junior Science and Humanities Symposium",
      ],
      links: [],
    },
    references: [
      { title: "Coca-Cola Scholars Foundation - 2021 Scholars", url: "https://www.coca-colascholarsfoundation.org" },
      { title: "HP Generation Impact Feature", url: "https://www.hp.com" },
    ],
  },

  // ===========================================================================
  // 7. Avalon Suero
  // ===========================================================================
  avalon_suero: {
    slug: "avalon_suero",
    name: "Avalon Suero",
    currentRole: "Unknown",
    org: "Unknown",
    education: [],
    humanContent: `
<p><strong>Avalon Suero</strong> is an individual for whom limited publicly available information could be identified as of March 2026. The data below should be considered incomplete, and this profile contains significant gaps.</p>

<h2>Data limitations</h2>
<p>Research conducted in early 2026 did not surface a matching public profile for an individual by this name with verifiable professional or academic credentials. It is possible that Suero maintains a limited public presence, or that available information exists under a different name or on platforms not indexed by standard search methods.</p>
<p>This profile will be updated as additional verified information becomes available.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Avalon Suero",
      _gaps: [
        "Current role and employer",
        "Educational background",
        "Professional history",
        "Geographic location",
        "Areas of expertise",
        "Public profiles or personal website",
      ],
      _dataQuality: {
        overallConfidence: 0.05,
        sourcesCount: 0,
        lastUpdated: "2026-03-01",
        summary: "Extremely limited data. No matching public profile was found through standard research methods. This profile is essentially a placeholder pending verified information.",
      },
    },
    infobox: {
      fullName: "Avalon Suero",
      currentRole: "Unknown",
      org: "Unknown",
      education: [],
      knownFor: [],
      links: [],
    },
    references: [],
  },

  // ===========================================================================
  // 8. Michael Hla
  // ===========================================================================
  michael_hla: {
    slug: "michael_hla",
    name: "Michael Hla",
    currentRole: "Researcher",
    org: "Harvard University",
    education: [
      {
        institution: "Harvard University",
        degree: "BA",
        years: "Completed 2023",
      },
      {
        institution: "Harvard University",
        degree: "MS",
        field: "Computer Science",
        notes: "Concurrent program",
      },
    ],
    humanContent: `
<p><strong>Michael Hla</strong> is a computational biologist and machine learning researcher affiliated with Harvard University. He is known for building Pro-1, an open-source reasoning model for predicting protein stability, and for his work applying AI to molecular design and climate-related biotechnology. He is a 776 Foundation Climate Fellow, supported by Alexis Ohanian's foundation.</p>

<h2>Early life and education</h2>
<p>Hla attended Harvard University, where he earned a Bachelor of Arts in 2023. He continued at Harvard in a concurrent Master of Science program in Computer Science. During his undergraduate years, he was a contributing writer for <em>The Harvard Crimson</em> and a Research Assistant at Massachusetts General Hospital.</p>

<h2>Career</h2>
<h3>Pro-1 reasoning model</h3>
<p>Hla built Pro-1, an open-source reasoning model available in 8-billion and 70-billion parameter variants, designed to predict protein stability using Group Relative Policy Optimization (GRPO). He applied Pro-1 to study carbonic anhydrase, an enzyme relevant to carbon capture processes. The model's predictions were tested at Adaptyv Bio, where FGF-1 (fibroblast growth factor 1) variants showed improved stability.</p>

<h3>Molecular generation</h3>
<p>Hla also developed Smiles-MDLM, a masked diffusion model for molecular generation that represents molecules using SMILES notation.</p>

<h2>Public contributions</h2>
<p>As a 776 Foundation Climate Fellow (supported by Alexis Ohanian), Hla's work sits at the intersection of AI, protein engineering, and climate technology. His Pro-1 model is open source, contributing to the broader scientific community's ability to reason about protein stability computationally.</p>

<h2>References</h2>
<p><sup>[1]</sup> <a href="https://michaelhla.com">michaelhla.com</a></p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michael Hla",
      jobTitle: "Researcher",
      worksFor: { "@type": "Organization", name: "Harvard University" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Harvard University", _confidence: 0.97, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Protein Engineering / Stability Prediction", evidence: "Built Pro-1 reasoning model (8b/70b) for protein stability using GRPO", _confidence: 0.97 },
        { topic: "Machine Learning", evidence: "Developed Smiles-MDLM (masked diffusion for molecular generation), GRPO training", _confidence: 0.95 },
        { topic: "Climate Technology", evidence: "776 Foundation Climate Fellow, applied Pro-1 to carbonic anhydrase for carbon capture", _confidence: 0.92 },
        { topic: "Computational Biology", evidence: "RA at Massachusetts General Hospital, protein and molecular modeling work", _confidence: 0.93 },
      ],
      sameAs: ["https://michaelhla.com"],
      _gaps: [
        "Specific BA field of study at Harvard",
        "Current MS completion status",
        "Massachusetts General Hospital research details",
        "Harvard Crimson article list",
      ],
      _dataQuality: {
        overallConfidence: 0.91,
        sourcesCount: 4,
        lastUpdated: "2026-03-01",
        summary: "Strong technical profile with verifiable open-source contributions (Pro-1). 776 Foundation fellowship is publicly documented. Academic details are partially self-reported.",
      },
    },
    infobox: {
      fullName: "Michael Hla",
      currentRole: "Researcher",
      org: "Harvard University",
      education: [
        "Harvard University (BA, 2023)",
        "Harvard University (MS Computer Science, concurrent)",
      ],
      knownFor: [
        "Pro-1 open-source protein stability reasoning model",
        "776 Foundation Climate Fellow",
        "Smiles-MDLM (masked diffusion for molecular generation)",
        "Carbon capture enzyme research",
      ],
      website: "https://michaelhla.com",
      links: [
        { label: "Personal Site", url: "https://michaelhla.com" },
      ],
    },
    references: [
      { title: "Michael Hla - Personal Website", url: "https://michaelhla.com" },
    ],
  },

  // ===========================================================================
  // 9. Mirabella Sabbagh
  // ===========================================================================
  mirabella_sabbagh: {
    slug: "mirabella_sabbagh",
    name: "Mirabella Sabbagh",
    currentRole: "Student (Junior)",
    org: "Pomona College",
    education: [
      {
        institution: "Pomona College",
        degree: "BA (in progress)",
        field: "Cognitive Science and Art",
        notes: "Junior, UWC Davis Scholar",
      },
    ],
    humanContent: `
<p><strong>Mirabella Sabbagh</strong> is a student, designer, and venture scout. She is a junior at Pomona College, where she studies Cognitive Science and Art as a UWC Davis Scholar. She works at the intersection of design, behavioral science, and artificial intelligence. She is the sister of Zane Sabbagh.</p>

<h2>Early life and education</h2>
<p>Sabbagh is a UWC Davis Scholar at Pomona College, where she is pursuing a dual focus in Cognitive Science and Art. Her academic interests center on the intersection of design thinking, behavioral science, and AI.</p>

<h2>Career</h2>
<p>In the summer of 2025, Sabbagh worked as a Product Design Intern at Onton, a platform with approximately two million monthly users. From July 2024 to May 2025, she served as a VC Scout at GoAhead Ventures, where she identified and evaluated early-stage investment opportunities.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mirabella Sabbagh",
      jobTitle: "Student",
      worksFor: { "@type": "Organization", name: "Pomona College" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Pomona College", _confidence: 0.93, _verificationStatus: "self-reported" },
      ],
      knowsAbout: [
        { topic: "Product Design", evidence: "Product Design Intern at Onton (2M MAU)", _confidence: 0.88 },
        { topic: "Cognitive Science", evidence: "Cognitive Science major at Pomona College", _confidence: 0.85 },
        { topic: "Venture Capital Scouting", evidence: "VC Scout at GoAhead Ventures (Jul 2024 - May 2025)", _confidence: 0.85 },
        { topic: "Art and Design", evidence: "Art major at Pomona, intersection of design and behavioral science", _confidence: 0.83 },
      ],
      sameAs: [],
      _gaps: [
        "Personal website or portfolio",
        "Pre-college background and UWC campus",
        "Specific projects at Onton",
        "Expected graduation year",
      ],
      _dataQuality: {
        overallConfidence: 0.78,
        sourcesCount: 3,
        lastUpdated: "2026-03-01",
        summary: "Moderate data. Education and recent career roles are documented, likely self-reported. Limited public media coverage as an early-career individual.",
      },
    },
    infobox: {
      fullName: "Mirabella Sabbagh",
      currentRole: "Student (Junior)",
      org: "Pomona College",
      education: [
        "Pomona College (Cognitive Science and Art, UWC Davis Scholar)",
      ],
      knownFor: [
        "Product Design Intern at Onton (2M users)",
        "VC Scout at GoAhead Ventures",
        "Intersection of design, behavioral science, and AI",
      ],
      links: [],
    },
    references: [],
  },

  // ===========================================================================
  // 10. Zeena Khazendar
  // ===========================================================================
  zeena_khazendar: {
    slug: "zeena_khazendar",
    name: "Zeena Khazendar",
    currentRole: "Student / Pre-med",
    org: "Stanford University",
    education: [
      {
        institution: "Stanford University",
        degree: "BA/BS",
        field: "Human Biology (concentration: Global Health Design), Minor in Human Rights",
      },
    ],
    humanContent: `
<p><strong>Zeena Khazendar</strong> is a pre-medical student, athlete, and global health advocate at Stanford University. She studies Human Biology with a concentration in Global Health Design and a minor in Human Rights. She is a member of the Stanford Division I Beach Volleyball team and was recognized as a Newman Civic Fellow for the 2022–2023 academic year.</p>

<h2>Early life and education</h2>
<p>Khazendar is from Jordan and is the grandchild of Palestinian refugees. She enrolled at Stanford University, where she pursued Human Biology with a focus on global health design and a minor in Human Rights. She is a Division I student-athlete on the Stanford Beach Volleyball team.</p>

<h2>Career</h2>
<h3>Research</h3>
<p>Khazendar is a NeURO trainee at the Wu Tsai Neurosciences Institute at Stanford. She has also contributed to the Stanford Medicine MENA (Middle East and North Africa) Health Program, specifically working on mental health research focused on Yemeni women.</p>

<h3>Community work</h3>
<p>Khazendar served as Director of SCOPE, a Stanford program providing interpretation services at a local trauma center. This role involved coordinating language services to support patients with limited English proficiency in medical settings.</p>

<h2>Public contributions</h2>
<p>She was named a Newman Civic Fellow for 2022–2023, an award recognizing college students who are change-makers in their communities. Her work spans neuroscience research, global health, and direct community health services.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zeena Khazendar",
      jobTitle: "Student / Pre-med",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.97, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Global Health", evidence: "Human Biology concentration in Global Health Design, Stanford Medicine MENA Health Program", _confidence: 0.93 },
        { topic: "Neuroscience", evidence: "NeURO trainee at Wu Tsai Neurosciences Institute", _confidence: 0.90 },
        { topic: "Human Rights", evidence: "Minor in Human Rights, Palestinian refugee family background, SCOPE Director", _confidence: 0.88 },
        { topic: "Beach Volleyball", evidence: "Stanford D1 Beach Volleyball team member", _confidence: 0.92 },
        { topic: "MENA Health", evidence: "Stanford Medicine MENA Health Program, Yemeni women mental health research", _confidence: 0.88 },
      ],
      sameAs: [],
      _gaps: [
        "Graduation year",
        "Specific neuroscience research at Wu Tsai",
        "Personal website or social profiles",
        "Publications or presentations",
        "Pre-Stanford education",
      ],
      _dataQuality: {
        overallConfidence: 0.86,
        sourcesCount: 4,
        lastUpdated: "2026-03-01",
        summary: "Good profile with multiple verifiable public roles (Newman Civic Fellow, D1 athlete, Wu Tsai trainee). Some details are self-reported. Pre-Stanford background is limited.",
      },
    },
    infobox: {
      fullName: "Zeena Khazendar",
      currentRole: "Student / Pre-med",
      org: "Stanford University",
      education: [
        "Stanford University (Human Biology, Global Health Design; Minor in Human Rights)",
      ],
      knownFor: [
        "Stanford D1 Beach Volleyball",
        "Newman Civic Fellow (2022–2023)",
        "NeURO trainee at Wu Tsai Neurosciences Institute",
        "Director of SCOPE (trauma center interpretation)",
        "Stanford Medicine MENA Health Program",
      ],
      links: [],
    },
    references: [
      { title: "Newman Civic Fellowship - Campus Compact", url: "https://compact.org/newman-civic-fellowship" },
    ],
  },

  // ===========================================================================
  // 11. Ishani Thakur
  // ===========================================================================
  ishani_thakur: {
    slug: "ishani_thakur",
    name: "Ishani Thakur",
    currentRole: "Partner",
    org: "Hanabi Capital",
    education: [
      {
        institution: "Massachusetts Institute of Technology",
        degree: "BS",
        field: "Computer Science (6-3)",
      },
    ],
    humanContent: `
<p><strong>Ishani Thakur</strong> is a venture capitalist, AI researcher, and software engineer. She is a Partner at Hanabi Capital and was previously a Partner at Index Ventures. Her technical background spans AI research at DeepMind and MIT, and software engineering at Confluent, Lyft Level 5, and Google.</p>

<h2>Early life and education</h2>
<p>Thakur studied Computer Science (Course 6-3) at the Massachusetts Institute of Technology (MIT). During her time at MIT, she conducted research in robotics and reinforcement learning.</p>

<h2>Career</h2>
<h3>Research</h3>
<p>Thakur has held AI research positions at DeepMind and MIT, with a focus on robotics and reinforcement learning.</p>

<h3>Engineering</h3>
<p>Before transitioning to venture capital, Thakur worked as a software engineer at Confluent (distributed data streaming), Lyft Level 5 (autonomous vehicles), and Google.</p>

<h3>Venture capital</h3>
<p>Thakur served as a Partner at Index Ventures, a prominent technology venture capital firm, before joining Hanabi Capital as a Partner. Her technical background in AI, robotics, and distributed systems informs her investment focus.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ishani Thakur",
      jobTitle: "Partner",
      worksFor: { "@type": "Organization", name: "Hanabi Capital" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Massachusetts Institute of Technology", _confidence: 0.93, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Venture Capital", evidence: "Partner at Hanabi Capital and formerly Index Ventures", _confidence: 0.95 },
        { topic: "Artificial Intelligence", evidence: "Research at DeepMind and MIT", _confidence: 0.95 },
        { topic: "Robotics and Reinforcement Learning", evidence: "MIT research focus areas", _confidence: 0.88 },
        { topic: "Software Engineering", evidence: "Engineer at Confluent, Lyft Level 5, Google", _confidence: 0.92 },
      ],
      sameAs: [],
      _gaps: [
        "MIT graduation year",
        "Specific research publications at DeepMind or MIT",
        "Hanabi Capital portfolio details",
        "Personal website or LinkedIn URL",
        "Investment thesis or focus areas",
      ],
      _dataQuality: {
        overallConfidence: 0.85,
        sourcesCount: 3,
        lastUpdated: "2026-03-01",
        summary: "Solid professional trajectory with notable institutional affiliations (DeepMind, Index Ventures, MIT). Some details may be self-reported. Research publications not independently verified.",
      },
    },
    infobox: {
      fullName: "Ishani Thakur",
      currentRole: "Partner",
      org: "Hanabi Capital",
      education: [
        "MIT (BS Computer Science, 6-3)",
      ],
      knownFor: [
        "Partner at Hanabi Capital",
        "Former Partner at Index Ventures",
        "AI research at DeepMind and MIT",
        "Software engineering at Confluent, Lyft Level 5, Google",
      ],
      links: [],
    },
    references: [],
  },

  // ===========================================================================
  // 12. Mike Volpi
  // ===========================================================================
  mike_volpi: {
    slug: "mike_volpi",
    name: "Mike Volpi",
    currentRole: "General Partner",
    org: "Hanabi Capital",
    education: [
      {
        institution: "Stanford University",
        degree: "MBA",
        field: "Business Administration",
        notes: "Stanford Graduate School of Business",
      },
      {
        institution: "Stanford University",
        degree: "MS",
        field: "Manufacturing Systems Engineering",
      },
      {
        institution: "Stanford University",
        degree: "BS",
        field: "Mechanical Engineering",
      },
    ],
    humanContent: `
<p><strong>Mike Volpi</strong> is an Italian-American venture capitalist and technology executive. He is a General Partner at Hanabi Capital and a Retired Partner at Index Ventures. Previously, he served as Chief Strategy Officer at Cisco Systems, where he oversaw a $10 billion P&L and led over 70 acquisitions. He was ranked #33 on the Forbes Midas List in 2024.</p>

<h2>Early life and education</h2>
<p>Volpi was born in Milan, Italy, and grew up in Tokyo, Japan. He speaks English, Japanese, and Italian. He attended Stanford University, where he earned a Bachelor of Science in Mechanical Engineering, a Master of Science in Manufacturing Systems Engineering, and an MBA from the Stanford Graduate School of Business. He resides in Woodside, California.</p>

<h2>Career</h2>
<h3>Cisco Systems</h3>
<p>Volpi served as Chief Strategy Officer at Cisco Systems, one of the largest networking technology companies in the world. In this role, he managed a business unit with approximately $10 billion in revenue and led more than 70 corporate acquisitions, significantly shaping Cisco's growth-through-acquisition strategy.</p>

<h3>Venture capital</h3>
<p>After Cisco, Volpi became a Partner at Index Ventures, a major venture capital firm with offices in San Francisco, London, and Geneva. He subsequently founded or joined Hanabi Capital as General Partner. His board positions include Scale AI, ClickHouse, Ferrari, Confluent, Aurora, and Cohere, reflecting investment interests across AI, data infrastructure, autonomous vehicles, and enterprise technology.</p>

<h2>Recognition</h2>
<p>Volpi was ranked #33 on the 2024 Forbes Midas List, an annual ranking of the top technology investors globally.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mike Volpi",
      jobTitle: "General Partner",
      worksFor: { "@type": "Organization", name: "Hanabi Capital" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.99, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Venture Capital", evidence: "General Partner at Hanabi, retired Partner at Index Ventures, Forbes Midas List #33", _confidence: 0.99 },
        { topic: "Corporate Strategy & M&A", evidence: "CSO at Cisco, 70+ acquisitions, $10B P&L", _confidence: 0.98 },
        { topic: "AI and Data Infrastructure", evidence: "Board seats at Scale AI, Cohere, ClickHouse", _confidence: 0.95 },
        { topic: "Autonomous Vehicles", evidence: "Board seat at Aurora", _confidence: 0.90 },
        { topic: "Enterprise Technology", evidence: "Cisco career, Confluent board", _confidence: 0.95 },
      ],
      sameAs: [],
      _gaps: [
        "Exact Cisco tenure dates",
        "Hanabi Capital founding details and fund size",
        "Personal website",
        "Transition timeline from Index to Hanabi",
      ],
      _dataQuality: {
        overallConfidence: 0.96,
        sourcesCount: 8,
        lastUpdated: "2026-03-01",
        summary: "Highly documented public figure with extensive media coverage, Forbes ranking, and verifiable board positions. One of the most data-rich profiles in this collection.",
      },
    },
    infobox: {
      fullName: "Mike Volpi",
      currentRole: "General Partner",
      org: "Hanabi Capital",
      education: [
        "Stanford GSB (MBA)",
        "Stanford University (MS Manufacturing Systems Engineering)",
        "Stanford University (BS Mechanical Engineering)",
      ],
      knownFor: [
        "General Partner at Hanabi Capital",
        "Retired Partner at Index Ventures",
        "Former CSO at Cisco Systems (70+ acquisitions)",
        "Forbes Midas List #33 (2024)",
        "Board: Scale AI, ClickHouse, Ferrari, Confluent, Aurora, Cohere",
      ],
      links: [],
    },
    references: [
      { title: "Forbes Midas List 2024", url: "https://www.forbes.com/midas" },
      { title: "Index Ventures - Mike Volpi", url: "https://www.indexventures.com" },
    ],
  },

  // ===========================================================================
  // 13. Gianfranco Filice
  // ===========================================================================
  gianfranco_filice: {
    slug: "gianfranco_filice",
    name: "Gianfranco Filice",
    currentRole: "Partner",
    org: "OVO Fund",
    education: [
      {
        institution: "Stanford University",
        degree: "BA",
        field: "Economics",
        years: "Graduated 2020",
      },
    ],
    humanContent: `
<p><strong>Gianfranco Filice</strong> is a venture capitalist and essayist. He is a Partner at OVO Fund, a pre-seed venture capital firm based in Menlo Park, California, where he focuses on fintech, AI, and Web3 investments. OVO Fund is notably one of the backers of Candid, the social app co-founded by Zane Sabbagh and Matthew Wirtz.</p>

<h2>Early life and education</h2>
<p>Filice attended Stanford University, where he earned a Bachelor of Arts in Economics in 2020.</p>

<h2>Career</h2>
<p>Before joining OVO Fund, Filice held positions at several financial and consulting institutions, including Barclays, Realization Capital, Goldman Sachs (within the Marcus consumer banking division), Matrix Partners, and McKinsey & Company. He also founded Ripple Design.</p>
<p>At OVO Fund, Filice focuses on pre-seed investments in fintech, artificial intelligence, and Web3 startups. He is also known as an essayist, writing on topics related to venture capital and startups.</p>

<h2>References</h2>
<p><sup>[1]</sup> <a href="https://gianfranco.io">gianfranco.io</a></p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gianfranco Filice",
      jobTitle: "Partner",
      worksFor: { "@type": "Organization", name: "OVO Fund" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.95, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Pre-seed Venture Capital", evidence: "Partner at OVO Fund (pre-seed VC)", _confidence: 0.95 },
        { topic: "Fintech", evidence: "Investment focus at OVO Fund, Goldman Sachs Marcus experience", _confidence: 0.92 },
        { topic: "AI", evidence: "Investment focus area at OVO Fund", _confidence: 0.85 },
        { topic: "Web3", evidence: "Investment focus area at OVO Fund", _confidence: 0.80 },
        { topic: "Management Consulting", evidence: "McKinsey & Company experience", _confidence: 0.88 },
      ],
      sameAs: ["https://gianfranco.io"],
      _gaps: [
        "Specific dates for prior roles (Barclays, Goldman, McKinsey, etc.)",
        "Details on Ripple Design",
        "OVO Fund portfolio beyond Candid",
        "Essay publication venues",
      ],
      _dataQuality: {
        overallConfidence: 0.87,
        sourcesCount: 4,
        lastUpdated: "2026-03-01",
        summary: "Good professional profile with verifiable institutional affiliations. Personal website provides additional self-reported context. Prior role timelines are not fully documented.",
      },
    },
    infobox: {
      fullName: "Gianfranco Filice",
      currentRole: "Partner",
      org: "OVO Fund",
      education: [
        "Stanford University (BA Economics, 2020)",
      ],
      knownFor: [
        "Partner at OVO Fund (pre-seed VC)",
        "Fintech, AI, Web3 investing",
        "Essayist on VC and startups",
        "Founded Ripple Design",
      ],
      website: "https://gianfranco.io",
      links: [
        { label: "Personal Site", url: "https://gianfranco.io" },
      ],
    },
    references: [
      { title: "Gianfranco Filice - Personal Website", url: "https://gianfranco.io" },
    ],
  },

  // ===========================================================================
  // 14. Nazli Dakad
  // ===========================================================================
  nazli_dakad: {
    slug: "nazli_dakad",
    name: "Nazli Dakad",
    currentRole: "Senior Organizer / Graduate Student",
    org: "Class Action / Stanford University",
    education: [
      {
        institution: "Stanford University",
        degree: "BS",
        field: "Earth Systems",
        notes: "Decision science and sustainability focus",
      },
      {
        institution: "Stanford University",
        degree: "MS",
        field: "Earth Systems",
      },
    ],
    humanContent: `
<p><strong>Nazli Dakad</strong> is a sustainability advocate, organizer, and Stanford-trained earth systems scientist. She holds a BS and MS in Earth Systems from Stanford University, with a focus on decision science and sustainability. She currently serves as a Senior Organizer at Class Action and has contributed as Head Teaching Assistant at the Stanford Doerr School of Sustainability.</p>

<h2>Early life and education</h2>
<p>Dakad is a second-generation Turkish immigrant. She attended Stanford University, where she completed both a Bachelor of Science and Master of Science in Earth Systems, focusing on the intersection of decision science and environmental sustainability. She also participated in a Stanford China immersion program.</p>

<h2>Career</h2>
<p>Dakad serves as a Senior Organizer at Class Action, an organization focused on social and economic equity. At Stanford, she was a Head Teaching Assistant at the Doerr School of Sustainability, supporting instruction in earth systems and sustainability science.</p>

<h2>Public contributions</h2>
<p>Dakad authored an op-ed published in the <em>San Francisco Standard</em> critiquing careerism at Stanford, reflecting on the culture of pre-professional optimization among elite university students. Her writing and organizing work reflect a commitment to broadening perspectives on education and social responsibility.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nazli Dakad",
      jobTitle: "Senior Organizer",
      worksFor: { "@type": "Organization", name: "Class Action" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Stanford University", _confidence: 0.95, _verificationStatus: "public" },
      ],
      knowsAbout: [
        { topic: "Sustainability Science", evidence: "BS + MS Earth Systems at Stanford Doerr School of Sustainability", _confidence: 0.93 },
        { topic: "Decision Science", evidence: "Academic focus within Earth Systems at Stanford", _confidence: 0.85 },
        { topic: "Community Organizing", evidence: "Senior Organizer at Class Action", _confidence: 0.90 },
        { topic: "Teaching", evidence: "Head TA at Stanford Doerr School of Sustainability", _confidence: 0.88 },
      ],
      sameAs: [],
      _gaps: [
        "Graduation years",
        "Specific research or thesis topics",
        "Class Action organization details",
        "Personal website or social profiles",
        "Stanford China immersion program details",
      ],
      _dataQuality: {
        overallConfidence: 0.80,
        sourcesCount: 3,
        lastUpdated: "2026-03-01",
        summary: "Moderate data. SF Standard op-ed is publicly verifiable. Academic and professional roles are likely self-reported. Background details are limited.",
      },
    },
    infobox: {
      fullName: "Nazli Dakad",
      currentRole: "Senior Organizer",
      org: "Class Action",
      education: [
        "Stanford University (MS Earth Systems)",
        "Stanford University (BS Earth Systems)",
      ],
      knownFor: [
        "Senior Organizer at Class Action",
        "Head TA at Stanford Doerr School of Sustainability",
        "Op-ed in SF Standard on Stanford careerism",
      ],
      links: [],
    },
    references: [
      { title: "Op-ed in San Francisco Standard", url: "https://sfstandard.com" },
    ],
  },

  // ===========================================================================
  // 15. Julia Flora
  // ===========================================================================
  julia_flora: {
    slug: "julia_flora",
    name: "Julia Flora",
    currentRole: "Researcher",
    org: "Stanford Medicine, Orthopaedic Surgery",
    education: [],
    humanContent: `
<p><strong>Julia Flora</strong> is a researcher affiliated with the Department of Orthopaedic Surgery at Stanford Medicine. She works within the FASTR (Female Athlete Science and Translational Research) Program, which focuses on the health and performance of female athletes.</p>

<h2>Career</h2>
<p>Flora is a member of the FASTR Program at Stanford Medicine's Department of Orthopaedic Surgery. The program conducts research on the unique physiological and health challenges faced by female athletes, with an emphasis on translational research that can inform clinical practice.</p>

<h2>Notable work</h2>
<p>Flora's research focuses on bone health and Relative Energy Deficiency in Sport (RED-S) among female athletes. She has co-authored studies using dual-energy X-ray absorptiometry (DXA) and high-resolution peripheral quantitative computed tomography (HR-pQCT) to assess bone density and microarchitecture in this population.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Julia Flora",
      jobTitle: "Researcher",
      worksFor: { "@type": "Organization", name: "Stanford Medicine, Department of Orthopaedic Surgery" },
      knowsAbout: [
        { topic: "Female Athlete Health", evidence: "Member of FASTR Program at Stanford Medicine", _confidence: 0.93 },
        { topic: "Bone Health / RED-S", evidence: "Research on bone health and RED-S in female athletes", _confidence: 0.90 },
        { topic: "Medical Imaging (DXA, HR-pQCT)", evidence: "Co-authored DXA/HR-pQCT study on bone density", _confidence: 0.88 },
        { topic: "Orthopaedic Research", evidence: "Affiliated with Stanford Orthopaedic Surgery department", _confidence: 0.88 },
      ],
      sameAs: [],
      _gaps: [
        "Educational background (degree, institution, field)",
        "Career history prior to Stanford",
        "Full publication list",
        "Personal website or ORCID",
        "Exact role title at Stanford (researcher, postdoc, staff, etc.)",
      ],
      _dataQuality: {
        overallConfidence: 0.72,
        sourcesCount: 2,
        lastUpdated: "2026-03-01",
        summary: "Limited profile focused on research affiliation at Stanford Medicine. Educational background is not publicly documented in available sources. Research contributions are verifiable through co-authored publications.",
      },
    },
    infobox: {
      fullName: "Julia Flora",
      currentRole: "Researcher",
      org: "Stanford Medicine, Orthopaedic Surgery",
      education: [],
      knownFor: [
        "FASTR Program (Female Athlete Science and Translational Research)",
        "Research on bone health and RED-S in female athletes",
        "Co-authored DXA/HR-pQCT bone density study",
      ],
      links: [],
    },
    references: [],
  },
};

// =============================================================================
// Helper functions
// =============================================================================

/** Get a profile by slug */
export function getProfile(slug: string): ProfileData | undefined {
  return profiles[slug];
}

/** Get all profile slugs */
export function getAllSlugs(): string[] {
  return Object.keys(profiles);
}

/** Get all profiles as an array */
export function getAllProfiles(): ProfileData[] {
  return Object.values(profiles);
}
