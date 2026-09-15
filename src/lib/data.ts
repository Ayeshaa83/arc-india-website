// -----------------------------------------------------------------------------
// Central content store for the Association of ARCs in India website.
// Edit values here to update text/links across the site — no design/layout
// files need to change. Items marked "PLACEHOLDER" are structured examples
// built from the public homepage summary and should be replaced with the
// client's authoritative copy, logos and PDF links before go-live.
// -----------------------------------------------------------------------------

export const org = {
  name: "Association of ARCs in India",
  shortName: "AARC",
  tagline:
    "Reforming the business of securitisation and asset reconstruction, creating value for the stakeholders",
  description:
    "The official representative body for all Asset Reconstruction Companies (ARCs) registered with the Reserve Bank of India.",
  address: "423, A Wing, Sahar Plaza Complex, Andheri (East), Mumbai 400059",
  email: "info@arcindia.co.in", // PLACEHOLDER — confirm with client
  phone: "+91 22 0000 0000", // PLACEHOLDER — confirm with client
  copyrightStart: 2018,
  // The association's inception year — per Mr. Hari Hara Mishra's bio in
  // officeBearers ("Actively engaged in ARC Association activities since
  // its inception in 2009"). Drives the "Years Representing the Industry"
  // stat below so it never needs manual updating.
  foundedYear: 2009,
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Office Bearers", href: "/about/office-bearers" },
      { label: "Committees", href: "/about/committees" },
    ],
  },
  { label: "Members", href: "/members" },
  {
    label: "Knowledge Center",
    href: "/knowledge-center",
    children: [
      { label: "RBI Guideline", href: "/knowledge-center/rbi-guideline" },
      { label: "Acts & Rules", href: "/knowledge-center/acts-rules" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Updates", href: "/updates" },
  { label: "ARC in News", href: "/arc-in-news" },
  { label: "Contact Us", href: "/contact" },
];

// Stock photography (Unsplash) — the client liked how these looked and
// asked to keep them rather than swap in local placeholders. To replace
// with real photography later, point `image` at a local file under
// public/images/ (e.g. "/images/hero-1.jpg") instead of these URLs.
export const heroSlides = [
  {
    id: "welcome",
    eyebrow: "Association of ARCs in India",
    title: "Reforming the business of securitisation and asset reconstruction",
    subtitle: "Creating value for stakeholders across India's financial ecosystem.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "About the Association", href: "/about" },
  },
  {
    id: "rbi",
    eyebrow: "Knowledge Center",
    title: "RBI guidelines and regulatory instructions for stressed asset resolution",
    subtitle:
      "Access the latest Reserve Bank of India circulars and directions governing ARCs.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "View RBI Guidelines", href: "/knowledge-center/rbi-guideline" },
  },
  {
    id: "members",
    eyebrow: "Our Members",
    title: "A unified voice for every RBI-registered Asset Reconstruction Company",
    subtitle: "Representing member ARCs driving India's stressed-asset resolution.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "Meet Our Members", href: "/members" },
  },
  {
    id: "updates",
    eyebrow: "Latest Updates",
    title: "Quarterly newsletters, performance highlights and annual reports",
    subtitle: "Stay current with industry performance and association activity.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "Browse Updates", href: "/updates" },
  },
];

// Every figure here is computed from real data below (members, office
// bearers, updates) rather than typed in by hand, so none of them can be
// a fabricated number or drift out of sync as that underlying data
// changes. `compute` is a closure rather than a plain value specifically
// so it can reference `members` / `updates` / `officeBearers` / `org`,
// all declared further down this file — safe, since the closure only
// reads them when called later, well after the whole module has
// finished evaluating.
//
// Earlier versions of this file had "RBI Guidelines Tracked" and
// "Quarterly Newsletters Issued" as hand-typed placeholder values (50+
// and 40+) invented when the site was first scaffolded, before any real
// content existed — not measurements of anything real. Replaced them
// with the office bearer count and the newsletter/report list length,
// both tied to genuine data.
export const stats: { label: string; compute: () => string | number }[] = [
  { label: "Member ARCs", compute: () => members.length },
  {
    label: "Years Representing the Industry",
    compute: () => `${new Date().getFullYear() - org.foundedYear}+`,
  },
  { label: "Leadership Team Members", compute: () => officeBearers.length },
  { label: "Newsletters & Reports", compute: () => updates.length },
];

export const quickLinks = [
  {
    title: "About Us",
    description: "Our mission, vision, office bearers and governing committees.",
    href: "/about",
  },
  {
    title: "Members",
    description: "Directory of RBI-registered Asset Reconstruction Companies.",
    href: "/members",
  },
  {
    title: "Knowledge Center",
    description: "RBI guidelines, acts, rules and state-wise stamp duties.",
    href: "/knowledge-center",
  },
  {
    title: "Events",
    description: "Industry conferences, seminars and association gatherings.",
    href: "/events",
  },
  {
    title: "Gallery",
    description: "Photographs from events, meetings and industry milestones.",
    href: "/gallery",
  },
  {
    title: "Updates",
    description: "Newsletters, performance highlights and annual reports.",
    href: "/updates",
  },
  {
    title: "ARC in News",
    description: "Media coverage and press mentions of the association.",
    href: "/arc-in-news",
  },
  {
    title: "Contact Us",
    description: "Reach the association's Mumbai office and team.",
    href: "/contact",
  },
];

export type DocLink = {
  title: string;
  date: string;
  href: string;
  category: "Newsletter" | "Report" | "Guideline" | "Performance";
};

// PLACEHOLDER hrefs — point these at the actual PDF files once supplied by
// the client (e.g. hosted under /public/documents/ or an external DMS).
export const updates: DocLink[] = [
  {
    title: "ARC Newsletter — October 2025 to December 2025",
    date: "2025-12-31",
    href: "/documents/newsletter-oct-dec-2025.pdf",
    category: "Newsletter",
  },
  {
    title: "ARC Newsletter — July 2025 to September 2025",
    date: "2025-09-30",
    href: "/documents/newsletter-jul-sep-2025.pdf",
    category: "Newsletter",
  },
  {
    title: "Association of ARCs in India — Annual Activity Report 2024-25",
    date: "2025-08-15",
    href: "/documents/annual-activity-report-2024-25.pdf",
    category: "Report",
  },
  {
    title: "ARC Performance as of June 2025",
    date: "2025-07-10",
    href: "/documents/arc-performance-june-2025.pdf",
    category: "Performance",
  },
  {
    title: "ARC Newsletter — April 2025 to June 2025",
    date: "2025-06-30",
    href: "/documents/newsletter-apr-jun-2025.pdf",
    category: "Newsletter",
  },
  {
    title: "ARC Performance Highlight — March 2025",
    date: "2025-04-05",
    href: "/documents/arc-performance-march-2025.pdf",
    category: "Performance",
  },
  {
    title: "ARC Newsletter — January 2025 to March 2025",
    date: "2025-03-31",
    href: "/documents/newsletter-jan-mar-2025.pdf",
    category: "Newsletter",
  },
  {
    title: "Revised Settlement Guidelines — January 2025",
    date: "2025-01-15",
    href: "/documents/revised-settlement-guidelines-jan-2025.pdf",
    category: "Guideline",
  },
];

export type Member = {
  name: string;
  logo: string;
  /** Shown slightly larger with a red ring on the homepage logo wall, and
   * tagged "Flagship" on the Members directory page. */
  featured?: boolean;
};

// Confirmed member list with real logos supplied by the client, dropped
// into public/images/members/ (see that folder's README.md for filenames).
// To add a new member later: add an entry here with a `logo` path, then
// drop a same-named file into that folder. A member without a logo file
// yet automatically shows a lettermark badge instead, so the grid never
// looks broken while a new logo is pending.
export const members: Member[] = [
  {
    name: "National Asset Reconstruction Company Ltd (NARCL)",
    logo: "/images/members/narcl.png",
    featured: true,
  },
  { name: "Asset Reconstruction Company (India) Ltd (ARCIL)", logo: "/images/members/arcil.png" },
  { name: "Edelweiss Asset Reconstruction Company Ltd", logo: "/images/members/edelweiss-arc.png" },
  { name: "JM Financial Asset Reconstruction Company Ltd", logo: "/images/members/jm-financial-arc.png" },
  { name: "Indiabulls Asset Reconstruction Company Ltd", logo: "/images/members/indiabulls-arc.png" },
  { name: "Aditya Birla ARC Ltd", logo: "/images/members/aditya-birla-arc.png" },
  { name: "Phoenix ARC Pvt Ltd", logo: "/images/members/phoenix-arc.png" },
  {
    name: "International Asset Reconstruction Company Pvt Ltd",
    logo: "/images/members/international-arc.png",
  },
  { name: "ASREC (India) Ltd", logo: "/images/members/asrec.png" },
  { name: "Alchemist Asset Reconstruction Company Ltd", logo: "/images/members/alchemist-arc.png" },
  {
    name: "Invent Assets Securitisation & Reconstruction Pvt Ltd",
    logo: "/images/members/invent-assets.png",
  },
  { name: "Pegasus Assets Reconstruction Pvt Ltd", logo: "/images/members/pegasus-arc.png" },
  { name: "Omkara Assets Reconstruction Pvt Ltd", logo: "/images/members/omkara-arc.png" },
  { name: "Encore Asset Reconstruction Company Pvt Ltd", logo: "/images/members/encore-arc.png" },
  { name: "India SME Asset Reconstruction Company Ltd (ISARC)", logo: "/images/members/isarc.png" },
  { name: "Prudent ARC Ltd", logo: "/images/members/prudent-arc.png" },
  { name: "Rare Asset Reconstruction Ltd", logo: "/images/members/rare-arc.png" },
  { name: "ACRE ARC", logo: "/images/members/acre-arc.png" },
  { name: "ANA ARC Pvt Ltd", logo: "/images/members/ana-arc.png" },
  { name: "CFM Asset Reconstruction Pvt Ltd", logo: "/images/members/cfm-arc.png" },
  { name: "J.C. Flowers Asset Reconstruction Pvt Ltd", logo: "/images/members/jc-flowers-arc.png" },
  { name: "Maximus ARC Ltd", logo: "/images/members/maximus-arc.png" },
  { name: "Reliance Asset Reconstruction", logo: "/images/members/reliance-arc.png" },
];

export type OfficeBearer = {
  name: string;
  designation: string;
  organisation: string;
  bio: string;
  photo: string;
  /** Shown as the large split-screen spotlight at the top of the page. */
  featured?: boolean;
};

// Confirmed office bearer profiles supplied by the client. `photo` paths
// are placeholders — see public/images/office-bearers/README.md for the
// exact filenames. Until a photo file exists, a lettermark avatar is
// shown automatically, so nothing looks broken while photos are pending.
export const officeBearers: OfficeBearer[] = [
  {
    name: "Mr. Rahul Gupta",
    designation: "Chairman",
    organisation: "J. C. Flowers Asset Reconstruction Private Limited",
    photo: "/images/office-bearers/rahul-gupta.png",
    featured: true,
    bio: "Mr. Rahul Gupta is a seasoned financial services professional with over four decades of experience across multiple global organizations in major Asian economies, including India, Singapore and Japan. Rahul is currently the Managing Director and CEO of J. C. Flowers Asset Reconstruction Private Limited, India. Prior to JCF ARC, Rahul has held leadership roles at Ambit, India; Shinsei Bank, Japan; DBS Bank, Head Office, Singapore; Deutsche Bank, Asia Pacific Head Office, Singapore; HSBC, India; and Société Générale, India.\n\nBeyond his corporate roles, Rahul is also engaged in academic and social impact initiatives with Harvard University. He is a Research Associate (2022-2025) of The Lakshmi Mittal and Family South Asia Institute at Harvard University. Prior to this, he was Senior Fellow (2021 and 2020) and Fellow (2019), Advanced Leadership Initiative at Harvard University. Rahul holds a Master's in Marketing Management from the Jamnalal Bajaj Institute of Management Studies, University of Bombay, and a Bachelor of Commerce (Honours) from the University of Delhi.",
  },
  {
    name: "Mr. Chandan Churiwal",
    designation: "Vice Chairman",
    organisation: "ACRE",
    photo: "/images/office-bearers/chandan-churiwal.png",
    bio: "Mr. Chandan Churiwal is Chief Executive Officer and Whole Time Director at ACRE. He has an experience of over 18 years in buying and resolving stressed financial assets. At ACRE, he has been instrumental in adding a new AUM of more than 20,000 Crore and recoveries of more than 17,000 Crore.\n\nPrior to joining ACRE, he was working with Standard Chartered Bank (SCB), where he was managing a stressed asset book of ~USD 1bn spread across power, sugar & telecom sectors and was closely involved in multiple exits for the bank. Prior to SCB, he worked with Yes Bank, Asset Reconstruction Company (India) Ltd. and ICICI Bank. He is an MBA from the Indian Institute of Management, Bangalore.",
  },
  {
    name: "Mr. R. Mallikarjuna",
    designation: "Secretary",
    organisation: "Pridhvi Asset Reconstruction and Securitisation Company Ltd",
    photo: "/images/office-bearers/r-mallikarjuna.png",
    bio: "Mr. R. Mallikarjuna is currently working as Managing Director & CEO of M/s Pridhvi Asset Reconstruction and Securitisation Company Ltd. He is a law graduate and post graduate in Finance with work experience of over 40 years in various fields such as General Banking, Risk Management, Legal, Recovery and Resolutions. He is also a registered Insolvency Professional.\n\nPrior to joining PARAS, he worked as Presiding Officer, Debts Recovery Tribunal, Hyderabad. During his career with Andhra Bank, he served in various positions, with his last position held as General Manager, Recovery Management and Legal.",
  },
  {
    name: "Mr. Girish Sinha",
    designation: "Treasurer",
    organisation: "ASREC India Limited",
    photo: "/images/office-bearers/girish-sinha.png",
    bio: "Shri Girish Sharan Sinha holds a degree in MBA - Finance (Investment & Portfolio Management). He has focused on Stressed Asset Management and financial markets during his 13-year career. He started his profession in the ARC industry with M/s Asrec (India) Limited, where he streamlined and spearheaded the asset reconstruction business of the Company. He was also instrumental in setting up and implementing ASREC's IT strategy.\n\nSubsequently he moved to Omkara Asset Reconstruction Private Limited as Chief Operating Officer. Currently he is working as Managing Director & Chief Executive Officer of ASREC India Limited. Prior to his assignments in ARCs, he worked at Central Bank of India and Bank of India in various capacities.",
  },
  {
    name: "Mr. Phanindranath Kakarla",
    designation: "Managing Committee Member",
    organisation: "ARCIL",
    photo: "/images/office-bearers/phanindranath-kakarla.png",
    bio: "Mr. Phanindranath Kakarla is the Chief Executive Officer & Managing Director of ARCIL. A distinguished leader in financial services, he brings extensive experience across banking and asset management, encompassing finance, credit risk, corporate banking, transaction banking, and distressed asset management. He has deep expertise in building and scaling institutions, driving strategic transformation, and delivering sustainable value in complex and highly regulated financial environments.\n\nAs CEO & MD, he leads the organization's strategic direction with a focus on the acquisition, resolution, and value maximization of distressed assets, and is responsible for shaping ARCIL's growth strategy and strengthening its institutional capabilities. He partners closely with the Board, regulators, lenders, and investors to strengthen the Company's investment and resolution capabilities while ensuring disciplined execution, robust governance, and prudent risk management.",
  },
  {
    name: "Mr. Srinivasan Viswanathan",
    designation: "Managing Committee Member",
    organisation: "JM Financial Asset Reconstruction Company Limited",
    photo: "/images/office-bearers/srinivasan-viswanathan.png",
    bio: "Mr. Srinivasan Viswanathan is the Chief Executive Officer of JM Financial Asset Reconstruction Company Limited. A seasoned stressed assets professional, having joined this space in 2006, he brings over 25 years of expertise to the table. Srinivasan's previous position was with Standard Chartered Bank, with other stints at Citibank, JP Morgan, Dun & Bradstreet, India Infoline and BNP Paribas.\n\nHe has completed his MBA (Finance) from the Jamnalal Bajaj Institute of Management Studies and B.Com from R.A. Podar College of Commerce & Economics.",
  },
  {
    name: "Mr. Aerik Sharma",
    designation: "Managing Committee Member",
    organisation: "Encore ARC",
    photo: "/images/office-bearers/aerik-sharma.png",
    bio: "Aerik has over 25 years of leadership experience in the financial services sector and is currently Chief Operating Officer at Encore ARC. As a founding member of the team at Encore ARC, he has been instrumental in building and profitably scaling the business from the ground up, shaping and executing the company's growth strategy, driving operational performance, and strengthening the platform's scalability and governance.\n\nHe brings expertise in the acquisition and resolution of secured and unsecured stressed financial assets, with a proven track record of maximizing recoveries and driving portfolio performance. Prior to joining Encore, he held senior leadership roles at Tata AIA Life Insurance, PNB MetLife India and Midland Credit Management. Aerik is a Chartered Accountant from the Institute of Chartered Accountants of India (ICAI) and a Company Secretary, and holds a bachelor's degree in commerce from the University of Delhi.",
  },
  {
    name: "Mr. Hari Hara Mishra",
    designation: "Chief Executive Officer",
    organisation: "Association of ARCs in India",
    photo: "/images/office-bearers/hari-hara-mishra.png",
    bio: "Career banker from State Bank of India (1982-2004). Moved to the ARC sector in 2004, when the first ARC in India, ARCIL, started functioning. Associated with the Asset Reconstruction sector since those formative days till date, in various ARCs in executive and director level roles.\n\nActively engaged in ARC Association activities since its inception in 2009 and has held various elective offices, including Secretary of the ARC Association. Had the opportunity to draft the report of the Key Advisory Group (KAG) on the ARC sector (2011) appointed by the Ministry of Finance. Was a member of an IBA Group on NPA Sale Process and Assignment Agreement (2012), and was part of the CAFRAL Group on the discussion paper on Distressed Assets (2013). At present, a member of an IBA working group on ARCs (2023).\n\nA regular contributor to various publications and a speaker/panellist on subjects of the economy, finance, and distressed debt.",
  },
];

// PLACEHOLDER — supply actual committee names, mandates and members.
export const committees: { name: string; description: string }[] = [
  {
    name: "Legal & Regulatory Committee",
    description:
      "Engages with RBI and other regulators on policy matters affecting the ARC industry.",
  },
  {
    name: "Taxation Committee",
    description: "Reviews direct and indirect tax matters concerning ARC operations.",
  },
  {
    name: "Membership & Governance Committee",
    description: "Oversees admission of new members and governance standards.",
  },
  {
    name: "Communications Committee",
    description: "Manages newsletters, press coverage and public representation.",
  },
];

export type Article = {
  title: string;
  source: string;
  date: string;
  href: string;
};

// PLACEHOLDER — replace with verified press coverage and correct source links.
export const newsArticles: Article[] = [
  {
    title: "ARCs seek regulatory clarity on stressed asset resolution timelines",
    source: "Financial Express",
    date: "2025-11-02",
    href: "#",
  },
  {
    title: "Association of ARCs flags concerns over settlement guideline revisions",
    source: "Business Standard",
    date: "2025-08-20",
    href: "#",
  },
  {
    title: "NPA resolution: ARC industry body publishes annual performance data",
    source: "Economic Times",
    date: "2025-07-15",
    href: "#",
  },
];

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
};

// PLACEHOLDER — replace with actual past/upcoming events.
export const events: EventItem[] = [
  {
    title: "Annual General Meeting 2025",
    date: "2025-09-25",
    location: "Mumbai",
    description:
      "Annual gathering of member ARCs to review industry performance and elect office bearers.",
  },
  {
    title: "Roundtable on Stressed Asset Resolution Reforms",
    date: "2025-05-14",
    location: "New Delhi",
    description: "Industry roundtable with regulators on proposed resolution framework changes.",
  },
  {
    title: "ARC Industry Conclave",
    date: "2025-02-10",
    location: "Mumbai",
    description: "Conference bringing together ARCs, banks and financial institutions.",
  },
];

// PLACEHOLDER — replace with actual gallery photography.
export const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export const stampDutyNote =
  "The Reserve Bank of India has issued various instructions aimed at resolution of stressed assets in the economy. Stamp duty and registration charges payable on assignment of debt vary state-wise — refer to the Acts & Rules section for the full state-wise schedule.";
