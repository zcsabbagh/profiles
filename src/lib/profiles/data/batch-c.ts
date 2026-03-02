import type { ProfileRecord } from "../types";

export const profileBatchC: ProfileRecord = {
  // 13. Gianfranco Filice
  // ===========================================================================
  gianfranco_filice: {
    slug: "gianfranco_filice",
    name: "Gianfranco Filice",
    currentRole: "Partner",
    org: "OVO Fund",
    education: [
      { institution: "Stanford University", degree: "BA", field: "Economics", years: "2016–2020" },
      { institution: "Christopher High School", degree: "High School Diploma", notes: "Gilroy, CA" },
    ],
    humanContent: `
<p><strong>Gianfranco Filice</strong> is a venture investor and operator at <a href="https://www.ovofund.com/">OVO Fund</a>. Public profiles describe him as a partner focused on first-check investing, with additional angel activity through AKA Angel.</p>

<h2>Early life and education</h2>
<p>Filice attended Christopher High School and later studied Economics at Stanford University.</p>

<h2>Career</h2>
<h3>OVO Fund</h3>
<p>OVO Fund is positioned as an early-stage fund. Public materials and interviews attribute investments across software, fintech, and Web3, including names such as Sourcegraph and Addepar.</p>
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
<p>Public coverage links Filice and AKA Angel to investments including Pledge Finance.</p>

<h2>Notable work</h2>
<p>Filice founded <strong>Ripple Design</strong> as a middle schooler, making him one of the youngest startup founders in the Bay Area. The company ran a Kickstarter campaign during its early development.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gianfranco Filice",
      sameAs: ["https://linkedin.com/in/gianfrancofilice", "https://www.ovofund.com/"],
      jobTitle: "Partner",
      worksFor: { "@type": "Organization", name: "OVO Fund", url: "https://www.ovofund.com/" },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Stanford University",
          degree: "BA Economics",
          _verificationStatus: "public",
          _confidence: 0.85,
        },
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
          roleName: "Partner",
          organization: {
            "@type": "Organization",
            name: "OVO Fund",
            url: "https://www.ovofund.com/",
            description: "Early-stage venture capital firm",
          },
          _whatTheyBuilt: "Leads first-check investing at OVO Fund",
          _verificationStatus: "public",
          _confidence: 0.9,
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
          roleName: "Angel Investor",
          organization: { "@type": "Organization", name: "AKA Angel Fund" },
          _verificationStatus: "public",
          _confidence: 0.82,
        },
      ],
      knowsAbout: [
        { skill: "Venture Capital / Seed Investing", type: "domain", _confidence: 0.95, _evidence: "Partner at OVO Fund; first-check investor profile" },
        { skill: "E-Commerce", type: "domain", _confidence: 0.80, _evidence: "Wish (IPO) investment" },
        { skill: "Enterprise Software", type: "domain", _confidence: 0.80, _evidence: "Sourcegraph, Addepar, Everlaw investments" },
        { skill: "Fraud Prevention", type: "domain", _confidence: 0.70, _evidence: "Signifyd investment" },
      ],
      _projects: [
        { name: "OVO Fund", type: "fund", url: "https://www.ovofund.com/", description: "Early-stage VC fund", status: "active" },
        { name: "AKA Angel Fund", type: "fund", description: "Angel investment fund", status: "active" },
        { name: "Pledge Finance investment", type: "investment", description: "Publicly referenced via AKA Angel / Web3 investing content", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 7,
        sourceList: ["OVO Fund website", "LinkedIn", "gianfranco.io", "Pledge Finance post", "The Org", "OpenVC", "General web search"],
        lastUpdated: "2026-03",
        overallConfidence: {
          identity: "HIGH",
          education: "MEDIUM",
          careerTimeline: "HIGH",
          technicalCapabilities: "LOW",
          currentWorkDetail: "MEDIUM",
        },
        gaps: [
          "Role title at OVO varies by source (partner vs founder/managing partner)",
          "OVO Fund AUM and fund vintages",
          "Full verified portfolio company list",
          "AKA Angel Fund structure and portfolio",
        ],
        recommendation: "Canonical firm bio and direct interview would resolve role-title ambiguity and portfolio attribution detail.",
      },
    },
    infobox: {
      fullName: "Gianfranco Filice",
      currentRole: "Partner",
      org: "OVO Fund",
      education: ["Stanford University (BA Economics)", "Christopher High School, Gilroy CA"],
      knownFor: [
        "Partner at OVO Fund (early-stage investing)",
        "AKA Angel investment activity",
        "Investments including Pledge Finance",
        "Writes at gianfranco.io",
      ],
      website: "https://www.ovofund.com/",
      links: [
        { label: "OVO Fund", url: "https://www.ovofund.com/" },
      ],
    },
    references: [
      { title: "OVO Fund", url: "https://www.ovofund.com/" },
      { title: "Gianfranco Filice — LinkedIn", url: "https://linkedin.com/in/gianfrancofilice" },
      { title: "Gianfranco.io", url: "https://gianfranco.io/" },
      { title: "Pledge Finance x AKA Angel", url: "https://medium.com/pledge-finance/pledge-finance-growth-partner-series-aka-angel-96e75ddf6fa" },
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

  // ===========================================================================
  // 16. Riya Ranjan
  // ===========================================================================
  riya_ranjan: {
    slug: "riya_ranjan",
    name: "Riya Ranjan",
    currentRole: "Undergraduate Research Assistant",
    org: "Stanford CodeX",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Computer Science / Mathematics / FGSS", years: "2022–2026 (est.)" },
    ],
    humanContent: `
<p><strong>Riya Ranjan</strong> is a Stanford student researcher focused on legal AI evaluation and benchmarking. Her public Stanford profile lists affiliations in Computer Science, Mathematics, and Feminist, Gender, and Sexuality Studies.</p>
<p>Public profiles indicate she is a Research Assistant at <a href="https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/">CodeX</a> and has presented legal-AI work in venues including NeurIPS workshop programming.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Riya Ranjan",
      sameAs: ["https://profiles.stanford.edu/riya-ranjan", "https://linkedin.com/in/riya-ranjan-998b051a0"],
      jobTitle: "Research Assistant",
      worksFor: { "@type": "Organization", name: "CodeX, Stanford Center for Legal Informatics" },
      knowsAbout: [
        { skill: "Legal AI", type: "domain", _confidence: 0.9, _evidence: "CodeX research role and legal benchmarking work" },
        { skill: "LLM Evaluation", type: "domain", _confidence: 0.85, _evidence: "NeurIPS-related presentation references" },
      ],
      _dataQuality: {
        sourcesConsulted: 4,
        sourceList: ["Stanford Profiles", "LinkedIn", "CodeX references", "General web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "MEDIUM", currentWorkDetail: "MEDIUM" },
        gaps: ["Exact graduation year and degree plan", "Publication canonical links"],
      },
    },
    infobox: {
      fullName: "Riya Ranjan",
      currentRole: "Undergraduate Research Assistant",
      org: "Stanford CodeX",
      education: ["Stanford University (CS / Math / FGSS, in progress)"],
      knownFor: ["Legal AI evaluation research at CodeX", "Stanford undergraduate researcher"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/riya-ranjan" },
        { label: "LinkedIn", url: "https://linkedin.com/in/riya-ranjan-998b051a0" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Riya Ranjan", url: "https://profiles.stanford.edu/riya-ranjan" },
      { title: "Riya Ranjan — LinkedIn", url: "https://linkedin.com/in/riya-ranjan-998b051a0" },
    ],
  },

  // ===========================================================================
  // 17. Uche Ochuba
  // ===========================================================================
  uche_ochuba: {
    slug: "uche_ochuba",
    name: "Uche Ochuba",
    currentRole: "Software Engineer",
    org: "Databricks",
    education: [
      { institution: "Stanford University", degree: "BS/MS", field: "Computer Science" },
    ],
    humanContent: `
<p><strong>Uche Ochuba</strong> is a software engineer at Databricks. Public profiles describe prior Stanford entrepreneurship and engineering activities, including participation in the Mayfield Fellows program and internships in data/AI infrastructure.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Uche Ochuba",
      sameAs: ["https://linkedin.com/in/uche-ochuba-15a5ba154", "https://github.com/ucheochuba"],
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "Databricks" },
      knowsAbout: [
        { skill: "Data Infrastructure", type: "domain", _confidence: 0.85, _evidence: "Databricks and MotherDuck roles" },
        { skill: "Machine Learning Engineering", type: "domain", _confidence: 0.8, _evidence: "AI fellowship/program references" },
      ],
      _dataQuality: {
        sourcesConsulted: 5,
        sourceList: ["LinkedIn", "GitHub", "STVP Mayfield Fellows", "Stanford Daily author page", "Web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "MEDIUM", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: ["Official Stanford degree confirmation link", "Specific production systems details"],
      },
    },
    infobox: {
      fullName: "Uche Ochuba",
      currentRole: "Software Engineer",
      org: "Databricks",
      education: ["Stanford University (BS/MS CS, public-profile reported)"],
      knownFor: ["Software engineer at Databricks", "Stanford Mayfield Fellows participant"],
      links: [
        { label: "LinkedIn", url: "https://linkedin.com/in/uche-ochuba-15a5ba154" },
        { label: "GitHub", url: "https://github.com/ucheochuba" },
      ],
    },
    references: [
      { title: "Uche Ochuba — LinkedIn", url: "https://linkedin.com/in/uche-ochuba-15a5ba154" },
      { title: "Uche Ochuba — GitHub", url: "https://github.com/ucheochuba" },
      { title: "STVP Mayfield Fellows", url: "https://stvp.stanford.edu/mayfield-fellows-program/" },
    ],
  },

  // ===========================================================================
  // 18. Leeah Michael
  // ===========================================================================
  leeah_michael: {
    slug: "leeah_michael",
    name: "Leeah Michael",
    currentRole: "Software Engineer",
    org: "Pinterest",
    education: [
      { institution: "Stanford University", degree: "BS (in progress / recent graduate)", field: "Computer Science" },
    ],
    humanContent: `
<p><strong>Leeah Michael</strong> is a software engineer at Pinterest and a Stanford computer science alumna/student (public profiles vary by timing). Public records also show prior participation in Stanford&apos;s Mayfield Fellows entrepreneurship program.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Leeah Michael",
      sameAs: ["https://linkedin.com/in/leeah-michael"],
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "Pinterest" },
      knowsAbout: [
        { skill: "Software Engineering", type: "domain", _confidence: 0.9, _evidence: "Pinterest SWE role and prior SWE internships" },
        { skill: "Product/Entrepreneurship", type: "domain", _confidence: 0.75, _evidence: "Mayfield Fellows and APM internship experience" },
      ],
      _dataQuality: {
        sourcesConsulted: 3,
        sourceList: ["LinkedIn", "STVP Mayfield Fellows", "Web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "MEDIUM", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: ["Canonical Stanford degree completion date"],
      },
    },
    infobox: {
      fullName: "Leeah Michael",
      currentRole: "Software Engineer",
      org: "Pinterest",
      education: ["Stanford University (CS)"],
      knownFor: ["Software engineer at Pinterest", "Stanford Mayfield Fellow"],
      links: [{ label: "LinkedIn", url: "https://linkedin.com/in/leeah-michael" }],
    },
    references: [
      { title: "Leeah Michael — LinkedIn", url: "https://linkedin.com/in/leeah-michael" },
      { title: "STVP Mayfield Fellows", url: "https://stvp.stanford.edu/mayfield-fellows-program/" },
    ],
  },

  // ===========================================================================
  // 19. Sera Camas
  // ===========================================================================
  sera_camas: {
    slug: "sera_camas",
    name: "Sera Camas",
    currentRole: "Lead Research Assistant",
    org: "Stanford Graduate School of Education",
    education: [
      { institution: "Stanford University", degree: "MS (in progress)", field: "Computer Science" },
      { institution: "Stanford University", degree: "BS (in progress/completed)", field: "Symbolic Systems" },
    ],
    humanContent: `
<p><strong>Sera Camas</strong> is a Stanford student and researcher. Public Stanford and LinkedIn profiles list her as a lead research assistant at Stanford GSE&apos;s Educational Neuroscience Initiative, with additional product and consulting experience.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sera Camas",
      sameAs: ["https://profiles.stanford.edu/sera-camas", "https://linkedin.com/in/sera-camas"],
      jobTitle: "Lead Research Assistant",
      worksFor: { "@type": "Organization", name: "Stanford Graduate School of Education" },
      knowsAbout: [
        { skill: "Educational Technology", type: "domain", _confidence: 0.8, _evidence: "Educational Neuroscience Initiative role" },
        { skill: "Product Management", type: "domain", _confidence: 0.75, _evidence: "PM internships at DocuSign/Canal per public profile" },
      ],
      _dataQuality: {
        sourcesConsulted: 4,
        sourceList: ["Stanford Profiles", "LinkedIn", "seracamas.com", "Web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "MEDIUM", currentWorkDetail: "MEDIUM" },
        gaps: ["Exact degree completion status"],
      },
    },
    infobox: {
      fullName: "Sera Camas",
      currentRole: "Lead Research Assistant",
      org: "Stanford GSE",
      education: ["Stanford (CS / Symbolic Systems)"],
      knownFor: ["Educational Neuroscience Initiative role", "Stanford student leader/researcher"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/sera-camas" },
        { label: "LinkedIn", url: "https://linkedin.com/in/sera-camas" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Sera Camas", url: "https://profiles.stanford.edu/sera-camas" },
      { title: "Sera Camas — LinkedIn", url: "https://linkedin.com/in/sera-camas" },
      { title: "Sera Camas website", url: "http://seracamas.com/" },
    ],
  },

  // ===========================================================================
  // 20. Chehan Wijayaratne
  // ===========================================================================
  chehan_wijayaratne: {
    slug: "chehan_wijayaratne",
    name: "Chehan Wijayaratne",
    currentRole: "Student Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Computational Biology / Computer Science" },
    ],
    humanContent: `
<p><strong>Chehan Lakdhinu Wijayaratne</strong> is a Stanford undergraduate whose public profiles center on computational biology, computer science, and research activity in neuroscience-adjacent settings at Stanford. Public records identify him as an undergraduate affiliated with Stanford's Vice Provost for Undergraduate Education and as a student researcher in medicine-adjacent labs.</p>

<h2>Education</h2>
<p>Stanford Profiles lists Wijayaratne as an undergraduate student, and independent public profile data describes his course-of-study focus as computational biology and computer science.</p>

<h2>Research and campus work</h2>
<p>Public LinkedIn data describes research intern activity associated with the Giocomo Lab at Stanford and prior work tied to a Wu Lab context in Stanford Medicine. Because most technical detail is self-reported rather than publication-indexed, this profile treats specific project claims as medium-confidence unless independently published.</p>

<h2>Other public activity</h2>
<p>Open web materials also connect him to Stanford arts performance contexts (including Stanford Mendicants media credits). These sources are included as identity-corroborating context, not as scientific work evidence.</p>

<h2>Verification note</h2>
<p>This profile has been expanded to include multiple independent references, but publication-level outputs and lab-specific technical contributions remain under-documented in public sources.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Chehan Lakdhinu Wijayaratne",
      alternateName: "Chehan Wijayaratne",
      sameAs: ["https://profiles.stanford.edu/chehan-wijayaratne", "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6"],
      jobTitle: "Research Intern",
      worksFor: { "@type": "Organization", name: "Stanford University School of Medicine" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Undergraduate Student",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.95,
          _evidence: "Stanford Profiles lists active undergraduate status.",
        },
        {
          "@type": "Role",
          roleName: "Research Intern (self-reported)",
          organization: { "@type": "Organization", name: "Stanford University School of Medicine" },
          _verificationStatus: "self-reported",
          _confidence: 0.78,
          _evidence: "LinkedIn lists Giocomo Lab and prior Wu Lab research roles.",
          _gaps: ["No public publication list tied directly to these roles"],
        },
      ],
      knowsAbout: [
        { skill: "Computational Biology", type: "domain", _confidence: 0.84, _evidence: "Stanford and LinkedIn profile positioning" },
        { skill: "Systems Neuroscience", type: "domain", _confidence: 0.76, _evidence: "Self-reported Giocomo Lab research affiliation" },
        { skill: "Research Communication / Team Collaboration", type: "domain", _confidence: 0.65, _evidence: "Public student research and campus activity footprint" },
      ],
      _projects: [
        { name: "Giocomo Lab research internship", type: "research", description: "Self-reported systems-neuroscience-adjacent work in Stanford Medicine context", status: "active", _verificationStatus: "self-reported" },
        { name: "Wu Lab research internship", type: "research", description: "Earlier self-reported Stanford Medicine lab internship", status: "completed", _verificationStatus: "self-reported" },
      ],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["Stanford Profiles (person page)", "LinkedIn profile", "Stanford Profiles browse/disambiguation", "Giocomo Lab site", "Stanford School of Medicine", "Stanford Mendicants YouTube credit", "Schmidt Vocal Arts 2020-21 finalists", "General web disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "LOW", currentWorkDetail: "MEDIUM" },
        gaps: [
          "Few independently published technical outputs in open index",
          "Lab project specifics are mostly self-reported",
          "Public timeline still sparse outside profile summaries",
        ],
        recommendation: "Add publication links, project repositories, or lab pages naming specific contributions to raise technical-confidence level.",
      },
    },
    infobox: {
      fullName: "Chehan Lakdhinu Wijayaratne",
      currentRole: "Student Researcher",
      org: "Stanford University",
      education: ["Stanford University (Computational Biology/CS, in progress)"],
      knownFor: ["Computational biology and CS undergraduate track", "Research internships in Stanford medicine-adjacent labs", "Campus performance activity (Mendicants credits)"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/chehan-wijayaratne" },
        { label: "LinkedIn", url: "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6" },
      ],
    },
    references: [
      { title: "Chehan Lakdhinu Wijayaratne — Stanford Profiles", url: "https://profiles.stanford.edu/chehan-wijayaratne" },
      { title: "Chehan Wijayaratne — LinkedIn", url: "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6" },
      { title: "Stanford Profiles Browse (name disambiguation)", url: "https://profiles.stanford.edu/browse/stanford?name=wijayaratne" },
      { title: "Giocomo Lab (Stanford)", url: "https://giocomolab.stanford.edu/" },
      { title: "Stanford School of Medicine", url: "https://med.stanford.edu/" },
      { title: "Stanford Mendicants — Wild (YouTube credits)", url: "https://www.youtube.com/watch?v=KyMZgDteUf0" },
      { title: "Schmidt Vocal Arts — 2020-2021 Season Winners", url: "https://schmidtvocalarts.org/winners/2020-2021-season-winners/" },
    ],
  },

  // ===========================================================================
  // 21. Paolo Reitz
  // ===========================================================================
  paolo_reitz: {
    slug: "paolo_reitz",
    name: "Paolo Reitz",
    currentRole: "Undergraduate Student",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Civil and Environmental Engineering" },
    ],
    humanContent: `
<p><strong>Paolo Ferreira Reitz</strong> is a Stanford undergraduate in Civil and Environmental Engineering whose public footprint spans campus operations, outdoor/adventure programming, and student media.</p>

<h2>Education</h2>
<p>Stanford Profiles lists Reitz as an undergraduate in Civil and Environmental Engineering. Public profile metadata also lists active student operational roles in Stanford Recreation Adventure Programs.</p>

<h2>Campus leadership and operations</h2>
<p>Public records identify Reitz as a <strong>Floor Supervisor</strong> and <strong>Senior Trip Leader</strong> in Stanford Recreation Adventure Programs. LinkedIn adds role detail around AOERC climbing wall supervision, safety support, and peer instruction, plus resident advising responsibilities.</p>

<h2>Writing and film-scene reporting</h2>
<p>In 2025, Reitz authored at least two Stanford Daily pieces under the recurring column framing "The Stanford Scene," covering student film groups and actors. This work documents activity in journalism and student arts communication beyond his engineering major.</p>

<h2>Verification note</h2>
<p>This profile now includes stronger role-level citations than before, but internship and project outputs outside campus leadership remain limited in open sources.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Paolo Ferreira Reitz",
      alternateName: "Paolo Reitz",
      sameAs: ["https://profiles.stanford.edu/paolo-reitz", "https://linkedin.com/in/paolo-reitz-0889a9324"],
      jobTitle: "Undergraduate Student",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Undergraduate, Civil and Environmental Engineering",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.96,
          _evidence: "Stanford Profiles degree listing.",
        },
        {
          "@type": "Role",
          roleName: "Floor Supervisor / Senior Trip Leader",
          organization: { "@type": "Organization", name: "Stanford Recreation Adventure Programs" },
          _verificationStatus: "public",
          _confidence: 0.9,
          _evidence: "Stanford Profiles title lines and LinkedIn role details.",
        },
        {
          "@type": "Role",
          roleName: "Columnist (The Stanford Scene)",
          organization: { "@type": "Organization", name: "The Stanford Daily" },
          _verificationStatus: "public",
          _confidence: 0.86,
          _evidence: "Bylines in March and May 2025 Stanford Daily film coverage.",
        },
      ],
      knowsAbout: [
        { skill: "Civil and Environmental Engineering", type: "domain", _confidence: 0.88, _evidence: "Declared Stanford undergraduate program" },
        { skill: "Outdoor Leadership / Climbing Operations", type: "domain", _confidence: 0.86, _evidence: "Floor Supervisor and trip leadership roles" },
        { skill: "Student Journalism / Interviews", type: "domain", _confidence: 0.8, _evidence: "Stanford Daily column work interviewing film community members" },
      ],
      _projects: [
        { name: "The Stanford Scene (column)", type: "writing", url: "https://stanforddaily.com/2025/03/31/behind-the-scenes-with-restorative-film-collective-in-a-48-hour-film-competition/", description: "Interview and reporting series on Stanford film activities", status: "active" },
      ],
      _dataQuality: {
        sourcesConsulted: 8,
        sourceList: ["Stanford Profiles (person page)", "Stanford CAP printer profile", "LinkedIn", "Stanford Daily (March 2025 article)", "Stanford Daily (May 2025 article)", "Stanford Recreation (AOERC context)", "Stanford CEE page", "General web disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "HIGH", technicalCapabilities: "LOW", currentWorkDetail: "MEDIUM" },
        gaps: [
          "No broad public portfolio of engineering projects yet",
          "Internship history outside campus roles is still sparse in open sources",
        ],
        recommendation: "Add internships, technical project pages, or publications to improve engineering-depth coverage.",
      },
    },
    infobox: {
      fullName: "Paolo Ferreira Reitz",
      currentRole: "Undergraduate Student",
      org: "Stanford University",
      education: ["Stanford University (Civil and Environmental Engineering)"],
      knownFor: ["Stanford Recreation Adventure Programs leadership", "AOERC climbing-floor supervision and instruction", "The Stanford Scene student film reporting"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/paolo-reitz" },
        { label: "LinkedIn", url: "https://linkedin.com/in/paolo-reitz-0889a9324" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Paolo Reitz", url: "https://profiles.stanford.edu/paolo-reitz" },
      { title: "Stanford CAP Printer Profile — Paolo Ferreira Reitz", url: "https://cap.stanford.edu/profiles/frdActionServlet?choiceId=printerprofile&profileId=316621&profileversion=full" },
      { title: "Paolo Reitz — LinkedIn", url: "https://linkedin.com/in/paolo-reitz-0889a9324" },
      { title: "Stanford Daily — Behind the scenes of a 48-hour film competition", url: "https://stanforddaily.com/2025/03/31/behind-the-scenes-with-restorative-film-collective-in-a-48-hour-film-competition/" },
      { title: "Stanford Daily — The Stanford Scene: West Mulholland '27 balances stardom and Stanford", url: "https://stanforddaily.com/2025/05/08/the-stanford-scene-west-mulholland-27-balances-stardom-and-stanford/" },
      { title: "Stanford Recreation — AOERC", url: "https://rec.stanford.edu/aoerc" },
      { title: "Stanford CEE Department", url: "https://cee.stanford.edu/" },
    ],
  },

  // ===========================================================================
  // 22. Ella Moore
  // ===========================================================================
  ella_moore: {
    slug: "ella_moore",
    name: "Ella Moore",
    currentRole: "Student / Investor Intern",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Engineering / Biomedical Computation" },
    ],
    humanContent: `
