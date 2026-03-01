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
      { institution: "Stanford University", degree: "MS", field: "Computer Science", years: "2024–2025" },
      { institution: "Stanford University", degree: "BS", field: "Economics (major), Computer Science (minor)", years: "2020–2024" },
    ],
    humanContent: `
<p><strong>Matthew Wirtz</strong> is an entrepreneur and Stanford-educated economist and computer scientist. He is the Co-Founder of <a href="https://andean.systems">Andean Systems</a>, a manufacturing startup building a domestic sustainable supply chain for extracting critical metals from electronic waste.</p>

<h2>Early life and education</h2>
<p>Wirtz attended Stanford University, where he earned a Bachelor of Science in Economics with a minor in Computer Science, followed by a Master of Science in Computer Science. While at Stanford, he worked as a Research Assistant at the Stanford Institute for Economic Policy Research (SIEPR), studying regulatory decisions affecting education funding.</p>

<h2>Career</h2>
<h3>Candid</h3>
<p>In April 2023, Wirtz co-founded <strong>Candid</strong> alongside Zane Sabbagh, a vlog-based social wellbeing application. The startup received backing from OVO Fund, Reach Capital, Ulu Ventures, and GSR Ventures. Wirtz was a Student In Residence at StartX and a Z Fellow during this period. Candid operated until September 2024.</p>

<h3>Andean Systems</h3>
<p>In June 2025, Wirtz co-founded <strong>Andean Systems</strong>, which develops advanced manufacturing techniques to create sustainable domestic supply chains for recovering critical metals — including gold, silver, copper, neodymium, praseodymium, and dysprosium — from electronic waste.</p>

<h2>Research</h2>
<p>At SIEPR, Wirtz researched regulatory decisions related to education funding, working at the intersection of economics and public policy.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matthew Wirtz",
      email: "matthew@andean.systems",
      sameAs: ["https://linkedin.com/in/matthewwirtz"],
      jobTitle: "Co-Founder",
      worksFor: { "@type": "Organization", name: "Andean Systems", url: "https://andean.systems" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "MS Computer Science",
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
            description: "Sustainable domestic supply chain for extracting critical metals (Au, Ag, Cu, Nd, Pr, Dy) from e-waste",
          },
          _whatTheyBuilt: "Advanced manufacturing techniques for critical metal recovery from electronic waste",
          _outcome: "Active",
          _verificationStatus: "public",
          _confidence: 0.90,
          _gaps: ["Funding status unknown", "Team size unknown", "Technology readiness level unknown"],
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
          },
          _funding: "OVO Fund, Reach Capital, Ulu Ventures, GSR Ventures",
          _outcome: "Shut down",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
        {
          "@type": "Role",
          roleName: "Research Assistant",
          organization: {
            "@type": "Organization",
            name: "Stanford Institute for Economic Policy Research (SIEPR)",
            description: "Economic policy research institute at Stanford",
          },
          _whatTheyBuilt: "Research on regulatory decisions affecting education funding",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
      ],
      knowsAbout: [
        { skill: "Economics / Economic Policy", type: "domain", _confidence: 0.90, _evidence: "BS Economics Stanford, SIEPR research on education funding policy" },
        { skill: "Computer Science", type: "domain", _confidence: 0.85, _evidence: "MS CS Stanford, CS minor" },
        { skill: "Materials Science / E-Waste Recovery", type: "domain", _confidence: 0.75, _evidence: "Andean Systems focuses on critical metal extraction from e-waste" },
        { skill: "Entrepreneurship", type: "domain", _confidence: 0.90, _evidence: "Two startups co-founded (Candid, Andean Systems), StartX, Z Fellow" },
      ],
      memberOf: [
        { name: "Z Fellow", _verificationStatus: "public" },
        { name: "Student In Residence, StartX", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Andean Systems", type: "product", url: "https://andean.systems", description: "Critical metal recovery from e-waste (Au, Ag, Cu, Nd, Pr, Dy)", status: "active" },
        { name: "Candid", type: "product", description: "Vlog-based social wellbeing app (shut down)", status: "inactive" },
      ],
      _dataQuality: {
        sourcesConsulted: 7,
        sourceList: ["LinkedIn", "Stanford Profiles", "SIEPR", "StartX", "OVO Fund", "Andean Systems website", "Z Fellows"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "Andean Systems funding and traction",
          "Specific technology/process details for metal recovery",
          "SIEPR research publications",
          "Team composition at Andean",
        ],
        recommendation: "Direct interview and Andean Systems technical documentation would fill most gaps.",
      },
    },
    infobox: {
      fullName: "Matthew Wirtz",
      currentRole: "Co-Founder",
      org: "Andean Systems",
      education: [
        "Stanford University (MS Computer Science)",
        "Stanford University (BS Economics, CS minor)",
      ],
      knownFor: [
        "Andean Systems — critical metal recovery from e-waste",
        "Co-founding Candid (VC-backed social app)",
        "SIEPR research on education funding policy",
      ],
      links: [
        { label: "Andean Systems", url: "https://andean.systems" },
      ],
    },
    references: [
      { title: "Andean Systems", url: "https://andean.systems" },
      { title: "SIEPR — Stanford Institute for Economic Policy Research", url: "https://siepr.stanford.edu" },
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
<p><strong>Akeil Andrews</strong> is a person about whom limited publicly verifiable information is available. Despite extensive web searches, no definitive professional profile, academic record, or public presence matching this individual has been confirmed.</p>

<h2>Research note</h2>
<p>Multiple searches across professional networks, academic databases, and public records returned no verified matches for an individual named Akeil Andrews in the expected professional or academic context. A Trinidad-based entrepreneur of the same name (known as "Beard Boss") was identified but does not appear to be the same person.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Akeil Andrews",
      hasOccupation: [],
      knowsAbout: [],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["Google Search", "LinkedIn", "Stanford Profiles", "GitHub", "Twitter/X", "academic databases", "professional directories", "web search (multiple queries)"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "LOW",
          education: "LOW",
          careerTimeline: "LOW",
          technicalCapabilities: "LOW",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "No verified identity found",
          "No confirmed education",
          "No confirmed employment",
          "No confirmed projects or publications",
          "Person may use a different public name or have minimal web presence",
        ],
        recommendation: "Direct introduction or alternative identifying information needed. Current public data is insufficient for any verified claims.",
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
    currentRole: "ML Researcher / Engineer",
    org: "EvolutionaryScale",
    education: [
      { institution: "Stanford University", degree: "BS", field: "Computer Science", notes: "Focus on AI/ML" },
    ],
    humanContent: `
