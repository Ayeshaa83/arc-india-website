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

export const heroSlides = [
  {
    id: "welcome",
    eyebrow: "Association of ARCs in India",
    title: "Reforming the business of securitisation and asset reconstruction",
    subtitle: "Creating value for stakeholders across India's financial ecosystem.",
    image: "/images/hero-1.jpg",
    cta: { label: "About the Association", href: "/about" },
  },
  {
    id: "rbi",
    eyebrow: "Knowledge Center",
    title: "RBI guidelines and regulatory instructions for stressed asset resolution",
    subtitle:
      "Access the latest Reserve Bank of India circulars and directions governing ARCs.",
    image: "/images/hero-2.jpg",
    cta: { label: "View RBI Guidelines", href: "/knowledge-center/rbi-guideline" },
  },
  {
    id: "members",
    eyebrow: "Our Members",
    title: "A unified voice for every RBI-registered Asset Reconstruction Company",
    subtitle: "Representing member ARCs driving India's stressed-asset resolution.",
    image: "/images/hero-3.jpg",
    cta: { label: "Meet Our Members", href: "/members" },
  },
  {
    id: "updates",
    eyebrow: "Latest Updates",
    title: "Quarterly newsletters, performance highlights and annual reports",
    subtitle: "Stay current with industry performance and association activity.",
    image: "/images/hero-4.jpg",
    cta: { label: "Browse Updates", href: "/updates" },
  },
];

// "Member ARCs" below is a static fallback only — StatsBand.tsx overrides
// it live with members.length so the homepage count can never drift out
// of sync with the actual member list again.
export const stats = [
  { label: "Member ARCs", value: "23" },
  { label: "Years Representing the Industry", value: "15+" },
  { label: "RBI Guidelines Tracked", value: "50+" },
  { label: "Quarterly Newsletters Issued", value: "40+" },
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
  /** Shown as a larger, highlighted spotlight tile on the homepage. */
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
};

// PLACEHOLDER — supply actual office bearer names and organisations.
export const officeBearers: OfficeBearer[] = [
  { name: "To be confirmed", designation: "Chairman", organisation: "—" },
  { name: "To be confirmed", designation: "Vice Chairman", organisation: "—" },
  { name: "To be confirmed", designation: "Honorary Secretary", organisation: "—" },
  { name: "To be confirmed", designation: "Honorary Treasurer", organisation: "—" },
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
