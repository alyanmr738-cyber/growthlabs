import type { FaqItem } from "./faq";

export type Service = {
  slug: string;
  name: string;
  short: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  body: string;
  process: { title: string; body: string }[];
  deliverables: { title: string; items: string[] }[];
  guarantees: { title: string; body: string }[];
  faq: FaqItem[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "market-growth",
    name: "Market Growth",
    short: "The full setup: ads, tracking, CRM, and follow-up so enquiries become appointments.",
    navLabel: "Market Growth",
    title: "Market Growth System for Growing Businesses | Growth Labs",
    description:
      "A done-for-you market growth system: Google Ads, Meta Ads, Google Tag Manager, GoHighLevel, automations, and AI that books qualified appointments.",
    h1: "A growth system that books the lead — not a pile of disconnected tools",
    lede: "Most businesses buy ads, a CRM, and a chatbot from three vendors and hope they talk. We install one path: impression → tracked event → follow-up → booked call.",
    body: "Market Growth is the umbrella offer at Growth Labs. We design how Google and Meta spend, how Google Tag Manager and conversion APIs report the truth, how GoHighLevel stores and routes the contact, and how automations plus AI chat and voice close the loop. You get a calendar that fills for a reason — not a dashboard of vanity metrics.",
    process: [
      { title: "Demand & leak audit", body: "We map where buyers already look for you, what you pay per lead, and where those leads die after the click." },
      { title: "Offer & journey", body: "We lock the offer, the booking outcome, and the pages or lead forms that sit between ad and calendar." },
      { title: "Channel plan", body: "Google for intent, Meta for reach and retargeting — structured so GHL and GTM can attribute the same conversion." },
      { title: "Stack architecture", body: "Events, pipelines, tags, and bot handoffs on one diagram before a campaign goes live." },
      { title: "Build & connect", body: "Ads, GTM, CRM, automations, and AI installed in your accounts and tested as a single journey." },
      { title: "Launch cadence", body: "Weekly optimization on creative, bids, and follow-up — with reporting that starts at booked work, not clicks." },
    ],
    deliverables: [
      { title: "Growth architecture", items: ["Channel and offer map", "Conversion events defined once", "Pipeline stages that match how you sell"] },
      { title: "Paid + tracking", items: ["Google and Meta campaign structure", "GTM + CAPI / offline conversions", "Landing or lead-form path into GHL"] },
      { title: "Revenue follow-up", items: ["Speed-to-lead automations", "AI chat and/or voice booking", "Reporting on appointments, not just CPL"] },
    ],
    guarantees: [
      { title: "One owner", body: "Ads, tracking, and CRM are not tossed over a wall. One team is accountable for the path to a booking." },
      { title: "Your accounts", body: "Everything lives in properties you own. No lock-in to a black-box media account." },
      { title: "Tested live", body: "We do not hand over a theory. Forms, pixels, and bots are fired for real before launch." },
    ],
    faq: [
      { q: "Is Market Growth a retainer or a project?", a: "The install is a scoped project. Ongoing media, creative, and automation optimization sits on a monthly growth retainer if you want us to keep running the engine." },
      { q: "We already have an ads agency. Can you still help?", a: "Yes. We often keep existing media partners and install GTM, GHL, and AI so their leads actually get followed up and reported as real conversions." },
      { q: "Do we have to use GoHighLevel?", a: "It is the CRM we specialize in because ads, calendars, SMS, and AI live in one place. If you are on another stack, we will say on the strategy call whether a migration is worth it." },
    ],
    related: ["google-ads", "meta-ads", "gohighlevel", "gtm"],
  },
  {
    slug: "gohighlevel",
    name: "GoHighLevel",
    short: "Your CRM, pipeline, texts, and booking calendar — set up to match how you sell.",
    navLabel: "GoHighLevel",
    title: "GoHighLevel Setup & CRM for Growing Businesses | Growth Labs",
    description:
      "Certified-style GoHighLevel setup: pipelines, funnels, calendars, snapshots, and CRM architecture so leads book instead of sitting in a contact list.",
    h1: "A GoHighLevel system that books the lead, not just stores it",
    lede: "GoHighLevel is only useful when pipelines, calendars, funnels, and permissions match your sales process. We build that system in your sub-account — not a dumped snapshot that breaks at 500 contacts.",
    body: "Growth Labs configures GoHighLevel as the operating layer of your growth engine. Contacts from Google Ads, Meta Lead Ads, your website, and AI conversations land in the right pipeline, with the right tags, and trigger the right workflow. Funnels and websites stay connected to booking, payments, and reporting.",
    process: [
      { title: "Process mapping", body: "We document how a lead becomes a customer in your business — stages, owners, and what “qualified” means." },
      { title: "Account & sub-account", body: "Domains, phone, email, calendars, and user roles set up so the platform is safe to run." },
      { title: "Pipeline & fields", body: "Custom fields, tags, smart lists, and opportunity stages that match reality — not a generic template." },
      { title: "Funnels & sites", body: "Lead, booking, and offer pages inside GHL, wired to forms, calendars, and payments." },
      { title: "Integrations", body: "Meta Lead Ads, Google, Stripe, calendars, and the rest of your stack connected with clean data flow." },
      { title: "Handoff", body: "Loom walkthroughs, SOPs, and a 30-day window to tweak after go-live." },
    ],
    deliverables: [
      { title: "CRM core", items: ["Sales pipelines and stages", "Tags, custom fields, smart lists", "Dashboards your team will actually open"] },
      { title: "Capture & book", items: ["Forms, surveys, and funnels", "Round-robin or service calendars", "Confirmation and reminder defaults"] },
      { title: "Scale-ready", items: ["Snapshot of the approved build", "User permissions and pipelines", "Optional SaaS / white-label orientation"] },
    ],
    guarantees: [
      { title: "Built around your offer", body: "We do not drop a snapshot and leave. Architecture follows your customer journey." },
      { title: "Launch-tested", body: "Every form, calendar, and pipeline move is tested before you go live." },
      { title: "Documented", body: "Your team gets recordings and written steps, not tribal knowledge." },
    ],
    faq: [
      { q: "Can you migrate us from HubSpot, ActiveCampaign, or ClickFunnels?", a: "Yes. We map what transfers, what must be rebuilt, and cut over only after the new journey is tested." },
      { q: "Do you build websites inside GoHighLevel?", a: "Yes — conversion-focused GHL sites and funnels connected to CRM, automations, and calendars." },
      { q: "Will we be able to edit later?", a: "Yes. You keep full access. We structure pages and pipelines so your team can change copy without breaking workflows." },
    ],
    related: ["automations", "ai-chatbot", "ai-voicebot", "gtm"],
  },
  {
    slug: "automations",
    name: "Automations",
    short: "Instant texts, missed-call replies, and reminders that run without you chasing them.",
    navLabel: "Automations",
    title: "GoHighLevel Automations & Workflows | Growth Labs",
    description:
      "GoHighLevel workflow automation: speed-to-lead, missed-call text-back, appointment reminders, no-show recovery, and nurture sequences.",
    h1: "Follow-up that fires in seconds — not when someone checks the inbox",
    lede: "If a lead waits for office hours, you already paid twice: once for the click, again in lost trust. We build the workflows that respond, remind, recover, and re-engage.",
    body: "Automations at Growth Labs live inside GoHighLevel and connect to the events GTM and your ads platforms already send. Missed calls get a text. Form fills get an SMS and an email. No-shows get a recovery sequence. Reviews and reactivations stop being a manual Friday task.",
    process: [
      { title: "Journey inventory", body: "We list every entrance: ads, forms, calls, chat, voice, and staff-created contacts." },
      { title: "Trigger design", body: "Each entrance gets a primary workflow, a wait logic, and a human-escalation rule." },
      { title: "Copy & compliance", body: "SMS and email language, opt-out, and A2P-aware sending so messages actually deliver." },
      { title: "Build in GHL", body: "Workflows, if/else branches, wait steps, internal notifications, and tasks." },
      { title: "QA", body: "We submit real test leads and walk the path on mobile and desktop." },
      { title: "Tune", body: "After launch we watch drop-off and tighten timing, not add random extra emails." },
    ],
    deliverables: [
      { title: "Speed-to-lead", items: ["Instant SMS / email on form or Lead Ad", "Missed-call text-back", "Owner or round-robin alerts"] },
      { title: "Calendar hygiene", items: ["Reminders that cut no-shows", "Reschedule links", "No-show recovery sequence"] },
      { title: "Lifecycle", items: ["Nurture drips by tag", "Re-engagement for cold leads", "Review request after a win"] },
    ],
    guarantees: [
      { title: "Fewer black holes", body: "Every paid lead has a defined first response. Nothing sits unlabeled in Contacts." },
      { title: "Human override", body: "Hot leads and angry replies can jump to a person. Bots do not trap customers." },
      { title: "Visible in the pipeline", body: "Workflows move opportunities. You can see status without opening 12 tabs." },
    ],
    faq: [
      { q: "Can you fix a messy existing workflow account?", a: "Yes. We audit, turn off collisions, and rebuild the journeys that matter instead of stacking more zaps." },
      { q: "Do you handle A2P 10DLC?", a: "We can prepare brand and campaign registration so US SMS is not throttled. Carrier approval timing is outside anyone’s control." },
      { q: "Will this work with Meta and Google leads?", a: "That is the point. Lead Ads and form fills should hit the same speed-to-lead path, with source tags intact." },
    ],
    related: ["gohighlevel", "ai-chatbot", "google-ads", "meta-ads"],
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot",
    short: "Website chat that answers questions, checks they are a fit, and offers a time — day or night.",
    navLabel: "AI Chatbot",
    title: "AI Chatbot & Conversation AI for GoHighLevel | Growth Labs",
    description:
      "Custom AI chatbots for websites, SMS, and GoHighLevel Conversation AI: qualify leads, capture details, and book appointments around the clock.",
    h1: "A chatbot trained on your business — not a generic widget that dumps emails",
    lede: "We build Conversation AI and site chat that knows your offer, your FAQs, and when to stop talking and put a human or a calendar in front of the buyer.",
    body: "AI chat at Growth Labs sits on your website, in GoHighLevel conversations, and on channels you already use. The bot qualifies against your script, writes the contact into the right pipeline, and can book. Handoff rules keep edge cases with your team.",
    process: [
      { title: "Knowledge & guardrails", body: "We collect FAQs, offers, disqualifiers, and the tone you will stand behind." },
      { title: "Script & intents", body: "Qualification questions, objection handling, and booking vs. capture vs. escalate paths." },
      { title: "Channel setup", body: "Website widget, GHL Conversation AI, SMS, and supported messengers as needed." },
      { title: "CRM wiring", body: "Tags, fields, and workflows fire from the conversation — not a dead chat transcript." },
      { title: "Role-play QA", body: "We attack the bot with messy questions until it stays on-brief." },
      { title: "Live tune", body: "After launch we review transcripts and tighten answers that leak or over-promise." },
    ],
    deliverables: [
      { title: "The bot", items: ["Trained on your offer and FAQs", "Qualification + booking flow", "After-hours coverage"] },
      { title: "Handoff", items: ["Human takeover rules", "Hot-lead alerts", "Transcripts in the contact record"] },
      { title: "Placement", items: ["Site / funnel widget", "GHL conversation channels", "Optional SMS conversation AI"] },
    ],
    guarantees: [
      { title: "On-brand answers", body: "The bot is not allowed to invent pricing or medical/legal claims you did not approve." },
      { title: "CRM-native", body: "Every useful chat becomes a contact with source and next step." },
      { title: "You can turn it down", body: "Hours, pages, and aggressiveness are configurable after launch." },
    ],
    faq: [
      { q: "Is this GoHighLevel Conversation AI or a third-party bot?", a: "We prefer GHL Conversation AI so chat, SMS, and CRM stay in one inbox. We will use another bot only if a channel requires it." },
      { q: "Will it book on my calendar?", a: "Yes, when availability and services are mapped. Complex multi-staff routing is part of the build." },
      { q: "What if someone asks something the bot should not answer?", a: "We set refuse-and-escalate rules for regulated topics and anything outside the knowledge base." },
    ],
    related: ["ai-voicebot", "gohighlevel", "automations", "market-growth"],
  },
  {
    slug: "ai-voicebot",
    name: "AI VoiceBot",
    short: "A phone line that answers when you cannot, asks a few questions, and books the call.",
    navLabel: "AI VoiceBot",
    title: "AI Voice Agent Setup for GoHighLevel | Growth Labs",
    description:
      "AI voice agents that answer inbound calls, qualify leads, book appointments, and escalate to your team — logged in GoHighLevel 24/7.",
    h1: "Every call answered — even when the front desk is closed",
    lede: "An AI VoiceBot is not a voicemail. It is a calendar-aware agent that runs your script, books when it should, and transfers when a human must take the call.",
    body: "We deploy voice AI against your telephony and GoHighLevel calendar. Inbound after-hours, overflow, and outbound follow-up can all sit on the same contact record. Notes, recordings, and outcomes land in the CRM so ads and automations can react.",
    process: [
      { title: "Call jobs", body: "Inbound answer, overflow, outbound chase, or a mix — we pick the job that pays back first." },
      { title: "Script & voice", body: "Qualification, objection handling, pronunciation of your brand, and transfer phrases." },
      { title: "Telephony + CRM", body: "Numbers, GHL Voice AI or connected providers, calendars, and logging." },
      { title: "Live transfer", body: "Rules for when the bot must not keep talking — VIP, angry, or high-ticket." },
      { title: "Role-play", body: "We call the agent with accents, interruptions, and bad connections." },
      { title: "Launch", body: "Hours, routing, and reporting go live with a rollback path to voicemail if needed." },
    ],
    deliverables: [
      { title: "The agent", items: ["24/7 or overflow answering", "Qualification script", "Calendar-aware booking"] },
      { title: "Control", items: ["Live transfer to staff", "After-hours vs. business-hours logic", "CRM notes on every call"] },
      { title: "Ops", items: ["Test numbers before cutover", "Recording / transcript access", "Tuning window after launch"] },
    ],
    guarantees: [
      { title: "Not a black hole", body: "Every call writes to GoHighLevel. You can audit what the bot said." },
      { title: "Human when it matters", body: "Escalation is a first-class path, not an afterthought." },
      { title: "Tied to ads", body: "Call outcomes can feed the same conversion story GTM already sends to Google and Meta." },
    ],
    faq: [
      { q: "Does this replace my receptionist?", a: "It covers overflow and nights first. Many clients keep humans for walk-ins and complex cases." },
      { q: "Will it sound robotic?", a: "Quality depends on script, voice, and latency. We iterate on recordings until it is acceptable for your brand." },
      { q: "Can it do outbound?", a: "Yes, for consented follow-up and reminders. Cold blasting is not something we install." },
    ],
    related: ["ai-chatbot", "gohighlevel", "automations", "google-ads"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Google ads for people searching now — sent into your CRM, not a spreadsheet.",
    navLabel: "Google Ads",
    title: "Google Ads Lead Generation for Growing Businesses | Growth Labs",
    description:
      "Google Ads management for service businesses: Search, Performance Max, conversion tracking, and leads that enter GoHighLevel with speed-to-lead.",
    h1: "Google Ads that optimize for booked jobs, not form spam",
    lede: "Intent is already on Google. The failure is usually tracking and follow-up. We build campaigns that feed GoHighLevel and send qualified conversions back to Smart Bidding.",
    body: "Growth Labs structures Search and Performance Max around how your buyers search, then connects every conversion through Google Tag Manager, enhanced conversions, and offline import from the CRM. You stop teaching the algorithm that a junk lead is a win.",
    process: [
      { title: "Account & offer", body: "We review history, search terms, and which services actually deserve budget." },
      { title: "Conversion design", body: "Primary conversions = qualified or booked events from GHL, not every form submit." },
      { title: "Campaign build", body: "Search, PMax, or both — with negatives, assets, and location/language that match you." },
      { title: "Landing path", body: "GHL funnels or your site, with call and form tracking that GTM can see." },
      { title: "CRM loop", body: "Leads tag by campaign. Offline conversions close the loop when a job books or a call qualifies." },
      { title: "Optimize", body: "Query mining, creative, and budget against cost per qualified booking." },
    ],
    deliverables: [
      { title: "Campaigns", items: ["Search and/or Performance Max", "Negatives and brand protection", "Ad copy aligned to the offer"] },
      { title: "Measurement", items: ["GTM tags and conversions", "Enhanced conversions where eligible", "Offline / CRM import path"] },
      { title: "Ops", items: ["Lead routing into GHL", "Call tracking options", "A reporting view your owner can read"] },
    ],
    guarantees: [
      { title: "No vanity primary conversion", body: "We will not let “page view” or raw form fill be the only signal if you book appointments." },
      { title: "You own the account", body: "MCC access, not a hidden spend bucket." },
      { title: "Follow-up included in the design", body: "Ads without speed-to-lead is incomplete. Automations are part of the same plan." },
    ],
    faq: [
      { q: "Do you work with existing Google Ads accounts?", a: "Yes. We audit, pause waste, and rebuild structure without throwing away useful history when we can keep it." },
      { q: "What spend do you need?", a: "Enough to learn. We will be honest on the strategy call if budget cannot support the geography and offer." },
      { q: "Do you also run Meta?", a: "Yes — and we keep events consistent across both via GTM and GHL so you are not comparing two different definitions of a lead." },
    ],
    related: ["gtm", "gohighlevel", "meta-ads", "market-growth"],
  },
  {
    slug: "gtm",
    name: "Google Tag Manager",
    short: "We track booked appointments, so you stop paying for clicks that never speak to you.",
    navLabel: "GTM",
    title: "Google Tag Manager & Conversion Tracking | Growth Labs",
    description:
      "Google Tag Manager, GA4, Meta CAPI, and GoHighLevel offline conversions so Google Ads and Meta optimize for qualified bookings.",
    h1: "Tracking that tells Google and Meta the truth",
    lede: "If the pixel fires on every pageview and the CRM never sends a booked call, your ads get dumber every week. We install GTM as the measurement layer of the growth engine.",
    body: "Google Tag Manager is the unsexy page most GHL shops skip. Growth Labs treats it as infrastructure: a clean data layer, GA4 events, Google Ads conversions, Meta Pixel plus Conversion API, and server-side or offline events from GoHighLevel when a lead is actually qualified or booked.",
    process: [
      { title: "Event dictionary", body: "We name generate_lead, book, qualify, purchase — once — for every platform." },
      { title: "Container audit", body: "Duplicate pixels, broken triggers, and consent gaps get cleaned before we add more tags." },
      { title: "Web GTM", body: "Triggers on forms, calendars, calls, and thank-you states inside GHL or your site." },
      { title: "CAPI & enhanced", body: "Meta CAPI and Google enhanced conversions so browser signal loss hurts less." },
      { title: "CRM offline", body: "Pipeline stages or calendar bookings push back as conversions the bid strategies can use." },
      { title: "QA in debug", body: "Preview mode, Tag Assistant, and test conversions in each ads account before launch." },
    ],
    deliverables: [
      { title: "Container", items: ["Documented GTM workspace", "GA4 configuration", "Google Ads conversion tags"] },
      { title: "Paid social signal", items: ["Meta Pixel + CAPI", "Event match quality checklist", "Deduped browser/server events"] },
      { title: "CRM truth", items: ["GHL → ads conversion path", "Naming that matches pipelines", "A one-page measurement spec"] },
    ],
    guarantees: [
      { title: "One definition of a conversion", body: "Sales, media, and the CRM stop arguing about whose number is real." },
      { title: "Debug before spend", body: "We do not turn on budget against untested tags." },
      { title: "You can inherit it", body: "The container is yours, named, and documented." },
    ],
    faq: [
      { q: "Do you do server-side GTM?", a: "When volume and privacy setup justify it. Many service businesses start with solid web GTM plus CAPI and offline imports." },
      { q: "We use a landing page builder. Can you still tag it?", a: "Yes. GHL funnels, WordPress, and most builders can emit the events we need — sometimes with a small data-layer helper." },
      { q: "Is GTM required if we only run Meta?", a: "You still want a single event dictionary. GTM keeps Pixel, CAPI, and future Google demand from drifting apart." },
    ],
    related: ["google-ads", "meta-ads", "gohighlevel", "market-growth"],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    short: "Facebook and Instagram leads drop into a pipeline with a text waiting — not a notification pile.",
    navLabel: "Meta Ads",
    title: "Meta Ads & Lead Ads into GoHighLevel | Growth Labs",
    description:
      "Meta Ads for service businesses: Lead Ads, Advantage+, creative testing, and instant sync into GoHighLevel with CAPI and speed-to-lead.",
    h1: "Meta leads that get a reply before they scroll away",
    lede: "Instagram and Facebook can fill a form in ten seconds. If your CRM waits until morning, you trained the lead to ignore you. We connect Lead Ads to instant follow-up and honest conversion events.",
    body: "Growth Labs builds Meta campaign structure, creative tests, and Lead Forms that map into GoHighLevel fields. Instant SMS or Conversation AI fires. Meta CAPI — installed through GTM — tells Advantage+ which leads became bookings, not which names were cheapest.",
    process: [
      { title: "Offer & audience", body: "Who you serve, what they tap, and which creative formats (UGC, static, lead form) fit." },
      { title: "Lead form design", body: "Questions that qualify without killing volume. Fields match GHL custom fields." },
      { title: "Account build", body: "Campaigns, Advantage+ where it earns its keep, and exclusions that protect your brand." },
      { title: "GHL + CAPI", body: "Native Lead Ads sync, tags, and server events so optimization is not guesswork." },
      { title: "Speed-to-lead", body: "The same automation path as your website leads — under a minute." },
      { title: "Creative cadence", body: "A testing backlog so the account is not stuck on one ad for a quarter." },
    ],
    deliverables: [
      { title: "Campaigns", items: ["Lead gen and/or traffic-to-funnel", "Advantage+ where appropriate", "Audience and placement plan"] },
      { title: "Creative system", items: ["Hooks and offers to test", "Lead form copy", "A simple iteration calendar"] },
      { title: "CRM connection", items: ["Lead Ads → GHL", "Instant SMS / bot", "CAPI qualified events"] },
    ],
    guarantees: [
      { title: "No orphaned Lead Ads", body: "If Meta captures it, GHL owns it within the workflow window we design." },
      { title: "Signal quality", body: "We push quality events, not every cheap form as a purchase." },
      { title: "You keep the page and pixel", body: "Business Manager access stays with you." },
    ],
    faq: [
      { q: "Lead Ads or landing pages?", a: "Lead Ads win on speed and volume. Landing pages win on story. We often run both and let cost per qualified booking decide." },
      { q: "Do you make the creative?", a: "We spec hooks and can produce simple statics and briefs. Heavy video production can be scoped as an add-on." },
      { q: "Can this sit next to Google Ads?", a: "Yes. Shared GTM events and a shared GHL pipeline are how we keep the two from competing on fake numbers." },
    ],
    related: ["gtm", "gohighlevel", "google-ads", "automations"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelated(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
