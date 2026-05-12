export interface LeadAttribution {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  lead_source: string;
  lead_intent: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
  source_page: string;
}

const STORAGE_KEY = "afm_attribution";

const emptyAttribution = (): LeadAttribution => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  lead_source: "",
  lead_intent: "",
  gclid: "",
  fbclid: "",
  referrer: "",
  landing_page: "",
  source_page: "",
});

export function getStoredLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return emptyAttribution();

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return emptyAttribution();

  try {
    return { ...emptyAttribution(), ...JSON.parse(stored) };
  } catch {
    return emptyAttribution();
  }
}

export function captureLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return emptyAttribution();

  const current = getStoredLeadAttribution();
  const urlParams = new URLSearchParams(window.location.search);

  const gclid = urlParams.get("gclid") || current.gclid;
  const fbclid = urlParams.get("fbclid") || current.fbclid;

  let referrer = current.referrer;
  if (!referrer && document.referrer) {
    try {
      const refUrl = new URL(document.referrer);
      if (!refUrl.hostname.includes("airfreshmarketing.com")) {
        referrer = document.referrer;
      }
    } catch {
      referrer = document.referrer;
    }
  }

  let utm_source = urlParams.get("utm_source") || current.utm_source;
  const utm_medium = urlParams.get("utm_medium") || current.utm_medium || (gclid ? "cpc" : "");
  const utm_campaign = urlParams.get("utm_campaign") || current.utm_campaign;
  const utm_content = urlParams.get("utm_content") || current.utm_content;
  const utm_term = urlParams.get("utm_term") || current.utm_term;
  const lead_source = urlParams.get("source") || current.lead_source;
  const lead_intent = urlParams.get("intent") || current.lead_intent;

  if (!utm_source && gclid) {
    utm_source = "google";
  } else if (!utm_source && fbclid) {
    utm_source = "facebook";
  } else if (!utm_source && referrer) {
    if (referrer.includes("google.")) utm_source = "google_organic";
    else if (referrer.includes("bing.")) utm_source = "bing_organic";
    else if (referrer.includes("linkedin.")) utm_source = "linkedin";
    else if (referrer.includes("facebook.")) utm_source = "facebook_organic";
    else if (referrer.includes("instagram.")) utm_source = "instagram";
    else utm_source = "referral";
  } else if (!utm_source) {
    utm_source = "direct";
  }

  const currentPage = `${window.location.pathname}${window.location.search}`;
  const nextAttribution: LeadAttribution = {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    lead_source,
    lead_intent,
    gclid,
    fbclid,
    referrer,
    landing_page: current.landing_page || currentPage,
    source_page: currentPage,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAttribution));
  return nextAttribution;
}
