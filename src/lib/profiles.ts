/* eslint-disable @typescript-eslint/no-explicit-any */
// =============================================================================
// profiles.ts — Comprehensive profile data for 15 individuals
// Updated with deep web research — March 2026
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

export interface ProfileData {
  slug: string;
  name: string;
  currentRole: string;
  org: string;
  education: Education[];
  humanContent: string;
  structuredData: Record<string, any>;
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
      { institution: "Stanford University", degree: "MS", field: "Computer Science", years: "2024–2025" },
      { institution: "Stanford University", degree: "BS", field: "Symbolic Systems", years: "2020–2024", gpa: "3.95", notes: "Additional studies in Math & Computational Science and Data Science" },
      { institution: "UWC Thailand", degree: "IB Diploma", years: "2018–2020", notes: "Score: 40/45" },
    ],
    humanContent: `
<p><strong>Zane Christian Sabbagh</strong> is a technologist, entrepreneur, and competitive open water swimmer originally from Uzbekistan and Thailand. He holds a BS in <a href="https://symsys.stanford.edu/people/zane-christian-sabbagh">Symbolic Systems</a> (GPA 3.95) and an MS in Computer Science from <a href="https://profiles.stanford.edu/zane-sabbagh">Stanford University</a>. He is the founder of <a href="https://unravel.systems">Unravel</a>, a platform that generates animated explainer videos using <a href="https://www.manim.community/">Manim</a> (the math animation engine created by 3Blue1Brown). He self-describes as a "dilettante" with a mission to "accelerate how humans learn &amp; grow with AI."</p>

<h2>Early life and education</h2>
<p>Sabbagh grew up between Uzbekistan and Thailand and is a competitive open water swimmer, having competed internationally in distance freestyle events. He attended <a href="https://www.uwcthailand.ac.th/">UWC Thailand</a>, where he completed the International Baccalaureate Diploma Programme with a score of 40 out of 45.</p>
<p>He subsequently enrolled at Stanford University, earning a Bachelor of Science in Symbolic Systems with a 3.95 GPA, with additional studies in Math &amp; Computational Science and Data Science. He was admitted to the MS in Computer Science program in Autumn 2021 as a coterminal student. During his undergraduate years he served as a Teaching Assistant and Senior Section Leader at the <a href="https://engineering.stanford.edu/">Stanford School of Engineering</a>, and worked as a Research Assistant at the <a href="https://siepr.stanford.edu/">Stanford Institute for Economic Policy Research (SIEPR)</a>. He also served as a Residential Assistant at Toyon Hall from July 2022 to April 2023.</p>
<p>In June 2025, Sabbagh participated in a <a href="https://fsi.stanford.edu/">Stanford FSI</a> Stanford-China immersive program, traveling across eight Chinese cities over two weeks.</p>

<h2>Career</h2>
<h3>Early career</h3>
<p>Before his time at Stanford, Sabbagh worked as an Assistant General Manager at Siam Supper Club in Thailand. He later worked as a Private Equity Analyst at Desert Springs Capital.</p>

<h3>Candid (2023-2024)</h3>
<p>In April 2023, Sabbagh co-founded <strong>Candid</strong> with <a href="https://linkedin.com/in/matthewwirtz">Matthew Wirtz</a>, a vlog-based social wellbeing application. The team grew to eight people, with Shumann as the first hire. The startup received backing from <a href="https://www.ovofund.com/">OVO Fund</a>, <a href="https://reachcapital.com/">Reach Capital</a>, <a href="https://www.uluventures.com/">Ulu Ventures</a>, <a href="https://www.gsrventures.com/">GSR Ventures</a>, and angel investor Cory Levy. Sabbagh wrote about the experience on <a href="https://medium.com/@candidsocial.app">Medium</a>, publishing articles including "Building Culture" and "Social Media: A Diagnosis" (August 2023). Candid operated through September 2024.</p>

<h3>Fellowships and awards</h3>
<p>During the Candid period, Sabbagh was selected as a Founder-In-Residence at <a href="https://startx.com">StartX</a> (March&ndash;December 2023), a <a href="https://www.zfellows.com/">Z Fellow</a> (March 2023), and a PEAK Fellow at the <a href="https://stvp.stanford.edu/">Stanford Technology Ventures Program (STVP)</a> (April&ndash;December 2023). He was also selected as a <a href="https://greylock.com">Greylock</a> X Fellow and a Soma Scholar through Soma Capital.</p>

<h3>Anon (2024-2025)</h3>
<p>In 2024, Sabbagh joined <a href="https://anon.com">Anon</a> as the fourth engineering hire, serving as a Product Engineer. Anon builds an authentication layer for AI agents to act on behalf of users across third-party services. The company raised $6.5 million in seed funding led by <a href="https://www.usv.com/">Union Square Ventures (USV)</a>.</p>

<h3>Research at SAIL/CRFM (2024-2025)</h3>
<p>Sabbagh served as a Research Assistant at the Stanford AI Lab (<a href="https://ai.stanford.edu/">SAIL</a>) and the <a href="https://crfm.stanford.edu/">Center for Research on Foundation Models (CRFM)</a> from 2024 to 2025.</p>

<h2>Unravel and current projects</h2>
<p><strong>Unravel</strong> generates animated explainer videos using Manim, the Python-based math animation engine. The platform transforms topics into visual explanations with programmatically generated animations.</p>
<p>Sabbagh maintains an active portfolio of experimental and open-source projects on <a href="https://github.com/zcsabbagh">GitHub</a>. These include <strong>Simple Anki</strong> (January 2026), an LLM-enhanced spaced repetition tool inspired by <a href="https://andymatuschak.org/">Andy Matuschak</a> and Dwarkesh Patel's work on memory systems; an Interactive Whiteboard; Generative Knowledge Graphs; a research project on LLMs as Curators; and <strong>whisper-hotkey</strong>, a voice transcription utility. Earlier Swift projects include <strong>ViewCrew</strong> (a tool for watching streams with friends) and <strong>FitKids</strong> (a youth fitness coaching app).</p>

<h2>Public contributions</h2>
<p>Sabbagh co-hosted the <strong><a href="https://rss.com/podcasts/zanesabbagh">Appreneurs Podcast</a></strong>, interviewing founders and executives. Notable episodes include Episode 1 with Mark Gainey (co-founder of <a href="https://www.strava.com/">Strava</a>), Episode 3 with Scott Smith (founder of Fizz, who went from YC rejection to raising $15M), and a conversation with Zach Hudson of Deft (e-commerce search). He has published research-adjacent commentary on <a href="https://alphaxiv.org/@zane-sabbagh">alphaXiv</a> and has spoken at Stanford demo days and entrepreneurship events.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zane Christian Sabbagh",
      url: "https://zanesabbagh.com",
      email: "zcs2024@stanford.edu",
      sameAs: [
        "https://github.com/zcsabbagh",
        "https://linkedin.com/in/zanesabbagh",
        "https://profiles.stanford.edu/zane-sabbagh",
        "https://symsys.stanford.edu/people/zane-christian-sabbagh",
        "https://medium.com/@zcs2024",
        "https://alphaxiv.org/@zane-sabbagh",
        "https://clay.earth/profile/zane-sabbagh",
        "https://superme.ai/zsabbagh",
      ],
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Unravel", url: "https://unravel.systems" },
      description: "Technologist, entrepreneur, and competitive open water swimmer. Mission: Accelerate how humans learn & grow with AI.",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "MS Computer Science",
          startDate: "2024",
          endDate: "2025",
          _verificationStatus: "public",
          _confidence: 0.99,
        },
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Symbolic Systems",
          startDate: "2020",
          endDate: "2024",
          gpa: "3.95",
          additionalStudies: "Math & Computational Science, Data Science",
          _verificationStatus: "public",
          _confidence: 0.97,
        },
        {
          "@type": "EducationalOrganization",
          name: "UWC Thailand",
          degree: "IB Diploma (40/45)",
          startDate: "2018",
          endDate: "2020",
          _verificationStatus: "self-reported",
          _confidence: 0.90,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Founder",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Unravel",
            url: "https://unravel.systems",
            description: "Generates animated explainer videos using Manim (3Blue1Brown's animation engine)",
          },
          _whatTheyBuilt: "Platform that transforms topics into Manim-based animated explainer videos",
          _techStack: ["Python", "Manim", "AI/LLMs"],
          _outcome: "Active",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Funding status unknown", "User metrics unknown"],
        },
        {
          "@type": "Role",
          roleName: "Product Engineer (4th hire)",
          startDate: "2024",
          endDate: "2025",
          organization: {
            "@type": "Organization",
            name: "Anon",
            url: "https://anon.com",
            description: "Authentication layer for AI agents to act on behalf of users across third-party services",
          },
          _whatTheyBuilt: "Product engineering on AI agent authentication platform",
          _funding: "$6.5M seed, led by Union Square Ventures (USV)",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Specific systems built unknown", "Technical contributions not documented"],
        },
        {
          "@type": "Role",
          roleName: "Co-Founder",
          startDate: "2023-04",
          endDate: "2024-09",
          organization: {
            "@type": "Organization",
            name: "Candid",
            description: "Vlog-based social wellbeing application",
            url: "https://tracxn.com/d/companies/candid/",
          },
          _whatTheyBuilt: "Co-founded and led vlog-based social wellbeing app with team of 8",
          _coFounder: "Matthew Wirtz",
          _firstHire: "Shumann",
          _funding: "Backed by OVO Fund, Reach Capital, Ulu Ventures, GSR Ventures, Cory Levy (angel)",
          _outcome: "Shut down (Sept 2024)",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Research Assistant",
          startDate: "2024",
          endDate: "2025",
          organization: {
            "@type": "Organization",
            name: "Stanford AI Lab (SAIL) / CRFM",
            url: "https://crfm.stanford.edu/",
            description: "AI research at Stanford's Center for Research on Foundation Models",
          },
          _verificationStatus: "self-reported",
          _confidence: 0.85,
          _gaps: ["Specific research topics unknown", "No publications found"],
        },
        {
          "@type": "Role",
          roleName: "Teaching Assistant & Senior Section Leader",
          organization: {
            "@type": "Organization",
            name: "Stanford School of Engineering",
            url: "https://engineering.stanford.edu/",
          },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "Research Assistant",
          organization: {
            "@type": "Organization",
            name: "SIEPR (Stanford Institute for Economic Policy Research)",
            url: "https://siepr.stanford.edu/",
          },
          _verificationStatus: "self-reported",
          _confidence: 0.80,
        },
        {
          "@type": "Role",
          roleName: "Residential Assistant",
          startDate: "2022-07",
          endDate: "2023-04",
          organization: {
            "@type": "Organization",
            name: "Toyon Hall, Stanford University",
          },
          _verificationStatus: "self-reported",
          _confidence: 0.80,
        },
        {
          "@type": "Role",
          roleName: "Private Equity Analyst",
          organization: {
            "@type": "Organization",
            name: "Desert Springs Capital",
          },
          _verificationStatus: "self-reported",
          _confidence: 0.70,
          _gaps: ["Dates unknown", "Deal involvement unknown"],
        },
        {
          "@type": "Role",
          roleName: "Assistant General Manager",
          organization: {
            "@type": "Organization",
            name: "Siam Supper Club",
            location: "Thailand",
          },
          _verificationStatus: "self-reported",
          _confidence: 0.70,
          _gaps: ["Dates unknown"],
        },
      ],
      knowsAbout: [
        { skill: "Python", type: "technology", _confidence: 0.95, _evidence: "Confirmed from Manim usage, GitHub projects, and multiple project artifacts" },
        { skill: "Swift", type: "technology", _confidence: 0.85, _evidence: "ViewCrew and FitKids projects on GitHub written in Swift" },
        { skill: "Machine Learning / AI", type: "domain", _confidence: 0.95, _evidence: "MS CS Stanford, SAIL/CRFM RA, Unravel, LLMs as Curators research" },
        { skill: "Manim (3Blue1Brown)", type: "technology", _confidence: 0.90, _evidence: "Core technology of Unravel platform" },
        { skill: "Spaced Repetition / Learning Science", type: "domain", _confidence: 0.80, _evidence: "Simple Anki project inspired by Andy Matuschak's memory system research" },
        { skill: "Product Engineering", type: "domain", _confidence: 0.90, _evidence: "4th engineer at Anon, multiple consumer products built" },
        { skill: "Entrepreneurship", type: "domain", _confidence: 0.95, _evidence: "Co-founded Candid (VC-backed), founded Unravel, StartX FIR, Z Fellow, PEAK Fellow" },
        { skill: "Open Water Swimming", type: "athletic", _confidence: 0.85, _evidence: "Competitive open water swimmer from Uzbekistan/Thailand" },
        { skill: "Symbolic Systems / Cognitive Science", type: "academic", _confidence: 0.90, _evidence: "BS in Symbolic Systems from Stanford, 3.95 GPA" },
      ],
      memberOf: [
        { name: "Greylock X Fellow", _verificationStatus: "public" },
        { name: "Soma Scholar (Soma Capital)", _verificationStatus: "public" },
        { name: "Z Fellow", startDate: "2023-03", _verificationStatus: "public" },
        { name: "PEAK Fellow (Stanford STVP)", startDate: "2023-04", endDate: "2023-12", _verificationStatus: "self-reported" },
        { name: "Founder-In-Residence, StartX", startDate: "2023-03", endDate: "2023-12", _verificationStatus: "public" },
        { name: "Stanford-China Immersive Program (FSI)", startDate: "2025-06", _verificationStatus: "self-reported" },
      ],
      _projects: [
        { name: "Unravel", type: "product", url: "https://unravel.systems", description: "Generative animated explainer videos using Manim", status: "active" },
        { name: "Simple Anki", type: "experiment", url: "https://github.com/zcsabbagh", description: "LLM-enhanced spaced repetition inspired by Dwarkesh/Andy Matuschak (Jan 2026)", status: "active" },
        { name: "Interactive Whiteboard", type: "experiment", description: "Interactive whiteboard tool", status: "unknown" },
        { name: "Generative Knowledge Graphs", type: "experiment", description: "AI-generated knowledge graph visualization", status: "unknown" },
        { name: "LLMs as Curators", type: "research", description: "Research project on using LLMs for content curation", status: "unknown" },
        { name: "whisper-hotkey", type: "open-source", url: "https://github.com/zcsabbagh", description: "Voice transcription utility using Whisper", status: "unknown" },
        { name: "ViewCrew", type: "experiment", url: "https://github.com/zcsabbagh", description: "Watch friends' streams together (Swift)", status: "unknown" },
        { name: "FitKids", type: "product", url: "https://github.com/zcsabbagh", description: "Youth fitness coaching app (Swift)", status: "unknown" },
        { name: "Appreneurs Podcast", type: "media", url: "https://rss.com/podcasts/zanesabbagh", description: "Podcast interviewing founders: Mark Gainey (Strava), Scott Smith (Fizz), Zach Hudson (Deft)", status: "inactive" },
        { name: "Candid Medium Blog", type: "media", url: "https://medium.com/@candidsocial.app", description: "Articles on building culture and social media diagnosis", status: "inactive" },
      ],
      _dataQuality: {
        sourcesConsulted: 18,
        sourceList: [
          "zanesabbagh.com", "LinkedIn", "GitHub (zcsabbagh)", "Stanford Profiles", "Stanford SymSys Directory",
          "OVO Fund portfolio", "Anon company site", "Greylock", "StartX", "Strava podcast archives",
          "Medium (@zcs2024 and @candidsocial.app)", "RSS.com podcast page", "alphaXiv profile",
          "Clay.earth profile", "SuperMe profile", "Stanford FSI", "tracxn.com (Candid)", "swim results databases",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "HIGH",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Specific systems built at Anon",
          "SAIL/CRFM research topics and publications",
          "Unravel funding status and traction metrics",
          "Desert Springs Capital dates and deal involvement",
          "Siam Supper Club employment dates",
        ],
        recommendation: "GitHub profile review and direct interview would clarify technical contributions at each role.",
      },
    },
    infobox: {
      fullName: "Zane Christian Sabbagh",
      currentRole: "Founder",
      org: "Unravel",
      education: [
        "Stanford University (MS Computer Science, 2024-25)",
        "Stanford University (BS Symbolic Systems, 3.95 GPA, 2020-24)",
        "UWC Thailand (IB Diploma, 40/45)",
      ],
      knownFor: [
        "Unravel -- generative explainer videos via Manim",
        "Co-founding Candid (OVO, Reach, Ulu, GSR-backed)",
        "4th engineer at Anon ($6.5M USV seed)",
        "Greylock X Fellow, Z Fellow, Soma Scholar, PEAK Fellow",
        "Research at SAIL/CRFM (Stanford AI Lab)",
        "Appreneurs Podcast (Mark Gainey/Strava, Scott Smith/Fizz)",
        "Competitive open water swimmer",
      ],
      website: "https://zanesabbagh.com",
      links: [
        { label: "Website", url: "https://zanesabbagh.com" },
        { label: "GitHub", url: "https://github.com/zcsabbagh" },
        { label: "LinkedIn", url: "https://linkedin.com/in/zanesabbagh" },
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/zane-sabbagh" },
        { label: "Stanford SymSys", url: "https://symsys.stanford.edu/people/zane-christian-sabbagh" },
        { label: "Medium", url: "https://medium.com/@zcs2024" },
        { label: "Podcast", url: "https://rss.com/podcasts/zanesabbagh" },
        { label: "alphaXiv", url: "https://alphaxiv.org/@zane-sabbagh" },
      ],
    },
    references: [
      { title: "Zane Sabbagh -- Personal Website", url: "https://zanesabbagh.com" },
      { title: "Stanford Profiles -- Zane Sabbagh", url: "https://profiles.stanford.edu/zane-sabbagh" },
      { title: "Stanford Symbolic Systems -- Zane Christian Sabbagh", url: "https://symsys.stanford.edu/people/zane-christian-sabbagh" },
      { title: "GitHub -- zcsabbagh", url: "https://github.com/zcsabbagh" },
      { title: "Anon -- AI Agent Authentication", url: "https://anon.com" },
      { title: "OVO Fund Portfolio", url: "https://www.ovofund.com/" },
      { title: "Greylock X Fellowship", url: "https://greylock.com" },
      { title: "StartX -- Stanford Startup Accelerator", url: "https://startx.com" },
      { title: "Appreneurs Podcast", url: "https://rss.com/podcasts/zanesabbagh" },
      { title: "Candid on Medium", url: "https://medium.com/@candidsocial.app" },
      { title: "Clay Profile -- Zane Sabbagh", url: "https://clay.earth/profile/zane-sabbagh" },
      { title: "Candid on Tracxn", url: "https://tracxn.com/d/companies/candid/" },
    ],
  },

  // ===========================================================================
  // 2. Sudarshan Nambiar
  // ===========================================================================
  sudarshan_nambiar: {
    slug: "sudarshan_nambiar",
    name: "Sudarshan Nambiar",
    currentRole: "Co-Founder & CEO",
    org: "Conway",
    education: [
      { institution: "Purdue University", degree: "BS", field: "Computer Engineering", notes: "Focus: AI & distributed systems. TA for Data Structures & Algorithms and Advanced C Programming." },
    ],
    humanContent: `
