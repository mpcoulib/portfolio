'use client'
import { motion } from 'motion/react'
import { RetroWindow } from '@/components/RetroWindow'
import { SketchBox } from '@/components/SketchBox'
import { ScribbleUnderline } from '@/components/ScribbleUnderline'
import { KentePattern } from '@/components/KentePattern'
import { AdinkraBackground } from '@/components/AdinkraBackground'

// Main page here
const mastersProjects = [
  {
    title: "OfferBloom — AI Interview Prep",
    description: "Full-stack AI interview-prep platform (MIMS Capstone). React + Vite frontend, FastAPI backend, Neo4j graph model, Cloudflare R2 storage, Claude Haiku integration for answer drafting, verbal-practice feedback, and resume coaching.",
    liveUrl: "https://offerbloom.vercel.app/",
    techStack: ["React", "Vite", "FastAPI", "Neo4j", "Cloudflare R2", "Claude Haiku", "Python"],
    highlights: [
      "Designed Neo4j graph linking users, questions, answers, practices, and files",
      "Seeded 320 role-specific interview questions across 8 roles and 8 categories",
      "Integrated Claude Haiku for AI-assisted answer drafting and verbal-practice feedback",
      "Built resume coaching flow with structured feedback on bullet quality"
    ]
  },
  {
    title: "Clinical Trial Navigator (CTN)",
    description: "Knowledge-graph platform matching sickle-cell patients to eligible clinical trials. Berkeley INFO 290 / DEVENG 204 capstone — addressing the <5% enrollment rate across 250+ active trials.",
    githubUrl: "https://github.com/mpcoulib",
    liveUrl: "https://alluring-nourishment-production-34a5.up.railway.app/login/",
    techStack: ["Python", "Django 4.2", "RDF/Turtle", "SPARQL", "SHACL", "rdflib", "Anthropic API", "Railway"],
    highlights: [
      "Designed RDF/Turtle data model + RDFS schema with inference; SHACL validation via pySHACL",
      "Built SPARQL eligibility-matching engine over 250 ingested trials",
      "Django web app with patient registry, trial browser, and live matching demo",
      "Pitched $150K seed with TAM/SAM/SOM model targeting expansion to 5 countries"
    ]
  },
  {
    title: "The Sound of Power — UN Speeches NLP",
    description: "ANLP final project. NLP pipeline analyzing rhetorical strategies across 2,069 UN Security Council transcripts using LDA, BERTopic, and transformer-based LLMs.",
    githubUrl: "https://github.com/mpcoulib/Projects/tree/main/United%20Nation%20Speeches%20analysis",
    paperUrl: "https://drive.google.com/file/d/1NhE_UUAA53kZ0gn7lzTQkJkYryJcRsy0/view",
    techStack: ["Python", "BERTopic", "LDA", "Transformers", "spaCy", "Gensim"],
    highlights: [
      "Tested what drives linguistic variability in diplomatic speeches",
      "Found resolution type outweighs country identity and bloc membership",
      "Cleaned and normalized noisy OCR-extracted text from scanned UN documents"
    ]
  },
  {
    title: "Joke Generator",
    description: "Front-end Web Architecture class project. React app fetching random jokes from an external API in a responsive interface.",
    githubUrl: "https://github.com/mpcoulib/Front-end-project",
    techStack: ["React", "CSS", "Joke API"],
    highlights: [
      "Integrated external Joke API with live fetching on button click",
      "Built with modular, reusable React components",
      "Fully responsive layout that adapts across device sizes"
    ]
  }
]

const dataScienceProjects = [
  {
    title: "Billboard Hit Prediction Tool",
    description: "Built and evaluated four ML models on 3,000+ songs using Spotify, Billboard and YouTube APIs, achieving over 80% accuracy predicting chart success.",
    githubUrl: "https://github.com/mpcoulib/Projects",
    techStack: ["Python", "Scikit-learn", "Spotify API", "Billboard API", "YouTube API", "Pandas"],
    highlights: [
      "Compared Logistic Regression, Random Forest, XGBoost, and SVM — XGBoost topped 80% accuracy",
      "Handled severe class imbalance between charting and non-charting songs via SMOTE",
      "Engineered audio features (danceability, valence, tempo) into model-ready inputs across 3 APIs"
    ]
  },
  {
    title: "ETF Stock Analysis",
    description: "Constructed time series models to demonstrate the impact of US Unemployment Rate announcements on QQQ, IWM, and SPY ETF prices.",
    githubUrl: "https://github.com/mpcoulib/Projects",
    techStack: ["Python", "statsmodels", "ARIMA", "GARCH", "Pandas", "Matplotlib"],
    highlights: [
      "Modeled volatility clustering around macro announcements using GARCH",
      "Ran event-study analysis isolating pre/post announcement price reactions",
      "Aligned non-synchronous financial time series from multiple data sources"
    ]
  }
]