<p><strong>Michael Hla</strong> is a machine learning researcher and engineer specializing in protein design and biological AI. He works at <a href="https://www.evolutionaryscale.ai/">EvolutionaryScale</a> in Palo Alto, the company behind ESM (Evolutionary Scale Modeling) protein language models. Previously, he was a Research Analyst at <a href="https://www.shv.com/">Sutter Hill Ventures</a> and a red-teaming researcher at <a href="https://www.haize.ai/">Haize Labs</a>.</p>

<h2>Early life and education</h2>
<p>Hla studied Computer Science at Stanford University with a focus on artificial intelligence and machine learning.</p>

<h2>Career</h2>
<h3>EvolutionaryScale</h3>
<p>Hla currently works at EvolutionaryScale, a leading protein AI company in Palo Alto. The company develops large-scale protein language models (ESM series) for biological research and protein design.</p>

<h3>Sutter Hill Ventures</h3>
<p>Prior to EvolutionaryScale, Hla served as a Research Analyst at Sutter Hill Ventures, a venture capital firm known for early investments in companies like Snowflake and Pure Storage.</p>

<h3>Haize Labs</h3>
<p>Hla worked at Haize Labs, a red-teaming and AI safety research company. His work there included red-teaming AI models for organizations including OpenAI.</p>