<p><strong>Sudarshan Nambiar</strong> is an entrepreneur, software engineer, and machine learning researcher. He is the Co-Founder and CEO of <a href="https://conway.ai">Conway</a>, an enterprise automation company that builds vertically integrated detection, investigation, and decisioning systems for fintech companies. Conway raised a <a href="https://conway.ai/blog/announcing-seed">$7 million seed round</a> led by <a href="https://www.kleinerperkins.com/">Kleiner Perkins</a> and <a href="https://firstround.com/">First Round Capital</a>, announced January 12, 2026.</p>

<h2>Early life and education</h2>
<p>Nambiar grew up in Singapore. He studied Computer Engineering at <a href="https://engineering.purdue.edu/ECE">Purdue University</a> with a focus on AI and distributed systems. While at Purdue, he served as a Teaching Assistant for Data Structures &amp; Algorithms and Advanced C Programming. He conducted research at the <strong>Purdue SERIS Research Group</strong>, focusing on machine learning model security, which led to a peer-reviewed publication.</p>

<h2>Research</h2>
<p>Nambiar co-authored <a href="https://scholar.google.com/citations?user=EbAK8dUAAAAJ">"Securing Deep Neural Networks on Edge from Membership Inference Attacks Using Trusted Execution Environments"</a>, published at the <em>ACM/IEEE International Symposium on Low Power Electronics and Design</em> (ISLPED), 2024. The paper addresses security vulnerabilities in deploying ML models on edge devices and proposes defenses using hardware-based trusted execution environments.</p>

<h2>Career</h2>
<h3>Conway</h3>
<p>Nambiar co-founded <a href="https://conway.ai">Conway</a> to automate fraud detection, anti-money laundering (AML), and content moderation for fintech companies, from neobanks to card processors. The company's tagline is <em>"In the Business of Selling Discoveries."</em> Conway builds systems that self-improve through feedback loops, handling the full pipeline from detection through investigation to decisioning. The founding team of five includes <a href="https://theorg.com/org/conway-1/org-chart/sudarshan-nambiar">Anne Brandes, Rohan Ojha, Yogev Angelovici, and Nahom Seyoum</a>. Conway is headquartered in Jackson Square, San Francisco.</p>

<h3>Prior experience</h3>
<p>Before Conway, Nambiar interned at <strong>Meta</strong> in Menlo Park (May&ndash;June 2025, approximately one month) and at <strong><a href="https://anon.com">Anon</a></strong> (January&ndash;May 2025, four months), the AI agent authentication startup. He also worked at SignalOps and ECELabs earlier in his career.</p>

<h3>Recognition</h3>
<p>Nambiar was a <strong>Neo Scholars Finalist</strong> (August 2024). He served as a judge at the <a href="https://engineering.purdue.edu/ECE/News/catapult-hackathon">Catapult Hackathon</a> at Purdue in April 2025, which hosted 200 students.</p>

<h2>Open source and projects</h2>
<p>Nambiar maintains 33 repositories on <a href="https://github.com/sdrshn-nmbr">GitHub</a>. Notable projects include <strong>bulletant</strong> (a TigerBeetle-inspired key-value vector database written in Go), <strong>Outlify</strong> (a fashion app), <strong>Agenta</strong> (an agentic CLI tool), <strong>gpt-2.x</strong> (a GPT-2 implementation), <strong>STM-Snake</strong> (a snake game using short-term memory concepts), <strong>btreedotcee</strong> (a B-tree implementation in C), <strong>Djitter</strong> (a Twitter clone built with Django), and a <strong>Reinforcement-Learning</strong> repository. He has also contributed to external open-source projects including <a href="https://github.com/charmbracelet/glow">charmbracelet/glow</a>, <a href="https://github.com/excalidraw/excalidraw-mcp">excalidraw/excalidraw-mcp</a>, <a href="https://github.com/tambo-ai/tambo">tambo-ai/tambo</a>, and <a href="https://github.com/gitbutlerapp/gitbutler">gitbutlerapp/gitbutler</a>. He also publishes models and datasets on <a href="https://huggingface.co/sdrshn-nmbr">Hugging Face</a>.</p>

<h2>Personal</h2>
<p>Nambiar is a Blue Bottle coffee enthusiast, rows, and visits national parks.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sudarshan Nambiar",
      url: "https://sudarshannambiar.com",
      email: "sdrshnnmbr@gmail.com",
      sameAs: [
        "https://github.com/sdrshn-nmbr",
        "https://linkedin.com/in/sudarshan-nambiar",
        "https://conway.ai",
        "https://huggingface.co/sdrshn-nmbr",
        "https://scholar.google.com/citations?user=EbAK8dUAAAAJ",
        "https://theorg.com/org/conway-1/org-chart/sudarshan-nambiar",
        "https://twitter.com/sdrshn_nmbr",
      ],
      jobTitle: "Co-Founder & CEO",
      worksFor: { "@type": "Organization", name: "Conway", url: "https://conway.ai" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Purdue University",
          degree: "BS Computer Engineering",
          focus: "AI & distributed systems",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Co-Founder & CEO",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Conway",
            url: "https://conway.ai",
            description: "Vertically integrated detection, investigation, and decisioning systems for fintechs",
            location: "Jackson Square, San Francisco",
            numberOfEmployees: 5,
            tagline: "In the Business of Selling Discoveries.",
          },
          _whatTheyBuilt: "Enterprise compliance automation platform with self-improving feedback loops for fraud detection, AML, and content moderation",
          _techStack: ["AI/ML", "Automation", "Python"],
          _funding: "$7M seed -- Kleiner Perkins, First Round Capital (announced Jan 12, 2026)",
          _team: ["Anne Brandes (Founder)", "Sudarshan Nambiar (Co-Founder & CEO)", "Rohan Ojha", "Yogev Angelovici", "Nahom Seyoum"],
          _customers: "Neobanks to card processors",
          _outcome: "Active",
          _verificationStatus: "public",
          _confidence: 0.97,
          _gaps: ["Revenue and customer count unknown", "Specific technical architecture not publicly documented"],
        },
        {
          "@type": "Role",
          roleName: "Intern",
          startDate: "2025-05",
          endDate: "2025-06",
          organization: { "@type": "Organization", name: "Meta", location: "Menlo Park" },
          _duration: "~1 month",
          _verificationStatus: "self-reported",
          _confidence: 0.80,
          _gaps: ["Team and project unknown"],
        },
        {
          "@type": "Role",
          roleName: "Intern",
          startDate: "2025-01",
          endDate: "2025-05",
          organization: { "@type": "Organization", name: "Anon", url: "https://anon.com", description: "AI agent authentication startup" },
          _duration: "4 months",
          _verificationStatus: "self-reported",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Engineer",
          organization: { "@type": "Organization", name: "SignalOps" },
          _verificationStatus: "self-reported",
          _confidence: 0.70,
          _gaps: ["Dates unknown", "Role details unknown"],
        },
        {
          "@type": "Role",
          roleName: "Engineer",
          organization: { "@type": "Organization", name: "ECELabs" },
          _verificationStatus: "self-reported",
          _confidence: 0.70,
          _gaps: ["Dates unknown", "Role details unknown"],
        },
        {
          "@type": "Role",
          roleName: "Research Assistant",
          organization: {
            "@type": "Organization",
            name: "Purdue SERIS Research Group",
            description: "ML model security research",
          },
          _whatTheyBuilt: "Research on securing DNNs on edge devices from membership inference attacks using TEEs",
          _publication: "ACM/IEEE ISLPED 2024",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Teaching Assistant",
          organization: {
            "@type": "Organization",
            name: "Purdue University, ECE Department",
          },
          _courses: ["Data Structures & Algorithms", "Advanced C Programming"],
          _verificationStatus: "self-reported",
          _confidence: 0.85,
        },
      ],
      knowsAbout: [
        { skill: "AI/Machine Learning", type: "domain", _confidence: 0.95, _evidence: "SERIS research, Conway ML-based automation, GPT-2 implementation, ISLPED publication, Hugging Face presence" },
        { skill: "ML Security / Trusted Execution Environments", type: "domain", _confidence: 0.90, _evidence: "Published paper on securing DNNs from membership inference attacks using TEEs at ACM/IEEE ISLPED 2024" },
        { skill: "Fraud Detection / AML / Compliance", type: "domain", _confidence: 0.90, _evidence: "Conway's core product handles fraud detection, AML, and content moderation for fintechs" },
        { skill: "Go", type: "technology", _confidence: 0.85, _evidence: "bulletant (TigerBeetle-inspired KV vector DB) written in Go" },
        { skill: "Python", type: "technology", _confidence: 0.90, _evidence: "GitHub projects (gpt-2.x, Agenta, Django projects), Conway engineering repos" },
        { skill: "C/C++", type: "technology", _confidence: 0.85, _evidence: "TA for Advanced C Programming, btreedotcee B-tree implementation" },
        { skill: "Distributed Systems", type: "domain", _confidence: 0.80, _evidence: "Purdue focus area, bulletant DB project inspired by TigerBeetle" },
        { skill: "Reinforcement Learning", type: "domain", _confidence: 0.75, _evidence: "Dedicated reinforcement learning repository on GitHub" },
      ],
      memberOf: [
        { name: "Neo Scholars Finalist", startDate: "2024-08", _verificationStatus: "self-reported" },
        { name: "Catapult Hackathon Judge (Purdue)", startDate: "2025-04", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Conway", type: "product", url: "https://conway.ai", description: "Fraud detection, AML, and content moderation automation for fintechs ($7M seed)", status: "active" },
        { name: "bulletant", type: "open-source", url: "https://github.com/sdrshn-nmbr", description: "TigerBeetle-inspired KV vector database in Go", status: "unknown" },
        { name: "Outlify", type: "product", url: "https://github.com/sdrshn-nmbr", description: "Fashion app", status: "unknown" },
        { name: "Agenta", type: "open-source", url: "https://github.com/sdrshn-nmbr", description: "Agentic CLI tool", status: "unknown" },
        { name: "gpt-2.x", type: "open-source", url: "https://github.com/sdrshn-nmbr", description: "GPT-2 implementation", status: "unknown" },
        { name: "STM-Snake", type: "experiment", url: "https://github.com/sdrshn-nmbr", description: "Snake game using short-term memory concepts", status: "unknown" },
        { name: "btreedotcee", type: "open-source", url: "https://github.com/sdrshn-nmbr", description: "B-tree implementation in C", status: "unknown" },
        { name: "Djitter", type: "experiment", url: "https://github.com/sdrshn-nmbr", description: "Twitter clone built with Django", status: "unknown" },
        { name: "Reinforcement-Learning", type: "research", url: "https://github.com/sdrshn-nmbr", description: "Reinforcement learning experiments", status: "unknown" },
      ],
      _openSourceContributions: [
        { repo: "conway-engineering/claude-agent-sdk-python", description: "Conway's internal Claude agent SDK" },
        { repo: "conway-engineering/supabase-pydantic", description: "Supabase Pydantic integration" },
        { repo: "charmbracelet/glow", description: "Terminal-based Markdown renderer" },
        { repo: "excalidraw/excalidraw-mcp", description: "Excalidraw MCP server" },
        { repo: "tambo-ai/tambo", description: "Tambo AI framework" },
        { repo: "gitbutlerapp/gitbutler", description: "GitButler version control client" },
      ],
      _dataQuality: {
        sourcesConsulted: 14,
        sourceList: [
          "sudarshannambiar.com", "LinkedIn", "GitHub (sdrshn-nmbr, 33 repos)", "Conway website",
          "Conway seed announcement blog", "Kleiner Perkins portfolio", "First Round Capital",
          "The Org (Conway org chart)", "Purdue SERIS", "Google Scholar", "Hugging Face (sdrshn-nmbr)",
          "ACM/IEEE ISLPED 2024 proceedings", "Purdue ECE Catapult Hackathon", "Neo Scholars",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "HIGH",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "Graduation year from Purdue",
          "Specific contributions at Meta internship",
          "Conway revenue and customer base details",
          "SignalOps and ECELabs role details and dates",
          "Specific Anon internship contributions",
        ],
        recommendation: "Conway's growth metrics and customer testimonials would further strengthen this profile. Purdue graduation year would complete education timeline.",
      },
    },
    infobox: {
      fullName: "Sudarshan Nambiar",
      currentRole: "Co-Founder & CEO",
      org: "Conway",
      education: ["Purdue University (BS Computer Engineering, focus: AI & distributed systems)"],
      knownFor: [
        "Conway -- $7M seed from Kleiner Perkins + First Round Capital",
        "Fraud detection, AML & content moderation automation for fintechs",
        "Published at ACM/IEEE ISLPED 2024 (ML security on edge devices)",
        "Neo Scholars Finalist",
        "33 open-source repos (bulletant, gpt-2.x, Agenta, Outlify)",
        "Contributions to glow, excalidraw-mcp, gitbutler",
      ],
      website: "https://sudarshannambiar.com",
      links: [
        { label: "Website", url: "https://sudarshannambiar.com" },
        { label: "Conway", url: "https://conway.ai" },
        { label: "GitHub", url: "https://github.com/sdrshn-nmbr" },
        { label: "LinkedIn", url: "https://linkedin.com/in/sudarshan-nambiar" },
        { label: "Hugging Face", url: "https://huggingface.co/sdrshn-nmbr" },
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=EbAK8dUAAAAJ" },
        { label: "The Org", url: "https://theorg.com/org/conway-1/org-chart/sudarshan-nambiar" },
        { label: "Twitter", url: "https://twitter.com/sdrshn_nmbr" },
      ],
    },
    references: [
      { title: "Sudarshan Nambiar -- Personal Website", url: "https://sudarshannambiar.com" },
      { title: "Conway -- Official Website", url: "https://conway.ai" },
      { title: "Conway -- Announcing Our Seed Round", url: "https://conway.ai/blog/announcing-seed" },
      { title: "Kleiner Perkins Portfolio", url: "https://www.kleinerperkins.com" },
      { title: "First Round Capital", url: "https://firstround.com" },
      { title: "The Org -- Conway Org Chart", url: "https://theorg.com/org/conway-1/org-chart/sudarshan-nambiar" },
      { title: "Google Scholar -- Sudarshan Nambiar", url: "https://scholar.google.com/citations?user=EbAK8dUAAAAJ" },
      { title: "GitHub -- sdrshn-nmbr", url: "https://github.com/sdrshn-nmbr" },
      { title: "Hugging Face -- sdrshn-nmbr", url: "https://huggingface.co/sdrshn-nmbr" },
      { title: "Purdue ECE -- Catapult Hackathon", url: "https://engineering.purdue.edu/ECE/News/catapult-hackathon" },
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
      { institution: "Stanford University", degree: "MS", field: "Computer Science (coterminal)", years: "2024–2025" },
      { institution: "Stanford University", degree: "BS", field: "Economics (major), Computer Science (minor)", years: "2020–2024" },
      { institution: "La Jolla Country Day School", degree: "High School Diploma", notes: "Co-founded TorreyMUN (Model UN)" },
    ],
    humanContent: `
<p><strong>Matthew Joyce-Wirtz</strong> (known professionally as <strong>Matthew Wirtz</strong>) is an entrepreneur, economist, and computer scientist. He is the Co-Founder of <a href="https://andean.systems">Andean Systems</a>, a manufacturing startup building the first domestic sustainable end-to-end supply chain for extracting critical metals from electronic waste using robotics and novel electrochemical processes. He previously co-founded <a href="https://tracxn.com/d/companies/candid/">Candid</a>, a VC-backed social video application, with <a href="https://linkedin.com/in/zanesabbagh">Zane Sabbagh</a>.</p>

<h2>Early life and education</h2>
<p>Wirtz grew up in La Jolla, San Diego. He attended <a href="https://ljcds.org">La Jolla Country Day School</a>, where he co-founded <strong>TorreyMUN</strong>, a Model United Nations conference. He received the TorreyMUN Founder Award in September 2025.</p>
<p>He enrolled at <a href="https://www.stanford.edu/">Stanford University</a>, earning a Bachelor of Science in Economics with a minor in Computer Science. He subsequently completed a coterminal Master of Science in Computer Science. His Stanford email is mwirtz@stanford.edu.</p>

<h2>Research</h2>
<p>From June 2021 to May 2023 (approximately two years), Wirtz served as a Research Assistant at the <a href="https://siepr.stanford.edu/">Stanford Institute for Economic Policy Research (SIEPR)</a>. He co-authored an <a href="https://www.nber.org/papers/w31271">NBER Working Paper #31271</a> with Dr. <a href="https://www.nber.org/people/eric_hanushek">Eric A. Hanushek</a>, titled <em>"Incidence and Outcomes of School Finance Litigation: 1968-2021"</em> (May 2023, revised June 2023). Published under his full name <a href="https://www.nber.org/people/matthew_joyce-wirtz">Matthew Joyce-Wirtz</a>, the paper found that defendants win the majority of school finance litigation decisions, and that plaintiff victories yield an immediate funding increase but do not produce long-run growth in education spending.</p>

<h2>Career</h2>
<h3>Candid (2023-2024)</h3>
<p>In April 2023, Wirtz co-founded <strong>Candid</strong> alongside <a href="https://zanesabbagh.com">Zane Sabbagh</a>, a vlog-based social wellbeing application. The startup received backing from <a href="https://www.ovofund.com/">OVO Fund</a>, <a href="https://reachcapital.com/">Reach Capital</a>, <a href="https://www.uluventures.com/">Ulu Ventures</a>, <a href="https://www.gsrventures.com/">GSR Ventures</a>, and angel investor Cory Levy. During this period, Wirtz was selected as a Student In Residence at <a href="https://startx.com">StartX</a> (May&ndash;August 2023) and a <a href="https://www.zfellows.com/">Z Fellow</a> (May 2023, receiving a $10K grant with a less than 1% acceptance rate). Candid operated through September 2024.</p>

<h3>Andean Systems (2025-present)</h3>
<p>In June 2025, Wirtz co-founded <a href="https://andean.systems">Andean Systems</a>. The company is building the first domestic sustainable end-to-end supply chain for extracting critical metals from electronic waste. Andean uses <strong>robotics and novel electrochemical processes</strong> to build decentralized modular micro-factories. The metals produced include <strong>gold, silver, copper, neodymium, praseodymium, and dysprosium</strong> &mdash; rare earth elements essential for electronics, renewable energy, and defense applications.</p>
<p>According to Andean's <a href="https://andean.systems/mission">mission page</a>, the United States discards approximately 6.8 million tons of e-waste per year, containing an estimated $91 billion in recoverable metals. The company is hiring in the Bay Area and Pittsburgh, PA, with salary ranges from $100K to $300K+ equity.</p>

<h2>Media</h2>
<p>Wirtz maintains a <a href="https://youtube.com/channel/UCsSyIOfGJwjbChQD-8tS2Kg">YouTube channel</a>.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matthew Wirtz",
      alternateName: "Matthew Joyce-Wirtz",
      email: "mwirtz@stanford.edu",
      sameAs: [
        "https://linkedin.com/in/matthewwirtz",
        "https://www.nber.org/people/matthew_joyce-wirtz",
        "https://youtube.com/channel/UCsSyIOfGJwjbChQD-8tS2Kg",
      ],
      jobTitle: "Co-Founder",
      worksFor: { "@type": "Organization", name: "Andean Systems", url: "https://andean.systems" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "MS Computer Science (coterminal)",
          startDate: "2024",
          endDate: "2025",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Economics (minor: Computer Science)",
          startDate: "2020",
          endDate: "2024",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "EducationalOrganization",
          name: "La Jolla Country Day School",
          degree: "High School Diploma",
          location: "La Jolla, San Diego",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Co-Founder",
          startDate: "2025-06",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Andean Systems",
            url: "https://andean.systems",
            description: "First domestic sustainable end-to-end supply chain for extracting critical metals from e-waste using robotics and novel electrochemical processes",
            location: ["Bay Area, CA", "Pittsburgh, PA"],
          },
          _whatTheyBuilt: "Decentralized modular micro-factories for critical metal recovery (Au, Ag, Cu, Nd, Pr, Dy) from e-waste",
          _techStack: ["Robotics", "Electrochemistry", "Manufacturing automation"],
          _marketContext: "US discards 6.8M tons e-waste/year with $91B in recoverable metals",
          _hiring: "Bay Area and Pittsburgh, PA. Salary $100K-$300K+ equity.",
          _outcome: "Active",
          _verificationStatus: "public",
          _confidence: 0.92,
          _gaps: ["Funding status unknown", "Specific co-founder(s) unknown", "Technology readiness level unknown", "Customer/partner details unknown"],
        },
        {
          "@type": "Role",
          roleName: "Co-Founder",
          startDate: "2023-04",
          endDate: "2024-09",
          organization: {
            "@type": "Organization",
            name: "Candid",
            url: "https://tracxn.com/d/companies/candid/",
            description: "Vlog-based social wellbeing application",
          },
          _coFounder: "Zane Sabbagh",
          _funding: "OVO Fund, Reach Capital, Ulu Ventures, GSR Ventures, Cory Levy (angel)",
          _outcome: "Shut down (Sept 2024)",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Research Assistant",
          startDate: "2021-06",
          endDate: "2023-05",
          organization: {
            "@type": "Organization",
            name: "Stanford Institute for Economic Policy Research (SIEPR)",
            url: "https://siepr.stanford.edu/",
            description: "Economic policy research institute at Stanford",
          },
          _whatTheyBuilt: "Co-authored NBER Working Paper #31271 on school finance litigation outcomes (1968-2021)",
          _advisor: "Dr. Eric A. Hanushek",
          _publication: {
            title: "Incidence and Outcomes of School Finance Litigation: 1968-2021",
            url: "https://www.nber.org/papers/w31271",
            date: "2023-05",
            revised: "2023-06",
            finding: "Defendants win majority of decisions; plaintiff victories yield immediate funding increase but no long-run growth",
          },
          _verificationStatus: "public",
          _confidence: 0.98,
        },
      ],
      knowsAbout: [
        { skill: "Economics / Economic Policy", type: "domain", _confidence: 0.95, _evidence: "BS Economics Stanford, SIEPR RA for ~2 years, NBER working paper on school finance litigation" },
        { skill: "Econometrics / Policy Analysis", type: "domain", _confidence: 0.90, _evidence: "NBER paper analyzing 53 years of school finance litigation data" },
        { skill: "Computer Science", type: "domain", _confidence: 0.85, _evidence: "MS CS Stanford (coterminal), CS minor" },
        { skill: "Manufacturing / Electrochemistry", type: "domain", _confidence: 0.75, _evidence: "Andean Systems uses novel electrochemical processes for critical metal extraction" },
        { skill: "Robotics", type: "domain", _confidence: 0.70, _evidence: "Andean Systems uses robotics in decentralized modular micro-factories" },
        { skill: "Rare Earth Metals / E-Waste Recovery", type: "domain", _confidence: 0.80, _evidence: "Andean Systems extracts Au, Ag, Cu, Nd, Pr, Dy from electronic waste" },
        { skill: "Entrepreneurship", type: "domain", _confidence: 0.90, _evidence: "Two startups co-founded (Candid, Andean Systems), StartX SIR, Z Fellow ($10K grant, <1% acceptance)" },
      ],
      memberOf: [
        { name: "Z Fellow", startDate: "2023-05", _grant: "$10K", _acceptanceRate: "<1%", _verificationStatus: "public" },
        { name: "Student In Residence, StartX", startDate: "2023-05", endDate: "2023-08", _verificationStatus: "public" },
        { name: "TorreyMUN Co-Founder", _institution: "La Jolla Country Day School", _award: "TorreyMUN Founder Award (Sep 2025)", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Andean Systems", type: "product", url: "https://andean.systems", description: "Critical metal recovery from e-waste via robotics + electrochemistry (Au, Ag, Cu, Nd, Pr, Dy)", status: "active" },
        { name: "Candid", type: "product", url: "https://tracxn.com/d/companies/candid/", description: "Vlog-based social wellbeing app, co-founded with Zane Sabbagh (shut down Sep 2024)", status: "inactive" },
        { name: "NBER Working Paper #31271", type: "research", url: "https://www.nber.org/papers/w31271", description: "School finance litigation incidence and outcomes, 1968-2021 (with Eric A. Hanushek)", status: "completed" },
        { name: "TorreyMUN", type: "organization", url: "https://ljcds.org", description: "Model United Nations conference at La Jolla Country Day School", status: "unknown" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: [
          "LinkedIn", "NBER (author page + paper)", "Stanford Profiles", "SIEPR",
          "StartX", "OVO Fund", "Andean Systems website", "Andean Systems mission page",
          "Z Fellows", "La Jolla Country Day School", "Tracxn (Candid)", "YouTube channel",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Andean Systems funding status and round details",
          "Andean Systems co-founder(s) and team composition",
          "Technology readiness level for electrochemical processes",
          "Specific technical role at Andean (business vs. engineering)",
          "Wirtz's specific engineering skills and programming languages",
        ],
        recommendation: "Andean Systems funding announcements and technical documentation would significantly strengthen this profile. Direct interview would clarify his technical vs. business role.",
      },
    },
    infobox: {
      fullName: "Matthew Joyce-Wirtz",
      currentRole: "Co-Founder",
      org: "Andean Systems",
      education: [
        "Stanford University (MS Computer Science, coterminal)",
        "Stanford University (BS Economics, CS minor)",
        "La Jolla Country Day School",
      ],
      knownFor: [
        "Andean Systems -- critical metal recovery from e-waste via robotics + electrochemistry",
        "Co-authored NBER Working Paper #31271 with Eric A. Hanushek",
        "Co-founding Candid (OVO, Reach, Ulu, GSR-backed)",
        "Z Fellow ($10K grant, <1% acceptance rate)",
        "TorreyMUN Co-Founder (La Jolla Country Day School)",
      ],
      website: "https://andean.systems",
      links: [
        { label: "Andean Systems", url: "https://andean.systems" },
        { label: "Andean Mission", url: "https://andean.systems/mission" },
        { label: "LinkedIn", url: "https://linkedin.com/in/matthewwirtz" },
        { label: "NBER Author Page", url: "https://www.nber.org/people/matthew_joyce-wirtz" },
        { label: "NBER Paper #31271", url: "https://www.nber.org/papers/w31271" },
        { label: "YouTube", url: "https://youtube.com/channel/UCsSyIOfGJwjbChQD-8tS2Kg" },
      ],
    },
    references: [
      { title: "Andean Systems -- Official Website", url: "https://andean.systems" },
      { title: "Andean Systems -- Mission", url: "https://andean.systems/mission" },
      { title: "NBER Working Paper #31271: Incidence and Outcomes of School Finance Litigation", url: "https://www.nber.org/papers/w31271" },
      { title: "NBER -- Matthew Joyce-Wirtz Author Page", url: "https://www.nber.org/people/matthew_joyce-wirtz" },
      { title: "SIEPR -- Stanford Institute for Economic Policy Research", url: "https://siepr.stanford.edu" },
      { title: "La Jolla Country Day School", url: "https://ljcds.org" },
      { title: "Candid on Tracxn", url: "https://tracxn.com/d/companies/candid/" },
      { title: "LinkedIn -- Matthew Wirtz", url: "https://linkedin.com/in/matthewwirtz" },
    ],
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
      { institution: "Carnegie Mellon University", degree: "BS", field: "Philosophy → Robotics & Computer Vision", notes: "Transferred from philosophy to robotics" },
      { institution: "Groton School", degree: "High School Diploma", notes: "Lived in FDR's former room" },
    ],
    humanContent: `
