export const site = {
  name: "Growth Labs",
  tagline: "We turn enquiries into booked appointments",
  description:
    "Growth Labs sets up ads, tracking, GoHighLevel, follow-up, and AI chat and voice for growing businesses — so every lead gets a reply and a time on the calendar, not a place in an unread list.",
  url: "https://growthlabs.example",
  email: "hello@growthlabs.example",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const overlayMenu = [
  { n: "01", href: "/#signal", label: "Start", tag: "THE PROBLEM" },
  { n: "02", href: "/#work", label: "Services", tag: "WHAT YOU GET" },
  { n: "03", href: "/#practice", label: "How it works", tag: null },
  { n: "04", href: "/#about", label: "Why us", tag: null },
  { n: "05", href: "/#contact", label: "Book a call", tag: null },
] as const;

export const cta = {
  primary: { href: "/book", label: "Book a 30-minute call" },
  secondary: { href: "/#join", label: "See how we start" },
  header: { href: "/book", label: "Let's talk" },
} as const;

export const announcement =
  "We set up the ads, CRM, and follow-up so every lead gets a reply — and a booking.";

export const eyebrow = "For business owners who get leads but lose them";

export const hero = {
  kicker: "Start",
  h1: "Leads come in. We make sure they book.",
  lede: "You pay for ads or a website. People fill in a form or call. Then nothing happens fast enough — so they go elsewhere. Growth Labs sets up the tools that reply, follow up, and put a real appointment on your calendar.",
} as const;

export const promises = [
  {
    title: "People find you",
    body: "Google and Facebook ads aimed at people already looking for what you sell.",
  },
  {
    title: "Someone always replies",
    body: "Texts, email, website chat, and a phone line that pick up in seconds — even after hours.",
  },
  {
    title: "They pick a time",
    body: "Qualified people land on your calendar. You show up to a booked call, not an unread list.",
  },
] as const;

export const partners = [
  "Clinics",
  "Home services",
  "Coaches",
  "Agencies",
  "Education",
  "Real estate",
  "Legal",
  "Wellness",
  "SaaS",
  "Consultancies",
];

export const stats = [
  {
    value: "60",
    accent: "s",
    label: "Typical time to first reply after someone fills a form or clicks an ad",
  },
  {
    value: "24",
    accent: "/7",
    label: "Chat and phone coverage so nights and weekends still get booked",
  },
  {
    value: "1",
    accent: " team",
    label: "One place to call. Ads, CRM, and follow-up are not split across three vendors.",
  },
] as const;

export const steps = [
  {
    n: "01",
    label: "Step one",
    title: "See where leads drop",
    tip: "Getting enquiries but not bookings? Start here.",
    cta: "See the full process",
    href: "/process",
    body: "We look at how people reach you today — ads, website, phone — and where they stall. You leave knowing the leak, not sitting through a pitch deck.",
  },
  {
    n: "02",
    label: "Step two",
    title: "A 30-minute call",
    tip: "No hard sell. We say if we are not the right fit.",
    cta: "Book a 30-minute call",
    href: "/book",
    body: "We agree what “done” looks like: ads, CRM, texts, chat, or the lot. You get a clear scope and timeline before anyone builds anything.",
  },
  {
    n: "03",
    label: "Step three",
    title: "We build it for you",
    tip: "Ready for the calendar to fill.",
    cta: "Start the setup",
    href: "/book",
    body: "We work in your accounts. We test every form, ad, and message for real. Then we hand it over with simple instructions and 30 days of support.",
  },
] as const;

export const systemNodes = [
  { label: "Ads", hint: "Google + Meta" },
  { label: "GTM", hint: "Signal & CAPI" },
  { label: "GHL", hint: "CRM + funnels" },
  { label: "Automations", hint: "Speed-to-lead" },
  { label: "Chat / Voice", hint: "Qualify & book" },
  { label: "Booked call", hint: "On the calendar" },
] as const;

export const practice = [
  {
    n: "01",
    title: "Ads",
    body: "Google and Facebook ads that reach people already looking — not random clicks.",
  },
  {
    n: "02",
    title: "Tracking",
    body: "We measure booked appointments, so you stop paying for “leads” that never speak to you.",
  },
  {
    n: "03",
    title: "Your CRM",
    body: "GoHighLevel stores the person, texts them, and offers a calendar that matches how you sell.",
  },
  {
    n: "04",
    title: "Chat and phone",
    body: "A website chat and a voice line that answer, ask a few questions, and book when you are busy.",
  },
] as const;

export const practiceIntro = {
  index: "03 / How it works",
  title: "What people see, and what runs in the background.",
  body: "Customers see a form, a chat, or a phone line. Behind that we connect ads, tracking, and follow-up so a booking actually happens.",
} as const;

export const practiceSplit = {
  surface: {
    label: "What they see",
    body: "Your pages, booking calendar, texts, and the chat or phone that answers them.",
  },
  system: {
    label: "What we set up",
    body: "Ads, tracking, pipelines, and automations that keep it fast, accurate, and booked.",
  },
} as const;

export const aboutLine = {
  index: "04 / Why us",
  title: "One team. One job: booked calls.",
  body: "Most owners already have ads, a CRM, and a chatbot from different people. None of them talk. We connect the path so a person who enquires today can be on your calendar today.",
} as const;

export const aboutSteps = [
  {
    n: "01",
    label: "They enquire",
    title: "Someone asks for help",
    body: "They click an ad, fill a form, miss you on the phone, or open the chat. That is the start. Most businesses lose them in the next hour.",
  },
  {
    n: "02",
    label: "We connect it",
    title: "Every tool has one owner",
    body: "We set up ads, tracking, GoHighLevel, texts, and AI in your accounts. You are not chasing three vendors to find out why nobody booked.",
  },
  {
    n: "03",
    label: "They book",
    title: "A real time on your calendar",
    body: "They get a fast reply, a few qualifying questions, and a slot. You show up to the call. That is the outcome — not another unread contact.",
  },
] as const;

export const contact = {
  index: "05 / Book a call",
  title: "Tell us where leads stall. We’ll tell you what to fix.",
  body: "Thirty minutes. Bring how people find you today. We will say what is broken, what we would set up, and whether we are the right fit. No pitch deck.",
  box: "Book a 30-minute call",
  direct: "Or email",
} as const;

export const serviceSpine: Record<
  string,
  { tag: string; meta: string; blurb: string }
> = {
  "market-growth": {
    tag: "THE FULL SETUP",
    meta: "ADS · TRACKING · CRM · FOLLOW-UP",
    blurb: "We put ads, tracking, your CRM, and follow-up on one path so a new enquiry can book the same day.",
  },
  gohighlevel: {
    tag: "YOUR CRM",
    meta: "PIPELINE · TEXTS · BOOKING CALENDAR",
    blurb: "GoHighLevel set up around how you actually sell — stages, reminders, and a calendar people can book.",
  },
  automations: {
    tag: "AUTO FOLLOW-UP",
    meta: "TEXT · EMAIL · INSTANT REPLY",
    blurb: "The moment someone enquires, a text and email go out. Nothing waits until morning.",
  },
  "ai-chatbot": {
    tag: "WEBSITE CHAT",
    meta: "ANSWERS · QUESTIONS · BOOKS",
    blurb: "Chat on your site that answers common questions, checks they are a fit, and offers a time.",
  },
  "ai-voicebot": {
    tag: "PHONE LINE",
    meta: "MISSED CALLS · NIGHTS · WEEKENDS",
    blurb: "A voice line that picks up when you cannot, asks a few questions, and books the appointment.",
  },
  "google-ads": {
    tag: "GOOGLE ADS",
    meta: "SEARCH · PEOPLE READY TO BUY",
    blurb: "Ads for people searching right now — wired into your CRM so the lead is called, not exported to a sheet.",
  },
  gtm: {
    tag: "TRACKING",
    meta: "WHAT ACTUALLY BOOKED",
    blurb: "We track booked appointments, not just form fills, so you stop paying for clicks that never speak to you.",
  },
  "meta-ads": {
    tag: "FACEBOOK & INSTAGRAM",
    meta: "LEAD FORMS · FOLLOW-UP",
    blurb: "Facebook and Instagram leads drop into a pipeline with a text waiting — not a notifications pile.",
  },
};

export const processIntro = {
  title: "How we start together",
  body: "Three steps. No 14-item menu. See the leak, get on a call, then we build it in your accounts.",
} as const;

export const offerIntro = {
  index: "02 / What you get",
  title: "Eight services. One job: more booked calls.",
  body: "Scroll through each piece. You can start with one, or we connect them all so nothing falls between ads, the CRM, and follow-up.",
} as const;

export const processStages = [
  {
    title: "We listen",
    body: "A kickoff call. We map how you sell, what you already use, and where enquiries die.",
  },
  {
    title: "You approve the plan",
    body: "A simple diagram of ads, messages, and booking. Nothing gets built until you say yes.",
  },
  {
    title: "We build in your accounts",
    body: "Google, Facebook, tracking, and GoHighLevel stay yours. You get a short video update each week.",
  },
  {
    title: "We test it for real",
    body: "We submit the form, trigger the ad lead, miss the call, and use the chat — like a customer would.",
  },
  {
    title: "Hand over and support",
    body: "Walkthrough, simple notes, and 30 days of help after go-live. Stay on if you want us to keep running it.",
  },
] as const;
