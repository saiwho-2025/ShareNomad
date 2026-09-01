"use client";

import { useMemo, useState } from "react";
import { demoBenefits, demoHoldings, eligibleBenefits } from "../../lib/portfolio";
import { demoLisbon14, TimeHorizon } from "../../lib/life-plan";

const horizons: TimeHorizon[] = ["2-3 Days", "7 Days", "14 Days", "30 Days"];
const interests = ["Work", "Portuguese", "Surf", "Yoga", "Coding", "Food", "Culture", "Diving"];
const destinations = ["Lisbon", "Tokyo", "Bali", "Bangkok"];

export default function DemoPage() {
  const [destination, setDestination] = useState("Lisbon");
  const [horizon, setHorizon] = useState<TimeHorizon>("14 Days");
  const [budget, setBudget] = useState("3500");
  const [selected, setSelected] = useState(["Work", "Portuguese", "Surf", "Yoga", "Food"]);
  const [ticker, setTicker] = useState("");
  const [shares, setShares] = useState("");
  const [holdings, setHoldings] = useState(demoHoldings);
  const [generated, setGenerated] = useState(false);
  const [booked, setBooked] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const eligible = useMemo(() => eligibleBenefits(holdings, demoBenefits), [holdings]);
  const plan = useMemo(() => {
    const multiplier = horizon === "2-3 Days" ? 0.25 : horizon === "7 Days" ? 0.5 : horizon === "14 Days" ? 1 : 1.85;
    const destinationFactor = destination === "Lisbon" ? 1 : destination === "Tokyo" ? 1.08 : destination === "Bali" ? 0.82 : 0.78;
    const support = Math.round(eligible.reduce((sum, b) => sum + b.saving, 0) * multiplier * destinationFactor);
    const cost = Math.max(0, Math.round(Number(budget || 0) * (horizon === "14 Days" ? 0.986 : multiplier)));
    const score = Math.min(99, Math.round((92 + (selected.includes("Surf") ? 1 : 0) + (selected.includes("Coding") ? 1 : 0)) * destinationFactor));
    const activities = demoLisbon14.activities.slice(0, horizon === "2-3 Days" ? 6 : horizon === "7 Days" ? 10 : horizon === "14 Days" ? 16 : 16);
    return { support, cost, score, ratio: cost ? Math.round((support / cost) * 100) : 0, activities };
  }, [destination, horizon, budget, selected, eligible]);

  function addHolding() {
    const normalized = ticker.trim().toUpperCase();
    const count = Number(shares);
    if (!normalized || !Number.isFinite(count) || count <= 0) return;
    setHoldings(current => {
      const existing = current.find(h => h.ticker === normalized);
      if (existing) return current.map(h => h.ticker === normalized ? { ...h, shares: h.shares + count } : h);
      return [...current, { ticker: normalized, name: normalized, shares: count }];
    });
    setTicker(""); setShares("");
  }
  function toggleInterest(item: string) { setSelected(current => current.includes(item) ? current.filter(x => x !== item) : [...current, item]); }
  function book(title: string) { setBooked(current => current.includes(title) ? current : [...current, title]); }

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#151515]"><div className="mx-auto max-w-6xl px-6 py-8">
      <a href="/" className="text-sm text-[#777]">← ShareNomad</a>
      <header className="mt-10 max-w-3xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-[#777]">Interactive Life Planner</p><h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">Tell me how you want to live.</h1><p className="mt-5 text-lg leading-8 text-[#666]">Build a trip around your assets, time, budget and the skills you want to take home.</p></header>

      <section className="mt-10 rounded-[28px] bg-[#171717] p-6 text-white md:p-8"><div className="grid gap-8 md:grid-cols-2">
        <Field label="1 · Destination"><div className="flex flex-wrap gap-2">{destinations.map(x => <button key={x} onClick={() => setDestination(x)} className={`rounded-full px-4 py-2 text-sm ${destination === x ? "bg-white text-black" : "bg-white/10"}`}>{x}</button>)}</div></Field>
        <Field label="2 · Time horizon"><div className="flex flex-wrap gap-2">{horizons.map(x => <button key={x} onClick={() => setHorizon(x)} className={`rounded-full px-4 py-2 text-sm ${horizon === x ? "bg-white text-black" : "bg-white/10"}`}>{x}</button>)}</div></Field>
        <Field label="3 · Budget"><div className="flex items-center gap-3"><span className="text-2xl">€</span><input value={budget} onChange={e => setBudget(e.target.value)} inputMode="numeric" className="min-h-12 flex-1 rounded-xl bg-white px-4 text-black outline-none" /></div></Field>
        <Field label="4 · Goals & interests"><div className="flex flex-wrap gap-2">{interests.map(x => <button key={x} onClick={() => toggleInterest(x)} className={`rounded-full px-4 py-2 text-sm ${selected.includes(x) ? "bg-white text-black" : "bg-white/10"}`}>{x}</button>)}</div></Field>
      </div><button onClick={() => setGenerated(true)} className="mt-8 min-h-14 w-full rounded-2xl bg-white font-semibold text-black">{generated ? "Regenerate My Life Plan →" : "Generate My Life Plan →"}</button></section>

      <section className="mt-6 rounded-[28px] border border-[#e2e2de] bg-white p-6 md:p-8"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-sm text-[#888]">Your assets</p><h2 className="text-3xl font-semibold">Add your holdings</h2><p className="mt-2 text-sm text-[#777]">These holdings are used to calculate demo benefit eligibility.</p></div><div className="flex w-full gap-2 md:max-w-xl"><input value={ticker} onChange={e => setTicker(e.target.value)} placeholder="Ticker e.g. SONY" className="min-h-12 min-w-0 flex-1 rounded-xl border border-[#ddd] px-4 outline-none" /><input value={shares} onChange={e => setShares(e.target.value)} placeholder="Shares" inputMode="decimal" className="min-h-12 w-28 rounded-xl border border-[#ddd] px-4 outline-none" /><button onClick={addHolding} className="rounded-xl bg-[#171717] px-5 text-sm font-medium text-white">Add</button></div></div><div className="mt-5 flex flex-wrap gap-2">{holdings.map(h => <span key={h.ticker} className="rounded-full bg-[#f1f1ed] px-4 py-2 text-sm">{h.ticker} · {h.shares}</span>)}</div></section>

      {generated && <><section className="mt-6 grid gap-4 md:grid-cols-5"><Metric label="Destination" value={destination} sub="Personalized" /><Metric label="Score" value={`${plan.score}`} sub="/ 100" /><Metric label="Life Value" value="89" sub="/ 100" /><Metric label="Asset Support" value={`€${plan.support}`} sub={`${plan.ratio}% of cost`} /><Metric label="Season" value="95" sub="October" /></section>
      <section className="mt-12"><div className="flex items-end justify-between"><div><p className="text-sm text-[#888]">Personal secretary</p><h2 className="text-3xl font-semibold">Your life plan</h2></div><span className="text-sm text-[#888]">{horizon}</span></div><div className="mt-6 space-y-4">{Object.entries(plan.activities.reduce<Record<number, typeof plan.activities>>((acc, a) => { (acc[a.day] ||= []).push(a); return acc; }, {})).map(([day, activities]) => <div key={day} className="rounded-3xl border border-[#e2e2de] bg-white p-5"><div className="flex items-center justify-between"><h3 className="font-semibold">Day {day}</h3><span className="text-sm text-[#888]">{activities[0]?.date}</span></div><div className="mt-4 space-y-2">{activities.map(a => <div key={`${a.day}-${a.time}-${a.title}`} className="grid gap-3 rounded-2xl bg-[#f7f7f4] p-4 md:grid-cols-[130px_1fr_auto_auto]"><span className="text-sm font-medium">{a.time}</span><button onClick={() => setShowDetails(a.title)} className="text-left"><p className="font-medium">{a.title}</p><p className="mt-1 text-xs text-[#888]">{a.category} · {a.duration}</p></button><span className="text-sm">€{a.cost}</span>{a.bookingStatus === "Book" ? <button onClick={() => book(a.title)} className={`rounded-full px-3 py-2 text-xs font-medium ${booked.includes(a.title) ? "bg-[#171717] text-white" : "border border-[#ccc] bg-white"}`}>{booked.includes(a.title) ? "Added ✓" : "Book"}</button> : <span className="text-xs text-[#999]">Planned</span>}</div>)}</div></div>)}</div></section>
      {showDetails && <div className="fixed inset-0 z-10 flex items-end justify-center bg-black/30 p-4 md:items-center" onClick={() => setShowDetails(null)}><div onClick={e => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><p className="text-sm text-[#888]">Activity detail</p><h3 className="mt-2 text-2xl font-semibold">{showDetails}</h3><p className="mt-3 text-sm leading-6 text-[#666]">Live availability, provider verification, location and cancellation terms will appear here once real booking providers are connected.</p><button onClick={() => { book(showDetails); setShowDetails(null); }} className="mt-6 min-h-12 w-full rounded-2xl bg-[#171717] font-medium text-white">{booked.includes(showDetails) ? "Added to my trip ✓" : "Add to my trip"}</button></div></div>}</>}
      <p className="mt-8 text-xs leading-5 text-[#999]">Prototype only. Benefits, prices, schedules and scores are illustrative and must be source-verified before production use.</p>
    </div></main>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div><p className="mb-3 text-sm font-medium text-[#ddd]">{label}</p>{children}</div>; }
function Metric({ label, value, sub }: { label: string; value: string; sub: string }) { return <div className="rounded-3xl border border-[#e2e2de] bg-white p-5"><p className="text-sm text-[#888]">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#999]">{sub}</p></div>; }
