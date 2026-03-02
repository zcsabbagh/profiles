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
<p><strong>Gianfranco Filice</strong> is an early-stage investor associated with <a href="https://www.ovofund.com/">OVO Fund</a> and broader angel activity linked to AKA Angel. The strongest public signals come from first-party profile pages (OVO, LinkedIn, and his own site/newsletter), which consistently position him as a pre-seed/first-check investor focused on software, fintech, AI applications, and Web3-adjacent themes.</p>

<h2>Education and operating context</h2>
<p>Public biographical pages tie Filice to Stanford (Economics), with additional early-career references to finance and strategy internships. These records are generally coherent across sources, though not all internship entries have independent archival confirmation outside profile platforms.</p>

<h2>OVO Fund and investment work</h2>
<p>OVO is presented publicly as a pre-seed/early-stage fund. Across OVO materials, LinkedIn, and investor directories, Filice is consistently shown as a partner-level investor. Portfolio attribution in open sources is mixed in precision: some pages provide named examples, while others are high-level summaries. For this reason, this profile emphasizes role and thesis continuity over exhaustive, individual deal-credit claims.</p>

<h2>Publishing and public writing</h2>
<p>Filice maintains a public writing footprint through his personal site and Beehiiv newsletter. These materials are useful for documenting sector views and market frameworks, and they provide additional identity corroboration beyond static profile pages.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity, current role framing, and investment-theme direction. Confidence is moderate for complete historical deal attribution and exact ownership of individual investments across syndicates. Future upgrades should prioritize primary portfolio pages, official cap-table disclosures where available, and long-form interviews with explicit date anchors.</p>
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
        sourcesConsulted: 11,
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
      { title: "Gianfranco Filice — LinkedIn", url: "https://www.linkedin.com/in/gfilice" },
      { title: "Gianfranco.io", url: "https://gianfranco.io/" },
      { title: "Gianfranco Filice — Beehiiv author page", url: "https://filice.beehiiv.com/authors/48f4efa7-168e-4d7b-91d4-9d9a64b81ed3" },
      { title: "Gianfranco's Newsletter — Authors page", url: "https://filice.beehiiv.com/authors" },
      { title: "Pledge Finance x AKA Angel", url: "https://medium.com/pledge-finance/pledge-finance-growth-partner-series-aka-angel-96e75ddf6fa" },
      { title: "HackerNoon interview — Gianfranco Filice", url: "https://hackernoon.com/an-interview-with-investor-gianfranco-filice-on-his-recent-investment-pledge-finance" },
      { title: "OVO Fund profile — OpenVC", url: "https://openvc.app/fund/Ovo%20Fund" },
      { title: "OVO Fund profile — VCSheet", url: "https://www.vcsheet.com/fund/ovo-fund" },
      { title: "OVO Fund — LinkedIn company page", url: "https://www.linkedin.com/company/ovo-fund/" },
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
<p><strong>Riya Ranjan</strong> is a Stanford undergraduate researcher working at the intersection of legal informatics and LLM evaluation. Stanford Profiles provides the strongest institutional identity anchor, listing her undergraduate affiliations in Computer Science, Mathematics, and FGSS, while public CodeX-linked references and presentation records indicate active research involvement in legal-AI benchmarking.</p>

<h2>CodeX and legal-AI evaluation work</h2>
<p>Open sources tie Ranjan to CodeX research under Dr. Megan Ma with a focus on evaluation methods for legal applications. The public footprint around her work emphasizes benchmark design quality and legal-workflow realism rather than generic chatbot demos. This is consistent with available workshop records and tiny-paper materials from EvalEval / NeurIPS contexts.</p>

<h2>Public research artifacts</h2>
<p>The most concrete artifact currently available is the EvalEval 2024 workshop paper on reframing legal LLM benchmarking, where Ranjan is listed as author with Stanford affiliation. NeurIPS workshop pages and LinkedIn conference posts corroborate presentation activity. Because some claims (for example additional accepted venues) appear primarily on profile platforms, this entry separates strongly verifiable artifacts from self-reported forward-looking publication statements.</p>

