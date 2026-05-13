'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  DollarSign,
  MapPin,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ServiceKey =
  | "brand-activation"
  | "product-sampling"
  | "trade-show"
  | "street-team"
  | "pop-up"
  | "hospitality";

const services: Array<{
  key: ServiceKey;
  label: string;
  description: string;
  role: string;
}> = [
  {
    key: "brand-activation",
    label: "Brand Activation",
    description: "Launches, sponsorships, and immersive consumer moments.",
    role: "brand ambassadors and a trained activation lead",
  },
  {
    key: "product-sampling",
    label: "Product Sampling",
    description: "Trial-driving programs for food, beverage, CPG, and retail.",
    role: "sampling specialists with product education",
  },
  {
    key: "trade-show",
    label: "Trade Show",
    description: "Booth traffic, lead capture, demos, and attendee support.",
    role: "trade show staff and lead capture specialists",
  },
  {
    key: "street-team",
    label: "Street Team",
    description: "High-energy teams for foot traffic and local buzz.",
    role: "street team ambassadors and route captains",
  },
  {
    key: "pop-up",
    label: "Pop-Up / Tour",
    description: "Retail pop-ups, mobile tours, and multi-market campaigns.",
    role: "tour-ready field staff with logistics support",
  },
  {
    key: "hospitality",
    label: "Event Support",
    description: "Registration, VIP hosting, crowd flow, and guest experience.",
    role: "hospitality staff and on-site coordinators",
  },
];

const goals = {
  awareness: "brand awareness",
  leads: "qualified lead capture",
  trial: "product trial",
  sales: "retail or booth conversion",
  content: "social content and recap assets",
};

const budgets = {
  "under-10k": "Under $10k",
  "10k-25k": "$10k - $25k",
  "25k-50k": "$25k - $50k",
  "50k-100k": "$50k - $100k",
  "100k-plus": "$100k+",
};

const timingOptions = {
  rush: "0-2 weeks",
  soon: "2-4 weeks",
  planned: "4-8 weeks",
  strategic: "8+ weeks",
};

const footprints = {
  "single-market": "Single market",
  "multi-day": "Multi-day event",
  "multi-market": "Multi-market rollout",
};