const webDevProjects = [
  {
    title: "Ghana MMDA Budget Transparency",
    description: "Architected and built end-to-end ETL pipeline ingesting 1,400+ municipal budget PDFs (2014–2026) across 261 Metropolitan, Municipal & District Assemblies — Ghana's first centralized fiscal transparency platform. Solo build on $51K budget.",
    githubUrl: "https://www.publicaccountabilitylab.com/",
    liveUrl: "https://www.publicaccountabilitylab.com/",
    techStack: ["Python", "pdfplumber", "camelot", "PostgreSQL", "React", "AWS (RDS/S3/EC2)", "Azure Form Recognizer", "GPT APIs"],
    highlights: [
      "Format-aware parsing engine routing PDFs across 5 document generations (Old Composite Budget, PBB v1–v4)",
      "Normalized PostgreSQL schema aligned to GFS/COFOG codebooks with currency + inflation adjustments",
      "Validation + approval workflow (Draft → Submitted → Review → Approved → Published) with field-level audit trail",
      "REST API + React dashboards for Budget Explorer, comparative analytics, dev-vs-recurrent splits",
      "Azure Form Recognizer + GPT for OCR/extraction on low-quality scans"
    ]
  },
  {
    title: "Afya Health Information Systems",
    description: "Co-founder & CTO. USSD-based EHR platform enabling clinics in low-resource settings to securely capture patient data offline and sync with national health systems when connectivity returns. Big Ideas Berkeley finalist.",
    githubUrl: "https://github.com/mpcoulib",
    techStack: ["USSD", "Python", "PostgreSQL", "Offline-first", "Health IT"],
    highlights: [
      "Selected as Big Ideas Berkeley finalist for transforming record-keeping in Sub-Saharan Africa",
      "Designed offline-first sync architecture for intermittent connectivity",
      "USSD interface targets clinics without smartphones or stable internet"
    ]
  },
  {
    title: "mibegnon-project",
    description: "Full-stack scholarship platform with authentication, user dashboard, and automated scholarship scraping — built with Next.js, TypeScript, and Prisma.",
    githubUrl: "https://github.com/mpcoulib/mibegnon-project",
    liveUrl: "https://mibegnon.com",
    techStack: ["Next.js", "TypeScript", "Prisma", "Python", "Jupyter"],
    highlights: [
      "Built role-based auth with protected dashboard and public-facing routes",
      "Automated scholarship discovery via a Python scraper feeding into a Prisma-backed database",
      "Designed schema to track scholarship deadlines, eligibility, and user applications"
    ]
  },
  {
    title: "HIMS — Friends Eye Center",
    description: "Built a Healthcare Information Management System for a clinic in Ghana on top of OpenEMR. Includes a data migration pipeline using Python and Pandas to move legacy Excel records into the new system.",
    githubUrl: "https://github.com/mpcoulib/Friends_Eye_Center_data_migration",
    techStack: ["Python", "Pandas", "SQL", "OpenEMR", "Ghana 🇬🇭"],
    highlights: [
      "Wrote SQL migration scripts via Pandas to transfer clinic data from Excel sheets into the new OpenEMR-based system",
      "Clinic proposal and initial analysis included in the repo — shared with permission from Friends Eye Center",
      "Replaced entirely paper-based workflows across three sites: patient records, billing, and appointments",
      "System still in use 2+ years later; trained KNUST and Technical University of Tamale students to maintain it post-handoff"
    ]
  },
  {
    title: "Friends Eye Center — Public Website",
    description: "Public-facing website for the FEC clinic in Kumasi, Ghana. Marketing, services, and contact for the eye center I previously digitized.",
    githubUrl: "https://github.com/mpcoulib",
    liveUrl: "https://fec-website-c64v.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    highlights: [
      "Designed and shipped a responsive marketing site for the same clinic I built the HMS for",
      "Deployed on Vercel with continuous delivery",
      "Companion piece to the OpenEMR-based HIMS — full lifecycle from clinical software to public web presence"
    ]
  }
]