<h2>Verification scope</h2>
<p>Confidence is high on identity, institutional affiliation, and active CodeX research role. Confidence is moderate on the full set of paper acceptances and complete publication bibliography pending more canonical proceedings pages. The profile is therefore written as a strong evidence-based role and research-direction page, with publication depth expanding as additional primary links are published.</p>
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
        sourcesConsulted: 11,
        sourceList: ["Stanford Profiles", "LinkedIn", "CodeX website", "CodeX LinkedIn organization page", "NeurIPS presentation post", "General web search"],
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
      { title: "Riya Ranjan — LinkedIn", url: "https://www.linkedin.com/in/riya-ranjan-998b051a0" },
      { title: "CodeX — Stanford Center for Legal Informatics", url: "https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" },
      { title: "CodeX LinkedIn organization page", url: "https://www.linkedin.com/company/codex-stanford" },
      { title: "EvalEval 2024 Accepted Papers", url: "https://evalevalai.com/2024workshop/accepted-papers.html" },
      { title: "EvalEval 2024 tiny paper (Ranjan, Ma) PDF", url: "https://evalevalai.com/2024workshop/accepted_papers/EvalEval_24_Ranjan.pdf" },
      { title: "NeurIPS 2024 workshop page — Evaluating Evaluations", url: "https://neurips.cc/virtual/2024/workshop/84734" },
      { title: "Riya Ranjan — NeurIPS presentation post", url: "https://www.linkedin.com/posts/riya-ranjan-998b051a0_this-weekend-following-a-stressful-finals-activity-7274938892967972865-rOeZ" },
      { title: "Stanford Law — CodeX projects", url: "https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/projects/" },
      { title: "LegalBench (SSRN) — benchmark context for legal LLM evaluation", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4583531" },
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
<p><strong>Uche Ochuba</strong> is a software engineer at Databricks with a Stanford computer science background and public evidence of both technical research output and entrepreneurship-track training. The strongest identity anchors are his LinkedIn profile, GitHub account, Stanford Daily author page, and an arXiv paper authored under a Stanford CS affiliation.</p>

<h2>Education and Stanford footprint</h2>
<p>Public records consistently tie Ochuba to Stanford: LinkedIn reports a BS/MS CS pathway, Stanford ExploreCourses includes an instructor profile entry, and Stanford Daily lists him as a former desk editor and contributing writer. Together, these sources establish a coherent Stanford-linked identity rather than a single-source claim.</p>

<h2>Career trajectory</h2>
<p>LinkedIn identifies Ochuba&apos;s current role as a software engineer at Databricks (starting August 2025), with team context listed as custom AI model serving. Prior to that, he appears in both the Mayfield Fellows track at Stanford STVP and the Felicis Fellows AI program. This combination indicates an early-career path that blends applied engineering with startup/venture ecosystem exposure.</p>

<h2>Technical work: TreeFormers</h2>
<p>A key first-party technical artifact is <strong>TreeFormers</strong> (arXiv:2405.15989), authored by Ochuba and published as a Stanford CS-affiliated paper on deforestation-driver classification from satellite imagery using vision transformers. The paper reports test accuracy and method details, and a matching GitHub repository (<code>ucheochuba/treeFormers</code>) links code to the same project. This moves the profile beyond role-only evidence by adding a concrete research output with reproducible implementation context.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity and current-employer mapping, and medium-high for technical capability due to the arXiv + repository pairing. Confidence remains moderate on production ownership inside Databricks because public artifacts do not provide service-level impact metrics or architecture responsibility boundaries.</p>
<p>This profile therefore distinguishes clearly between what is directly evidenced (role continuity, fellowship participation, published project) and what is not yet publicly attributable (internal system ownership and measurable production impact).</p>
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
        sourcesConsulted: 12,
        sourceList: ["LinkedIn profile", "GitHub profile and repositories", "arXiv paper (TreeFormers)", "STVP Mayfield Fellows program page", "STVP Mayfield cohort posts", "Stanford Daily author page", "Stanford ExploreCourses profile", "Databricks company page"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "MEDIUM", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: ["Official Stanford degree completion record", "Publicly verifiable details of Databricks production ownership"],
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
        { label: "arXiv", url: "https://arxiv.org/abs/2405.15989" },
      ],
    },
    references: [
      { title: "Uche Ochuba — LinkedIn", url: "https://www.linkedin.com/in/uche-ochuba-15a5ba154" },
      { title: "Uche Ochuba — GitHub", url: "https://github.com/ucheochuba" },
      { title: "TreeFormers — arXiv abstract", url: "https://arxiv.org/abs/2405.15989" },
      { title: "TreeFormers — arXiv PDF", url: "https://arxiv.org/pdf/2405.15989" },
      { title: "TreeFormers code repository", url: "https://github.com/ucheochuba/treeFormers" },
      { title: "Databricks", url: "https://www.databricks.com/" },
      { title: "STVP Mayfield Fellows Program", url: "https://stvp.stanford.edu/mayfield-fellows-program/" },
      { title: "STVP post — 2024 Mayfield Fellows cohort", url: "https://www.linkedin.com/posts/stanfordtechnologyventuresprogram_mayfieldfellows-entrepreneurship-leadershipdevelopment-activity-7188573606732357633-vYWW" },
      { title: "STVP post — 2024-25 Mayfield Fellows completion", url: "https://www.linkedin.com/posts/stanfordtechnologyventuresprogram_congratulations-to-this-years-mayfield-fellows-activity-7278502038030749696-MpS7" },
      { title: "Stanford ExploreCourses — Uche Ochuba", url: "https://explorecourses.stanford.edu/instructor/uochuba" },
      { title: "Stanford Daily author page — Uche Ochuba", url: "https://stanforddaily.com/author/ucheochuba/" },
      { title: "Felicis Fellows in AI (program context)", url: "https://www.linkedin.com/posts/felicis-ventures_what-happens-when-you-take-20-of-the-world-activity-7338618677954560002-viIR" },
      { title: "Mayfield Fellows Program details — STVP", url: "https://stvp.stanford.edu/mayfield-fellows-program/" },
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
<p><strong>Leeah Michael</strong> is a software engineer at Pinterest with a Stanford-linked background across software engineering, product, and entrepreneurship programs. Public evidence is strongest on role continuity and timeline quality: LinkedIn records a transition from student and internship roles into full-time engineering, and Stanford/STVP pages corroborate her participation in selective entrepreneurship programming.</p>

<h2>Education and Stanford context</h2>
<p>Michael&apos;s public profile identifies Stanford computer science affiliation, with additional Stanford-linked activity through student leadership and academic project work. In particular, Stanford Management Science &amp; Engineering pages list her as part of a 2024 senior project team working with Prophet on expanded machine-learning use cases, providing a concrete institutional artifact tied to her name.</p>

<h2>Career trajectory</h2>
<p>LinkedIn indicates her current role as Software Engineer at Pinterest (from September 2025), preceded by software engineering at Remix and an Associate Product Manager internship at LinkedIn. She is also listed as a 2024 Mayfield Fellow through Stanford STVP. The sequencing suggests an early-career profile that combines product orientation with engineering execution rather than a purely research-focused path.</p>

<h2>Public-facing ecosystem activity</h2>
<p>Additional public posts show participation in Stanford-centered panels and community events after joining industry roles, consistent with active engagement in the local technical/student ecosystem. These artifacts are useful as timeline and identity corroboration, but they are not treated as proof of specific internal technical ownership.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity, employer sequence, and current role. Confidence is moderate for architecture-level claims because public materials do not expose team internals, production metrics, or component-level ownership at Pinterest or prior companies.</p>
<p>This profile therefore uses a conservative standard: it asserts only what is directly supported by first-party role records and Stanford institutional pages, and avoids inferring undocumented system impact.</p>
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
        sourcesConsulted: 12,
        sourceList: ["LinkedIn profile", "LinkedIn public posts", "STVP Mayfield Fellows program page", "STVP cohort posts", "Stanford MS&E senior project pages", "Stanford community/event references", "Pinterest company page"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "MEDIUM", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: ["Canonical Stanford degree completion date", "Publicly documented system-level project ownership at Pinterest"],
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
      { title: "Leeah Michael — LinkedIn", url: "https://www.linkedin.com/in/leeah-michael" },
      { title: "Pinterest", url: "https://www.pinterest.com/" },
      { title: "STVP Mayfield Fellows Program", url: "https://stvp.stanford.edu/mayfield-fellows-program/" },
      { title: "STVP post — Mayfield Fellows 2024 cohort", url: "https://www.linkedin.com/posts/stanfordtechnologyventuresprogram_mayfieldfellows-entrepreneurship-leadershipdevelopment-activity-7188573606732357633-vYWW" },
      { title: "STVP post — Mayfield Fellows 2024-25 completion", url: "https://www.linkedin.com/posts/stanfordtechnologyventuresprogram_congratulations-to-this-years-mayfield-fellows-activity-7278502038030749696-MpS7" },
      { title: "Mayfield Fund post — STVP Fellows visit", url: "https://www.linkedin.com/posts/mayfield-fund_we-were-thrilled-to-host-the-mayfield-fellows-activity-7244739962384908288-ZgQr" },
      { title: "Leeah Michael — Pinterest post", url: "https://www.linkedin.com/posts/leeah-michael_today-marks-two-months-since-i-joined-pinterest-activity-7398856131294552064-KJWy" },
      { title: "Leeah Michael — Stanford panel post", url: "https://www.linkedin.com/posts/leeah-michael_so-honored-to-be-a-part-of-this-panel-back-activity-7381940325046476800-K_f6" },
      { title: "Stanford MS&E — Expanding use cases for Prophet (project page)", url: "https://msande.stanford.edu/research-impact/mse-student-research/mse-senior-projects/2024-senior-projects/expanding-use-cases" },
      { title: "Stanford MS&E news — 2024 senior projects", url: "https://msande.stanford.edu/news/2024-senior-projects-optimizing-social-impact" },
      { title: "Stanford MS&E — 2024 senior projects index", url: "https://msande.stanford.edu/research-impact/mse-student-research/mse-senior-projects/2024-senior-projects" },
      { title: "Stanford Events — Ethiopian and Eritrean Student Association", url: "https://events.stanford.edu/group/ethiopian_and_eritrean_student_association" },
      { title: "Panel context mention — Winta K post", url: "https://www.linkedin.com/posts/leeah-michael_so-honored-to-be-a-part-of-this-panel-back-activity-7381940325046476800-K_f6" },
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
<p><strong>Sera Camas</strong> is a Stanford researcher and student whose public profile spans computer science, symbolic systems, and education-neuroscience work at Stanford GSE. The strongest institutional anchor is Stanford Profiles plus the Educational Neuroscience Initiative (ENI) program context.</p>

<h2>Academic and research positioning</h2>
<p>Stanford Profiles lists Camas with cross-program affiliations and graduate CS status, while LinkedIn describes a lead research assistant role connected to ENI. This interdisciplinary combination is consistent with applied education-technology and learning-science pathways, where empirical study design and product thinking often overlap.</p>

<h2>Research-to-product trajectory</h2>
<p>Public role history also references PM internships and consulting work, suggesting a translation layer between research environments and product execution settings. The evidence is strongest at role level and weaker for publication-level outputs directly attributed in open repositories.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity and institutional role mapping. Confidence is moderate for technical-output attribution because code, papers, and specific project artifacts are not yet broadly linked in open sources. This page therefore emphasizes corroborated positions and avoids over-specific claims about systems ownership or research novelty without primary technical artifacts.</p>
<p>Future updates should prioritize publication links, code repositories, and project writeups tied directly to this identity to strengthen output-level attribution without lowering verification rigor across research and product-facing claims.</p>
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
        sourcesConsulted: 10,
        sourceList: ["Stanford Profiles", "LinkedIn", "Educational Neuroscience Initiative", "Stanford GSE", "seracamas.com", "Web search"],
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
      { title: "Sera Camas — Stanford Profiles (bio tab)", url: "https://profiles.stanford.edu/sera-camas?tab=bio" },
      { title: "Sera Camas — LinkedIn", url: "https://www.linkedin.com/in/sera-camas" },
      { title: "Sera Camas website", url: "http://seracamas.com/" },
      { title: "Educational Neuroscience Initiative — Stanford", url: "https://edneuroinitiative.stanford.edu/" },
      { title: "Educational Neuroscience Initiative — People", url: "https://edneuroinitiative.stanford.edu/people" },
      { title: "Stanford Graduate School of Education", url: "https://ed.stanford.edu/" },
      { title: "Stanford Computer Science", url: "https://cs.stanford.edu/" },
      { title: "Stanford Symbolic Systems Program", url: "https://symsys.stanford.edu/" },
      { title: "Stanford University", url: "https://www.stanford.edu/" },
    ],
  },

  // ===========================================================================
  // 20. Chehan Wijayaratne
  // ===========================================================================
  chehan_wijayaratne: {
    slug: "chehan_wijayaratne",
    name: "Chehan Wijayaratne",
    currentRole: "Computational Biology Student Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Computational Biology / Computer Science" },
    ],
    humanContent: `
<p><strong>Chehan Lakdhinu Wijayaratne</strong> is a Stanford undergraduate in the computational biology/computer science pathway with a research timeline spanning neurobiology and translational medicine settings. The strongest institutional anchor is his <a href="https://profiles.stanford.edu/chehan-wijayaratne">Stanford Profiles</a> page; role-level details are primarily from self-reported LinkedIn entries and should be interpreted with that caveat.</p>

<h2>Education</h2>
<p>Wijayaratne is listed as a Stanford undergraduate and publicly describes his program as Computer Science with a Computational Biology track. Public source coverage does not yet provide a transcript-level specialization map (for example, concentration-level coursework, capstones, or thesis).</p>

<h2>Research trajectory</h2>
<p>His public timeline shows progressive research exposure: a Memory and Aging Department internship at UCSF (2020-2021), a Wu Lab internship at Stanford Medicine (2022-2023), and a Giocomo Lab internship (2024-present). His Wu Lab description references work on an ocular/nasolacrimal duct squamous cell carcinoma mouse model using DMBA/TPA methods, while his current profile emphasizes systems neuroscience and computational biology interests in the Giocomo ecosystem.</p>

<h2>Lab ecosystem context</h2>
<p>The Giocomo Lab itself is a high-output Stanford neurobiology group with publicly listed preprints, publications, and shared methods pages. However, currently available open sources do not cleanly attribute specific publications, datasets, or repositories directly to Wijayaratne by name. This profile therefore distinguishes between verified lab affiliation and unverified publication-level ownership.</p>

<h2>Evidence quality and gaps</h2>
<p>Identity and institutional affiliation confidence are high. Specific technical-contribution confidence remains medium-to-low until primary artifacts (named papers, posters, code, or methods contributions tied to this identity) are available in public indexes.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Chehan Lakdhinu Wijayaratne",
      alternateName: "Chehan Wijayaratne",
      sameAs: ["https://profiles.stanford.edu/chehan-wijayaratne", "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6"],
      jobTitle: "Computational Biology Student Researcher",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Undergraduate Student (Computer Science / Computational Biology track)",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.96,
          _evidence: "Stanford Profiles + self-described track on LinkedIn.",
        },
        {
          "@type": "Role",
          roleName: "Research Intern, Giocomo Lab",
          startDate: "2024-06",
          organization: { "@type": "Organization", name: "Stanford University School of Medicine (Neurobiology)" },
          _verificationStatus: "self-reported",
          _confidence: 0.82,
          _evidence: "LinkedIn role listing with ongoing status; lab website corroborates context.",
        },
        {
          "@type": "Role",
          roleName: "Research Intern, Wu Lab",
          startDate: "2022-06",
          endDate: "2023-07",
          organization: { "@type": "Organization", name: "Stanford University School of Medicine" },
          _verificationStatus: "self-reported",
          _confidence: 0.78,
          _evidence: "LinkedIn role listing with project summary (DMBA/TPA mouse model).",
        },
        {
          "@type": "Role",
          roleName: "Research Intern, Memory and Aging Department",
          startDate: "2020-06",
          endDate: "2021-08",
          organization: { "@type": "Organization", name: "University of California, San Francisco" },
          _verificationStatus: "self-reported",
          _confidence: 0.72,
          _evidence: "LinkedIn role listing references EEG/MEG analysis on Alzheimer's cohort.",
        },
      ],
      knowsAbout: [
        { skill: "Computational Biology", type: "domain", _confidence: 0.88, _evidence: "Program positioning and multi-year research internships." },
        { skill: "Systems Neuroscience", type: "domain", _confidence: 0.8, _evidence: "Giocomo Lab affiliation and stated interests." },
        { skill: "Translational Biomedical Research", type: "domain", _confidence: 0.74, _evidence: "Wu Lab model-development summary and UCSF internship history." },
        { skill: "Neurodata Analysis", type: "domain", _confidence: 0.68, _evidence: "Self-reported EEG/MEG analysis exposure at UCSF." },
      ],
      _projects: [
        { name: "Giocomo Lab internship", type: "research", description: "Current systems-neuroscience research internship in Stanford neurobiology ecosystem", status: "active", _verificationStatus: "self-reported" },
        { name: "Wu Lab internship", type: "research", description: "Mouse-model-focused internship (ocular/nasolacrimal SCC context) per self-reported role summary", status: "completed", _verificationStatus: "self-reported" },
        { name: "UCSF Memory and Aging internship", type: "research", description: "Self-reported EEG/MEG analysis exposure in Alzheimer's context", status: "completed", _verificationStatus: "self-reported" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: ["Stanford Profiles (person page)", "LinkedIn profile", "Giocomo Lab home", "Giocomo Lab people", "Giocomo Lab publications", "Giocomo Lab data/code/methods context", "Stanford School of Medicine", "UCSF Memory and Aging Center context", "Stanford Mendicants pages", "General disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "MEDIUM", technicalCapabilities: "MEDIUM-LOW", currentWorkDetail: "MEDIUM" },
        gaps: [
          "No clearly attributable publication or code artifacts tied to this identity in open sources",
          "Most contribution-level details remain self-reported",
          "Limited public detail on current Giocomo project scope",
        ],
        recommendation: "Highest-value upgrade is publication/poster/repository attribution that explicitly names this contributor.",
      },
    },
    infobox: {
      fullName: "Chehan Lakdhinu Wijayaratne",
      currentRole: "Computational Biology Student Researcher",
      org: "Stanford University",
      education: ["Stanford University (CS / Computational Biology track, in progress)"],
      knownFor: ["Giocomo Lab internship (2024-present)", "Prior Wu Lab and UCSF Memory & Aging internships", "Computational biology + systems neuroscience orientation"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/chehan-wijayaratne" },
        { label: "LinkedIn", url: "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6" },
      ],
    },
    references: [
      { title: "Chehan Lakdhinu Wijayaratne — Stanford Profiles", url: "https://profiles.stanford.edu/chehan-wijayaratne" },
      { title: "Chehan Wijayaratne — LinkedIn", url: "https://linkedin.com/in/chehan-wijayaratne-5b9b341b6" },
      { title: "Giocomo Lab", url: "https://giocomolab.stanford.edu/" },
      { title: "Giocomo Lab — People", url: "https://giocomolab.weebly.com/people.html" },
      { title: "Giocomo Lab — Publications", url: "https://giocomolab.weebly.com/publications.html" },
      { title: "Giocomo Lab — Undergraduate Research", url: "https://giocomolab.weebly.com/undergraduate-research.html" },
      { title: "Stanford School of Medicine", url: "https://med.stanford.edu/" },
      { title: "UCSF Memory and Aging Center", url: "https://memory.ucsf.edu/" },
      { title: "Stanford Mendicants — YouTube channel", url: "https://www.youtube.com/user/stanfordmendicants" },
      { title: "Stanford Mendicants — videos page", url: "https://stanfordmendicants.com/videos" },
      { title: "Stanford Profiles browse — name disambiguation", url: "https://profiles.stanford.edu/browse/stanford?name=wijayaratne" },
    ],
  },

  // ===========================================================================
  // 21. Paolo Reitz
  // ===========================================================================
  paolo_reitz: {
    slug: "paolo_reitz",
    name: "Paolo Reitz",
    currentRole: "CEE Student and Campus Operator",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Civil and Environmental Engineering" },
    ],
    humanContent: `