<h2>Notable work</h2>
<h3>Pro-1: Protein design with reinforcement learning</h3>
<p>Hla developed <strong>Pro-1</strong>, a protein design system built on Llama-3.1 as a base model. The system uses Group Relative Policy Optimization (GRPO) with a Rosetta REF2015 reward function, achieving a 71% pass rate when combined with a critic feedback loop. Notable results include the <strong>K116E mutation</strong>, which showed a 24°C improvement in thermal stability.</p>

<h3>hCA-776: Enhanced carbonic anhydrase</h3>
<p>Hla's work on the <strong>hCA-776</strong> project produced a computationally designed carbonic anhydrase variant that is reportedly 170% more catalytically active than the wild-type enzyme.</p>

<h3>SMILES-MDLM</h3>
<p>Hla has also worked on <strong>SMILES-MDLM</strong>, applying masked diffusion language models to molecular design using SMILES notation.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michael Hla",
      sameAs: ["https://github.com/michaelhla", "https://linkedin.com/in/michaelhla"],
      jobTitle: "ML Researcher / Engineer",
      worksFor: { "@type": "Organization", name: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Computer Science",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "ML Researcher / Engineer",
          startDate: "2025",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "EvolutionaryScale",
            url: "https://www.evolutionaryscale.ai/",
            description: "Protein AI company developing ESM protein language models",
          },
          _whatTheyBuilt: "Working on protein language models and biological AI",
          _verificationStatus: "public",
          _confidence: 0.85,
          _gaps: ["Specific role and team unknown", "Contributions to ESM models not documented"],
        },
        {
          "@type": "Role",
          roleName: "Research Analyst",
          organization: {
            "@type": "Organization",
            name: "Sutter Hill Ventures",
            url: "https://www.shv.com/",
            description: "VC firm (Snowflake, Pure Storage early investor)",
          },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Red-Teaming Researcher",
          organization: {
            "@type": "Organization",
            name: "Haize Labs",
            url: "https://www.haize.ai/",
            description: "AI safety red-teaming company",
          },
          _whatTheyBuilt: "Red-teamed AI models including for OpenAI",
          _verificationStatus: "public",
          _confidence: 0.80,
        },
      ],
      knowsAbout: [
        { skill: "Protein Design / Computational Biology", type: "domain", _confidence: 0.95, _evidence: "Pro-1 system (GRPO + Rosetta REF2015), hCA-776 (170% more active carbonic anhydrase), EvolutionaryScale role" },
        { skill: "Reinforcement Learning", type: "domain", _confidence: 0.90, _evidence: "Pro-1 uses GRPO (Group Relative Policy Optimization)" },
        { skill: "LLMs / Foundation Models", type: "domain", _confidence: 0.90, _evidence: "Pro-1 built on Llama-3.1, SMILES-MDLM, ESM models at EvolutionaryScale" },
        { skill: "AI Safety / Red Teaming", type: "domain", _confidence: 0.80, _evidence: "Red-teaming at Haize Labs for OpenAI" },
        { skill: "Python", type: "technology", _confidence: 0.95, _evidence: "ML/AI research codebase" },
        { skill: "PyTorch", type: "technology", _confidence: 0.85, _evidence: "Inferred from ML research and protein modeling work" },
        { skill: "Molecular Design (SMILES)", type: "domain", _confidence: 0.80, _evidence: "SMILES-MDLM project" },
      ],
      _projects: [
        {
          name: "Pro-1",
          type: "research",
          description: "Protein design with RL: Llama-3.1 base + GRPO with Rosetta REF2015 reward. 71% pass rate with critic loop. K116E mutation = 24°C thermal stability improvement.",
          status: "completed",
          _techDetails: "Base model: Llama-3.1, Optimization: GRPO, Reward: Rosetta REF2015, Architecture: critic feedback loop",
        },
        {
          name: "hCA-776",
          type: "research",
          description: "Computationally designed carbonic anhydrase variant — 170% more catalytically active than wild-type",
          status: "completed",
        },
        {
          name: "SMILES-MDLM",
          type: "research",
          description: "Masked diffusion language model applied to molecular design via SMILES notation",
          status: "unknown",
        },
      ],
      _dataQuality: {
        sourcesConsulted: 10,
        sourceList: ["EvolutionaryScale", "Sutter Hill Ventures", "Haize Labs", "GitHub", "LinkedIn", "arXiv/preprints", "Stanford Profiles", "Pro-1 documentation", "hCA-776 results", "SMILES-MDLM paper"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "HIGH",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Specific role at EvolutionaryScale",
          "Peer-reviewed publication status for Pro-1 and hCA-776",
          "Stanford graduation year",
          "Duration at Sutter Hill and Haize Labs",
        ],
        recommendation: "Publication records and EvolutionaryScale team page would complete this profile. Technical depth is unusually well-documented through project artifacts.",
      },
    },
    infobox: {
      fullName: "Michael Hla",
      currentRole: "ML Researcher / Engineer",
      org: "EvolutionaryScale",
      education: ["Stanford University (BS Computer Science)"],
      knownFor: [
        "Pro-1: protein design with RL (24°C stability gain)",
        "hCA-776: 170% more active carbonic anhydrase",
        "SMILES-MDLM molecular design",
        "Red-teaming AI models at Haize Labs (for OpenAI)",
        "Research Analyst at Sutter Hill Ventures",
      ],
      links: [
        { label: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
        { label: "GitHub", url: "https://github.com/michaelhla" },
      ],
    },
    references: [
      { title: "EvolutionaryScale", url: "https://www.evolutionaryscale.ai/" },
      { title: "Sutter Hill Ventures", url: "https://www.shv.com/" },
      { title: "Haize Labs", url: "https://www.haize.ai/" },
    ],
  },

  // ===========================================================================
  // 9. Mirabella Sabbagh
  // ===========================================================================
  mirabella_sabbagh: {
    slug: "mirabella_sabbagh",
    name: "Mirabella Sabbagh",
    currentRole: "Unknown",
    org: "Unknown",
    education: [],
    humanContent: `
<p><strong>Mirabella Sabbagh</strong> has a limited publicly available professional profile. Based on available information, she appears to be connected to the technology and entrepreneurship community, but specific roles, education, and projects have not been publicly documented in detail.</p>

<h2>Research note</h2>
<p>Searches across professional networks, academic databases, and public records returned limited verifiable information for Mirabella Sabbagh. Additional context or a direct introduction would be needed to build a comprehensive profile.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mirabella Sabbagh",
      hasOccupation: [],
      knowsAbout: [],
      _dataQuality: {
        sourcesConsulted: 5,
        sourceList: ["LinkedIn", "Google Search", "web search", "professional directories", "social media"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "LOW",
          education: "LOW",
          careerTimeline: "LOW",
          technicalCapabilities: "LOW",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "No verified professional profile found",
          "Education details unavailable",
          "Career history not documented publicly",
          "May have limited web presence by choice",
        ],
        recommendation: "Direct introduction or additional context needed for profile completion.",
      },
    },
    infobox: {
      fullName: "Mirabella Sabbagh",
      currentRole: "Unknown",
      org: "Unknown",
      education: [],
      knownFor: [],
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
    currentRole: "Medical Student / Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS", field: "Human Biology", notes: "D1 Beach Volleyball, 3x Pac-12 Academic Honor Roll" },
    ],
    humanContent: `
<p><strong>Zeena Khazendar</strong> is a Stanford-educated researcher, athlete, and public health advocate. She competed on the Stanford Division I Beach Volleyball team while maintaining academic honors, and has contributed to public health research and community health initiatives, with a particular focus on healthcare in underserved populations.</p>

<h2>Early life and education</h2>
<p>Khazendar attended Stanford University, where she earned a degree in Human Biology. She was a member of the Stanford D1 Beach Volleyball roster and was named to the Pac-12 Academic Honor Roll three times, reflecting sustained academic excellence alongside athletic competition.</p>

<h2>Career</h2>
<h3>Public health and healthcare research</h3>
<p>Khazendar delivered a <strong>TEDx talk on positive deviance in refugee healthcare</strong>, exploring how exceptional outcomes in resource-limited settings can inform broader healthcare strategies.</p>
<p>She co-authored a research paper on the health and wellbeing of Palestinian children living under occupation, contributing to the academic literature on healthcare in conflict zones.</p>

<h3>BeAGoodDoctor</h3>
<p>Khazendar serves as Associate Director of <strong>BeAGoodDoctor</strong>, an initiative focused on medical education and physician development.</p>

<h3>Community service</h3>
<p>She coached a Special Olympics volleyball team to a state championship, demonstrating commitment to inclusive athletics and community engagement.</p>

<h2>Public contributions</h2>
<p>Khazendar has been featured in the <a href="https://stanforddaily.com">Stanford Daily</a>, including coverage of her work on athlete burnout and mental health in collegiate sports.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zeena Khazendar",
      sameAs: ["https://linkedin.com/in/zeenakhazendar"],
      jobTitle: "Medical Student / Researcher",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Human Biology",
          _verificationStatus: "public",
          _confidence: 0.95,
          notes: "D1 Beach Volleyball, 3x Pac-12 Academic Honor Roll",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Associate Director",
          organization: {
            "@type": "Organization",
            name: "BeAGoodDoctor",
            description: "Medical education and physician development initiative",
          },
          _verificationStatus: "public",
          _confidence: 0.80,
        },
        {
          "@type": "Role",
          roleName: "D1 Beach Volleyball Athlete",
          organization: {
            "@type": "Organization",
            name: "Stanford Cardinal Athletics",
            description: "Division I women's beach volleyball",
          },
          _verificationStatus: "public",
          _confidence: 0.95,
        },
      ],
      knowsAbout: [
        { skill: "Public Health / Global Health", type: "domain", _confidence: 0.90, _evidence: "TEDx talk on positive deviance in refugee healthcare, research on Palestinian children's health" },
        { skill: "Human Biology", type: "domain", _confidence: 0.85, _evidence: "Stanford BS in Human Biology" },
        { skill: "Healthcare in Conflict Zones", type: "domain", _confidence: 0.80, _evidence: "Co-authored paper on Palestinian children under occupation" },
        { skill: "Athletic Coaching", type: "domain", _confidence: 0.80, _evidence: "Coached Special Olympics volleyball team to state championship" },
        { skill: "Beach Volleyball", type: "athletic", _confidence: 0.95, _evidence: "Stanford D1 roster, 3x Pac-12 Academic Honor Roll" },
      ],
      memberOf: [
        { name: "Stanford D1 Beach Volleyball", _verificationStatus: "public" },
        { name: "Pac-12 Academic Honor Roll (3x)", _verificationStatus: "public" },
        { name: "BeAGoodDoctor", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "TEDx Talk: Positive Deviance in Refugee Healthcare", type: "talk", description: "TEDx presentation on exceptional health outcomes in refugee settings", status: "completed" },
        { name: "Research: Palestinian children's health under occupation", type: "research", description: "Co-authored academic paper on health in conflict zones", status: "completed" },
        { name: "Special Olympics Volleyball Coaching", type: "community", description: "Coached team to state championship", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["Stanford Athletics", "TEDx", "Stanford Daily", "LinkedIn", "BeAGoodDoctor", "Pac-12 records", "academic publications", "Special Olympics records"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Current position (medical school admission status)",
          "Publication details for Palestinian children's health paper",
          "TEDx talk full title and event location",
          "BeAGoodDoctor scope and impact metrics",
          "Stanford graduation year",
        ],
        recommendation: "Medical school application status and publication list would complete the academic profile.",
      },
    },
    infobox: {
      fullName: "Zeena Khazendar",
      currentRole: "Medical Student / Researcher",
      org: "Stanford University",
      education: [
        "Stanford University (BS Human Biology)",
      ],
      knownFor: [
        "TEDx talk on refugee healthcare (positive deviance)",
        "Stanford D1 Beach Volleyball, 3x Pac-12 Academic Honor Roll",
        "Research on Palestinian children's health",
        "Special Olympics volleyball state champion coach",
        "Associate Director, BeAGoodDoctor",
      ],
      links: [
        { label: "Stanford Daily — Athlete Burnout", url: "https://stanforddaily.com" },
      ],
    },
    references: [
      { title: "Stanford Athletics — Beach Volleyball Roster", url: "https://gostanford.com" },
      { title: "Stanford Daily", url: "https://stanforddaily.com" },
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
    currentRole: "Graduate / Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS", field: "Earth Systems", notes: "Dean's Award for Academic Achievement, Award for Outstanding Service" },
    ],
    humanContent: `
<p><strong>Nazli Hilal Dakad</strong> is a Stanford graduate, environmental scientist, and community leader from Seattle. She earned a Bachelor of Science in Earth Systems from Stanford University, receiving both the Dean's Award for Undergraduate Academic Achievement and the Award for Outstanding Service to the Earth Systems Program.</p>

<h2>Early life and education</h2>
<p>Dakad is from Seattle, Washington. She attended Stanford University, where she studied Earth Systems. She received the <strong>Dean's Award for Undergraduate Academic Achievement</strong> and the <strong>Award for Outstanding Service to the Earth Systems Program</strong>.</p>
<p>During the 2023–24 academic year, she served as the Earth Systems Student Advisor, guiding fellow students in the program.</p>

<h2>Career</h2>
<h3>Curriculum design</h3>
<p>Dakad co-designed the <strong>"Science for Sustainable Solutions"</strong> curriculum, an educational program integrating sustainability science into coursework.</p>

<h3>Education access advocacy</h3>
<p>Dakad served as a <strong>Matriculate advising fellow</strong> for three years, helping first-generation and low-income students navigate the college admissions process.</p>

<h2>Public contributions</h2>
<p>Dakad was actively involved in Stanford campus life. She led opposition to a proposed major name change within her department, organizing students and presenting concerns through institutional channels. She has been featured in multiple <a href="https://stanforddaily.com">Stanford Daily</a> articles covering campus governance and student advocacy. She was also active in the Stanford Ski Club.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nazli Hilal Dakad",
      alternateName: "Nazli Dakad",
      sameAs: ["https://linkedin.com/in/nazlidakad"],
      jobTitle: "Graduate / Researcher",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS Earth Systems",
          _verificationStatus: "public",
          _confidence: 0.95,
          notes: "Dean's Award for Academic Achievement, Outstanding Service Award",
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Earth Systems Student Advisor",
          startDate: "2023",
          endDate: "2024",
          organization: { "@type": "Organization", name: "Stanford Earth Systems Program" },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Matriculate Advising Fellow",
          organization: {
            "@type": "Organization",
            name: "Matriculate",
            description: "College advising for first-generation and low-income students",
          },
          _whatTheyBuilt: "3 years of college admissions advising for underserved students",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
      ],
      knowsAbout: [
        { skill: "Earth Systems / Environmental Science", type: "domain", _confidence: 0.95, _evidence: "BS Earth Systems Stanford, Dean's Award, Outstanding Service Award" },
        { skill: "Sustainability Curriculum Design", type: "domain", _confidence: 0.80, _evidence: "Co-designed 'Science for Sustainable Solutions' curriculum" },
        { skill: "Education Access Advocacy", type: "domain", _confidence: 0.85, _evidence: "3-year Matriculate advising fellow" },
        { skill: "Student Governance", type: "domain", _confidence: 0.75, _evidence: "Led opposition to department name change, Stanford Daily coverage" },
      ],
      memberOf: [
        { name: "Matriculate Advising Fellow (3 years)", _verificationStatus: "public" },
        { name: "Stanford Ski Club", _verificationStatus: "public" },
        { name: "Earth Systems Student Advisor (2023–24)", _verificationStatus: "public" },
      ],
      _projects: [
        { name: "Science for Sustainable Solutions Curriculum", type: "education", description: "Co-designed sustainability curriculum", status: "completed" },
        { name: "Department Name Change Opposition", type: "advocacy", description: "Led student opposition to proposed Earth Systems name change", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 7,
        sourceList: ["Stanford Earth Systems", "Stanford Daily (multiple articles)", "Matriculate", "LinkedIn", "Stanford awards records", "Stanford Ski Club", "department records"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "LOW",
        },
        gaps: [
          "Current position after Stanford graduation",
          "Graduate school plans",
          "Technical skills and research methods",
          "Graduation year (likely 2024)",
          "Post-graduation career direction",
        ],
        recommendation: "Current career direction is the biggest gap. A direct conversation would clarify post-Stanford plans.",
      },
    },
    infobox: {
      fullName: "Nazli Hilal Dakad",
      currentRole: "Graduate / Researcher",
      org: "Stanford University",
      education: [
        "Stanford University (BS Earth Systems)",
      ],
      knownFor: [
        "Dean's Award for Undergraduate Academic Achievement",
        "Outstanding Service to Earth Systems Program",
        "Co-designed 'Science for Sustainable Solutions' curriculum",
        "Matriculate advising fellow (3 years)",
        "Led opposition to department name change",
      ],
      links: [
        { label: "Stanford Daily articles", url: "https://stanforddaily.com" },
      ],
    },
    references: [
      { title: "Stanford Daily", url: "https://stanforddaily.com" },
      { title: "Matriculate", url: "https://www.matriculate.org/" },
    ],
  },

  // ===========================================================================
  // 15. Julia Flora
  // ===========================================================================
  julia_flora: {
    slug: "julia_flora",
    name: "Julia Flora",
    currentRole: "Clinical Research Coordinator",
    org: "Stanford Medicine — Pediatric Orthopedics",
    education: [
      { institution: "Stanford University", degree: "BS with Honors", field: "Human Biology", years: "Class of 2024" },
    ],
    humanContent: `
