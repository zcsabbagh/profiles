import type { ProfileRecord } from "../types";

export const profileBatchB: ProfileRecord = {
  // 9. Mirabella Sabbagh
  // ===========================================================================
  mirabella_sabbagh: {
    slug: "mirabella_sabbagh",
    name: "Mira Bella Sabbagh",
    currentRole: "Student Designer",
    org: "Pomona College / Onton",
    education: [
      { institution: "Pomona College", degree: "BA (in progress)", field: "Cognitive Science & Art", years: "2023–2027 (expected)", notes: "UWC Davis Scholar. Junior year as of 2025–26." },
    ],
    humanContent: `
<p><strong>Mira Bella Sabbagh</strong> is a student at <a href="https://www.pomona.edu/">Pomona College</a> in Claremont, California, where she is a junior studying Cognitive Science and Art. She is a <a href="https://www.davisuwcscholars.org/">UWC Davis Scholar</a>. Her interests center on the intersection of design, behavioral science, and artificial intelligence.</p>

<h2>Education</h2>
<p>Sabbagh is a junior at Pomona College, one of the Claremont Colleges, pursuing a dual focus in Cognitive Science and Art. She was awarded a UWC Davis Scholarship, a merit-based program supporting graduates of United World Colleges at select U.S. universities.</p>

<h2>Career</h2>
<h3>Onton</h3>
<p>In summer 2025, Sabbagh worked as a <strong>Product Design Intern</strong> at <a href="https://www.onton.ai/">Onton</a>, where her public role description references design work for a high-traffic consumer shopping experience.</p>

<h3>GoAhead Ventures and Mobbin</h3>
<p>Her public profile also lists prior work as a <strong>Venture Scout</strong> at GoAhead Ventures and as a contributor to <strong>Mobbin</strong>, a UI inspiration library.</p>

<h2>Professional profile</h2>
<p>Sabbagh maintains a personal portfolio site and describes her design direction as centered on accessibility and visual language. Her work sits at the intersection of design, behavioral science, and AI.</p>

<h2>Verification scope</h2>
<p>This profile is strongest on institutional and role-level identity: Pomona enrollment, UWC scholarship affiliation, and public internship/scout positions. Independent evidence for shipped product outcomes remains lighter than title-level evidence, so technical-impact claims are framed conservatively until more case-study artifacts are publicly linked.</p>
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
        {
          "@type": "Role",
          roleName: "Venture Capital Scout",
          startDate: "2024-07",
          endDate: "2025-05",
          organization: { "@type": "Organization", name: "GoAhead Ventures" },
          _verificationStatus: "public",
          _confidence: 0.85,
        },
        {
          "@type": "Role",
          roleName: "Contributor",
          startDate: "2024-07",
          endDate: "2025-05",
          organization: { "@type": "Organization", name: "Mobbin" },
          _verificationStatus: "public",
          _confidence: 0.8,
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
        sourcesConsulted: 7,
        sourceList: [
          "LinkedIn (mirabellasabbagh, 500+ connections, 712 followers)",
          "Pomona College",
          "UWC Davis Scholars Program",
          "Onton company profile",
          "GoAhead Ventures",
          "Mobbin",
          "mirabellasabbagh.com",
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
          "Design portfolio quality and depth not independently assessed",
          "UWC origin school unknown",
          "Specific design tools and technical skills unknown",
          "Only ~2.3 years professional experience documented",
        ],
        recommendation: "Case studies and shipped product details would improve confidence on technical design depth.",
      },
    },
    infobox: {
      fullName: "Mira Bella Sabbagh",
      currentRole: "Student Designer",
      org: "Pomona College / Onton",
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
        { label: "Portfolio", url: "https://www.mirabellasabbagh.com/" },
      ],
    },
    references: [
      { title: "Mirabella Sabbagh — LinkedIn", url: "https://linkedin.com/in/mirabellasabbagh" },
      { title: "Mirabella Sabbagh — Portfolio", url: "https://www.mirabellasabbagh.com/" },
      { title: "Pomona College", url: "https://www.pomona.edu/" },
      { title: "UWC Davis Scholars Program", url: "https://www.davisuwcscholars.org/" },
      { title: "Onton", url: "https://www.onton.ai/" },
      { title: "GoAhead Ventures", url: "https://www.goaheadventures.com/" },
      { title: "Mobbin", url: "https://mobbin.com/" },
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
<p><strong>Ishani Thakur</strong> is a venture investor and technology operator. She is a Partner at <a href="https://www.hanabi.com/team/ishani-thakur">Hanabi Capital</a>. Public bios also describe prior investing roles at Index Ventures and Nava Ventures.</p>

<h2>Career</h2>
<h3>Hanabi Capital</h3>
<p>At Hanabi, Thakur focuses on AI and software infrastructure investing themes. Public deal coverage and team profiles associate Hanabi with early investments across the modern AI stack.</p>

<h3>Index Ventures and Nava Ventures</h3>
<p>Before Hanabi, Thakur worked at Index Ventures and previously at Nava Ventures. She is listed on SXSW 2024 programming as an Index Ventures Partner panelist.</p>

<h3>Nava Ventures</h3>
<p>Prior to Index, Thakur worked at Nava Ventures.</p>

<h2>Technical background</h2>
<p>Hanabi&apos;s public team page describes a technical background including AI research and software engineering, and notes that she studied Course 6-3 (Computer Science) at MIT.</p>

<h2>Verification note</h2>
<p>Open-source coverage is strong on current investing identity and thematic focus, but weaker on exact historical role boundaries and full portfolio attribution across firms. This profile therefore distinguishes between high-confidence current-role evidence and medium-confidence retrospective details sourced from biography-style summaries.</p>
<p>As more primary materials are available (portfolio announcements, interviews, dated firm bios), timeline precision and attribution confidence can be further improved.</p>
<p>At this stage, readers should treat this as a solid directional map of her investing scope rather than a complete historical transaction ledger.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ishani Thakur",
      sameAs: ["https://linkedin.com/in/ishanithakur", "https://www.hanabi.com/team/ishani-thakur"],
      jobTitle: "Co-Founder & General Partner",
      worksFor: { "@type": "Organization", name: "Hanabi Capital" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Partner",
          endDate: null,
          organization: {
            "@type": "Organization",
            name: "Hanabi Capital",
            description: "Venture fund co-founded with Mike Volpi and Bryan Offutt",
          },
          _whatTheyBuilt: "Invests in AI and software infrastructure companies at Hanabi Capital",
          _verificationStatus: "public",
          _confidence: 0.95,
          _gaps: ["Fund size unknown", "Full portfolio list unknown"],
        },
        {
          "@type": "Role",
          roleName: "Partner",
          organization: {
            "@type": "Organization",
            name: "Index Ventures",
            description: "Global VC firm (Slack, Figma, Roblox)",
          },
          _whatTheyBuilt: "Invested in AI and infrastructure themes; appeared on SXSW 2024 as Index Ventures Partner",
          _verificationStatus: "public",
          _confidence: 0.9,
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
        { skill: "Software Engineering", type: "domain", _confidence: 0.75, _evidence: "Hanabi bio cites engineering experience at Confluent, Lyft Level 5, and Google" },
        { skill: "Robotics / RL Research", type: "domain", _confidence: 0.7, _evidence: "Hanabi bio cites prior robotics/RL research at DeepMind and MIT" },
        { skill: "Real-time Infrastructure", type: "domain", _confidence: 0.70, _evidence: "LiveKit investment" },
        { skill: "Robotics / Defense Tech", type: "domain", _confidence: 0.60, _evidence: "BRINC Drones investment" },
      ],
      _projects: [
        { name: "Hanabi Capital", type: "fund", description: "VC fund with Volpi and Offutt. Portfolio: Anysphere (Cursor), LiveKit, Cognition AI, BRINC Drones", status: "active" },
      ],
      _dataQuality: {
        sourcesConsulted: 9,
        sourceList: ["LinkedIn", "Hanabi team page", "Index Ventures", "SXSW 2024 schedule", "Nava Ventures launch post", "Cartesia", "Anysphere", "Cognition AI", "General web search"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "LOW",
          careerTimeline: "MEDIUM",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Exact dates across Index/Nava/Hanabi not fully public",
          "Hanabi Capital fund size and vintage",
          "Full investment portfolio",
          "Independent verification of all prior technical roles",
        ],
        recommendation: "Fund details and canonical timeline dates would complete this profile.",
      },
    },
    infobox: {
      fullName: "Ishani Thakur",
      currentRole: "Co-Founder & General Partner",
      org: "Hanabi Capital",
      education: ["MIT (Course 6-3 / Computer Science, per Hanabi bio)"],
      knownFor: [
        "Partner at Hanabi Capital",
        "Former Index Ventures Partner (SXSW 2024 panelist)",
        "Prior Nava Ventures investor",
        "AI/software infrastructure investing",
      ],
      links: [
        { label: "Hanabi Profile", url: "https://www.hanabi.com/team/ishani-thakur" },
        { label: "SXSW 2024 Speaker", url: "https://schedule.sxsw.com/2024/speakers/2197976" },
      ],
    },
    references: [
      { title: "Hanabi — Ishani Thakur", url: "https://www.hanabi.com/team/ishani-thakur" },
      { title: "SXSW 2024 — Ishani Thakur", url: "https://schedule.sxsw.com/2024/speakers/2197976" },
      { title: "Ishani Thakur — LinkedIn", url: "https://linkedin.com/in/ishanithakur" },
      { title: "Nava Ventures launch post", url: "https://www.linkedin.com/posts/ishani-thakur-04420613b_so-nava-ventures-has-officially-launched-activity-6900532630303989760-NdKQ" },
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

};