<p><strong>Ella Moore</strong> is a Stanford undergraduate in engineering-oriented biomedical tracks with public activity across research labs, biotech-focused investing, and Division I lightweight rowing.</p>

<h2>Education</h2>
<p>Stanford Profiles lists Moore as an undergraduate in the School of Engineering. Public lab biography pages further describe a Biomedical Computation focus.</p>

<h2>Research and translational science</h2>
<p>The Barron Lab (Stanford) profile states Moore worked with Dr. Stephen Dominy on glioblastoma (GBM) pathogenesis, after prior work in the Sharaf Lab investigating lipoprotein thermostability. This provides direct evidence of translational and biology-computation-adjacent work.</p>

<h2>Investing and entrepreneurship exposure</h2>
<p>Public LinkedIn data records a 2025 Health Team investment summer analyst role at Insight Partners, participation in the Sarafan ChEM-H Undergraduate Entrepreneurship Program, and Girls Who Invest program participation.</p>

<h2>Athletics</h2>
<p>Stanford Athletics records show Moore rowed lightweight Varsity 8+ as a freshman, including WIRA championship and IRA runner-up results in 2022-23.</p>

<h2>Verification note</h2>
<p>This entry is now materially better sourced. Remaining uncertainty is mostly around future career direction and independent publication outputs.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ella Moore",
      sameAs: ["https://profiles.stanford.edu/ella-moore", "https://linkedin.com/in/ellammoore", "http://gostanford.com/sports/lightweight-rowing/roster/player/ella-moore"],
      jobTitle: "Undergraduate Student",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Undergraduate, School of Engineering",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.95,
          _evidence: "Stanford Profiles person page.",
        },
        {
          "@type": "Role",
          roleName: "Undergraduate Researcher (Barron Lab context)",
          organization: { "@type": "Organization", name: "The Barron Lab, Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.86,
          _evidence: "Barron Lab biography describes work on GBM pathogenesis.",
        },
        {
          "@type": "Role",
          roleName: "Investment Summer Analyst (Health Team)",
          organization: { "@type": "Organization", name: "Insight Partners" },
          _verificationStatus: "self-reported",
          _confidence: 0.8,
          _evidence: "LinkedIn role listing.",
        },
      ],
      knowsAbout: [
        { skill: "Biomedical Computation", type: "domain", _confidence: 0.86, _evidence: "Stanford and Barron Lab profile descriptions" },
        { skill: "Translational Neuroscience / Neuroimmunology", type: "domain", _confidence: 0.8, _evidence: "Barron Lab statement of GBM pathogenesis focus" },
        { skill: "Biotech/Health Investing", type: "domain", _confidence: 0.8, _evidence: "Insight Partners health team internship listing" },
        { skill: "Rowing", type: "athletic", _confidence: 0.92, _evidence: "Stanford lightweight rowing roster and race outcomes" },
      ],
      _projects: [
        { name: "Barron Lab GBM work", type: "research", url: "https://barronlab.stanford.edu/people/ella-moore", description: "Undergraduate work on glioblastoma pathogenesis with Dr. Stephen Dominy", status: "active" },
        { name: "Insight Partners Health Team internship", type: "internship", url: "https://linkedin.com/in/ellammoore", description: "Health-focused investment summer analyst role", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 9,
        sourceList: ["Stanford Profiles (person page)", "Barron Lab profile", "LinkedIn", "Stanford Athletics roster", "Insight Partners", "Sarafan ChEM-H program", "Girls Who Invest", "Stanford Profiles browse/disambiguation", "General web disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "MEDIUM" },
        gaps: [
          "Few publication-indexed outputs currently visible",
          "Public sources mix research, investing, and athletics without a single canonical bio timeline",
        ],
        recommendation: "Add publication links, conference abstracts, or project repositories to strengthen technical attribution.",
      },
    },
    infobox: {
      fullName: "Ella Moore",
      currentRole: "Undergraduate Student",
      org: "Stanford University",
      education: ["Stanford University (Engineering/Biomedical Computation)"],
      knownFor: ["Biomedical computation and translational research interests", "Barron Lab GBM-related work", "Insight Partners health-team internship", "Stanford lightweight rowing V8+ competition"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/ella-moore" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ellammoore" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Ella Moore", url: "https://profiles.stanford.edu/ella-moore" },
      { title: "Barron Lab — Ella Moore", url: "https://barronlab.stanford.edu/people/ella-moore" },
      { title: "Ella Moore — LinkedIn", url: "https://linkedin.com/in/ellammoore" },
      { title: "Stanford Athletics — Ella Moore", url: "http://gostanford.com/sports/lightweight-rowing/roster/player/ella-moore" },
      { title: "Insight Partners", url: "https://www.insightpartners.com/" },
      { title: "Sarafan ChEM-H Undergraduate Entrepreneurship Program", url: "https://chemh.stanford.edu/" },
      { title: "Girls Who Invest", url: "https://girlswhoinvest.org/" },
    ],
  },

  // ===========================================================================
  // 23. Krish Maniar
  // ===========================================================================
  krish_maniar: {
    slug: "krish_maniar",
    name: "Krish Maniar",
    currentRole: "Student Engineer",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Computer Science" },
    ],
    humanContent: `
<p><strong>Krish Maniar</strong> is a Stanford computer science student with internships spanning applied ML and engineering roles across major AI and infrastructure companies. Public fellowship pages also list him in the 2025 8VC Fellows cohort.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Krish Maniar",
      sameAs: ["https://profiles.stanford.edu/322154", "https://linkedin.com/in/krishmaniar4", "https://www.8vc.com/fellows/krish-maniar"],
      jobTitle: "Undergraduate, Computer Science",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      knowsAbout: [
        { skill: "Applied Machine Learning", type: "domain", _confidence: 0.85, _evidence: "Publicly listed ML/startup work" },
        { skill: "Developer Tooling / AI Product", type: "domain", _confidence: 0.8, _evidence: "Public internship history" },
      ],
      _dataQuality: {
        sourcesConsulted: 4,
        sourceList: ["Stanford Profiles", "LinkedIn", "8VC Fellows", "Web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "MEDIUM", currentWorkDetail: "MEDIUM" },
        gaps: ["Current full-time role post-graduation unknown"],
      },
    },
    infobox: {
      fullName: "Krish Maniar",
      currentRole: "Computer Science Student",
      org: "Stanford University",
      education: ["Stanford University (Computer Science)"],
      knownFor: ["8VC Fellow (2025 cohort)", "Internships at Palantir/LangChain/Pika/Labelbox"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/322154" },
        { label: "LinkedIn", url: "https://linkedin.com/in/krishmaniar4" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Krish Maniar", url: "https://profiles.stanford.edu/322154" },
      { title: "Krish Maniar — LinkedIn", url: "https://linkedin.com/in/krishmaniar4" },
      { title: "8VC Fellows — Krish Maniar", url: "https://www.8vc.com/fellows/krish-maniar" },
    ],
  },

  // ===========================================================================
  // 24. Ameya Jadhav
  // ===========================================================================
  ameya_jadhav: {
    slug: "ameya_jadhav",
    name: "Ameya Jadhav",
    currentRole: "Student Builder / Investor",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS/MS (in progress)", field: "Computer Science (AI/Systems)" },
    ],
    humanContent: `
<p><strong>Ameya Jadhav</strong> is a Stanford computer science student-builder whose public profile combines AI systems work, hackathon/project development, and early-stage investing activity.</p>

<h2>Education</h2>
<p>Stanford Profiles lists Jadhav as a master's student in Computer Science admitted in Autumn 2023, while his personal site describes a BS/MS trajectory focused on AI/Systems.</p>

<h2>Career and ecosystem roles</h2>
<p>Across public materials (personal site + LinkedIn), Jadhav is associated with Neo, OpenAI (intern Member of Technical Staff), Stanford AI Lab research context, TreeHacks leadership, Cardinal Ventures, and prior investing exposure through General Catalyst-linked programs. The highest-confidence claims are those independently visible on Stanford and personal-site records; some role specifics remain self-reported.</p>

<h2>Projects and research direction</h2>
<p>His website documents multiple AI projects and hackathon wins (including TreeHacks, Hack the North, Pear x OpenAI, and SPC x Meta AI contexts), plus a research thread on web agents and LLM reasoning. A Google Scholar profile also lists him as a student researcher at Stanford.</p>

<h2>Verification note</h2>
<p>This profile has been substantially expanded and now cites more independent sources, but some internship and investing details still rely on first-party reporting.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ameya Jadhav",
      sameAs: ["https://profiles.stanford.edu/ameya-jadhav", "https://linkedin.com/in/ameyajadhav", "https://www.ameyajadhav.com/", "https://www.ameyajadhav.xyz/", "https://scholar.google.com/citations?user=Xuy-IO0AAAAJ&hl=en"],
      jobTitle: "Student / Technical Builder",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Masters Student in Computer Science",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.96,
          _evidence: "Stanford Profiles page lists CS master's student status.",
        },
        {
          "@type": "Role",
          roleName: "Neo Scholar / Builder (self-reported)",
          organization: { "@type": "Organization", name: "Neo" },
          _verificationStatus: "self-reported",
          _confidence: 0.82,
          _evidence: "Personal site and LinkedIn profile positioning.",
        },
        {
          "@type": "Role",
          roleName: "Intern Member of Technical Staff (self-reported)",
          organization: { "@type": "Organization", name: "OpenAI" },
          _verificationStatus: "self-reported",
          _confidence: 0.8,
          _evidence: "LinkedIn + personal site.",
        },
      ],
      knowsAbout: [
        { skill: "AI Systems", type: "domain", _confidence: 0.9, _evidence: "Project portfolio and research statements on personal site" },
        { skill: "LLM Agents", type: "domain", _confidence: 0.86, _evidence: "Web-agent and tool-using agent project descriptions" },
        { skill: "Startup Investing", type: "domain", _confidence: 0.82, _evidence: "Neo/Cardinal Ventures/General Catalyst references on public profiles" },
        { skill: "Hackathon Product Engineering", type: "domain", _confidence: 0.88, _evidence: "Multiple cited wins and shipped prototypes across major hackathons" },
      ],
      _projects: [
        { name: "Textreme", type: "project", url: "https://www.ameyajadhav.com/", description: "Neo Hackathon 2025 winner; iMessage-oriented product prototype", status: "completed" },
        { name: "PathSense", type: "project", url: "https://www.ameyajadhav.com/", description: "Indoor navigation assistant project highlighted in public profiles", status: "completed" },
        { name: "Dave", type: "project", url: "https://www.ameyajadhav.com/", description: "SWE-agent style build interacting with local dev tools", status: "completed" },
        { name: "HRL for Web Agents", type: "research", url: "https://www.ameyajadhav.com/", description: "Research direction around hierarchical RL and web agents", status: "active" },
      ],
      _dataQuality: {
        sourcesConsulted: 10,
        sourceList: ["Stanford Profiles (person page)", "LinkedIn", "ameyajadhav.com", "ameyajadhav.com/about", "ameyajadhav.xyz", "Google Scholar profile", "Cardinal Ventures", "Neo website", "OpenAI company page", "General web disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "MEDIUM", currentWorkDetail: "MEDIUM" },
        gaps: [
          "Some internship and investing role detail is self-reported",
          "Limited third-party writeups for individual projects",
          "Publication list is still early-stage",
        ],
        recommendation: "Link code repositories and independent project demos to strengthen verification on specific technical claims.",
      },
    },
    infobox: {
      fullName: "Ameya Jadhav",
      currentRole: "Student Builder / Investor",
      org: "Stanford University",
      education: ["Stanford University (CS AI/Systems)"],
      knownFor: ["AI systems and agentic project builds", "Neo/OpenAI-linked work (publicly self-reported)", "TreeHacks and student venture activity", "Hackathon-winning engineering prototypes"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/ameya-jadhav" },
        { label: "Website", url: "https://www.ameyajadhav.com/" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ameyajadhav" },
      ],
    },
    references: [
      { title: "Ameya Jadhav — Stanford Profiles", url: "https://profiles.stanford.edu/ameya-jadhav" },
      { title: "Ameya Jadhav — LinkedIn", url: "https://linkedin.com/in/ameyajadhav" },
      { title: "Ameya Jadhav — website", url: "https://www.ameyajadhav.com/" },
      { title: "Ameya Jadhav — About page", url: "https://www.ameyajadhav.com/about" },
      { title: "Ameya Jadhav — alternate site", url: "https://www.ameyajadhav.xyz/" },
      { title: "Google Scholar — Ameya Jadhav", url: "https://scholar.google.com/citations?user=Xuy-IO0AAAAJ&hl=en" },
      { title: "Cardinal Ventures", url: "https://www.cardinalventures.org/" },
      { title: "Neo", url: "https://neo.com/" },
      { title: "OpenAI", url: "https://openai.com/" },
    ],
  },

  // ===========================================================================
  // 25. Austin Ho
  // ===========================================================================
  austin_ho: {
    slug: "austin_ho",
    name: "Austin Ho",
    currentRole: "Undergraduate Student",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Symbolic Systems" },
    ],
    humanContent: `
<p><strong>Austin Ho</strong> is a Stanford undergraduate in Symbolic Systems. Public records for this profile should be distinguished from unrelated professionals and from former Stanford athlete Austin Hooper.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Austin Ho",
      sameAs: ["https://profiles.stanford.edu/austin-ho"],
      jobTitle: "Undergraduate, Symbolic Systems",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      _dataQuality: {
        sourcesConsulted: 3,
        sourceList: ["Stanford Profiles", "General web search", "Disambiguation checks"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "LOW", technicalCapabilities: "LOW", currentWorkDetail: "LOW" },
        gaps: ["Minimal public career data"],
      },
    },
    infobox: {
      fullName: "Austin Ho",
      currentRole: "Undergraduate Student",
      org: "Stanford University",
      education: ["Stanford University (Symbolic Systems)"],
      knownFor: ["Stanford Symbolic Systems student profile"],
      links: [{ label: "Stanford Profile", url: "https://profiles.stanford.edu/austin-ho" }],
    },
    references: [
      { title: "Stanford Profiles — Austin Ho", url: "https://profiles.stanford.edu/austin-ho" },
      { title: "Stanford Athletics — Austin Hooper (disambiguation)", url: "https://gostanford.com/sports/football/roster/player/austin-hooper" },
    ],
  },

  // ===========================================================================
  // 26. Megan Mou
  // ===========================================================================
  megan_mou: {
    slug: "megan_mou",
    name: "Megan Mou",
    currentRole: "Product Manager",
    org: "Harvey",
    education: [
      { institution: "Stanford University", degree: "BS", field: "Computer Science" },
      { institution: "Stanford University", degree: "MS (admitted Autumn 2022)", field: "Computer Science" },
    ],
    humanContent: `
