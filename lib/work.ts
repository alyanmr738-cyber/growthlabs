export type WorkShot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  niche: string;
  client: string;
  result: string;
  summary: string;
  body: string;
  tags: string[];
  featured: boolean;
  stats?: { value: string; label: string }[];
  shots?: WorkShot[];
  outcomes?: string[];
  note?: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "ghl-sales-engine",
    title: "GoHighLevel sales engine",
    niche: "Multi-service operator",
    client: "Confidential · high-volume lead account",
    result: "2,480 contacts organised · follow-up on autopilot",
    summary:
      "A live CRM rebuild: pipelines, intake workflows, SMS/email branches, reporting, and phone setup.",
    body: "The team was drowning in volume and living between spreadsheets and inboxes. We mapped stages, rebuilt pipelines, turned on timed follow-up, and set phone/SMS so messages actually send. Names are hidden. The structure is real.",
    tags: ["GoHighLevel", "Automations", "SMS", "Reporting"],
    featured: true,
    stats: [
      { value: "2,480", label: "People in one sales pipeline" },
      { value: "440", label: "Tracked through a client journey" },
      { value: "2,085", label: "Leads that arrived automatically" },
      { value: "3", label: "Business numbers ready for texts and calls" },
    ],
    shots: [
      {
        src: "/work/cover.jpg",
        width: 1280,
        height: 687,
        alt: "GoHighLevel opportunities overview from a live account",
        caption: "A live opportunities view — volume you can manage day to day.",
      },
      {
        src: "/work/pipeline-sales.jpg",
        width: 1280,
        height: 687,
        alt: "GoHighLevel sales pipeline organised by contact status",
        caption: "Sales board: new, attempted, contacted, in conversation — 2,480 people, not a messy list.",
      },
      {
        src: "/work/pipeline-journey.jpg",
        width: 1400,
        height: 982,
        alt: "GoHighLevel client journey pipeline with trial and enrolled stages",
        caption: "Client journey stages so staff can see what to do next.",
      },
      {
        src: "/work/reporting.jpg",
        width: 1280,
        height: 726,
        alt: "GoHighLevel opportunity reporting by pipeline stage",
        caption: "Manager view: where people pile up, so follow-up aims at the bottleneck.",
      },
      {
        src: "/work/workflows.jpg",
        width: 1400,
        height: 796,
        alt: "Published GoHighLevel workflows for API intake and visitor follow-up",
        caption: "Published workflows: website or API intake into follow-up immediately.",
      },
      {
        src: "/work/follow-up.jpg",
        width: 1400,
        height: 631,
        alt: "GoHighLevel workflow with timed SMS and email branches",
        caption: "Follow-up that branches: wait, text, email, try again.",
      },
      {
        src: "/work/phone.jpg",
        width: 1400,
        height: 502,
        alt: "GoHighLevel phone and A2P 10DLC messaging setup",
        caption: "Phone and SMS set up properly, including A2P 10DLC.",
      },
    ],
    outcomes: [
      "Faster first reply — the CRM starts follow-up as soon as the lead arrives.",
      "A clear next action for the team, even when volume is high.",
      "Less copy-paste between tools. Intake, messages, and stages live in one place.",
    ],
    note: "Sensitive client details are redacted. Pipeline stage counts show system volume, not cash collected.",
  },
  {
    slug: "clinic-speed-to-lead",
    title: "Clinic speed-to-lead",
    niche: "Healthcare",
    client: "Multi-location clinic · GCC",
    result: "Meta lead → SMS in under 60 seconds → booked consult",
    summary:
      "Lead Ads into GoHighLevel, site chat that qualifies, and booking on the calendar before the front desk opens.",
    body: "Paid leads were landing overnight and sitting until morning. We connected Meta Lead Ads to instant SMS, a short qualify path, and the clinic calendar — with tracking that sends booked consults back to Meta.",
    tags: ["Meta Ads", "GoHighLevel", "AI Chat", "GTM"],
    featured: true,
  },
  {
    slug: "home-services-missed-call",
    title: "Home services missed-call loop",
    niche: "Local services",
    client: "Restoration group · US",
    result: "Missed-call text-back + job booking on the same record",
    summary:
      "Google Ads search traffic wired to call tracking, missed-call text-back, and a pipeline that matches how jobs close.",
    body: "Spend was fine. The leak was the hour after the ring. We rebuilt the path from click to conversation: tracking, CRM stages, reminders, and offline conversions so Google learns from booked jobs — not every form fill.",
    tags: ["Google Ads", "Call tracking", "Automations", "Offline conversions"],
    featured: true,
  },
  {
    slug: "coach-application-funnel",
    title: "Coach application funnel",
    niche: "Education / coaching",
    client: "High-ticket coaching brand · UK",
    result: "VSL → qualify bot → round-robin calendar",
    summary:
      "Funnel pages, nurture sequences, and a chatbot that books application calls — with shared events for Google and Meta.",
    body: "The brand had a VSL and a calendar, but no clean qualify step. We built the middle: questions, routing, reminders, and a voice path for after-hours callers who still deserved a human when hot.",
    tags: ["Funnels", "AI Chat", "Voice AI", "Nurture"],
    featured: false,
  },
  {
    slug: "tracking-truth-layer",
    title: "Tracking truth layer",
    niche: "Performance marketing",
    client: "Service business running Google + Meta",
    result: "One event dictionary · algorithms learn from bookings",
    summary:
      "GTM, enhanced conversions, and CAPI aligned so ad platforms stop optimising for vanity form fills.",
    body: "Primary conversions were cheap form submits. We renamed the events that matter, wired GTM and server events, and pushed qualified/booked outcomes back so spend follows appointments.",
    tags: ["GTM", "CAPI", "GA4", "Enhanced conversions"],
    featured: false,
  },
];

export const featuredWork = workProjects.filter((p) => p.featured).slice(0, 3);

export function getWorkProject(slug: string) {
  return workProjects.find((p) => p.slug === slug);
}
