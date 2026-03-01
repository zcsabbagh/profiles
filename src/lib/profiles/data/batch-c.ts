import type { ProfileRecord } from "../types";

export const profileBatchC: ProfileRecord = {
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