<p><strong>Julia Flora</strong> is a clinical researcher and Stanford graduate specializing in musculoskeletal health and sports medicine. She holds a Bachelor of Science with Honors in Human Biology from Stanford University (Class of 2024) and currently serves as a Clinical Research Coordinator in Pediatric Orthopedics at <a href="https://med.stanford.edu/">Stanford Medicine</a>.</p>

<h2>Early life and education</h2>
<p>Flora attended Stanford University, where she earned a BS with Honors in Human Biology. Her honors thesis investigated bone mineral density in female collegiate athletes, contributing to the understanding of skeletal health in competitive sports.</p>

<h2>Career</h2>
<h3>Stanford Medicine</h3>
<p>Flora works as a Clinical Research Coordinator in the Division of Pediatric Orthopedics at Stanford Medicine. Her work focuses on clinical research related to pediatric musculoskeletal conditions.</p>

<h3>Wu Tsai Human Performance Alliance</h3>
<p>In 2023, Flora was an undergraduate researcher at the <a href="https://humanperformancealliance.org/">Wu Tsai Human Performance Alliance</a> at Stanford, conducting research on human performance and athletic science.</p>

<h2>Notable work</h2>
<p>Flora is a co-lead author on a preprint published on <a href="https://www.medrxiv.org/">medRxiv</a>, contributing to research on bone density and musculoskeletal health in athletes. Her honors thesis on bone mineral density in female athletes represents original research at the intersection of sports medicine and women's health.</p>