const experience = [
  {
    role: "Data Intern",
    org: "UC Berkeley · Coleman Fung Institute",
    location: "Berkeley, USA",
    period: "Sep 2024 – Present",
    blurb: "7+ years of MEng student data, Salesforce + Qualtrics + PostgreSQL integration, Tableau dashboards for employment outcomes."
  },
  {
    role: "Software Engineer",
    org: "Public Accountability Lab",
    location: "Remote · Ghana",
    period: "2024 – 2025",
    blurb: "Solo build of Ghana MMDA Budget Transparency platform on $51K — 1,400+ PDFs across 261 assemblies, AWS + Azure stack."
  },
  {
    role: "Lead IT Consultant",
    org: "Friends Eye Center Clinic",
    location: "Kumasi, Ghana",
    period: "May 2023 – Aug 2023",
    blurb: "Shipped full HMS on open-source stack, LAN-based offline sync, trained 37 staff. Doubled clinic revenue."
  },
  {
    role: "IT Consultant",
    org: "Pittsburgh Lutheran United Ministries (CMU)",
    location: "Pittsburgh, USA",
    period: "Jan 2023 – May 2023",
    blurb: "IT audits across 8 churches; designed 5 data collection tools consolidating 2,000+ records."
  },
  {
    role: "Data Management Intern",
    org: "HEC Paris",
    location: "Doha, Qatar",
    period: "Oct 2021 – Apr 2022",
    blurb: "R + Excel analysis on 1,100+ alumni records; led QA/UX testing for a new platform pre-launch."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d8d8d0', padding: '8px' }}>

      {/* Browser frame wrapper */}
      <div style={{ border: '2px solid #1a202c', boxShadow: '8px 8px 0px rgba(0,0,0,0.2)', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 sticky top-0 z-50" style={{ backgroundColor: '#1a202c' }}>
          <div className="flex items-center gap-3">
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            <span className="hidden sm:inline text-xs font-mono ml-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              massafolio.dev
            </span>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/mpcoulib/portfolio" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', backgroundColor: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#fff'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)' }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M 7 1 C 3.7 1 1 3.7 1 7 C 1 9.6 2.7 11.9 5.1 12.7 C 5.4 12.8 5.5 12.6 5.5 12.4 L 5.5 11.3 C 3.9 11.6 3.5 10.5 3.5 10.5 C 3.2 9.8 2.8 9.6 2.8 9.6 C 2.2 9.2 2.8 9.2 2.8 9.2 C 3.4 9.3 3.8 9.8 3.8 9.8 C 4.4 10.8 5.4 10.5 5.7 10.3 C 5.8 9.9 5.9 9.6 6.1 9.5 C 4.4 9.3 2.6 8.6 2.6 5.7 C 2.6 4.9 2.9 4.3 3.3 3.8 C 3.3 3.6 3 2.9 3.5 2 C 3.5 2 4.1 1.8 5.5 2.7 C 6.1 2.5 6.8 2.4 7.5 2.4 C 8.2 2.4 8.9 2.5 9.5 2.7 C 10.9 1.8 11.5 2 11.5 2 C 12 2.9 11.7 3.6 11.7 3.8 C 12.1 4.3 12.4 4.9 12.4 5.7 C 12.4 8.6 10.6 9.3 8.9 9.5 C 9.1 9.7 9.3 10.1 9.3 10.7 L 9.3 12.4 C 9.3 12.6 9.4 12.8 9.7 12.7 C 12.1 11.9 13.8 9.6 13.8 7 C 14 3.7 11.3 1 7 1 Z" fill="currentColor"/>
              </svg>
              github ↗
            </a>
            <a href="https://drive.google.com/file/d/15VcmhMAde-i03_uvnGI-OMua-fGVZbI7/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
              style={{ border: '1.5px solid #f6c90e', color: '#f6c90e', backgroundColor: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f6c90e'; (e.currentTarget as HTMLAnchorElement).style.color = '#1a202c' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#f6c90e' }}>
              cv ↗
            </a>
            <a href="https://massafolio.dev" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
              style={{ border: '1.5px solid #a8d96e', color: '#a8d96e', backgroundColor: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#a8d96e'; (e.currentTarget as HTMLAnchorElement).style.color = '#1a202c' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#a8d96e' }}>
              live ↗
            </a>
          </div>
        </div>

        {/* Page content */}
        <div className="relative overflow-x-hidden" style={{ backgroundColor: '#f5f5f0' }}>
      <KentePattern />
      <AdinkraBackground />


      {/* Rotating doodle top-right */}
      <motion.div className="hidden sm:block fixed top-8 right-8 opacity-20 pointer-events-none"
        initial={{ rotate: 0 }} animate={{ rotate: [0, -5, 0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity }}>
        <svg width="80" height="80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="#1a202c" strokeWidth="2" />
          <circle cx="40" cy="40" r="25" fill="none" stroke="#1a202c" strokeWidth="1.5" opacity="0.4" />
          <path d="M 40 20 L 40 60 M 20 40 L 60 40" stroke="#a8d96e" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-12 py-16 relative z-10">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="mb-20">
          <RetroWindow title="About This Engineer" delay={0.2}>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl sm:text-5xl mb-3 relative inline-block"
                  style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '-0.01em', color: '#1a202c' }}>
                  Massa Coulibaly
                  <svg className="absolute -bottom-1 left-0 w-full h-3">
                    <path d="M 2 8 Q 25 6, 50 8 T 100 7 T 150 9 T 200 7 T 250 8 T 300 7"
                      stroke="#1a202c" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </h1>
                <div className="space-y-2 mt-2">
                  <p className="text-base text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                    <span className="inline-block mr-2 text-[#a8d96e]">→</span>
                    Full-stack engineer. I build software that works in places where most tools don&apos;t reach.
                  </p>
                  <p className="text-sm text-gray-600 italic pl-6" style={{ fontFamily: 'Georgia, serif' }}>
                    Ex Co-founder & CTO of Afya — USSD-based EMR for Sub-Saharan Africa. UC Berkeley MIMS. Path toward Forward Deployed Engineering.
                  </p>
                </div>
              </div>
{/* New line here */}
              <div className="border-t-2 border-dashed border-gray-300 pt-3 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="flex justify-between">

                    <span className="text-gray-500">School:</span>
                    <span className="text-gray-700">UC Berkeley MIMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Prev:</span>
                    <span className="text-gray-700">CTO @ Afya</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Focus:</span>
                    <span className="text-gray-700">Health IT · FDE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Seeking:</span>
                    <span className="text-[#a8d96e]">FDE · Full-Stack</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-3 pt-2 border-t border-gray-200">
                  <a href="https://github.com/mpcoulib" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-[#a8d96e] transition-colors underline decoration-dotted">github</a>
                  <a href="https://www.linkedin.com/in/massacoulibaly" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-[#a8d96e] transition-colors underline decoration-dotted">linkedin</a>
                  <a href="https://www.ischool.berkeley.edu/people/massa-coulibaly" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-[#a8d96e] transition-colors underline decoration-dotted">berkeley</a>
                  <a href="https://github.com/mpcoulib/portfolio" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-500 hover:text-[#a8d96e] transition-colors underline decoration-dotted">this site ↗</a>
                </div>
              </div>
            </div>
          </RetroWindow>
        </motion.div>

        {/* Sticky note */}
        <motion.div initial={{ opacity: 0, rotate: -2 }} animate={{ opacity: 1, rotate: -1 }}
          transition={{ delay: 0.8 }} className="mb-16 ml-0 sm:ml-24 max-w-md">
          <div className="bg-yellow-50/80 p-4 relative"
            style={{ border: '1px solid rgba(0,0,0,0.1)', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)', transform: 'rotate(-1deg)' }}>
            <div className="absolute -top-3 left-1/2 w-16 h-6 bg-yellow-200/60 -translate-x-1/2"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
            <p className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(0.5deg)' }}>
              Projects in Data Science, AI & Web Systems below ↓<br />
              <span className="text-xs opacity-70">This is a page that represent a little bit about me and projects I have worked on. The background symbols are Adinkra — hover them.<br /></span>
              <span className="text-xs opacity-50">Kente (a Ghanaian traditional cloth pattern) is in the background too. {' '}
                <a href="https://www.kentecloth.net/kente-cloth-adinkra-symbols-meaning/" target="_blank" rel="noopener noreferrer"
                  className="underline decoration-dotted hover:opacity-80 transition-opacity">Find out more ↗</a>
              </span>
            </p>
          </div>
        </motion.div>


     

        {/* Master's Projects section */}
        <section className="mb-20 ml-0 sm:ml-24 relative">
          <ScribbleUnderline delay={0.3} icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-75">
              <path d="M 4 10 L 14 5 L 24 10 L 14 15 Z" stroke="#1a202c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              <path d="M 8 12 L 8 18 Q 14 22, 20 18 L 20 12" stroke="#1a202c" strokeWidth="1.5" fill="none" />
              <path d="M 24 10 L 24 16" stroke="#a8d96e" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="24" cy="17.5" r="1.2" fill="#a8d96e" />
            </svg>
          }>Master&apos;s Projects</ScribbleUnderline>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="absolute -left-16 mt-2 text-xs text-gray-400 font-mono transform -rotate-90 origin-left">
            // BERKELEY
          </motion.div>
          <p className="text-xs text-gray-500 font-mono mb-6 pl-1">
            MIMS &apos;26 — capstones, course projects, and applied research
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mastersProjects.map((project, index) => (
              <SketchBox key={index} title={project.title} description={project.description}
                githubUrl={(project as { githubUrl?: string }).githubUrl}
                liveUrl={(project as { liveUrl?: string }).liveUrl}
                paperUrl={(project as { paperUrl?: string }).paperUrl}
                techStack={project.techStack} highlights={project.highlights} delay={0.1 * index} />
            ))}
          </div>
        </section>

        {/* Section divider */}
        <motion.div className="my-16 flex items-center gap-4 ml-0 sm:ml-24"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}>
          <svg width="60" height="40" className="opacity-30 flex-shrink-0">
            <path d="M 5 20 L 25 20 L 25 10 L 45 30 L 25 30 L 25 20" stroke="#1a202c" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex-1 h-0.5" style={{
            background: 'repeating-linear-gradient(90deg, #999 0px, #999 8px, transparent 8px, transparent 16px)'
          }} />
        </motion.div>

        {/* Web Dev section */}
        <section className="mb-20 ml-0 sm:ml-24 relative">
          <ScribbleUnderline delay={0.4} icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-75">
              <circle cx="14" cy="4" r="2.5" fill="#1a202c" />
              <circle cx="4" cy="14" r="2.5" stroke="#1a202c" strokeWidth="1.5" fill="none" />
              <circle cx="24" cy="14" r="2.5" stroke="#a8d96e" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="24" r="2.5" stroke="#1a202c" strokeWidth="1.5" fill="none" />
              <path d="M 12 6 L 6 12" stroke="#1a202c" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 16 6 L 22 12" stroke="#1a202c" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 6 16 L 12 22" stroke="#a8d96e" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 22 16 L 16 22" stroke="#1a202c" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 6.5 14 L 21.5 14" stroke="#1a202c" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
            </svg>
          }>Web Dev & Systems</ScribbleUnderline>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="absolute -left-16 mt-2 text-xs text-gray-400 font-mono transform -rotate-90 origin-left">
            // INFRA
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDevProjects.map((project, index) => (
              <SketchBox key={index} title={project.title} description={project.description}
                githubUrl={project.githubUrl} liveUrl={(project as { liveUrl?: string }).liveUrl}
                techStack={project.techStack} highlights={project.highlights} delay={0.1 * index} />
            ))}
          </div>
        </section>
   {/* Section divider */}
   <motion.div className="my-16 flex items-center gap-4 ml-0 sm:ml-24"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}>
          <svg width="60" height="40" className="opacity-30 flex-shrink-0">
            <path d="M 5 20 L 25 20 L 25 10 L 45 30 L 25 30 L 25 20" stroke="#1a202c" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex-1 h-0.5" style={{
            background: 'repeating-linear-gradient(90deg, #999 0px, #999 8px, transparent 8px, transparent 16px)'
          }} />
        </motion.div>

        {/* Data Science section */}
        <section className="mb-20 ml-0 sm:ml-24 relative">
          <ScribbleUnderline delay={0.2} icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-75">
              <path d="M 4 24 L 4 4 M 4 24 L 24 24" stroke="#1a202c" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="7" cy="20" r="1.5" fill="#1a202c" />
              <circle cx="11" cy="17" r="1.5" fill="#1a202c" />
              <circle cx="15" cy="19" r="1.5" fill="#1a202c" />
              <circle cx="19" cy="11" r="1.5" fill="#1a202c" />
              <circle cx="22" cy="8" r="1.5" fill="#1a202c" />
              <path d="M 6 21 Q 14 13, 23 7" stroke="#a8d96e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          }>Data Science & AI</ScribbleUnderline>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="absolute -left-16 mt-2 text-xs text-gray-400 font-mono transform -rotate-90 origin-left">
            // ML/AI
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataScienceProjects.map((project, index) => (
              <SketchBox key={index} title={project.title} description={project.description}
                githubUrl={project.githubUrl} techStack={project.techStack}
                highlights={project.highlights} delay={0.1 * index} />
            ))}
          </div>
        </section>

        {/* Section divider */}
        <motion.div className="my-16 flex items-center gap-4 ml-0 sm:ml-24"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}>
          <svg width="60" height="40" className="opacity-30 flex-shrink-0">
            <path d="M 5 20 L 25 20 L 25 10 L 45 30 L 25 30 L 25 20" stroke="#1a202c" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex-1 h-0.5" style={{
            background: 'repeating-linear-gradient(90deg, #999 0px, #999 8px, transparent 8px, transparent 16px)'
          }} />
        </motion.div>

        {/* Experience timeline */}
        <section className="mb-20 ml-0 sm:ml-24 relative">
          <ScribbleUnderline delay={0.2} icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-75">
              <circle cx="14" cy="14" r="10" stroke="#1a202c" strokeWidth="1.5" fill="none" />
              <path d="M 14 8 L 14 14 L 18 17" stroke="#1a202c" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <circle cx="14" cy="14" r="1.3" fill="#a8d96e" />
            </svg>
          }>Experience</ScribbleUnderline>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="absolute -left-16 mt-2 text-xs text-gray-400 font-mono transform -rotate-90 origin-left">
            // TIMELINE
          </motion.div>
          <div className="relative pl-6 sm:pl-8">
            {/* Vertical dashed line */}
            <div className="absolute left-1 sm:left-2 top-2 bottom-2 w-0.5"
              style={{ background: 'repeating-linear-gradient(to bottom, #1a202c 0px, #1a202c 4px, transparent 4px, transparent 8px)', opacity: 0.4 }} />
            <div className="space-y-6">
              {experience.map((job, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute -left-6 sm:-left-8 top-1.5"
                    style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#f5f5f0', border: '2px solid #1a202c' }}>
                    <div className="absolute inset-1" style={{ backgroundColor: '#a8d96e', borderRadius: '50%' }} />
                  </div>
                  <div className="bg-white/40 p-4"
                    style={{ border: '1.5px solid rgba(26,32,44,0.6)', boxShadow: '3px 3px 0px rgba(26,32,44,0.1)' }}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <div>
                        <span className="font-mono text-sm font-bold" style={{ color: '#1a202c' }}>{job.role}</span>
                        <span className="font-mono text-xs text-gray-500"> @ </span>
                        <span className="font-mono text-sm" style={{ color: '#1a202c' }}>{job.org}</span>
                      </div>
                      <span className="font-mono text-xs text-gray-500">{job.period}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono mb-2">{job.location}</p>
                    <p className="text-sm text-gray-700 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                      {job.blurb}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="mt-32 ml-0 sm:ml-24">
          <div className="border-2 border-[#1a202c] p-4 font-mono text-xs"
            style={{ backgroundColor: '#000', color: '#0f0', boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            <div className="mb-1">
              <span className="opacity-60">massa@portfolio:~$</span> whoami
            </div>
            <div className="text-gray-400 leading-relaxed">
              {'>'} <span className="text-white">Massa Coulibaly</span>, Full-Stack Engineer<br />
              {'>'} Ex CTO @ Afya · UC Berkeley MIMS &apos;26<br />
              {'>'} Contact:{' '}
              <a href="mailto:massacoulibaly@berkeley.edu"
                className="text-[#a8d96e] hover:underline">
                massacoulibaly@berkeley.edu
              </a><br />
              {'>'} <span className="text-[#a8d96e]">█</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom-left circle decoration */}
      <svg className="fixed bottom-8 left-8 opacity-10 pointer-events-none" width="60" height="60">
        <circle cx="30" cy="30" r="25" fill="none" stroke="#1a202c" strokeWidth="2" />
        <path d="M 15 30 L 45 30" stroke="#1a202c" strokeWidth="2" />
      </svg>
        </div>
      </div>
    </div>
  )
}