<p><strong>Megan Mou</strong> is a product manager in AI/legal-tech with Stanford CS background. Public profiles indicate she joined Harvey in 2025 after prior product and research work in AI at Scale AI, SAIL, and CodeX-adjacent legal AI contexts.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Megan Mou",
      sameAs: ["https://profiles.stanford.edu/megan-mou", "https://linkedin.com/in/megan-mou", "https://www.8vc.com/fellows/megan-mou"],
      jobTitle: "Product Manager",
      worksFor: { "@type": "Organization", name: "Harvey" },
      knowsAbout: [
        { skill: "AI Product Management", type: "domain", _confidence: 0.9, _evidence: "Harvey PM role and prior AI product roles" },
        { skill: "Legal AI", type: "domain", _confidence: 0.8, _evidence: "Public posts connect work to legal-tech and CodeX ecosystem" },
      ],
      _dataQuality: {
        sourcesConsulted: 5,
        sourceList: ["Stanford Profiles", "LinkedIn", "8VC Fellows", "LinkedIn posts", "Web search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: ["Canonical publication/project links for research period"],
      },
    },
    infobox: {
      fullName: "Megan Mou",
      currentRole: "Product Manager",
      org: "Harvey",
      education: ["Stanford University (Computer Science)"],
      knownFor: ["Product management in legal AI", "Stanford CS + SAIL/AI ecosystem experience", "8VC Fellow (2022 cohort)"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/megan-mou" },
        { label: "LinkedIn", url: "https://linkedin.com/in/megan-mou" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Megan Mou", url: "https://profiles.stanford.edu/megan-mou" },
      { title: "Megan Mou — LinkedIn", url: "https://linkedin.com/in/megan-mou" },
      { title: "8VC Fellows — Megan Mou", url: "https://www.8vc.com/fellows/megan-mou" },
    ],
  },
};