<h2>Public contributions</h2>
<p>Flora wrote for the <a href="https://stanforddaily.com">Stanford Daily</a> during her undergraduate years.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Julia Flora",
      sameAs: ["https://linkedin.com/in/juliaflora"],
      jobTitle: "Clinical Research Coordinator",
      worksFor: { "@type": "Organization", name: "Stanford Medicine — Pediatric Orthopedics", url: "https://med.stanford.edu/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BS with Honors, Human Biology",
          endDate: "2024",
          _verificationStatus: "public",
          _confidence: 0.95,
        },
      ],
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Clinical Research Coordinator",
          startDate: "2024",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Stanford Medicine — Division of Pediatric Orthopedics",
            url: "https://med.stanford.edu/",
            description: "Clinical research in pediatric musculoskeletal conditions",
          },
          _verificationStatus: "public",
          _confidence: 0.90,
        },
        {
          "@type": "Role",
          roleName: "Undergraduate Researcher",
          startDate: "2023",
          endDate: "2024",
          organization: {
            "@type": "Organization",
            name: "Wu Tsai Human Performance Alliance, Stanford",
            url: "https://humanperformancealliance.org/",
            description: "Human performance and athletic science research",
          },
          _whatTheyBuilt: "Research on bone density and musculoskeletal health in athletes",
          _verificationStatus: "public",
          _confidence: 0.90,
        },
      ],
      knowsAbout: [
        { skill: "Clinical Research", type: "domain", _confidence: 0.90, _evidence: "CRC at Stanford Pediatric Orthopedics, medRxiv preprint co-lead author" },
        { skill: "Musculoskeletal Health / Sports Medicine", type: "domain", _confidence: 0.90, _evidence: "Honors thesis on bone density in female athletes, Wu Tsai research, current role" },
        { skill: "Human Biology", type: "domain", _confidence: 0.85, _evidence: "BS with Honors in Human Biology" },
        { skill: "Scientific Writing", type: "skill", _confidence: 0.80, _evidence: "medRxiv preprint co-lead author, Stanford Daily writer, honors thesis" },
      ],
      _projects: [
        { name: "Honors Thesis: Bone Mineral Density in Female Athletes", type: "research", description: "Investigated skeletal health in female collegiate athletes", status: "completed" },
        { name: "medRxiv Preprint", type: "research", description: "Co-lead author on bone density / musculoskeletal health research", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 7,
        sourceList: ["Stanford Profiles", "medRxiv", "Wu Tsai Human Performance Alliance", "Stanford Medicine", "Stanford Daily", "LinkedIn", "Stanford honors thesis records"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "HIGH",
          careerTimeline: "HIGH",
          technicalCapabilities: "MEDIUM",
          currentWorkDetail: "HIGH",
        },
        gaps: [
          "medRxiv preprint full citation",
          "Medical school application status",
          "Technical/computational skills",
          "Wu Tsai research specific methodology",
        ],
        recommendation: "Publication record and medical school plans would complete this profile.",
      },
    },
    infobox: {
      fullName: "Julia Flora",
      currentRole: "Clinical Research Coordinator",
      org: "Stanford Medicine — Pediatric Orthopedics",
      education: ["Stanford University (BS with Honors, Human Biology, 2024)"],
      knownFor: [
        "Clinical research in pediatric orthopedics (Stanford Medicine)",
        "Honors thesis: bone density in female athletes",
        "Wu Tsai Human Performance Alliance researcher",
        "medRxiv preprint co-lead author",
        "Stanford Daily writer",
      ],
      links: [
        { label: "Stanford Medicine", url: "https://med.stanford.edu/" },
        { label: "Wu Tsai Alliance", url: "https://humanperformancealliance.org/" },
      ],
    },
    references: [
      { title: "Stanford Medicine", url: "https://med.stanford.edu/" },
      { title: "Wu Tsai Human Performance Alliance", url: "https://humanperformancealliance.org/" },
      { title: "medRxiv", url: "https://www.medrxiv.org/" },
      { title: "Stanford Daily", url: "https://stanforddaily.com" },
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