export default function ActivationPlanner() {
  const [service, setService] = useState<ServiceKey>("brand-activation");
  const [market, setMarket] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [teamSize, setTeamSize] = useState("8");
  const [goal, setGoal] = useState<keyof typeof goals>("leads");
  const [budget, setBudget] = useState<keyof typeof budgets>("25k-50k");
  const [timing, setTiming] = useState<keyof typeof timingOptions>("planned");
  const [footprint, setFootprint] = useState<keyof typeof footprints>("single-market");

  const plan = useMemo(() => {
    const selectedService = services.find((item) => item.key === service) ?? services[0];
    const count = Math.max(2, Number.parseInt(teamSize, 10) || 2);
    const needsManager = count >= 8 || footprint !== "single-market";
    const needsOpsLead = count >= 16 || footprint === "multi-market";
    const marketLabel = market.trim() || "your target market";
    const dateLabel = eventDate || "your target date";

    const timeline =
      timing === "rush"
        ? "Start with a 48-hour feasibility check, local availability review, and fastest viable deployment path."
        : timing === "soon"
          ? "Lock scope this week, finalize staff profiles, and begin brand training within 5 business days."
          : timing === "planned"
            ? "Use a 4-8 week runway for staffing, training, materials, logistics, and reporting setup."
            : "Build a stronger campaign plan with market recommendations, creative add-ons, and measurement before launch.";

    const fieldTeam = needsManager
      ? `${count} field team members plus ${needsOpsLead ? "an operations lead and local field managers" : "a dedicated field manager"}`
      : `${count} trained field team members with remote account support`;

    const deliverables = [
      `${selectedService.role} in ${marketLabel}`,
      "Custom brand briefing and readiness check before launch",
      "GPS-verified attendance and live issue escalation",
      `${goals[goal]} plan with recap metrics after the event`,
    ];

    if (footprint !== "single-market") {
      deliverables.push("Market-by-market staffing calendar and shift coverage map");
    }

    if (budget === "50k-100k" || budget === "100k-plus") {
      deliverables.push("Expanded reporting, photo documentation, and post-campaign recommendations");
    }

    const proposalBrief = [
      "Activation planner request",
      `Service: ${selectedService.label}`,
      `Market: ${marketLabel}`,
      `Date: ${dateLabel}`,
      `Footprint: ${footprints[footprint]}`,
      `Estimated onsite team: ${count}`,
      `Primary goal: ${goals[goal]}`,
      `Budget range: ${budgets[budget]}`,
      `Timing: ${timingOptions[timing]}`,
      "",
      `Recommended plan: ${fieldTeam}. ${timeline}`,
    ].join("\n");

    const params = new URLSearchParams({
      source: "activation-planner",
      intent: "proposal-builder",
      service: selectedService.label,
      market: marketLabel,
      date: dateLabel,
      team: String(count),
      budget: budgets[budget],
      goal: goals[goal],
      message: proposalBrief,
    });

    return {
      selectedService,
      fieldTeam,
      timeline,
      deliverables,
      proposalHref: `/get-quote?${params.toString()}`,
    };
  }, [budget, eventDate, footprint, goal, market, service, teamSize, timing]);

  return (
    <section id="activation-planner" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              <ClipboardCheck className="h-4 w-4" />
              Proposal Builder
            </div>
            <h2 className="text-3xl font-bold text-gray-950 md:text-5xl">
              Plan the campaign before the sales call.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Give AirFresh the buying details that matter, then request a proposal with a useful activation brief already attached.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="min-w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3">
              <div className="text-xl font-bold text-gray-950">24h</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Response</div>
            </div>
            <div className="min-w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3">
              <div className="text-xl font-bold text-gray-950">50+</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Markets</div>
            </div>
            <div className="min-w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3">
              <div className="text-xl font-bold text-gray-950">1</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Partner</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-cyan-600" />
              <h3 className="text-xl font-bold text-gray-950">Campaign Inputs</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="mb-3 block text-sm font-semibold text-gray-900">What are you buying?</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((item) => {
                    const isActive = item.key === service;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setService(item.key)}
                        className={`min-h-28 rounded-lg border p-4 text-left transition-all ${
                          isActive
                            ? "border-cyan-500 bg-cyan-50 shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <span className="block text-base font-bold text-gray-950">{item.label}</span>
                        <span className="mt-2 block text-sm leading-5 text-gray-600">{item.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="planner-market" className="mb-2 block text-sm font-semibold text-gray-900">
                    Market or city
                  </Label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="planner-market"
                      value={market}
                      onChange={(event) => setMarket(event.target.value)}
                      className="h-11 pl-9"
                      placeholder="New York, Denver, multi-city..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="planner-date" className="mb-2 block text-sm font-semibold text-gray-900">
                    Event date
                  </Label>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="planner-date"
                      type="date"
                      value={eventDate}
                      onChange={(event) => setEventDate(event.target.value)}
                      className="h-11 pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="planner-team" className="mb-2 block text-sm font-semibold text-gray-900">
                    Onsite team size
                  </Label>
                  <div className="relative">
                    <UsersRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="planner-team"
                      type="number"
                      min="2"
                      max="250"
                      value={teamSize}
                      onChange={(event) => setTeamSize(event.target.value)}
                      className="h-11 pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-gray-900">Budget range</Label>
                  <Select value={budget} onValueChange={(value) => setBudget(value as keyof typeof budgets)}>
                    <SelectTrigger className="h-11">
                      <DollarSign className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(budgets).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-gray-900">Primary goal</Label>
                  <Select value={goal} onValueChange={(value) => setGoal(value as keyof typeof goals)}>
                    <SelectTrigger className="h-11">
                      <Target className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(goals).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-gray-900">Timing</Label>
                  <Select value={timing} onValueChange={(value) => setTiming(value as keyof typeof timingOptions)}>
                    <SelectTrigger className="h-11">
                      <RadioTower className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(timingOptions).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="mb-3 block text-sm font-semibold text-gray-900">Campaign footprint</Label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {Object.entries(footprints).map(([key, label]) => {
                    const isActive = key === footprint;
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setFootprint(key as keyof typeof footprints)}
                        className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-semibold transition-all ${
                          isActive
                            ? "border-gray-950 bg-gray-950 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-900 bg-gray-950 p-5 text-white shadow-xl md:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Recommended Direction</div>
                <h3 className="mt-2 text-2xl font-bold">{plan.selectedService.label}</h3>
              </div>
              <ShieldCheck className="h-9 w-9 text-emerald-300" />
            </div>

            <div className="space-y-5">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-400">Field Team</div>
                <p className="mt-2 text-lg font-semibold leading-relaxed">{plan.fieldTeam}</p>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-400">Execution Plan</div>
                <p className="mt-2 leading-relaxed text-gray-200">{plan.timeline}</p>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-400">Proposal Should Include</div>
                <ul className="mt-3 space-y-3">
                  {plan.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-200">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <Button asChild size="lg" className="w-full bg-cyan-400 text-gray-950 hover:bg-cyan-300">
                  <Link href={plan.proposalHref}>
                    Request This Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-sm text-gray-400">
                  Sends your planner summary into the quote form so the first reply can be specific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