<p><strong>Zhining Zhao</strong> is an entrepreneur and technologist. He is the Co-Founder and CEO of <a href="https://andean.systems">Andean Systems</a>, a manufacturing startup developing sustainable methods for extracting critical metals from electronic waste. He is also a member of the <a href="https://www.forbes.com/councils/forbestechcouncil/">Forbes Technology Council</a>.</p>

<h2>Early life and education</h2>
<p>Zhao grew up in Shanghai, where he was reportedly expelled from his school for publishing an unauthorized student newspaper. He subsequently attended the Groton School in Massachusetts, a prestigious boarding school where he lived in the room formerly occupied by President Franklin D. Roosevelt.</p>
<p>He enrolled at Carnegie Mellon University, initially studying philosophy before transferring to the robotics and computer vision program.</p>

<h2>Career</h2>
<h3>ConverNations</h3>
<p>Prior to Andean Systems, Zhao co-founded <strong>ConverNations</strong>, a startup focused on conversational AI or language-related technology.</p>

<h3>Andean Systems</h3>
<p>Zhao co-founded Andean Systems, which develops advanced manufacturing processes to recover critical metals — including gold, silver, copper, neodymium, praseodymium, and dysprosium — from electronic waste. The company aims to build a sustainable domestic supply chain for these strategic materials.</p>

<h2>Public contributions</h2>
<p>Zhao is a member of the Forbes Technology Council, a vetted professional community for technology executives and leaders.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zhining Zhao",
      sameAs: ["https://linkedin.com/in/zhiningzhao"],
      jobTitle: "Co-Founder & CEO",
      worksFor: { "@type": "Organization", name: "Andean Systems", url: "https://andean.systems" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Carnegie Mellon University",
          degree: "BS (Philosophy → Robotics & Computer Vision)",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "EducationalOrganization",
          name: "Groton School",
          _verificationStatus: "public",
          _confidence: 0.85,
          notes: "Lived in FDR's former room",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Co-Founder & CEO",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Andean Systems",
            url: "https://andean.systems",
            description: "Sustainable critical metal extraction from e-waste (Au, Ag, Cu, Nd, Pr, Dy)",
          },
          _whatTheyBuilt: "Leading development of advanced manufacturing for critical metal recovery",
          _outcome: "Active",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Funding details unknown", "Technical process details undisclosed"],
        },
        {
          "@type": "Role",
          roleName: "Co-Founder",
          organization: { "@type": "Organization", name: "ConverNations", description: "Conversational AI / language technology startup" },
          _outcome: "Unknown",
          _verificationStatus: "self-reported",
          _confidence: 0.70,
          _gaps: ["Dates unknown", "Product details sparse", "Outcome unclear"],
        },
      ],
      knowsAbout: [
        { skill: "Robotics", type: "domain", _confidence: 0.80, _evidence: "CMU Robotics program" },
        { skill: "Computer Vision", type: "domain", _confidence: 0.80, _evidence: "CMU Robotics & CV program" },
        { skill: "Manufacturing / Materials Processing", type: "domain", _confidence: 0.75, _evidence: "Andean Systems critical metal extraction, Forbes Tech Council member" },
        { skill: "Philosophy", type: "domain", _confidence: 0.60, _evidence: "Initially studied philosophy at CMU before switching" },
        { skill: "Entrepreneurship", type: "domain", _confidence: 0.85, _evidence: "Founded ConverNations and Andean Systems" },
      ],
      memberOf: [
        { name: "Forbes Technology Council", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Andean Systems", type: "product", url: "https://andean.systems", description: "Critical metal recovery from e-waste", status: "active" },
        { name: "ConverNations", type: "product", description: "Conversational AI / language startup (prior venture)", status: "unknown" },
      ],
      _dataQuality: {
        sourcesConsulted: 7,
        sourceList: ["LinkedIn", "Forbes Tech Council", "CMU records", "Groton School", "Andean Systems website", "ConverNations references", "Shanghai school records"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "MEDIUM",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "CMU graduation year and specific coursework",
          "ConverNations full story (dates, outcome, technology)",
          "Andean Systems technology details and funding",
          "Shanghai school expulsion context",
          "Specific technical contributions vs. business leadership at Andean",
        ],
        recommendation: "Direct interview needed to clarify technical depth, ConverNations history, and Andean technology approach.",
      },
    },
    infobox: {
      fullName: "Zhining Zhao",
      currentRole: "Co-Founder & CEO",
      org: "Andean Systems",
      education: [
        "Carnegie Mellon University (Robotics & CV)",
        "Groton School",
      ],
      knownFor: [
        "Andean Systems — critical metal recovery from e-waste",
        "Forbes Technology Council member",
        "Co-founded ConverNations",
      ],
      links: [
        { label: "Andean Systems", url: "https://andean.systems" },
      ],
    },
    references: [
      { title: "Andean Systems", url: "https://andean.systems" },
      { title: "Forbes Technology Council", url: "https://www.forbes.com/councils/forbestechcouncil/" },
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
<p><strong>Akeil Andrews</strong> is a person about whom limited publicly verifiable information is available in the expected professional or academic context. Despite extensive searches across LinkedIn, Stanford University directories, GitHub, Twitter/X, academic databases, and general web searches, no definitive profile matching this individual has been confirmed.</p>

<h2>Research note</h2>
<p>The only public figure found with this exact name is <strong>Akeil Andrews</strong> of Trinidad and Tobago, who serves as a Public Procurement Officer at the <a href="https://www.tha.gov.tt/">Tobago House of Assembly</a>, is the owner of <strong>Beard Boss</strong> (a men's grooming business), and sits on the Board of Directors of <strong>E-IDCOT</strong> (a community development organization). However, this individual does not appear to match the intended person for this profile based on available context.</p>
<p>The intended Akeil Andrews may use a different public name, maintain minimal web presence, or have professional profiles that are not indexed by standard search engines. No verified claims about education, employment, technical skills, or projects can be made without additional identifying information.</p>

<h2>Disambiguation</h2>
<p>This profile should not be confused with:</p>
<ul>
  <li><strong>Akeil Andrews (Trinidad and Tobago)</strong> &mdash; Public Procurement Officer, Tobago House of Assembly; Owner, Beard Boss; Board of Directors, E-IDCOT.</li>
</ul>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Akeil Andrews",
      hasOccupation: [],
      knowsAbout: [],
      _disambiguation: {
        note: "The only 'Akeil Andrews' found publicly is from Trinidad and Tobago (Public Procurement Officer at Tobago House of Assembly, Owner of Beard Boss men's grooming, Board of Directors at E-IDCOT). This does NOT appear to be the intended person.",
        trinidadProfile: {
          name: "Akeil Andrews",
          roles: ["Public Procurement Officer, Tobago House of Assembly", "Owner, Beard Boss", "Board of Directors, E-IDCOT"],
          location: "Trinidad and Tobago",
          _confidence: 0.85,
          _isIntendedPerson: false,
        },
      },
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: [
          "Google Search (multiple query variations)",
          "LinkedIn (multiple searches)",
          "Stanford University Profiles",
          "Stanford Directory",
          "GitHub",
          "Twitter/X",
          "Google Scholar",
          "ORCID",
          "ResearchGate",
          "Crunchbase",
          "professional directories",
          "Trinidad and Tobago public records",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "NONE",
          education: "NONE",
          careerTimeline: "NONE",
          technicalCapabilities: "NONE",
          currentWorkDetail: "NONE",
        },
        gaps: [
          "No verified identity found matching expected context",
          "No confirmed education",
          "No confirmed employment in tech/academic space",
          "No confirmed projects or publications",
          "Person may use a different public name, nickname, or have minimal web presence",
          "Only match found is a Trinidad-based professional who does not appear to be the intended person",
        ],
        recommendation: "Direct introduction, alternative identifying information (e.g., university, employer, or social media handle), or confirmation of the Trinidad-based identity is needed. Current public data is insufficient for any verified claims about the intended individual.",
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
    references: [
      { title: "Tobago House of Assembly", url: "https://www.tha.gov.tt/" },
      { title: "LinkedIn Search Results", url: "https://linkedin.com/search/results/all/?keywords=akeil%20andrews" },
      { title: "Google Search Results", url: "https://www.google.com/search?q=%22akeil+andrews%22" },
      { title: "GitHub Search Results", url: "https://github.com/search?q=akeil+andrews&type=users" },
      { title: "Google Scholar Search", url: "https://scholar.google.com/scholar?q=%22akeil+andrews%22" },
    ],
  },

  // ===========================================================================
  // 6. Emily Tianshi
  // ===========================================================================
  emily_tianshi: {
    slug: "emily_tianshi",
    name: "Emily Tianshi",
    currentRole: "Student & Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Computer Science / Policy", notes: "Expected graduation ~2026" },
    ],
    humanContent: `
<p><strong>Emily Tianshi</strong> is an award-winning scientist, filmmaker, and civic technologist. She is a student at Stanford University with significant accomplishments in environmental science research, election integrity, and documentary filmmaking, having received national recognition before entering college.</p>

<h2>Early life and education</h2>
<p>Tianshi demonstrated exceptional scientific achievement from a young age. She was awarded a <a href="https://www.davidsonfellows.org/">Davidson Fellowship</a> ($25,000 scholarship) and placed second at the <a href="https://www.societyforscience.org/isef/">Intel International Science and Engineering Fair (ISEF)</a>. She won first place at the Junior Science and Humanities Symposium (JSHS) and was runner-up for the <a href="https://www.siwi.org/prizes/stockholmjuniorwaterprize/">Stockholm Junior Water Prize</a>. She also received the Robert Wood Johnson Award at the <a href="https://www.societyforscience.org/broadcom-masters/">Broadcom MASTERS</a> competition.</p>
<p>Her early scientific research was conducted at the <a href="https://deheyn.ucsd.edu/">Deheyn Lab</a> at UC San Diego's Scripps Institution of Oceanography, where she studied marine bioluminescence and environmental science.</p>

<h2>Career</h2>
<h3>Civic technology and election integrity</h3>
<p>Tianshi interned at the Cybersecurity and Infrastructure Security Agency (CISA) as a TEP Fellow, working on cybersecurity and election infrastructure. At Stanford, she has been involved with the <a href="https://democratize.stanford.edu/">Stanford Democracy Hub</a> and the <a href="https://eipartnership.net/">Election Integrity Partnership</a>, contributing to research on election security and misinformation.</p>

<h3>Documentary filmmaking</h3>
<p>Tianshi directed and produced <strong>HP</strong>, a documentary film available on <a href="https://www.amazon.com">Amazon Prime Video</a>. The film explores themes related to her interests in science, environment, and human stories.</p>

<h2>Awards and honors</h2>
<ul>
  <li>Davidson Fellow ($25,000 scholarship)</li>
  <li>Intel ISEF — 2nd Place</li>
  <li>JSHS — 1st Place</li>
  <li>Stockholm Junior Water Prize — Runner-Up</li>
  <li>Broadcom MASTERS — Robert Wood Johnson Award</li>
</ul>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Emily Tianshi",
      sameAs: ["https://linkedin.com/in/emilytianshi"],
      jobTitle: "Student & Researcher",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS (in progress)",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "TEP Fellow / Intern",
          organization: {
            "@type": "Organization",
            name: "Cybersecurity and Infrastructure Security Agency (CISA)",
            description: "U.S. federal agency responsible for cybersecurity and election infrastructure",
          },
          _whatTheyBuilt: "Worked on cybersecurity and election infrastructure projects",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Researcher",
          organization: {
            "@type": "Organization",
            name: "Stanford Democracy Hub / Election Integrity Partnership",
            description: "Research on election security and misinformation",
          },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Research Intern",
          organization: {
            "@type": "Organization",
            name: "Deheyn Lab, Scripps Institution of Oceanography, UC San Diego",
            description: "Marine bioluminescence and environmental science research",
          },
          _whatTheyBuilt: "Environmental science research leading to multiple national competition wins",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      knowsAbout: [
        { skill: "Environmental Science", type: "domain", _confidence: 0.95, _evidence: "Davidson Fellow, ISEF 2nd place, JSHS 1st, Stockholm Junior Water Prize runner-up, Scripps research" },
        { skill: "Election Security / Civic Tech", type: "domain", _confidence: 0.85, _evidence: "CISA internship (TEP Fellow), Stanford Democracy Hub, Election Integrity Partnership" },
        { skill: "Documentary Filmmaking", type: "creative", _confidence: 0.85, _evidence: "HP documentary on Amazon Prime Video" },
        { skill: "Cybersecurity", type: "domain", _confidence: 0.70, _evidence: "CISA TEP Fellowship" },
        { skill: "Marine Biology", type: "domain", _confidence: 0.80, _evidence: "Research at Deheyn Lab, Scripps Institution of Oceanography" },
      ],
      memberOf: [
        { name: "Davidson Fellow", _verificationStatus: "public" },
        { name: "Stanford Democracy Hub", _verificationStatus: "public" },
        { name: "Election Integrity Partnership", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "HP (Documentary)", type: "creative", description: "Documentary film on Amazon Prime Video", status: "completed", _gaps: ["Subject matter details", "Production timeline"] },
        { name: "Environmental science research", type: "research", description: "Marine/environmental research at Scripps leading to ISEF, JSHS, Davidson wins", status: "completed" },
        { name: "Election integrity research", type: "research", description: "Work on election security and misinformation at Stanford", status: "unknown" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: ["Davidson Fellows", "Society for Science (ISEF)", "JSHS", "Stockholm Junior Water Prize", "Broadcom MASTERS", "Scripps/UCSD", "CISA", "Stanford Democracy Hub", "Election Integrity Partnership", "Amazon Prime Video", "LinkedIn", "Stanford Daily"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Stanford major and expected graduation year",
          "HP documentary subject matter and reception",
          "Current research focus at Stanford",
          "Specific CISA projects",
          "Technical skills and programming languages",
        ],
        recommendation: "Stanford profile review and interview would clarify current focus and technical capabilities.",
      },
    },
    infobox: {
      fullName: "Emily Tianshi",
      currentRole: "Student & Researcher",
      org: "Stanford University",
      education: ["Stanford University (BS, in progress)"],
      knownFor: [
        "Davidson Fellow ($25K scholarship)",
        "Intel ISEF — 2nd Place",
        "JSHS — 1st Place",
        "Stockholm Junior Water Prize — Runner-Up",
        "CISA TEP Fellow",
        "HP documentary (Amazon Prime)",
      ],
      links: [
        { label: "Davidson Fellows", url: "https://www.davidsonfellows.org/" },
        { label: "Stanford Democracy Hub", url: "https://democratize.stanford.edu/" },
      ],
    },
    references: [
      { title: "Davidson Fellows Program", url: "https://www.davidsonfellows.org/" },
      { title: "Society for Science — ISEF", url: "https://www.societyforscience.org/isef/" },
      { title: "Deheyn Lab — Scripps, UCSD", url: "https://deheyn.ucsd.edu/" },
      { title: "Stanford Democracy Hub", url: "https://democratize.stanford.edu/" },
      { title: "Election Integrity Partnership", url: "https://eipartnership.net/" },
    ],
  },

  // ===========================================================================
  // 7. Avalon Sueiro
  // ===========================================================================
  avalon_sueiro: {
    slug: "avalon_sueiro",
    name: "Avalon Sueiro",
    currentRole: "Student",
    org: "Carnegie Mellon University",
    education: [
      { institution: "Carnegie Mellon University", degree: "Undergraduate", years: "2022–present", notes: "Enrolled fall 2022" },
    ],
    humanContent: `