<p><strong>Paolo Ferreira Reitz</strong> is a Stanford Civil and Environmental Engineering undergraduate with a notable dual track in campus operations leadership and arts journalism. Official Stanford records establish identity, major, and Recreation Adventure Program roles; The Stanford Daily provides independent evidence for his recurring column work.</p>

<h2>Engineering and campus leadership</h2>
<p>Stanford Profiles lists Reitz as an undergraduate in CEE and identifies him as both a floor supervisor and senior trip leader in Recreation Adventure Programs. Public role descriptions emphasize climbing-wall operations, safety protocols, instruction for newer climbers, and logistics for outdoor trip programming.</p>

<h2>The Stanford Scene reporting</h2>
<p>Reitz writes for The Stanford Daily under “The Stanford Scene.” Verified bylines include a March 31, 2025 feature on the Restorative Film Collective’s 48-hour film competition and a May 8, 2025 profile on student actor West Mulholland. These pieces establish sustained interviewing/reporting output rather than a one-off contribution.</p>

<h2>Role blend and evidence quality</h2>
<p>This profile is unusually strong on operating-leadership and communication artifacts (staffing, trip leadership, published media output), and lighter on externally visible CEE project artifacts. The current evidence supports a high-confidence campus-operator/journalism profile with moderate confidence on domain-specific engineering technical depth.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Paolo Ferreira Reitz",
      alternateName: "Paolo Reitz",
      sameAs: ["https://profiles.stanford.edu/paolo-reitz", "https://linkedin.com/in/paolo-reitz-0889a9324"],
      jobTitle: "Undergraduate (Civil and Environmental Engineering)",
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
          roleName: "Floor Supervisor / Senior Trip Leader (Recreation Adventure Programs)",
          organization: { "@type": "Organization", name: "Stanford Recreation Adventure Programs" },
          _verificationStatus: "public",
          _confidence: 0.92,
          _evidence: "Stanford Profiles role lines + detailed LinkedIn operational descriptions.",
        },
        {
          "@type": "Role",
          roleName: "Resident Assistant",
          startDate: "2025-03",
          organization: { "@type": "Organization", name: "Stanford University Residential Education" },
          _verificationStatus: "self-reported",
          _confidence: 0.78,
          _evidence: "LinkedIn role summary with resident support/event operations scope.",
        },
        {
          "@type": "Role",
          roleName: "Columnist (The Stanford Scene)",
          organization: { "@type": "Organization", name: "The Stanford Daily" },
          _verificationStatus: "public",
          _confidence: 0.9,
          _evidence: "Author page and multiple dated bylines in 2025.",
        },
      ],
      knowsAbout: [
        { skill: "Civil and Environmental Engineering", type: "domain", _confidence: 0.9, _evidence: "Declared Stanford undergraduate program (official profile)." },
        { skill: "Outdoor Leadership / Climbing Operations", type: "domain", _confidence: 0.9, _evidence: "Floor Supervisor + Senior Trip Leader scope includes safety and instruction." },
        { skill: "Student Journalism / Interview Reporting", type: "domain", _confidence: 0.86, _evidence: "Repeated Stanford Daily feature bylines in The Stanford Scene column." },
        { skill: "Community Operations", type: "domain", _confidence: 0.78, _evidence: "Resident Assistant role includes event and peer-support operations (self-reported)." },
      ],
      _projects: [
        { name: "The Stanford Scene (column)", type: "writing", url: "https://stanforddaily.com/author/reitz001/", description: "Recurring Stanford Daily interview/reporting series on campus film and arts activity", status: "active" },
        { name: "RFC 48-Hour Film Competition feature", type: "writing", url: "https://stanforddaily.com/2025/03/31/behind-the-scenes-with-restorative-film-collective-in-a-48-hour-film-competition/", description: "Reported feature documenting Restorative Film Collective production process under 48-hour constraints", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: ["Stanford Profiles (person page)", "Stanford CAP printer profile", "LinkedIn", "Stanford Daily author page", "Stanford Daily (March 2025 article)", "Stanford Daily (May 2025 article)", "Stanford Recreation AOERC", "Stanford Recreation Adventure Program context", "Stanford CEE department", "General disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM-LOW", currentWorkDetail: "HIGH" },
        gaps: [
          "Publicly indexed CEE project portfolio remains limited",
          "Engineering internship outputs are not yet well documented in open sources",
        ],
        recommendation: "To match the strength of operations/journalism evidence, add project-level engineering artifacts (reports, posters, code, or internship output summaries).",
      },
    },
    infobox: {
      fullName: "Paolo Ferreira Reitz",
      currentRole: "CEE Student and Campus Operator",
      org: "Stanford University",
      education: ["Stanford University (Civil and Environmental Engineering)"],
      knownFor: ["Stanford Recreation Adventure Programs leadership", "AOERC climbing-floor supervision", "The Stanford Scene reporting at The Stanford Daily", "Restorative Film Collective coverage"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/paolo-reitz" },
        { label: "LinkedIn", url: "https://linkedin.com/in/paolo-reitz-0889a9324" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Paolo Reitz", url: "https://profiles.stanford.edu/paolo-reitz" },
      { title: "Stanford CAP printer profile — Paolo Ferreira Reitz", url: "https://cap.stanford.edu/profiles/frdActionServlet?choiceId=printerprofile&profileId=316621&profileversion=full" },
      { title: "Paolo Reitz — LinkedIn", url: "https://www.linkedin.com/in/paolo-reitz-0889a9324" },
      { title: "Paolo Ferreira Reitz — Stanford Daily author page", url: "https://stanforddaily.com/author/reitz001/" },
      { title: "Stanford Daily — Behind the scenes of a 48-hour film competition", url: "https://stanforddaily.com/2025/03/31/behind-the-scenes-with-restorative-film-collective-in-a-48-hour-film-competition/" },
      { title: "Stanford Daily — The Stanford Scene: West Mulholland '27 balances stardom and Stanford", url: "https://stanforddaily.com/2025/05/08/the-stanford-scene-west-mulholland-27-balances-stardom-and-stanford/" },
      { title: "Stanford Recreation — AOERC", url: "https://rec.stanford.edu/aoerc" },
      { title: "Stanford Recreation", url: "https://rec.stanford.edu/" },
      { title: "Stanford CEE Department", url: "https://cee.stanford.edu/" },
      { title: "Stanford University", url: "https://www.stanford.edu/" },
    ],
  },

  // ===========================================================================
  // 22. Ella Moore
  // ===========================================================================
  ella_moore: {
    slug: "ella_moore",
    name: "Ella Moore",
    currentRole: "Biomedical Computation Student Researcher",
    org: "Stanford University",
    education: [
      { institution: "Stanford University", degree: "BS (in progress)", field: "Engineering / Biomedical Computation" },
    ],
    humanContent: `
<p><strong>Ella Moore</strong> is a Stanford engineering undergraduate focused on biomedical computation, with a public profile spanning translational neurobiology research, health-tech investing internships, and Division I lightweight rowing. Stanford Profiles and Barron Lab pages provide the strongest primary anchors; LinkedIn adds role-timeline detail.</p>

<h2>Research and technical focus</h2>
<p>The Barron Lab biography describes Moore as a biomedical computation major working on glioblastoma multiforme (GBM) pathogenesis with Dr. Stephen Dominy, and references earlier Sharaf Lab work on lipoprotein thermostability. This creates a coherent translational trajectory from bench research toward clinically relevant computational/biological questions.</p>

<h2>Biotech investing and entrepreneurship exposure</h2>
<p>Moore's public timeline includes internships with Insight Partners' bio/health teams (2023 intern, 2025 investment summer analyst), plus educational programming through Stanford's Sarafan ChEM-H undergraduate entrepreneurship track and Girls Who Invest. As expected for internship roles, public sources are strong on participation and weak on confidential deal-level output.</p>

<h2>Athletics and performance record</h2>
<p>Stanford Athletics records show she competed on lightweight rowing varsity boats, including a WIRA Varsity 8+ championship and an IRA Varsity 8+ runner-up result during the 2022-23 season. This is independently verifiable and adds high-confidence performance evidence outside academic contexts.</p>

<h2>Evidence quality and caveats</h2>
<p>Identity, institutional affiliation, and role continuity are high-confidence. Publication- or artifact-level technical ownership remains moderate because public records are role-centered rather than output-centered. Future profile upgrades should prioritize papers, posters, repositories, or named project artifacts.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ella Moore",
      sameAs: ["https://profiles.stanford.edu/ella-moore", "https://linkedin.com/in/ellammoore", "http://gostanford.com/sports/lightweight-rowing/roster/player/ella-moore"],
      jobTitle: "Biomedical Computation Student Researcher",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      hasOccupation: [
        {
          "@type": "Role",
          roleName: "Undergraduate, School of Engineering (Biomedical Computation)",
          organization: { "@type": "Organization", name: "Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.96,
          _evidence: "Stanford Profiles person page.",
        },
        {
          "@type": "Role",
          roleName: "Research Assistant, Barron Lab",
          organization: { "@type": "Organization", name: "The Barron Lab, Stanford University" },
          _verificationStatus: "public",
          _confidence: 0.9,
          _evidence: "Barron Lab page specifies GBM pathogenesis work and prior Sharaf Lab experience.",
        },
        {
          "@type": "Role",
          roleName: "Investment Summer Analyst (Health Team)",
          startDate: "2025-06",
          endDate: "2025-08",
          organization: { "@type": "Organization", name: "Insight Partners" },
          _verificationStatus: "self-reported",
          _confidence: 0.84,
          _evidence: "LinkedIn role listing with team designation.",
        },
        {
          "@type": "Role",
          roleName: "Intern, Bio Team",
          startDate: "2023-06",
          endDate: "2023-07",
          organization: { "@type": "Organization", name: "Insight Partners" },
          _verificationStatus: "self-reported",
          _confidence: 0.8,
          _evidence: "LinkedIn role listing for prior summer.",
        },
      ],
      knowsAbout: [
        { skill: "Biomedical Computation", type: "domain", _confidence: 0.9, _evidence: "Major + Barron Lab technical context." },
        { skill: "Translational Neurobiology", type: "domain", _confidence: 0.84, _evidence: "GBM pathogenesis work in Barron Lab profile." },
        { skill: "Biotech/Health Investing", type: "domain", _confidence: 0.84, _evidence: "Insight Partners bio/health internship timeline." },
        { skill: "Entrepreneurship Education", type: "domain", _confidence: 0.78, _evidence: "Sarafan ChEM-H UEP and Girls Who Invest program participation." },
        { skill: "Rowing", type: "athletic", _confidence: 0.94, _evidence: "Stanford Athletics roster and race outcomes." },
      ],
      _projects: [
        { name: "Barron Lab GBM work", type: "research", url: "https://barronlab.stanford.edu/people/ella-moore", description: "Research assistant work on glioblastoma pathogenesis; prior lipoprotein thermostability work in Sharaf Lab noted in bio", status: "active" },
        { name: "Insight Partners Health/Bio internships", type: "internship", url: "https://linkedin.com/in/ellammoore", description: "Bio team and health-team internships across 2023 and 2025 cycles", status: "completed" },
      ],
      _dataQuality: {
        sourcesConsulted: 12,
        sourceList: ["Stanford Profiles (person page)", "Barron Lab profile", "Barron Lab people page", "LinkedIn", "Stanford Athletics roster page", "Insight Partners", "Sarafan ChEM-H", "Girls Who Invest", "Stanford Profiles browse/disambiguation", "General disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "HIGH", technicalCapabilities: "MEDIUM", currentWorkDetail: "HIGH" },
        gaps: [
          "Limited publication/poster attribution in open sources",
          "Internship outcomes are naturally opaque due to confidentiality",
        ],
        recommendation: "Add publication or project artifacts to clarify contribution depth beyond role participation.",
      },
    },
    infobox: {
      fullName: "Ella Moore",
      currentRole: "Biomedical Computation Student Researcher",
      org: "Stanford University",
      education: ["Stanford University (Engineering/Biomedical Computation)"],
      knownFor: ["Barron Lab GBM pathogenesis work", "Insight Partners bio/health internships", "Girls Who Invest + Sarafan ChEM-H programs", "Stanford lightweight rowing (WIRA V8+ champion)"],
      links: [
        { label: "Stanford Profile", url: "https://profiles.stanford.edu/ella-moore" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ellammoore" },
      ],
    },
    references: [
      { title: "Stanford Profiles — Ella Moore", url: "https://profiles.stanford.edu/ella-moore" },
      { title: "Barron Lab — Ella Moore", url: "https://barronlab.stanford.edu/people/ella-moore" },
      { title: "Barron Lab — People", url: "https://barronlab.stanford.edu/people" },
      { title: "Barron Lab group page", url: "https://web.stanford.edu/group/barronlab/group.html" },
      { title: "Ella Moore — LinkedIn", url: "https://www.linkedin.com/in/ellammoore" },
      { title: "Stanford Athletics — Ella Moore", url: "https://gostanford.com/sports/lightweight-rowing/roster/player/ella-moore" },
      { title: "Stanford Athletics — 2022-23 lightweight rowing roster", url: "https://gostanford.com/sports/lightweight-rowing/roster/season/2022-23" },
      { title: "Insight Partners", url: "https://www.insightpartners.com/" },
      { title: "Sarafan ChEM-H", url: "https://chemh.stanford.edu/" },
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
<p><strong>Krish Maniar</strong> is a Stanford computer science student with public internship and fellowship signals across AI, developer tooling, and applied engineering environments. The strongest evidence comes from Stanford profile identity records, the 8VC fellowship page, and role-level LinkedIn records.</p>

<h2>Academic and builder profile</h2>
<p>Public sources consistently frame Maniar as a builder-oriented CS student with significant early-career exposure to practical ML systems and product execution. Role listings across companies and startup contexts indicate broad applied experience rather than a narrow single-domain specialization.</p>

<h2>Internships and ecosystem context</h2>
<p>The 8VC fellow page and associated materials corroborate involvement in startup-oriented technical environments, while LinkedIn role history references engineering and research internships including Palantir, LangChain, and other AI-focused teams. As with many student profiles, these sources are high confidence for role participation and lower confidence for deeply detailed system ownership metrics.</p>

<h2>Verification scope</h2>
<p>Confidence is high on identity and trajectory, moderate on specific architecture-level contribution claims. This profile intentionally prioritizes independently citable role evidence and avoids over-precise technical ownership claims where first-party engineering artifacts are not publicly linked.</p>
<p>The most valuable next upgrade is straightforward: attach direct technical artifacts (talks, code, papers, or product writeups) that map clearly to this identity and timeline, with dated evidence of contribution scope.</p>
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
        sourcesConsulted: 10,
        sourceList: ["Stanford Profiles", "LinkedIn", "8VC Fellows", "Stanford Club Sports", "TreeHacks references", "Web search"],
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
      { title: "Krish Maniar — LinkedIn", url: "https://www.linkedin.com/in/krishmaniar4" },
      { title: "8VC Fellows — Krish Maniar", url: "https://www.8vc.com/fellows/krish-maniar" },
      { title: "8VC Fellowship overview", url: "https://www.8vc.com/fellowships" },
      { title: "Krish Maniar — Palantir internship post", url: "https://www.linkedin.com/posts/krishmaniar4_im-super-excited-to-join-palantir-technologies-activity-7336922663925239808-e0BY" },
      { title: "TreeHacks", url: "https://www.treehacks.com/" },
      { title: "Palantir Technologies", url: "https://www.palantir.com/" },
      { title: "LangChain", url: "https://www.langchain.com/" },
      { title: "Stanford Recreation — table tennis roster", url: "https://stanfordclubsports.com/sports/table-tennis/roster/krish-maniar/6815" },
      { title: "Stanford University", url: "https://www.stanford.edu/" },
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
<p>This profile has been substantially expanded and now cites more independent sources, but some internship and investing details still rely on first-party reporting. Stronger independent validation would come from repository links, externally hosted demos, and third-party technical writeups tied to specific projects.</p>
<p>Role-level confidence is high; project-level certainty should continue to follow source-by-source evidence grading.</p>
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
      { title: "TreeHacks", url: "https://www.treehacks.com/" },
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
<p><strong>Austin Ho</strong> is a Stanford undergraduate listed in Symbolic Systems. This remains a high-disambiguation profile: many unrelated people share the same name, so the article prioritizes identity precision over speculative breadth and uses only evidence tied directly to the Stanford identity.</p>

<h2>Identity and institutional anchor</h2>
<p>The two canonical records are Stanford Profiles and the Symbolic Systems directory page, which align on role (undergraduate), program affiliation (Symbolic Systems), and Stanford contact identity (<code>austinho@stanford.edu</code>). These records are treated as the highest-confidence base layer for this profile.</p>

<h2>Additional public signals (lower confidence)</h2>
<p>Open-web results include references to an &quot;Austin Ho&quot; associated with pre-Stanford startup/newsletter activity and community posts (for example, BackScoop and Stanford-adjacent LinkedIn discussions). Some of those entries mention heading to Stanford and may plausibly refer to the same person, but direct identity linkage is incomplete. They are therefore treated as tentative context rather than core factual claims.</p>

<h2>Disambiguation and exclusion logic</h2>
<p>Search results also include multiple unrelated &quot;Austin Ho&quot; identities (for example, UC Berkeley and non-Stanford technical profiles). Those are explicitly excluded from factual claims in this profile. The exclusion rule is strict: if a source does not provide a clear bridge to the Stanford Symbolic Systems identity, it is used only for disambiguation and false-match prevention.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity and Stanford affiliation; confidence is low-to-medium for career timeline and technical contribution detail due limited first-party public artifacts. This should be interpreted as an evidence availability limit, not a capability judgment.</p>
<p>As soon as stronger first-party links appear (personal site, GitHub, papers, team pages, talks), this profile can be expanded substantially while preserving attribution quality.</p>
`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Austin Ho",
      sameAs: ["https://profiles.stanford.edu/austin-ho"],
      jobTitle: "Undergraduate, Symbolic Systems",
      worksFor: { "@type": "Organization", name: "Stanford University" },
      _dataQuality: {
        sourcesConsulted: 11,
        sourceList: ["Stanford Profiles", "Stanford Symbolic Systems directory", "Stanford Profiles browse pages", "STVP/Xfund public post mentions", "BackScoop-related public post mentions", "General web disambiguation search"],
        lastUpdated: "2026-03",
        overallConfidence: { identity: "HIGH", education: "HIGH", careerTimeline: "LOW", technicalCapabilities: "LOW", currentWorkDetail: "LOW" },
        gaps: ["Minimal first-party technical artifacts", "Unresolved linkage for several open-web Austin Ho mentions"],
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
      { title: "Stanford Symbolic Systems — Austin Ho", url: "https://symsys.stanford.edu/people/austin-ho?page=%2C251&search=" },
      { title: "Stanford Symbolic Systems Program", url: "https://symsys.stanford.edu/" },
      { title: "Stanford Profiles — Browse Symbolic Systems", url: "https://profiles.stanford.edu/browse/school-of-humanities-and-sciences/inter-departmental-programs/symbolic-systems?name=h&p=2" },
      { title: "Stanford Profiles browse — all Stanford search", url: "https://profiles.stanford.edu/browse/stanford?name=austin+ho" },
      { title: "Tutela / LinkedIn post mentioning Austin Ho Stanford admit (tentative)", url: "https://www.linkedin.com/posts/vartika-bhandari_austins-story-of-getting-into-stanford-activity-7054799112247947265-n0SQ" },
      { title: "STVP post with Austin H mention in Xfund Ethics Fellows cohort (tentative)", url: "https://www.linkedin.com/posts/stanfordtechnologyventuresprogram_this-new-cohort-of-18-xfund-ethics-fellows-activity-7341165739141222401-tH0P" },
      { title: "BackScoop team post mentioning Austin Ho heading to Stanford (tentative)", url: "https://www.linkedin.com/posts/amanda-cua_weve-got-another-awesome-addition-to-the-activity-7072475082060632064-Kp5a" },
      { title: "BackScoop hiring post referencing current intern Austin Ho (tentative)", url: "https://www.linkedin.com/posts/amanda-cua_were-hiring-we-atbackscoopare-activity-7089424021653520384-0u68" },
      { title: "Stanford University", url: "https://www.stanford.edu/" },
      { title: "Stanford Athletics — Austin Hooper (disambiguation)", url: "https://gostanford.com/sports/football/roster/player/austin-hooper" },
      { title: "UC Berkeley iSchool — Austin Ho (disambiguation)", url: "https://www.ischool.berkeley.edu/people/austin-ho" },
      { title: "Sony AI — Austin Hoag (disambiguation)", url: "https://ai.sony/people/Austin-Hoag/" },
      { title: "Search disambiguation query — Austin Ho Stanford", url: "https://www.google.com/search?q=%22Austin+Ho%22+Stanford+Symbolic+Systems" },
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
<p><strong>Megan Mou</strong> is an AI product manager currently at Harvey, with a Stanford CS background and prior roles spanning legal-tech and model-centric product contexts. Public records from Stanford Profiles, LinkedIn, and Harvey materials provide strong evidence of role continuity and domain focus.</p>

<h2>Education and technical foundation</h2>
<p>Stanford Profiles lists Mou as a CS graduate student admitted in Autumn 2022, and her public profile history reflects undergraduate-to-graduate CS training. This is consistent with her subsequent positioning in AI product work requiring both technical fluency and workflow design judgment.</p>

<h2>Career trajectory in AI product</h2>
<p>Public posts and profile data document her transition into Harvey as a product manager and reference prior Scale AI and CodeX-adjacent legal AI activity. Harvey&apos;s own product materials around workflows provide contextual support for the product area she publicly references.</p>

<h2>Verification scope</h2>
<p>Confidence is high for identity, employer sequence, and current role. Confidence is moderate for detailed feature-level ownership and launch metrics, which are not usually fully public. The profile therefore avoids claiming internal impact metrics and focuses on externally corroborated role progression.</p>
<p>As more first-party launch notes, talks, or product documents become available, this profile can move from role-level confidence to stronger product-impact specificity without weakening evidence standards.</p>
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
        sourcesConsulted: 10,
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
      { title: "Megan Mou — LinkedIn", url: "https://www.linkedin.com/in/megan-mou" },
      { title: "8VC Fellows — Megan Mou", url: "https://www.8vc.com/fellows/megan-mou" },
      { title: "Harvey", url: "https://www.harvey.ai/" },
      { title: "Harvey product post — 25,000+ custom workflows", url: "https://www.harvey.ai/blog/25000-custom-workflows" },
      { title: "Scale AI", url: "https://scale.com/" },
      { title: "Megan Mou — Scale AI offer rescind post", url: "https://www.linkedin.com/posts/megan-mou_big-life-update-and-first-linkedin-post-activity-7355726278286557184-UKM7" },
      { title: "Megan Mou — Harvey PM announcement post", url: "https://www.linkedin.com/posts/megan-mou_could-not-be-more-excited-to-share-that-activity-7369891358276370432-Zl_-" },
      { title: "CodeX — Stanford Center for Legal Informatics", url: "https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" },
      { title: "Nutrient customer story — Harvey workflow scaling context", url: "https://www.nutrient.io/blog/scaling-legal-document-workflows-harvey/" },
    ],
  },
};