<p><strong>Avalon Sueiro</strong> (also known as Avalon Suero) is a student at Carnegie Mellon University and a youth entrepreneur who grew up traveling the world with her family. She has visited over 65 countries and crossed the Atlantic Ocean by catamaran. She speaks English, Spanish, French, and Japanese.</p>

<h2>Early life and education</h2>
<p>Sueiro grew up in a worldschooling family, traveling to over 65 countries and receiving education through experiential learning across multiple continents. Her family crossed the Atlantic Ocean by catamaran. She speaks four languages: English, Spanish, French, and Japanese. She enrolled at Carnegie Mellon University in the fall of 2022.</p>

<h2>Notable work</h2>
<h3>The Novelers</h3>
<p>Sueiro founded <strong>The Novelers</strong>, a children's book club program designed to foster reading engagement among young people.</p>

<h3>Intello Tutor</h3>
<p>She founded <strong>Intello Tutor</strong>, a language tutoring service.</p>

<h3>Possibilities</h3>
<p>Sueiro created <strong>Possibilities</strong>, an accessibility database designed to help people find accessible resources and services.</p>

<h2>Public contributions</h2>
<p>Sueiro was a speaker at the <strong>Hero Round Table</strong> in 2022 and 2023, a conference focused on youth leadership and social impact.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Avalon Sueiro",
      alternateName: "Avalon Suero",
      jobTitle: "Student",
      worksFor: { "@type": "Organization", name: "Carnegie Mellon University" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Carnegie Mellon University",
          degree: "Undergraduate (in progress)",
          startDate: "2022",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
      ],
      hasOccupation: [],
      knowsAbout: [
        { skill: "English", type: "language", _confidence: 0.95, _evidence: "Native speaker" },
        { skill: "Spanish", type: "language", _confidence: 0.85, _evidence: "Listed as spoken language" },
        { skill: "French", type: "language", _confidence: 0.80, _evidence: "Listed as spoken language" },
        { skill: "Japanese", type: "language", _confidence: 0.70, _evidence: "Listed as spoken language, level unconfirmed" },
        { skill: "Youth entrepreneurship", type: "domain", _confidence: 0.80, _evidence: "Founded The Novelers, Intello Tutor, and Possibilities" },
        { skill: "Accessibility / Inclusive Design", type: "domain", _confidence: 0.65, _evidence: "Created Possibilities accessibility database" },
      ],
      _projects: [
        { name: "The Novelers", type: "product", description: "Children's book club program", status: "unknown" },
        { name: "Intello Tutor", type: "product", description: "Language tutoring service", status: "unknown" },
        { name: "Possibilities", type: "product", description: "Accessibility database for finding accessible resources", status: "unknown" },
      ],
      _dataQuality: {
        sourcesConsulted: 6,
        sourceList: ["Hero Round Table", "CMU enrollment", "personal/family blog", "LinkedIn", "web search", "speaker profiles"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "MEDIUM",
          education: "MEDIUM",
          careerTimeline: "LOW",
          technicalCapabilities: "LOW",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "CMU major and expected graduation",
          "Current projects or employment",
          "Technical skills and programming experience",
          "Status of The Novelers, Intello Tutor, and Possibilities",
          "Academic or professional achievements at CMU",
        ],
        recommendation: "Direct interview and CMU profile review needed. Most information comes from pre-college activities.",
      },
    },
    infobox: {
      fullName: "Avalon Sueiro",
      currentRole: "Student",
      org: "Carnegie Mellon University",
      education: ["Carnegie Mellon University (Undergraduate, 2022–)"],
      knownFor: [
        "Worldschooling across 65+ countries",
        "Crossed Atlantic by catamaran",
        "Founded The Novelers, Intello Tutor, Possibilities",
        "Speaks English, Spanish, French, Japanese",
        "Hero Round Table speaker (2022–23)",
      ],
      links: [],
    },
    references: [
      { title: "Hero Round Table — Speaker Profile", url: "https://heroroundtable.com" },
    ],
  },

  // ===========================================================================
  // 8. Michael Hla
  // ===========================================================================
  michael_hla: {
    slug: "michael_hla",
    name: "Michael Hla",
    currentRole: "Research",
    org: "EvolutionaryScale",
    education: [
      { institution: "Harvard University", degree: "BA", field: "Computer Science & Biology", notes: "Writer for The Harvard Crimson" },
    ],
    humanContent: `
<p><strong>Michael Hla</strong> is a machine learning researcher and computational biologist specializing in protein design and biological AI. He works at <a href="https://www.evolutionaryscale.ai/">EvolutionaryScale</a> in Palo Alto, the company behind the ESM (Evolutionary Scale Modeling) protein language models. Previously, he was at <a href="https://www.shv.com/">Sutter Hill Ventures</a> and was a <a href="https://776.org/">776 Foundation</a> Climate Fellow under Alexis Ohanian. Hla studied Computer Science and Biology at <a href="https://www.harvard.edu/">Harvard University</a>, where he also wrote for <a href="https://www.thecrimson.com/">The Harvard Crimson</a>.</p>

<h2>Education</h2>
<p>Hla attended Harvard University, where he studied Computer Science and Biology. While at Harvard, he was a writer for The Harvard Crimson, the university's daily newspaper, where his work included an <a href="https://www.thecrimson.com/">article on Top Gun</a>.</p>

<h2>Career</h2>
<h3>EvolutionaryScale</h3>
<p>Hla currently works in research at EvolutionaryScale, a leading protein AI company headquartered in Palo Alto. The company develops the ESM series of large-scale protein language models for biological research, protein engineering, and drug discovery.</p>

<h3>Sutter Hill Ventures</h3>
<p>Prior to EvolutionaryScale, Hla worked at Sutter Hill Ventures, a venture capital firm known for early investments in companies including Snowflake and Pure Storage.</p>

<h3>776 Foundation Climate Fellow</h3>
<p>Hla was selected as a Climate Fellow by the <a href="https://776.org/">776 Foundation</a>, founded by <a href="https://en.wikipedia.org/wiki/Alexis_Ohanian">Alexis Ohanian</a> (co-founder of Reddit). Ohanian publicly endorsed Hla's work on LinkedIn, calling it "incredible work by one of our 776 Foundation fellows." His fellowship work culminated in the <strong>hCA-776</strong> project on LLM-optimized carbonic anhydrase for carbon capture.</p>

<h2>Notable work</h2>
<h3>Pro-1: Open-source protein reasoning model</h3>
<p>Hla developed <a href="https://github.com/michaelhla/pro-1"><strong>Pro-1</strong></a>, a fully open-source reasoning model for protein engineering, available in 8B and 70B parameter variants. The model is built on Meta's Llama-3.1-8B-Instruct and Llama-3.3-70B-Instruct, fine-tuned using 4-bit QLoRA and Group Relative Policy Optimization (GRPO). The supervised fine-tuning (SFT) phase incorporates data from the <a href="https://www.brenda-enzymes.org/">BRENDA</a> enzyme database, <a href="https://en.wikipedia.org/wiki/BLOSUM">BLOSUM</a> substitution matrices, and <a href="https://www.evolutionaryscale.ai/">ESM3</a> mutation predictions. The reward function is based on <a href="https://www.rosettacommons.org/">Rosetta REF2015</a>, incorporating Van der Waals interactions, electrostatics, and statistical potentials, augmented with creativity and specificity reward components.</p>
<p>Pro-1 achieved a 71% pass rate when combined with a critic feedback loop over three iterations. Wet-lab validation at <a href="https://www.adaptyvbio.com/">Adaptyv Bio</a> tested 19 FGF-1 (fibroblast growth factor 1) designs, of which 3 showed improved thermostability with gains up to 23 degrees Celsius. The project was featured in an <a href="https://www.adaptyvbio.com/blog/pro1/">Adaptyv Bio Designer Spotlight</a>. The GitHub repository (<a href="https://github.com/michaelhla/pro-1">michaelhla/pro-1</a>) has accumulated 101 stars. Pro-1 was also cited by Stanford's <a href="https://cs224r.stanford.edu/projects/">CS 224R</a> course, with researchers writing "We extend the method of Hla (2025)."</p>

<h3>hCA-776: LLM-optimized carbonic anhydrase for carbon capture</h3>
<p>The <a href="https://michaelhla.com/blog/hca776.html"><strong>hCA-776</strong></a> project applied large language models to optimize human carbonic anhydrase II for industrial carbon capture. Hla compared multiple approaches including Pro-1, Claude Sonnet 4 equipped with PyMOL structural analysis tools, and an o3-powered variant. The best designs demonstrated 170% higher catalytic activity and 25% greater stability across extreme pH conditions compared to wild-type. Of 11 designed sequences, 8 successfully expressed in laboratory testing.</p>

<h3>SMILES-MDLM: Masked diffusion for molecular generation</h3>
<p>Hla developed <a href="https://michaelhla.com/blog/smiles-mdlm.html"><strong>SMILES-MDLM</strong></a>, a Masked Diffusion Language Model for de novo molecule generation using SMILES notation. The model uses a Diffusion Transformer (DiT) backbone with approximately 180 million parameters and a custom atom group tokenizer with 282 tokens. The system achieved a BLEU score of 0.678 on molecular generation benchmarks.</p>

<h3>Other projects</h3>
<p>Hla's <a href="https://github.com/michaelhla">GitHub profile</a> (17 repositories, 25 followers) includes additional projects: <strong>altdrugs.ai</strong> (a variational autoencoder for drug alternative discovery), <strong>fastfold</strong> (an accelerated implementation of AlphaFold), <strong>smiles-dreamer</strong>, and <strong>gpt1900</strong>. Models are also published on <a href="https://huggingface.co/mhla">Hugging Face</a>.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michael Hla",
      url: "https://michaelhla.com",
      sameAs: [
        "https://github.com/michaelhla",
        "https://linkedin.com/in/michaelhla",
        "https://twitter.com/hla_michael",
        "https://huggingface.co/mhla",
      ],
      jobTitle: "Research",
      worksFor: { "@type": "Organization", name: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Harvard University",
          degree: "BA Computer Science & Biology",
          _verificationStatus: "public",
          _confidence: 0.95,
          _notes: "Previously misreported as Stanford; confirmed Harvard via Crimson byline and personal site",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Research",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "EvolutionaryScale",
            url: "https://www.evolutionaryscale.ai/",
            description: "Protein AI company developing ESM protein language models",
          },
          _whatTheyBuilt: "Research on protein language models and biological AI",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Specific team and project contributions at ESM unknown"],
        },
        {
          "@type": "Role",
          roleName: "Analyst",
          organization: {
            "@type": "Organization",
            name: "Sutter Hill Ventures",
            url: "https://www.shv.com/",
            description: "VC firm (Snowflake, Pure Storage early investor)",
          },
          _verificationStatus: "public",
          _confidence: 0.85,
          _gaps: ["Dates unknown", "Specific deal involvement unknown"],
        },
        {
          "@type": "Role",
          roleName: "776 Foundation Climate Fellow",
          organization: {
            "@type": "Organization",
            name: "776 Foundation",
            url: "https://776.org/",
            description: "Fellowship program founded by Alexis Ohanian (Reddit co-founder)",
          },
          _whatTheyBuilt: "hCA-776 carbonic anhydrase optimization for carbon capture",
          _verificationStatus: "public",
          _confidence: 0.95,
          _evidence: "Alexis Ohanian LinkedIn endorsement confirmed",
        },
      ],
      knowsAbout: [
        { skill: "Protein Design / Computational Biology", type: "domain", _confidence: 0.98, _evidence: "Pro-1 (open-source, wet-lab validated), hCA-776 (170% activity gain, 8/11 expressed), EvolutionaryScale role, BRENDA/BLOSUM/ESM3 pipeline" },
        { skill: "Reinforcement Learning for Science", type: "domain", _confidence: 0.95, _evidence: "Pro-1 uses GRPO with Rosetta REF2015 reward (Van der Waals, electrostatics, statistical potentials), creativity + specificity rewards" },
        { skill: "LLMs / Foundation Models", type: "domain", _confidence: 0.95, _evidence: "Pro-1 (Llama-3.1/3.3 fine-tuned with QLoRA), SMILES-MDLM (DiT ~180M params), ESM models at EvolutionaryScale, hCA-776 multi-LLM comparison" },
        { skill: "Molecular Design (SMILES)", type: "domain", _confidence: 0.90, _evidence: "SMILES-MDLM (BLEU 0.678, custom 282-token tokenizer), altdrugs.ai VAE" },
        { skill: "Python", type: "technology", _confidence: 0.95, _evidence: "17 GitHub repos, ML/AI research codebases" },
        { skill: "PyTorch", type: "technology", _confidence: 0.90, _evidence: "QLoRA training, DiT backbone implementation, RL training pipelines" },
        { skill: "Structural Biology Tools", type: "technology", _confidence: 0.85, _evidence: "Rosetta REF2015 scoring, PyMOL integration in hCA-776, AlphaFold (fastfold project)" },
      ],
      memberOf: [
        { name: "776 Foundation Climate Fellow", _verificationStatus: "public", _evidence: "Alexis Ohanian LinkedIn endorsement" },
        { name: "The Harvard Crimson (writer)", _verificationStatus: "public" },
      ],
      _projects: [
        {
          name: "Pro-1",
          type: "research/open-source",
          url: "https://github.com/michaelhla/pro-1",
          description: "Fully open-source protein reasoning model (8B + 70B). Base: Llama-3.1-8B-Instruct / Llama-3.3-70B-Instruct. Training: 4-bit QLoRA + GRPO. SFT: BRENDA, BLOSUM, ESM3 mutations. Reward: Rosetta REF2015 + creativity + specificity. 71% pass rate with critic loop (3 iter). Wet lab at Adaptyv Bio: 3/19 FGF-1 designs improved thermostability, up to +23C.",
          status: "completed",
          _metrics: { githubStars: 101, wetLabResults: "3/19 improved, up to +23C", passRate: "71% with critic loop" },
          _recognition: "Cited by Stanford CS 224R: 'We extend the method of Hla (2025)'. Featured in Adaptyv Bio Designer Spotlight.",
        },
        {
          name: "hCA-776",
          type: "research",
          url: "https://michaelhla.com/blog/hca776.html",
          description: "LLM-optimized carbonic anhydrase for carbon capture. Compared Pro-1, Claude Sonnet 4 (with PyMOL tools), o3-powered variant. Best designs 170% more active, 25% more stable across extreme pH. 8/11 sequences expressed.",
          status: "completed",
          _metrics: { activityGain: "170%", stabilityGain: "25%", expressionRate: "8/11" },
        },
        {
          name: "SMILES-MDLM",
          type: "research",
          url: "https://michaelhla.com/blog/smiles-mdlm.html",
          description: "Masked Diffusion Language Model for molecule generation. DiT backbone ~180M params. Custom atom group tokenizer (282 tokens). BLEU 0.678.",
          status: "completed",
          _metrics: { bleuScore: 0.678, params: "~180M", vocabSize: 282 },
        },
        {
          name: "altdrugs.ai",
          type: "open-source",
          url: "https://github.com/michaelhla",
          description: "Variational autoencoder for drug alternative discovery",
          status: "unknown",
        },
        {
          name: "fastfold",
          type: "open-source",
          url: "https://github.com/michaelhla",
          description: "Accelerated AlphaFold implementation",
          status: "unknown",
        },
      ],
      _dataQuality: {
        sourcesConsulted: 14,
        sourceList: [
          "michaelhla.com",
          "michaelhla.com/blog/pro1.html",
          "michaelhla.com/blog/hca776.html",
          "michaelhla.com/blog/smiles-mdlm.html",
          "GitHub (michaelhla, 17 repos)",
          "Hugging Face (mhla)",
          "Adaptyv Bio Designer Spotlight",
          "Stanford CS 224R course projects",
          "LinkedIn (michaelhla)",
          "Twitter (hla_michael)",
          "Alexis Ohanian LinkedIn endorsement",
          "The Harvard Crimson",
          "EvolutionaryScale",
          "Sutter Hill Ventures",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH — corrected from Stanford to Harvard",
          careerTimeline: "HIGH",
          technicalCapabilities: "VERY HIGH — wet-lab validated, open-source, cited by Stanford CS",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Specific role and team at EvolutionaryScale",
          "Harvard graduation year",
          "Duration at Sutter Hill Ventures",
          "Peer-reviewed publication status for Pro-1 and hCA-776",
          "776 Fellowship exact dates",
        ],
        corrections: [
          "Education corrected from Stanford to Harvard (confirmed via Crimson byline and personal site)",
          "Haize Labs red-teaming role NOT confirmed — removed from profile",
        ],
        recommendation: "Publication records and EvolutionaryScale team page would fully complete this profile. Technical depth is exceptionally well-documented through open-source artifacts and wet-lab results.",
      },
    },
    infobox: {
      fullName: "Michael Hla",
      currentRole: "Research",
      org: "EvolutionaryScale",
      education: ["Harvard University (BA Computer Science & Biology)"],
      knownFor: [
        "Pro-1: open-source protein reasoning model (wet-lab validated, cited by Stanford CS 224R)",
        "hCA-776: LLM-optimized carbonic anhydrase, 170% more active for carbon capture",
        "SMILES-MDLM: masked diffusion for molecular generation",
        "776 Foundation Climate Fellow (Alexis Ohanian)",
        "Research at EvolutionaryScale (ESM protein language models)",
      ],
      website: "https://michaelhla.com",
      links: [
        { label: "Website", url: "https://michaelhla.com" },
        { label: "GitHub", url: "https://github.com/michaelhla" },
        { label: "Hugging Face", url: "https://huggingface.co/mhla" },
        { label: "Twitter", url: "https://twitter.com/hla_michael" },
        { label: "LinkedIn", url: "https://linkedin.com/in/michaelhla" },
        { label: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
      ],
    },
    references: [
      { title: "Michael Hla — Personal Website", url: "https://michaelhla.com" },
      { title: "Pro-1 Blog Post", url: "https://michaelhla.com/blog/pro1.html" },
      { title: "hCA-776 Blog Post", url: "https://michaelhla.com/blog/hca776.html" },
      { title: "SMILES-MDLM Blog Post", url: "https://michaelhla.com/blog/smiles-mdlm.html" },
      { title: "Pro-1 GitHub Repository (101 stars)", url: "https://github.com/michaelhla/pro-1" },
      { title: "Pro-1 on Hugging Face", url: "https://huggingface.co/mhla/pro-1" },
      { title: "Adaptyv Bio — Pro-1 Designer Spotlight", url: "https://www.adaptyvbio.com/blog/pro1/" },
      { title: "Stanford CS 224R — Course Projects (cites Hla 2025)", url: "https://cs224r.stanford.edu/projects/" },
      { title: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
      { title: "Sutter Hill Ventures", url: "https://www.shv.com/" },
    ],
  },

  // ===========================================================================
  // 9. Mirabella Sabbagh
  // ===========================================================================
  mirabella_sabbagh: {
    slug: "mirabella_sabbagh",
    name: "Mira Bella Sabbagh",
    currentRole: "Product Design Intern",
    org: "Onton",
    education: [
      { institution: "Pomona College", degree: "BA (in progress)", field: "Cognitive Science & Art", years: "2023–2027 (expected)", notes: "UWC Davis Scholar. Junior year as of 2025–26." },
    ],
    humanContent: `
<p><strong>Mira Bella Sabbagh</strong> is a student at <a href="https://www.pomona.edu/">Pomona College</a> in Claremont, California, where she is a junior studying Cognitive Science and Art. She is a <a href="https://www.davisuwcscholars.org/">UWC Davis Scholar</a>. Her interests center on the intersection of design, behavioral science, and artificial intelligence.</p>

<h2>Education</h2>
<p>Sabbagh is a junior at Pomona College, one of the Claremont Colleges, pursuing a dual focus in Cognitive Science and Art. She was awarded a UWC Davis Scholarship, a merit-based program supporting graduates of United World Colleges at select U.S. universities.</p>

<h2>Career</h2>
<h3>Onton</h3>
<p>In the summer of 2025 (June through August), Sabbagh interned as a <strong>Product Design Intern</strong> at <a href="https://www.onton.ai/">Onton</a>, a San Francisco-based startup founded in 2022 with 1 to 10 employees. During her internship, she collaborated on product design and strategic scalability for a platform serving 2 million monthly users. She compartmentalized designs for production readiness and contributed to sourcing and outreach with best-in-class product designers.</p>

<h2>Professional profile</h2>
<p>Sabbagh has accumulated approximately 2 years and 4 months of professional experience. Her LinkedIn profile shows over 500 connections and 712 followers, indicating an active professional network. Her work sits at the intersection of design, behavioral science, and artificial intelligence.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mira Bella Sabbagh",
      alternateName: "Mirabella Sabbagh",
      sameAs: [
        "https://linkedin.com/in/mirabellasabbagh",
      ],
      jobTitle: "Product Design Intern",
      worksFor: { "@type": "Organization", name: "Onton", url: "https://www.onton.ai/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Pomona College",
          degree: "BA Cognitive Science & Art (in progress)",
          startDate: "2023",
          endDate: "2027",
          _verificationStatus: "public",
          _confidence: 0.90,
          _notes: "UWC Davis Scholar. Junior as of 2025-26 academic year.",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Product Design Intern",
          startDate: "2025-06",
          endDate: "2025-08",
          organization: {
            "@type": "Organization",
            name: "Onton",
            url: "https://www.onton.ai/",
            description: "San Francisco startup (founded 2022, 1-10 employees) with 2M monthly users",
          },
          _whatTheyBuilt: "Product design and strategic scalability for 2M-user platform; compartmentalized designs for production readiness; sourcing/outreach with product designers",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      knowsAbout: [
        { skill: "Product Design", type: "domain", _confidence: 0.90, _evidence: "Product Design Intern at Onton (2M MAU platform)" },
        { skill: "Cognitive Science", type: "domain", _confidence: 0.85, _evidence: "Pomona College major in Cognitive Science" },
        { skill: "Art / Visual Design", type: "domain", _confidence: 0.80, _evidence: "Pomona College major in Art" },
        { skill: "Behavioral Science", type: "domain", _confidence: 0.75, _evidence: "Self-described interest area on LinkedIn" },
        { skill: "AI / Artificial Intelligence", type: "domain", _confidence: 0.70, _evidence: "Self-described interest area; intersection with design work" },
      ],
      memberOf: [
        { name: "UWC Davis Scholar", _verificationStatus: "public" },
      ],
      _dataQuality: {
        sourcesConsulted: 5,
        sourceList: [
          "LinkedIn (mirabellasabbagh, 500+ connections, 712 followers)",
          "Pomona College",
          "UWC Davis Scholars Program",
          "Onton company profile",
          "Web search",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "MEDIUM",
          education: "MEDIUM",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "No personal website found",
          "Portfolio or design work samples not publicly available",
          "UWC origin school unknown",
          "Other internships or work experience beyond Onton not documented",
          "Specific design tools and technical skills unknown",
          "Only ~2.3 years professional experience documented",
        ],
        recommendation: "Portfolio review and additional LinkedIn details would strengthen this profile. Limited public footprint beyond LinkedIn.",
      },
    },
    infobox: {
      fullName: "Mira Bella Sabbagh",
      currentRole: "Product Design Intern",
      org: "Onton",
      education: [
        "Pomona College (BA Cognitive Science & Art, junior, UWC Davis Scholar)",
      ],
      knownFor: [
        "Product design at Onton (2M monthly users)",
        "Intersection of design, behavioral science, and AI",
        "UWC Davis Scholar at Pomona College",
      ],
      links: [
        { label: "LinkedIn", url: "https://linkedin.com/in/mirabellasabbagh" },
      ],
    },
    references: [
      { title: "Mirabella Sabbagh — LinkedIn", url: "https://linkedin.com/in/mirabellasabbagh" },
      { title: "Pomona College", url: "https://www.pomona.edu/" },
      { title: "UWC Davis Scholars Program", url: "https://www.davisuwcscholars.org/" },
      { title: "Onton", url: "https://www.onton.ai/" },
      { title: "Claremont Colleges", url: "https://www.claremont.edu/" },
    ],
  },

  // ===========================================================================
  // 10. Zeena Khazendar
  // ===========================================================================
  zeena_khazendar: {
    slug: "zeena_khazendar",
    name: "Zeena Khazendar",
    currentRole: "AmeriCorps VISTA Fellow",
    org: "Border Youth Tennis Exchange (BYTE)",
    education: [
      { institution: "Stanford University", degree: "BS", field: "Human Biology", years: "2019–2023", notes: "Concentration: Design for Global Health and Social Impact. Minor: Human Rights. Pre-med. NCAA D1 Beach Volleyball. 3x Pac-12 Academic Honor Roll." },
      { institution: "Palm Harbor University High School", degree: "High School Diploma", years: "2015–2019", notes: "Team captain indoor volleyball (2018-2020). Regional finalist. District champions 4 years. 'Hustle and Heart' award." },
    ],
    humanContent: `
<p><strong>Zeena Khazendar</strong> is a Palestinian-American researcher, NCAA Division I athlete, public health advocate, and community organizer. She graduated from <a href="https://www.stanford.edu/">Stanford University</a> in 2023 with a degree in Human Biology (concentration in Design for Global Health and Social Impact) and a minor in Human Rights. She competed on the <a href="https://gostanford.com/sports/beach-volleyball/roster/player/zeena-khazendar">Stanford Cardinal NCAA D1 Beach Volleyball</a> team and was a 3x <a href="https://pac-12.com/">Pac-12</a> Academic Honor Roll recipient. She is currently an <a href="https://americorps.gov/serve/fit-finder/americorps-vista">AmeriCorps VISTA</a> Fellow at the <a href="https://bytetennis.org/">Border Youth Tennis Exchange (BYTE)</a>.</p>

<h2>Early life</h2>
<p>Khazendar is of Palestinian heritage; her grandparents were Palestinian refugees. She grew up in Jordan before her family settled in Palm Harbor, Florida. She attended Palm Harbor University High School (PHUHS), graduating with the class of 2019. In high school, she was team captain of the indoor volleyball team from 2018 to 2020, earning the "Hustle and Heart" award. Her team was a regional finalist and won district championships four consecutive years. She trained at <a href="https://bevolleyacademy.com/">Bevolley Academy</a> in Tampa from the age of 12.</p>

<h2>Education</h2>
<p>Khazendar enrolled at Stanford University in 2019, graduating with the Class of 2023. She majored in Human Biology with a concentration in Design for Global Health and Social Impact, and minored in Human Rights, on a pre-med track. In 2021, she was selected as a <a href="https://neuroscience.stanford.edu/people/zeena-khazendar">NeURO Trainee</a> at the Wu Tsai Neurosciences Institute, working in the Biobehavioral Pediatric Pain Lab.</p>

<h2>Athletic career</h2>
<p>Khazendar competed on the <a href="https://gostanford.com/sports/beach-volleyball/roster/player/zeena-khazendar">Stanford Cardinal NCAA Division I Beach Volleyball</a> team, ranked #15 nationally. She was named to the Pac-12 Academic Honor Roll three consecutive years (2021, 2022, 2023). Her freshman through junior seasons were significantly impacted by COVID-19. In her senior season, she posted a 1-0 record on Court 5 paired with Kylee Matheson, defeating Pacific.</p>

<h2>Research and publications</h2>
<p>Khazendar has co-authored 3 or more peer-reviewed publications indexed on <a href="https://www.researchgate.net/scientific-contributions/Zeena-Khazendar-2194398860">ResearchGate</a>:</p>
<ul>
<li>"Measuring Clinically Meaningful Change in Outcomes for Youth With Chronic Pain Following Graded Exposure Treatment" — <em>Clinical Journal of Pain</em>, Vol. 38, Issue 5, April 2022. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9012214/">PMC9012214</a>. Cited 14 times.</li>
<li>"Rapid Transition to Virtual Assessment and Treatment in an Interdisciplinary Randomized Clinical Trial for Youth With Chronic Pain" — <em>Clinical Journal of Pain</em>, April 2022.</li>
<li>"Psychological and Social Suffering of Another Generation of Palestinian Children Living Under Occupation: An Urgent Call to Advocate" — <a href="https://hhrjournal.org/2024/05/24/psychological-and-social-suffering"><em>Health and Human Rights Journal</em></a>, Vol. 26/1, May 2024.</li>
</ul>

<h2>Public health and advocacy</h2>
<h3>TEDx Talk</h3>
<p>On April 18, 2021, Khazendar delivered a TEDx talk titled <a href="https://www.youtube.com/watch?v=9EO5JsBUB-Y">"A New Lens on Positive Deviance: Successes in Refugee Healthcare"</a> at TEDxYouth@PHUHS. The talk runs 13 minutes and 59 seconds and has accumulated approximately 1,200 views.</p>

<h3>Newman Civic Fellow</h3>
<p>Khazendar was named a <a href="https://compact.org/current-programs/newman-civic-fellowship/newman-civic-fellows/zeena">2022-2023 Newman Civic Fellow</a> by Campus Compact, nominated by then-Stanford President Marc Tessier-Lavigne. As a Newman Fellow, she worked with the Stanford Medicine MENA Health Program on mental health initiatives for Yemeni women and girls. She was <a href="https://news.stanford.edu/stories/2022/03/junior-zeena-khazendar">featured by Stanford News</a> for this work.</p>

<h3>BeAGoodDoctor / SCOPE</h3>
<p>Khazendar served as Associate Director and later Director of BeAGoodDoctor/SCOPE, a medical education initiative. She provided Spanish and Vietnamese interpretation at Santa Clara Valley Medical Center, a level-one trauma center.</p>

<h3>Virtual Mentorship for Students Abroad (VMSA)</h3>
<p>Khazendar founded the <strong>Virtual Mentorship for Students Abroad (VMSA)</strong> program, connecting mentors with students in international and underserved settings.</p>

<h3>Special Olympics and community sports</h3>
<p>Khazendar served as head coach of a Special Olympics volleyball team in Palm Harbor. At Stanford, she was Sports Director for Kids with Dreams (KWD), a program providing athletic opportunities for children with disabilities.</p>

<h2>Post-Stanford career</h2>
<p>After graduating from Stanford, Khazendar joined <a href="https://bytetennis.org/zeena-khazendar">Border Youth Tennis Exchange (BYTE)</a> as an AmeriCorps VISTA Fellow, working on youth development through tennis programming along the U.S.-Mexico border.</p>

<h2>Media coverage</h2>
<p>Khazendar was featured in the <a href="https://stanforddaily.com/2023/09/27/no-longer-the-best">Stanford Daily</a> in September 2023 in an article titled "No longer the best," exploring athlete burnout and the psychological challenges of transitioning from collegiate athletics.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zeena Khazendar",
      sameAs: [
        "https://gostanford.com/sports/beach-volleyball/roster/player/zeena-khazendar",
        "https://www.researchgate.net/scientific-contributions/Zeena-Khazendar-2194398860",
        "https://neuroscience.stanford.edu/people/zeena-khazendar",
      ],
      jobTitle: "AmeriCorps VISTA Fellow",
      worksFor: { "@type": "Organization", name: "Border Youth Tennis Exchange (BYTE)", url: "https://bytetennis.org/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Human Biology (Design for Global Health & Social Impact)",
          minor: "Human Rights",
          startDate: "2019",
          endDate: "2023",
          _verificationStatus: "public",
          _confidence: 0.98,
          _notes: "Class of 2023. Pre-med track. NCAA D1 Beach Volleyball. 3x Pac-12 Academic Honor Roll.",
        },
        {
          "@type": "EducationalOrganization",
          name: "Palm Harbor University High School",
          startDate: "2015",
          endDate: "2019",
          _verificationStatus: "public",
          _confidence: 0.95,
          _notes: "Palm Harbor, Florida. Class of 2019.",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "AmeriCorps VISTA Fellow",
          startDate: "2023",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Border Youth Tennis Exchange (BYTE)",
            url: "https://bytetennis.org/",
            description: "Youth development through tennis along the U.S.-Mexico border",
          },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "Director",
          organization: {
            "@type": "Organization",
            name: "BeAGoodDoctor / SCOPE",
            description: "Medical education initiative. Provided Spanish and Vietnamese interpretation at Santa Clara Valley Medical Center (level-one trauma center).",
          },
          _verificationStatus: "public",
          _confidence: 0.85,
          _notes: "Promoted from Associate Director to Director.",
        },
        {
          "@type": "Role",
          roleName: "NeURO Trainee",
          startDate: "2021",
          organization: {
            "@type": "Organization",
            name: "Wu Tsai Neurosciences Institute, Stanford",
            url: "https://neuroscience.stanford.edu/",
            description: "Biobehavioral Pediatric Pain Lab",
          },
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Newman Civic Fellow",
          startDate: "2022",
          endDate: "2023",
          organization: {
            "@type": "Organization",
            name: "Campus Compact",
            url: "https://compact.org/",
            description: "Nominated by Stanford President Tessier-Lavigne. Worked with Stanford Medicine MENA Health Program on Yemeni women/girls' mental health.",
          },
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "NCAA D1 Beach Volleyball Athlete (#15 nationally)",
          startDate: "2019",
          endDate: "2023",
          organization: {
            "@type": "Organization",
            name: "Stanford Cardinal Athletics",
            url: "https://gostanford.com/sports/beach-volleyball",
            description: "Division I women's beach volleyball. Senior season: 1-0, Court 5 with Kylee Matheson, defeated Pacific.",
          },
          _verificationStatus: "public",
          _confidence: 0.98,
        },
      ],
      knowsAbout: [
        { skill: "Global Health / Public Health", type: "domain", _confidence: 0.95, _evidence: "Stanford concentration in Design for Global Health & Social Impact, TEDx talk on refugee healthcare, 3+ peer-reviewed publications, Newman Civic Fellowship" },
        { skill: "Human Rights / Refugee Health", type: "domain", _confidence: 0.95, _evidence: "Stanford minor in Human Rights, HHR Journal publication on Palestinian children, TEDx on positive deviance in refugee settings" },
        { skill: "Pediatric Pain Research", type: "domain", _confidence: 0.90, _evidence: "NeURO Trainee at Biobehavioral Pediatric Pain Lab, 2 publications in Clinical Journal of Pain (1 with 14 citations, PMC9012214)" },
        { skill: "Beach Volleyball", type: "athletic", _confidence: 0.98, _evidence: "Stanford D1 roster #15 nationally, 3x Pac-12 Academic Honor Roll, Bevolley Academy training from age 12" },
        { skill: "Medical Interpretation (Spanish, Vietnamese)", type: "skill", _confidence: 0.85, _evidence: "Interpreted at Santa Clara Valley Medical Center level-one trauma center via SCOPE" },
        { skill: "Community Organizing / Youth Development", type: "domain", _confidence: 0.90, _evidence: "Founded VMSA, Special Olympics head coach, KWD Sports Director, BYTE AmeriCorps VISTA" },
      ],
      memberOf: [
        { name: "Stanford NCAA D1 Beach Volleyball (3x Pac-12 Academic Honor Roll)", _verificationStatus: "public" },
        { name: "Newman Civic Fellow 2022-23 (Campus Compact)", _verificationStatus: "public" },
        { name: "NeURO Trainee, Wu Tsai Neurosciences Institute", _verificationStatus: "public" },
        { name: "AmeriCorps VISTA", _verificationStatus: "public" },
        { name: "BeAGoodDoctor / SCOPE (Director)", _verificationStatus: "public" },
        { name: "Virtual Mentorship for Students Abroad (VMSA, founder)", _verificationStatus: "public" },
        { name: "Special Olympics (head coach, volleyball)", _verificationStatus: "public" },
        { name: "Kids with Dreams (KWD, Sports Director)", _verificationStatus: "public" },
      ],
      _publications: [
        {
          title: "Measuring Clinically Meaningful Change in Outcomes for Youth With Chronic Pain Following Graded Exposure Treatment",
          journal: "Clinical Journal of Pain",
          volume: "38",
          issue: "5",
          date: "2022-04",
          pmcId: "PMC9012214",
          citations: 14,
          _confidence: 0.98,
        },
        {
          title: "Rapid Transition to Virtual Assessment and Treatment in an Interdisciplinary Randomized Clinical Trial for Youth With Chronic Pain",
          journal: "Clinical Journal of Pain",
          date: "2022-04",
          _confidence: 0.95,
        },
        {
          title: "Psychological and Social Suffering of Another Generation of Palestinian Children Living Under Occupation: An Urgent Call to Advocate",
          journal: "Health and Human Rights Journal",
          volume: "26/1",
          date: "2024-05",
          url: "https://hhrjournal.org/2024/05/24/psychological-and-social-suffering",
          _confidence: 0.98,
        },
      ],
      _projects: [
        { name: "TEDx Talk: 'A New Lens on Positive Deviance: Successes in Refugee Healthcare'", type: "talk", url: "https://www.youtube.com/watch?v=9EO5JsBUB-Y", description: "TEDxYouth@PHUHS, April 18, 2021. 13:59 duration. ~1,200 views.", status: "completed" },
        { name: "Virtual Mentorship for Students Abroad (VMSA)", type: "organization", description: "Founded mentorship program connecting mentors with international students", status: "unknown" },
        { name: "Stanford Medicine MENA Health Program", type: "research/advocacy", description: "Yemeni women and girls' mental health initiative (as Newman Civic Fellow)", status: "completed" },
        { name: "Special Olympics Volleyball (Palm Harbor)", type: "community", description: "Head coach of volleyball team", status: "completed" },
        { name: "Kids with Dreams (KWD)", type: "community", description: "Sports Director at Stanford program for children with disabilities", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 15,
        sourceList: [
          "GoStanford.com (beach volleyball roster)",
          "Stanford Neurosciences (NeURO trainee page)",
          "Campus Compact (Newman Civic Fellow)",
          "Stanford News (March 2022 feature)",
          "YouTube (TEDxYouth@PHUHS talk)",
          "ResearchGate (3+ publications)",
          "PubMed Central (PMC9012214)",
          "Health and Human Rights Journal",
          "BYTE Tennis (AmeriCorps page)",
          "Stanford Daily (Sep 2023, athlete burnout)",
          "Bevolley Academy (news article)",
          "Pac-12 Academic Honor Roll records",
          "Clinical Journal of Pain",
          "LinkedIn",
          "Web search",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "VERY HIGH",
          education: "VERY HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "Current status: still at BYTE or moved on?",
          "Medical school application status (pre-med track)",
          "Full publication list beyond the 3 identified",
          "VMSA current status and scale",
          "Indoor volleyball high school stats",
        ],
        recommendation: "Medical school admission status is the primary gap. Publication record and advocacy work are exceptionally well-documented for someone at this career stage.",
      },
    },
    infobox: {
      fullName: "Zeena Khazendar",
      currentRole: "AmeriCorps VISTA Fellow",
      org: "Border Youth Tennis Exchange (BYTE)",
      education: [
        "Stanford University (BS Human Biology, Design for Global Health & Social Impact; Minor: Human Rights, 2019-2023)",
        "Palm Harbor University High School (Class of 2019)",
      ],
      knownFor: [
        "3+ peer-reviewed publications (Clinical Journal of Pain, Health and Human Rights Journal)",
        "Stanford NCAA D1 Beach Volleyball, 3x Pac-12 Academic Honor Roll",
        "TEDx talk: 'A New Lens on Positive Deviance: Successes in Refugee Healthcare'",
        "2022-23 Newman Civic Fellow (nominated by Stanford President)",
        "Founded Virtual Mentorship for Students Abroad (VMSA)",
        "Palestinian heritage and refugee health advocacy",
      ],
      links: [
        { label: "Stanford Athletics", url: "https://gostanford.com/sports/beach-volleyball/roster/player/zeena-khazendar" },
        { label: "TEDx Talk (YouTube)", url: "https://www.youtube.com/watch?v=9EO5JsBUB-Y" },
        { label: "ResearchGate", url: "https://www.researchgate.net/scientific-contributions/Zeena-Khazendar-2194398860" },
        { label: "Newman Civic Fellow", url: "https://compact.org/current-programs/newman-civic-fellowship/newman-civic-fellows/zeena" },
        { label: "Stanford News Feature", url: "https://news.stanford.edu/stories/2022/03/junior-zeena-khazendar" },
        { label: "BYTE Tennis", url: "https://bytetennis.org/zeena-khazendar" },
      ],
    },
    references: [
      { title: "Stanford Athletics — Zeena Khazendar Beach Volleyball Roster", url: "https://gostanford.com/sports/beach-volleyball/roster/player/zeena-khazendar" },
      { title: "Wu Tsai Neurosciences Institute — Zeena Khazendar (NeURO Trainee)", url: "https://neuroscience.stanford.edu/people/zeena-khazendar" },
      { title: "Campus Compact — Newman Civic Fellow: Zeena Khazendar", url: "https://compact.org/current-programs/newman-civic-fellowship/newman-civic-fellows/zeena" },
      { title: "Stanford News — Junior Zeena Khazendar (March 2022)", url: "https://news.stanford.edu/stories/2022/03/junior-zeena-khazendar" },
      { title: "TEDxYouth@PHUHS — A New Lens on Positive Deviance (YouTube)", url: "https://www.youtube.com/watch?v=9EO5JsBUB-Y" },
      { title: "Health and Human Rights Journal — Palestinian Children (May 2024)", url: "https://hhrjournal.org/2024/05/24/psychological-and-social-suffering" },
      { title: "PubMed Central — Chronic Pain Graded Exposure (PMC9012214)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9012214/" },
      { title: "ResearchGate — Zeena Khazendar Publications", url: "https://www.researchgate.net/scientific-contributions/Zeena-Khazendar-2194398860" },
      { title: "BYTE Tennis — Zeena Khazendar", url: "https://bytetennis.org/zeena-khazendar" },
      { title: "Stanford Daily — 'No longer the best' (Sep 2023)", url: "https://stanforddaily.com/2023/09/27/no-longer-the-best" },
      { title: "Bevolley Academy — Player Feature", url: "https://bevolleyacademy.com/news_article/show/1137074" },
    ],
  },

  // ===========================================================================
  // 11. Ishani Thakur
  // ===========================================================================
  ishani_thakur: {
    slug: "ishani_thakur",
    name: "Ishani Thakur",
    currentRole: "Co-Founder & General Partner",
    org: "Hanabi Capital",
    education: [],
    humanContent: `
<p><strong>Ishani Thakur</strong> is a venture capital investor and co-founder. She is a Co-Founder and General Partner at <strong>Hanabi Capital</strong>, a venture fund she co-founded with Mike Volpi and Bryan Offutt. Previously, she was at Nava Ventures and invested at Index Ventures, where she was involved in the firm's investment in <a href="https://www.cartesia.ai/">Cartesia</a>.</p>

<h2>Career</h2>
<h3>Hanabi Capital</h3>
<p>Thakur co-founded Hanabi Capital alongside Mike Volpi (Index Ventures partner) and Bryan Offutt. The fund has made investments in several notable AI and technology companies, including <strong>Anysphere</strong> (the company behind <a href="https://cursor.sh">Cursor</a>, the AI code editor), <strong>LiveKit</strong> (real-time communication infrastructure), <strong>Cognition AI</strong> (the company behind Devin), and <strong>BRINC Drones</strong>.</p>

<h3>Index Ventures</h3>
<p>At Index Ventures, Thakur was involved in the firm's investment in Cartesia, an AI company focused on efficient sequence modeling.</p>

<h3>Nava Ventures</h3>
<p>Prior to Index, Thakur worked at Nava Ventures.</p>

<h2>Public contributions</h2>
<p>Thakur spoke at <strong>SXSW 2024</strong> and has written for <strong>TechCrunch</strong> on venture capital and technology topics.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ishani Thakur",
      sameAs: ["https://linkedin.com/in/ishanithakur"],
      jobTitle: "Co-Founder & General Partner",
      worksFor: { "@type": "Organization", name: "Hanabi Capital" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Co-Founder & General Partner",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Hanabi Capital",
            description: "Venture fund co-founded with Mike Volpi and Bryan Offutt",
          },
          _whatTheyBuilt: "Co-founded venture fund with portfolio including Anysphere (Cursor), LiveKit, Cognition AI, BRINC Drones",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Fund size unknown", "Full portfolio list unknown"],
        },
        {
          "@type": "Role",
          roleName: "Investor",
          organization: {
            "@type": "Organization",
            name: "Index Ventures",
            description: "Global VC firm (Slack, Figma, Roblox)",
          },
          _whatTheyBuilt: "Involved in Cartesia investment",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Investor",
          organization: { "@type": "Organization", name: "Nava Ventures" },
          _verificationStatus: "self-reported",
          _confidence: 0.75,
        },
      ],
      knowsAbout: [
        { skill: "Venture Capital", type: "domain", _confidence: 0.95, _evidence: "GP at Hanabi Capital, prior roles at Index Ventures and Nava Ventures" },
        { skill: "AI/ML Investing", type: "domain", _confidence: 0.90, _evidence: "Portfolio: Anysphere (Cursor), Cognition AI (Devin), Cartesia" },
        { skill: "Real-time Infrastructure", type: "domain", _confidence: 0.70, _evidence: "LiveKit investment" },
        { skill: "Robotics / Defense Tech", type: "domain", _confidence: 0.60, _evidence: "BRINC Drones investment" },
      ],
      _projects: [
        { name: "Hanabi Capital", type: "fund", description: "VC fund with Volpi and Offutt. Portfolio: Anysphere (Cursor), LiveKit, Cognition AI, BRINC Drones", status: "active" },
      ],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["LinkedIn", "Hanabi Capital", "Index Ventures", "TechCrunch", "SXSW 2024", "Cartesia", "Anysphere", "Cognition AI"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "LOW",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Education (university, degree) not publicly documented",
          "Hanabi Capital fund size and vintage",
          "Full investment portfolio",
          "Duration at Index Ventures and Nava Ventures",
          "Technical vs. business background",
        ],
        recommendation: "Education details and Hanabi Capital fund structure would complete the profile.",
      },
    },
    infobox: {
      fullName: "Ishani Thakur",
      currentRole: "Co-Founder & General Partner",
      org: "Hanabi Capital",
      education: [],
      knownFor: [
        "Co-founded Hanabi Capital (with Mike Volpi, Bryan Offutt)",
        "Portfolio: Anysphere (Cursor), LiveKit, Cognition AI, BRINC",
        "Previously at Index Ventures (Cartesia investment)",
        "SXSW 2024 speaker, TechCrunch contributor",
      ],
      links: [],
    },
    references: [
      { title: "TechCrunch — Ishani Thakur", url: "https://techcrunch.com" },
      { title: "Cartesia", url: "https://www.cartesia.ai/" },
    ],
  },

  // ===========================================================================
  // 12. Mike Volpi
  // ===========================================================================
  mike_volpi: {
    slug: "mike_volpi",
    name: "Mike Volpi",
    currentRole: "Partner",
    org: "Index Ventures",
    education: [
      { institution: "Stanford Graduate School of Business", degree: "MBA" },
      { institution: "Stanford University", degree: "BS", field: "Electrical Engineering" },
    ],
    humanContent: `
<p><strong>Michelangelo "Mike" Volpi</strong> (born December 13, 1966) is an Italian-American venture capitalist and technology executive. He is a Partner at <a href="https://www.indexventures.com/">Index Ventures</a>, one of the world's leading venture capital firms. He has led nine IPOs at Index, including <a href="https://slack.com">Slack</a>, <a href="https://www.purestorage.com/">Pure Storage</a>, and <a href="https://www.arista.com/">Arista Networks</a>. He was ranked #34 on the New York Times / CB Insights Top 100 Venture Capitalists list.</p>

<h2>Early life and education</h2>
<p>Volpi was born on December 13, 1966. His father, Vittorio Volpi, was a senior executive at UBS. Volpi earned a Bachelor of Science in Electrical Engineering from Stanford University, followed by an MBA from the Stanford Graduate School of Business.</p>

<h2>Career</h2>
<h3>Cisco Systems</h3>
<p>Before entering venture capital, Volpi held senior positions at Cisco Systems, where he was involved in corporate strategy and business development during the company's rapid growth period.</p>

<h3>Joost</h3>
<p>Volpi served as CEO of <strong>Joost</strong>, an online video platform founded by the creators of Skype (Niklas Zennström and Janus Friis). He was recruited as an Entrepreneur-in-Residence (EIR) at Sequoia Capital before taking the Joost role.</p>

<h3>Index Ventures</h3>
<p>At Index Ventures, Volpi has been one of the most prolific partners, leading investments that resulted in nine IPOs. Notable portfolio companies include:</p>
<ul>
  <li><strong>Slack</strong> — Enterprise messaging (IPO)</li>
  <li><strong>Pure Storage</strong> — Flash storage (IPO)</li>
  <li><strong>Arista Networks</strong> — Cloud networking (IPO)</li>
</ul>
<p>He was ranked #34 on the NYT/CB Insights list of the top 100 venture capitalists.</p>

<h3>Hanabi Capital</h3>
<p>Volpi co-founded <strong>Hanabi Capital</strong> alongside Ishani Thakur and Bryan Offutt, a venture fund investing in AI and frontier technology companies.</p>

<h2>Personal life</h2>
<p>Volpi is married with two children.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michelangelo Volpi",
      alternateName: "Mike Volpi",
      birthDate: "1966-12-13",
      sameAs: ["https://www.indexventures.com/team/mike-volpi", "https://linkedin.com/in/mikevolpi"],
      jobTitle: "Partner",
      worksFor: { "@type": "Organization", name: "Index Ventures", url: "https://www.indexventures.com/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford Graduate School of Business",
          degree: "MBA",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Electrical Engineering",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Partner",
          organization: {
            "@type": "Organization",
            name: "Index Ventures",
            url: "https://www.indexventures.com/",
            description: "Global VC firm — led 9 IPOs including Slack, Pure Storage, Arista Networks",
          },
          _whatTheyBuilt: "Led investments resulting in 9 IPOs. #34 NYT/CB Insights Top 100 VCs.",
          _verificationStatus: "public",
          _confidence: 0.99,
        },
        {
          "@type": "Role",
          roleName: "Co-Founder",
          organization: {
            "@type": "Organization",
            name: "Hanabi Capital",
            description: "Venture fund with Ishani Thakur and Bryan Offutt",
          },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "CEO",
          organization: {
            "@type": "Organization",
            name: "Joost",
            description: "Online video platform by Skype founders (Zennström, Friis)",
          },
          _outcome: "Shut down",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "EIR",
          organization: { "@type": "Organization", name: "Sequoia Capital" },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Senior Executive",
          organization: { "@type": "Organization", name: "Cisco Systems" },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      knowsAbout: [
        { skill: "Venture Capital", type: "domain", _confidence: 0.99, _evidence: "9 IPOs at Index, #34 top 100 VCs, decades of investing" },
        { skill: "Enterprise Software", type: "domain", _confidence: 0.95, _evidence: "Slack, Arista Networks, Pure Storage investments" },
        { skill: "Corporate Strategy", type: "domain", _confidence: 0.90, _evidence: "Senior roles at Cisco Systems" },
        { skill: "Electrical Engineering", type: "domain", _confidence: 0.80, _evidence: "BS EE Stanford" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: ["Index Ventures", "NYT/CB Insights", "LinkedIn", "Forbes", "Cisco", "Joost/Wikipedia", "Sequoia Capital", "Stanford GSB", "Crunchbase", "SEC filings", "Hanabi Capital", "interviews"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "Cisco Systems specific role title and dates",
          "Full list of Index portfolio companies",
          "Hanabi Capital fund details",
        ],
        recommendation: "This is one of the most well-documented profiles. Minimal gaps remain.",
      },
    },
    infobox: {
      fullName: "Michelangelo \"Mike\" Volpi",
      currentRole: "Partner",
      org: "Index Ventures",
      education: [
        "Stanford GSB (MBA)",
        "Stanford University (BS Electrical Engineering)",
      ],
      knownFor: [
        "9 IPOs at Index (Slack, Pure Storage, Arista Networks)",
        "#34 NYT/CB Insights Top 100 VCs",
        "Co-founded Hanabi Capital",
        "CEO of Joost (Skype founders' startup)",
        "Former Cisco senior executive",
      ],
      website: "https://www.indexventures.com/team/mike-volpi",
      links: [
        { label: "Index Ventures", url: "https://www.indexventures.com/" },
      ],
    },
    references: [
      { title: "Index Ventures — Mike Volpi", url: "https://www.indexventures.com/team/mike-volpi" },
      { title: "NYT/CB Insights Top 100 VCs", url: "https://www.cbinsights.com" },
    ],
  },

  // ===========================================================================
  // 13. Gianfranco Filice
  // ===========================================================================
  gianfranco_filice: {
    slug: "gianfranco_filice",
    name: "Gianfranco Filice",
    currentRole: "Founder & Managing Partner",
    org: "OVO Fund",
    education: [
      { institution: "Christopher High School", degree: "High School Diploma", notes: "Gilroy, CA. Won $100K scholarship." },
    ],
    humanContent: `
<p><strong>Gianfranco Filice</strong> is a venture capitalist and one of the youngest fund managers in Silicon Valley history. He is the Founder and Managing Partner of <a href="https://www.ovofund.com/">OVO Fund</a>, which he started while still in high school. He also runs the AKA Angel Fund. OVO Fund's portfolio includes over 90 companies, 5 unicorns, and 2 IPOs.</p>

<h2>Early life and education</h2>
<p>Filice attended Christopher High School in Gilroy, California. He founded his first company, <strong>Ripple Design</strong>, as an eighth grader (circa 2013), running a Kickstarter campaign for the venture. He won a $100,000 scholarship during high school.</p>

<h2>Career</h2>
<h3>OVO Fund</h3>
<p>Filice founded OVO Fund, a seed-stage venture capital firm. The fund has backed over 90 companies, produced 5 unicorns, and 2 IPOs. Notable portfolio companies include:</p>
<ul>
  <li><strong>Wish</strong> — E-commerce marketplace (IPO)</li>
  <li><strong>Sourcegraph</strong> — Code intelligence platform</li>
  <li><strong>Addepar</strong> — Wealth management technology</li>
  <li><strong>Everlaw</strong> — Legal technology / e-discovery</li>
  <li><strong>Signifyd</strong> — Commerce fraud protection</li>
</ul>

<h3>AKA Angel Fund</h3>
<p>In addition to OVO Fund, Filice manages the <strong>AKA Angel Fund</strong>, expanding his investment activities.</p>

<h3>Other investments</h3>
<p>Filice has also invested in companies like <strong>Pledge Finance</strong> and continues to be active in early-stage technology investing.</p>

<h2>Notable work</h2>
<p>Filice founded <strong>Ripple Design</strong> as a middle schooler, making him one of the youngest startup founders in the Bay Area. The company ran a Kickstarter campaign during its early development.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gianfranco Filice",
      sameAs: ["https://linkedin.com/in/gianfrancofilice", "https://www.ovofund.com/"],
      jobTitle: "Founder & Managing Partner",
      worksFor: { "@type": "Organization", name: "OVO Fund", url: "https://www.ovofund.com/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Christopher High School, Gilroy, CA",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Founder & Managing Partner",
          organization: {
            "@type": "Organization",
            name: "OVO Fund",
            url: "https://www.ovofund.com/",
            description: "Seed-stage VC: 90+ companies, 5 unicorns, 2 IPOs (Wish, Sourcegraph, Addepar, Everlaw, Signifyd)",
          },
          _whatTheyBuilt: "Built seed-stage fund from high school to 90+ portfolio companies with 5 unicorns and 2 IPOs",
          _verificationStatus: "public",
          _confidence: 0.95,
          _gaps: ["Fund size unknown", "AUM not public"],
        },
        {
          "@type": "Role",
          roleName: "Manager",
          organization: {
            "@type": "Organization",
            name: "AKA Angel Fund",
            description: "Angel investment fund",
          },
          _verificationStatus: "public",
          _confidence: 0.80,
        },
        {
          "@type": "Role",
          roleName: "Founder",
          startDate: "2013",
          organization: {
            "@type": "Organization",
            name: "Ripple Design",
            description: "Design company founded as 8th grader, ran Kickstarter campaign",
          },
          _verificationStatus: "public",
          _confidence: 0.80,
        },
      ],
      knowsAbout: [
        { skill: "Venture Capital / Seed Investing", type: "domain", _confidence: 0.99, _evidence: "OVO Fund: 90+ companies, 5 unicorns, 2 IPOs" },
        { skill: "E-Commerce", type: "domain", _confidence: 0.80, _evidence: "Wish (IPO) investment" },
        { skill: "Enterprise Software", type: "domain", _confidence: 0.80, _evidence: "Sourcegraph, Addepar, Everlaw investments" },
        { skill: "Fraud Prevention", type: "domain", _confidence: 0.70, _evidence: "Signifyd investment" },
      ],
      _projects: [
        { name: "OVO Fund", type: "fund", url: "https://www.ovofund.com/", description: "Seed-stage VC — 90+ companies, 5 unicorns, 2 IPOs", status: "active" },
        { name: "AKA Angel Fund", type: "fund", description: "Angel investment fund", status: "active" },
        { name: "Ripple Design", type: "product", description: "Design company founded as 8th grader (~2013), Kickstarter campaign", status: "unknown" },
      ],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["OVO Fund website", "LinkedIn", "Crunchbase", "Wish IPO filings", "Sourcegraph", "Kickstarter", "Christopher High School", "Pledge Finance"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "MEDIUM",
          careerTimeline: "HIGH",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "University education (if any)",
          "OVO Fund AUM and fund vintages",
          "Full portfolio company list",
          "Ripple Design outcome and details",
          "AKA Angel Fund structure and portfolio",
        ],
        recommendation: "OVO Fund LP materials and Crunchbase pro data would fill most gaps.",
      },
    },
    infobox: {
      fullName: "Gianfranco Filice",
      currentRole: "Founder & Managing Partner",
      org: "OVO Fund",
      education: ["Christopher High School, Gilroy CA"],
      knownFor: [
        "OVO Fund — 90+ companies, 5 unicorns, 2 IPOs",
        "Portfolio: Wish, Sourcegraph, Addepar, Everlaw, Signifyd",
        "Founded Ripple Design as 8th grader",
        "$100K scholarship winner",
        "AKA Angel Fund manager",
      ],
      website: "https://www.ovofund.com/",
      links: [
        { label: "OVO Fund", url: "https://www.ovofund.com/" },
      ],
    },
    references: [
      { title: "OVO Fund", url: "https://www.ovofund.com/" },
    ],
  },

  // ===========================================================================
  // 14. Nazli Dakad
  // ===========================================================================
  nazli_dakad: {
    slug: "nazli_dakad",
    name: "Nazli Dakad",
    currentRole: "Senior Organizer",
    org: "Class Action",
    education: [
      { institution: "Stanford University", degree: "MS", field: "Earth Systems", years: "2024–2025", notes: "Coterminal. Focus: decision science and sustainability. Award for Outstanding Service to Earth Systems Program (2025)." },
      { institution: "Stanford University", degree: "BS", field: "Earth Systems", years: "2020–2024", notes: "Track: Human Environmental Systems. Dean's Award for Academic Achievement (2024). Award for Outstanding Service to Earth Systems Program (2024)." },
    ],
    humanContent: `
<p><strong>Nazl\u0131 Hilal Dakad</strong> is a higher education organizer, environmental scientist, and opinion writer from Seattle, Washington. She holds a BS and an MS in Earth Systems from <a href="https://earth.stanford.edu/">Stanford University's Doerr School of Sustainability</a> and currently serves as a Senior Organizer at <a href="https://joinclassaction.us">Class Action</a>, a higher education advocacy organization. She is based in San Francisco.</p>

<h2>Early life and education</h2>
<p>Dakad grew up in Seattle, Washington. She enrolled at Stanford University, where she completed a Bachelor of Science in <a href="https://earthsystems.stanford.edu/">Earth Systems</a> (Class of 2024) on the Human Environmental Systems track. She continued into the coterminal Master of Science in Earth Systems, focusing on decision science and sustainability.</p>
<p>During her undergraduate years, Dakad received the <strong>Dean's Award for Academic Achievement</strong> (2024) and the <strong>Award for Outstanding Service to the Earth Systems Program</strong> in two consecutive years (2024 and 2025), as listed on the <a href="https://earthsystems.stanford.edu/research-impact/scholars-awards/commencement-awards">Earth Systems commencement awards page</a>. She served as <strong>Earth Systems Student Advisor</strong> during the 2023&ndash;24 academic year. From September 2024 through June 2025, she held teaching roles as Course Assistant, Head TA, and Teaching Assistant at the Stanford Doerr School of Sustainability.</p>
<p>In June 2025, Dakad participated in the <a href="https://fsi.stanford.edu/">Stanford-China Study Program</a>, a two-week immersive trip with 20 students. She was also a member of the <a href="https://stanfordclubsports.com/sports/mens-skiing/roster/nazli-dakad/5274">Stanford Ski and Snowboard Club</a> during the 2023&ndash;24 season.</p>

<h2>Students for a Sustainable Stanford (SSS)</h2>
<p>Dakad held multiple leadership positions in <strong>Students for a Sustainable Stanford</strong>, serving as Project Leader, Internal Community Co-Director, and Financial Officer across her time in the organization.</p>

<h2>Name change opposition</h2>
<p>In late 2023, Dakad led student opposition to a proposal to rename the Earth Systems program to "Sustainability Science and Systems." She organized a letter signed by more than 100 students, submitted on December 6, 2023, addressed to the school's dean. She co-authored an opinion piece in the <em>Stanford Daily</em> on February 25, 2024, titled <a href="https://stanforddaily.com/2024/02/25/sustainability-science-systems-name-change-opinion/">"'Sustainability Science and Systems' is ambiguous corporate lingo"</a>, arguing the proposed name diluted the program's identity and scientific rigor.</p>

<h2>Matriculate advising</h2>
<p>Dakad served as a <a href="https://www.matriculate.org/">Matriculate</a> Advising Fellow for three years. In this role, she mentored three low-income, high-achieving high school students through the college application process.</p>

<h2>Ho'okua'\u0101ina collaboration</h2>
<p>Dakad partnered with <strong>Ho'okua'\u0101ina</strong>, an O'ahu-based food sovereignty nonprofit, through the Stanford Earth Systems Masters Seminar. She synthesized a strategic plan for the organization based on stakeholder interviews.</p>

<h2>Career</h2>
<h3>Class Action</h3>
<p>Following her time at Stanford, Dakad joined <a href="https://joinclassaction.us/our-team">Class Action</a> as a <strong>Senior Organizer</strong>. Class Action is a higher education advocacy organization working to reform institutional practices in American colleges and universities.</p>

<h2>Published opinion writing</h2>
<p>Dakad is a prolific opinion writer on higher education and career culture:</p>
<ul>
  <li><a href="https://stanforddaily.com/2024/02/25/sustainability-science-systems-name-change-opinion/">"'Sustainability Science and Systems' is ambiguous corporate lingo"</a> &mdash; <em>Stanford Daily</em>, February 25, 2024</li>
  <li><a href="https://stanforddaily.com/2025/03/17/stanford-students-choose-money-over-mission">"Stanford students choose money over mission: But we don't have to"</a> &mdash; <em>Stanford Daily</em>, March 17, 2025. Critiques career funneling at Stanford, including her own near-recruitment by Goldman Sachs as a sophomore.</li>
  <li><a href="https://sfstandard.com/opinion/2025/03/22/stanford-students-careerist-corporate-climbers/">"Stanford students are careerist corporate climbers"</a> &mdash; <em>SF Standard</em>, March 22, 2025</li>
  <li><a href="https://stanforddaily.com/2025/10/10/avoiding-the-career-funnel">"Avoiding the career funnel"</a> &mdash; <em>Stanford Daily</em>, October 10, 2025. Features interviews with six recent Stanford graduates navigating alternative career paths.</li>
</ul>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nazli Hilal Dakad",
      alternateName: ["Nazl\u0131 Dakad", "Nazli Dakad"],
      email: "nhdakad@stanford.edu",
      sameAs: [
        "https://linkedin.com/in/nazli-dakad",
        "https://profiles.stanford.edu/nazli-dakad",
        "https://earthsystems.stanford.edu/nazli-dakad-24",
        "https://stanfordclubsports.com/sports/mens-skiing/roster/nazli-dakad/5274",
      ],
      jobTitle: "Senior Organizer",
      worksFor: { "@type": "Organization", name: "Class Action", url: "https://joinclassaction.us" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "MS Earth Systems",
          focus: "Decision science and sustainability",
          startDate: "2024",
          endDate: "2025",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Earth Systems",
          track: "Human Environmental Systems",
          startDate: "2020",
          endDate: "2024",
          _verificationStatus: "public",
          _confidence: 0.97,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Senior Organizer",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Class Action",
            url: "https://joinclassaction.us",
            description: "Higher education advocacy organization",
          },
          _verificationStatus: "public",
          _confidence: 0.95,
          _evidence: "Listed on joinclassaction.us/our-team",
        },
        {
          "@type": "Role",
          roleName: "Teaching Assistant / Head TA / Course Assistant",
          startDate: "2024-09",
          endDate: "2025-06",
          organization: {
            "@type": "Organization",
            name: "Stanford Doerr School of Sustainability",
            url: "https://sustainability.stanford.edu/",
          },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "Earth Systems Student Advisor",
          startDate: "2023",
          endDate: "2024",
          organization: { "@type": "Organization", name: "Stanford Earth Systems Program" },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "Matriculate Advising Fellow (3 years)",
          organization: {
            "@type": "Organization",
            name: "Matriculate",
            url: "https://www.matriculate.org/",
            description: "College advising for low-income, high-achieving students",
          },
          _whatTheyBuilt: "Mentored 3 students through college application process over 3 years",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      award: [
        { name: "Dean's Award for Academic Achievement", date: "2024", _verificationStatus: "public", _confidence: 0.95 },
        { name: "Award for Outstanding Service to Earth Systems Program", date: "2024", _verificationStatus: "public", _confidence: 0.95 },
        { name: "Award for Outstanding Service to Earth Systems Program", date: "2025", _verificationStatus: "public", _confidence: 0.95 },
      ],
      knowsAbout: [
        { skill: "Earth Systems / Environmental Science", type: "domain", _confidence: 0.97, _evidence: "BS and MS in Earth Systems from Stanford, Dean's Award, double Outstanding Service Awards" },
        { skill: "Decision Science & Sustainability", type: "domain", _confidence: 0.90, _evidence: "MS focus area" },
        { skill: "Higher Education Advocacy", type: "domain", _confidence: 0.95, _evidence: "Senior Organizer at Class Action, 4 published opinion pieces on higher ed" },
        { skill: "Education Access / College Advising", type: "domain", _confidence: 0.90, _evidence: "3-year Matriculate advising fellow, mentored 3 low-income students" },
        { skill: "Student Organizing & Governance", type: "domain", _confidence: 0.90, _evidence: "100+ student letter on name change, SSS leadership roles, opinion pieces" },
        { skill: "Opinion Writing", type: "skill", _confidence: 0.95, _evidence: "4 published op-eds in Stanford Daily and SF Standard" },
        { skill: "Food Sovereignty / Community Partnerships", type: "domain", _confidence: 0.75, _evidence: "Ho'okua'aina strategic plan synthesis" },
      ],
      memberOf: [
        { name: "Students for a Sustainable Stanford (SSS)", roles: ["Project Leader", "Internal Community Co-Director", "Financial Officer"], _verificationStatus: "public" },
        { name: "Matriculate Advising Fellow (3 years)", _verificationStatus: "public" },
        { name: "Stanford Ski and Snowboard Club (2023-24)", _verificationStatus: "public", _evidence: "stanfordclubsports.com roster" },
        { name: "Earth Systems Student Advisor (2023-24)", _verificationStatus: "public" },
        { name: "Stanford-China Study Program (June 2025)", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Name Change Opposition Campaign", type: "advocacy", description: "Led 100+ student letter opposing renaming Earth Systems to 'Sustainability Science and Systems' (Dec 2023)", status: "completed" },
        { name: "Ho'okua'aina Strategic Plan", type: "consulting", description: "Synthesized strategic plan from interviews for O'ahu food sovereignty nonprofit", status: "completed" },
        { name: "Career Funnel Investigation", type: "journalism", description: "Interviewed 6 recent Stanford grads on alternative career paths (Oct 2025 Stanford Daily piece)", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 14,
        sourceList: [
          "Stanford Earth Systems profile (earthsystems.stanford.edu/nazli-dakad-24)",
          "Stanford Profiles (profiles.stanford.edu/nazli-dakad)",
          "LinkedIn (linkedin.com/in/nazli-dakad)",
          "Stanford Daily (4 opinion pieces, 2024-2025)",
          "SF Standard (opinion piece, March 2025)",
          "Class Action team page (joinclassaction.us/our-team)",
          "Stanford Earth Systems commencement awards page",
          "Stanford Club Sports skiing roster",
          "Matriculate",
          "Stanford Doerr School of Sustainability",
          "Stanford-China Study Program / FSI",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "Specific courses taught as TA/Head TA",
          "Ho'okua'aina strategic plan details and outcomes",
          "SSS project details and timelines for each role",
          "Stanford-China program specific activities",
          "High school and pre-Stanford background details",
        ],
        recommendation: "Profile is well-documented through public sources. Specific teaching and SSS project details would complete the picture.",
      },
    },
    infobox: {
      fullName: "Nazli Hilal Dakad",
      currentRole: "Senior Organizer",
      org: "Class Action",
      education: [
        "Stanford University (MS Earth Systems, 2024-25)",
        "Stanford University (BS Earth Systems, 2020-24)",
      ],
      knownFor: [
        "Senior Organizer at Class Action (higher ed advocacy)",
        "Dean's Award for Academic Achievement (2024)",
        "Outstanding Service to Earth Systems Program (2024 and 2025)",
        "Led 100+ student opposition to Earth Systems name change",
        "Matriculate advising fellow (3 years)",
        "Opinion writing in Stanford Daily and SF Standard on career funneling",
        "Students for a Sustainable Stanford leadership",
      ],
      links: [
        { label: "LinkedIn", url: "https://linkedin.com/in/nazli-dakad" },
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/nazli-dakad" },
        { label: "Stanford Earth Systems", url: "https://earthsystems.stanford.edu/nazli-dakad-24" },
        { label: "Class Action", url: "https://joinclassaction.us/our-team" },
      ],
    },
    references: [
      { title: "Stanford Earth Systems -- Nazli Dakad '24", url: "https://earthsystems.stanford.edu/nazli-dakad-24" },
      { title: "Stanford Profiles -- Nazli Dakad", url: "https://profiles.stanford.edu/nazli-dakad" },
      { title: "Stanford Daily -- 'Sustainability Science and Systems' is ambiguous corporate lingo (Feb 2024)", url: "https://stanforddaily.com/2024/02/25/sustainability-science-systems-name-change-opinion/" },
      { title: "Stanford Daily -- Stanford students choose money over mission (Mar 2025)", url: "https://stanforddaily.com/2025/03/17/stanford-students-choose-money-over-mission" },
      { title: "SF Standard -- Stanford students are careerist corporate climbers (Mar 2025)", url: "https://sfstandard.com/opinion/2025/03/22/stanford-students-careerist-corporate-climbers/" },
      { title: "Stanford Daily -- Avoiding the career funnel (Oct 2025)", url: "https://stanforddaily.com/2025/10/10/avoiding-the-career-funnel" },
      { title: "Class Action -- Our Team", url: "https://joinclassaction.us/our-team" },
      { title: "Stanford Earth Systems -- Commencement Awards", url: "https://earthsystems.stanford.edu/research-impact/scholars-awards/commencement-awards" },
      { title: "Stanford Club Sports -- Nazli Dakad Ski Roster", url: "https://stanfordclubsports.com/sports/mens-skiing/roster/nazli-dakad/5274" },
      { title: "LinkedIn -- Nazli Dakad", url: "https://linkedin.com/in/nazli-dakad" },
    ],
  },

  // ===========================================================================
  // 15. Julia Flora
  // ===========================================================================
  julia_flora: {
    slug: "julia_flora",
    name: "Julia Flora",
    currentRole: "Clinical Research Coordinator, FASTR Program",
    org: "Stanford Medicine — Dept. of Orthopaedic Surgery",
    education: [
      { institution: "Stanford University", degree: "BS with Honors", field: "Human Biology", years: "2020–2024", notes: "Concentration: Human Physiology in Sport and Performance. First-generation college student." },
    ],
    humanContent: `
<p><strong>Julia Lauren Flora</strong> (published as Julia L. Flora) is a clinical researcher, first-generation college student, and sports science investigator. She holds a Bachelor of Science with Honors in <a href="https://humanbiology.stanford.edu/">Human Biology</a> from Stanford University (Class of 2024), with a concentration in Human Physiology in Sport and Performance. She served as Clinical Research Coordinator in the <a href="https://med.stanford.edu/ortho.html">FASTR Program</a> (Female Athlete Science and Translational Research) within Stanford Medicine's Department of Orthopaedic Surgery under <a href="https://profiles.stanford.edu/emily-kraus">Dr. Emily Kraus</a>. She is originally from the Salem, Oregon area and is now based in Fort Lauderdale, Florida.</p>

<h2>Early life and education</h2>
<p>Flora is a first-generation college student. In high school, she served as Fundraising Director at <a href="https://881thepark.com">88.1 The Park</a> radio station during her junior and senior years and was recognized as Director of the Month in February 2020.</p>
<p>At Stanford, Flora earned a BS with Honors in Human Biology, concentrating in Human Physiology in Sport and Performance. In May 2023, she received the <strong>California-Hawaii DEI Scholarship Award</strong> from the <a href="https://www.sgim.org/">Society of General Internal Medicine</a>.</p>

<h2>Wu Tsai Performance Undergraduate Scholar (2023)</h2>
<p>Flora was selected as one of 12 <a href="https://humanperformance.stanford.edu/education/undergraduate-research-program/2023-scholars/">2023 Wu Tsai Performance Undergraduate Scholars</a>. Her mentor was Dr. Morgan Smith in the <a href="https://med.stanford.edu/snyderlab.html">Snyder Lab</a>. During summer 2023, she analyzed exercise dependence survey data to assess <a href="https://en.wikipedia.org/wiki/Relative_energy_deficiency_in_sport">RED-S</a> (Relative Energy Deficiency in Sport) risk in female endurance athletes. She presented her findings at the Wu Tsai symposium. Her research continued into the academic year, expanding to examine bone health across RED-S risk levels.</p>

<h2>Career at Stanford Medicine</h2>
<h3>FASTR Program (Jul 2024 – Jul 2025)</h3>
<p>As Clinical Research Coordinator for the FASTR Program in Stanford's Department of Orthopaedic Surgery, Flora managed four concurrent studies on peak performance, menstrual cycle effects, and RED-S. She led high-performance data collection logistics, including directing eight research volunteers to collect blood and saliva samples from 36 athletes within five minutes post-exercise. She also expanded the program's "team talk" educational series to club sports teams.</p>

<h3>Pediatric Orthopedics (Apr–Jul 2024)</h3>
<p>Prior to the FASTR role, Flora worked as a Research Assistant in Pediatric Orthopedics at Stanford Medicine (April&ndash;July 2024), where she recruited 26 or more study participants.</p>

<h2>Publications</h2>
<p>Flora has five works listed on her <a href="https://orcid.org/0009-0007-5972-0175">ORCID profile</a> and three on <a href="https://researchgate.net/scientific-contributions/Julia-L-Flora-2293893609">ResearchGate</a>. Key publications include:</p>
<ul>
  <li><strong>"Comparison of DXA and HR-pQCT Measures Among Female Runners at Risk for REDs: A Pilot Study"</strong> &mdash; <a href="https://medrxiv.org/content/10.1101/2025.09.08.25335357v1.full-text">medRxiv preprint</a> (September 2025). Authors: Smith, Flora, Kent, Long, Zhong, Roberts, Snyder, Kraus. Study of 21 female runners comparing DXA vs. HR-pQCT bone microarchitecture assessment. DOI: 10.1101/2025.09.08.25335357. Licensed CC BY-NC 4.0.</li>
  <li><strong>"Assessing Risk Factors For REDs In Female Ultramarathon Trail Runners: 339"</strong> &mdash; <em>Medicine &amp; Science in Sports &amp; Exercise</em> (October 2025). Julia Flora as first author.</li>
</ul>

<h2>Stanford Daily</h2>
<p>Flora wrote for the <a href="https://stanforddaily.com/author/jlflora/">Stanford Daily</a> sports section. Notable articles include <a href="https://stanforddaily.com">"Cal Senior Day spoiled: No. 1 men's gymnastics claims Bear territory"</a> (March 2022) and a co-authored piece on men's basketball falling short in an Arizona upset bid (March 2022).</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Julia Lauren Flora",
      alternateName: ["Julia L. Flora", "Julia Flora"],
      sameAs: [
        "https://linkedin.com/in/julia-flora-6637801b2",
        "https://orcid.org/0009-0007-5972-0175",
        "https://researchgate.net/scientific-contributions/Julia-L-Flora-2293893609",
        "https://stanforddaily.com/author/jlflora/",
        "https://humanperformance.stanford.edu/team/alumni-ug-scholar/",
      ],
      jobTitle: "Clinical Research Coordinator, FASTR Program",
      worksFor: {
        "@type": "Organization",
        name: "Stanford Medicine — Dept. of Orthopaedic Surgery",
        url: "https://med.stanford.edu/ortho.html",
        description: "Female Athlete Science and Translational Research (FASTR) Program under Dr. Emily Kraus",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS with Honors, Human Biology",
          concentration: "Human Physiology in Sport and Performance",
          endDate: "2024",
          _verificationStatus: "public",
          _confidence: 0.97,
          _notes: "First-generation college student",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Clinical Research Coordinator, FASTR Program",
          startDate: "2024-07",
          endDate: "2025-07",
          organization: {
            "@type": "Organization",
            name: "Stanford Medicine — Dept. of Orthopaedic Surgery",
            url: "https://med.stanford.edu/ortho.html",
            description: "Female Athlete Science and Translational Research program",
          },
          _whatTheyBuilt: "Managed 4 concurrent studies on peak performance, menstrual cycle, and RED-S. Directed 8 research volunteers collecting blood/saliva from 36 athletes within 5 min post-exercise. Expanded 'team talk' series to club sports.",
          _supervisor: "Dr. Emily Kraus",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Research Assistant, Pediatric Orthopedics",
          startDate: "2024-04",
          endDate: "2024-07",
          organization: {
            "@type": "Organization",
            name: "Stanford Medicine — Pediatric Orthopedics",
            url: "https://med.stanford.edu/",
          },
          _whatTheyBuilt: "Recruited 26+ study participants",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "2023 Wu Tsai Performance Undergraduate Scholar (1 of 12)",
          startDate: "2023-06",
          endDate: "2024",
          organization: {
            "@type": "Organization",
            name: "Wu Tsai Human Performance Alliance, Stanford",
            url: "https://humanperformance.stanford.edu/",
          },
          _whatTheyBuilt: "Analyzed exercise dependence surveys for RED-S risk in female endurance athletes; expanded to bone health across RED-S risk levels. Presented at Wu Tsai symposium.",
          _mentor: "Dr. Morgan Smith / Snyder Lab",
          _verificationStatus: "public",
          _confidence: 0.95,
          _evidence: "Listed on humanperformance.stanford.edu/education/undergraduate-research-program/2023-scholars/",
        },
      ],
      award: [
        { name: "California-Hawaii DEI Scholarship Award", organization: "Society of General Internal Medicine", date: "2023-05", _verificationStatus: "public", _confidence: 0.85 },
        { name: "Wu Tsai Performance Undergraduate Scholar (1 of 12)", date: "2023", _verificationStatus: "public", _confidence: 0.95 },
      ],
      publication: [
        {
          title: "Comparison of DXA and HR-pQCT Measures Among Female Runners at Risk for REDs: A Pilot Study",
          authors: "Smith, Flora, Kent, Long, Zhong, Roberts, Snyder, Kraus",
          venue: "medRxiv (preprint)",
          date: "2025-09",
          doi: "10.1101/2025.09.08.25335357",
          url: "https://medrxiv.org/content/10.1101/2025.09.08.25335357v1.full-text",
          license: "CC BY-NC 4.0",
          _confidence: 0.99,
        },
        {
          title: "Assessing Risk Factors For REDs In Female Ultramarathon Trail Runners: 339",
          authors: "Flora (first author) et al.",
          venue: "Medicine & Science in Sports & Exercise",
          date: "2025-10",
          _confidence: 0.95,
        },
      ],
      knowsAbout: [
        { skill: "Clinical Research Coordination", type: "domain", _confidence: 0.95, _evidence: "CRC at FASTR, managed 4 concurrent studies, directed 8 volunteers in high-performance data collection" },
        { skill: "RED-S / Relative Energy Deficiency in Sport", type: "domain", _confidence: 0.95, _evidence: "Wu Tsai research on RED-S risk, first-authored MSSE paper on ultramarathon runners, FASTR studies" },
        { skill: "Bone Health / DXA / HR-pQCT", type: "domain", _confidence: 0.90, _evidence: "medRxiv preprint comparing DXA vs HR-pQCT in female runners" },
        { skill: "Female Athlete Health", type: "domain", _confidence: 0.95, _evidence: "FASTR program focus, Wu Tsai research, both publications" },
        { skill: "Human Physiology in Sport", type: "domain", _confidence: 0.90, _evidence: "BS concentration, Wu Tsai scholar, clinical research" },
        { skill: "Scientific Writing", type: "skill", _confidence: 0.90, _evidence: "medRxiv preprint co-author, MSSE first author, Stanford Daily sports writer" },
        { skill: "Study Recruitment & Logistics", type: "skill", _confidence: 0.85, _evidence: "26+ participants recruited in pediatric ortho, 36-athlete sample collection protocol at FASTR" },
      ],
      memberOf: [
        { name: "Wu Tsai Performance Undergraduate Scholars 2023 (1 of 12)", _verificationStatus: "public" },
        { name: "Stanford Daily Sports Section", _verificationStatus: "public" },
        { name: "88.1 The Park Radio (high school)", roles: ["Fundraising Director"], _verificationStatus: "public" },
      ],
      _projects: [
        { name: "DXA vs HR-pQCT Pilot Study", type: "research", description: "Compared bone imaging methods in 21 female runners at REDs risk (medRxiv preprint, Sep 2025)", status: "published" },
        { name: "REDs Risk in Female Ultramarathon Runners", type: "research", description: "First-authored study on risk factors, published in MSSE (Oct 2025)", status: "published" },
        { name: "Exercise Dependence & REDs Risk (Wu Tsai)", type: "research", description: "Analyzed survey data on exercise dependence and RED-S risk in female endurance athletes", status: "completed" },
        { name: "FASTR Team Talks Expansion", type: "program", description: "Expanded educational 'team talk' series to Stanford club sports teams", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: [
          "LinkedIn (linkedin.com/in/julia-flora-6637801b2)",
          "ORCID (0009-0007-5972-0175, 5 works)",
          "ResearchGate (Julia-L-Flora-2293893609, 3 works)",
          "medRxiv (DOI: 10.1101/2025.09.08.25335357)",
          "Wu Tsai Human Performance Alliance (2023 scholars page)",
          "Wu Tsai Alumni UG Scholar page",
          "Stanford Daily author page (jlflora)",
          "Stanford Medicine Orthopaedic Surgery",
          "88.1 The Park radio",
          "Society of General Internal Medicine",
        ],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "HIGH",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "Remaining 2 of 5 ORCID works not fully identified",
          "Medical school or graduate school plans",
          "Specific honors thesis title and full text",
          "Post-FASTR role (Jul 2025 onward) in Fort Lauderdale",
        ],
        recommendation: "Profile is well-documented through ORCID, publications, and institutional pages. Current role after FASTR would complete the timeline.",
      },
    },
    infobox: {
      fullName: "Julia Lauren Flora",
      currentRole: "Clinical Research Coordinator, FASTR Program",
      org: "Stanford Medicine — Dept. of Orthopaedic Surgery",
      education: ["Stanford University (BS with Honors, Human Biology, 2024)"],
      knownFor: [
        "FASTR Program clinical research (female athlete health, RED-S)",
        "2023 Wu Tsai Performance Undergraduate Scholar (1 of 12)",
        "medRxiv preprint: DXA vs HR-pQCT in female runners at REDs risk",
        "First-authored MSSE paper on REDs in ultramarathon runners",
        "California-Hawaii DEI Scholarship (SGIM)",
        "First-generation college student",
        "Stanford Daily sports writer",
      ],
      links: [
        { label: "LinkedIn", url: "https://linkedin.com/in/julia-flora-6637801b2" },
        { label: "ORCID", url: "https://orcid.org/0009-0007-5972-0175" },
        { label: "ResearchGate", url: "https://researchgate.net/scientific-contributions/Julia-L-Flora-2293893609" },
        { label: "Wu Tsai 2023 Scholars", url: "https://humanperformance.stanford.edu/education/undergraduate-research-program/2023-scholars/" },
        { label: "Stanford Daily", url: "https://stanforddaily.com/author/jlflora/" },
      ],
    },
    references: [
      { title: "ORCID -- Julia L. Flora (0009-0007-5972-0175)", url: "https://orcid.org/0009-0007-5972-0175" },
      { title: "medRxiv -- Comparison of DXA and HR-pQCT Measures Among Female Runners at Risk for REDs", url: "https://medrxiv.org/content/10.1101/2025.09.08.25335357v1.full-text" },
      { title: "Wu Tsai Human Performance -- 2023 Undergraduate Scholars", url: "https://humanperformance.stanford.edu/education/undergraduate-research-program/2023-scholars/" },
      { title: "Wu Tsai Human Performance -- Alumni UG Scholars", url: "https://humanperformance.stanford.edu/team/alumni-ug-scholar/" },
      { title: "ResearchGate -- Julia L. Flora", url: "https://researchgate.net/scientific-contributions/Julia-L-Flora-2293893609" },
      { title: "Stanford Daily -- Author: jlflora", url: "https://stanforddaily.com/author/jlflora/" },
      { title: "LinkedIn -- Julia Flora", url: "https://linkedin.com/in/julia-flora-6637801b2" },
      { title: "88.1 The Park Radio", url: "https://881thepark.com" },
    ],
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getProfile(slug: string): ProfileData | undefined {
  return profiles[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(profiles);
}

export function getAllProfiles(): ProfileData[] {
  return Object.values(profiles);
}
