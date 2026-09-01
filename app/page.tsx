"use client";

import { useMemo, useState } from "react";

const holdings = [
  { ticker: "SONY", name: "Sony Group", shares: 50 },
  { ticker: "DIS", name: "Walt Disney Co.", shares: 15 },
  { ticker: "AIR", name: "Airbus SE", shares: 30 },
];

const benefits = [
  { icon: "🏨", title: "Hotel partner benefit", company: "SONY", saving: 120, distance: "2.3 km", type: "Accommodation" },
  { icon: "🍣", title: "Restaurant benefit", company: "SONY", saving: 30, distance: "1.1 km", type: "Food" },
  { icon: "🎟️", title: "Experience benefit", company: "DIS", saving: 45, distance: "4.8 km", type: "Experience" },
  { icon: "🛍️", title: "Shopping benefit", company: "AIR", saving: 30, distance: "6.2 km", type: "Shopping" },
];

export default function Home() {
  const [destination, setDestination] = useState("Tokyo, Japan");
  const [searched, setSearched] = useState(false);
  const totalSaving = useMemo(() => benefits.reduce((sum, b) => sum + b.saving, 0), []);

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#151515]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">ShareNomad<span className="text-[#777]">.</span></div>
        <div className="hidden gap-8 text-sm text-[#666] md:flex"><span>Portfolio</span><span>Explore</span><span>Trips</span></div>
        <button className="rounded-full border border-[#ddd] bg-white px-4 py-2 text-sm">Demo account</button>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#777]">Shareholder lifestyle intelligence</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">Your assets.<br/>Your benefits.<br/><span className="text-[#777]">Your world.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#666]">Turn the companies you own into practical benefits for travel, food, stays and experiences.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-10 md:grid-cols-3">
        <Stat label="Portfolio value" value="€42,850" sub="+8.4% this year" />
        <Stat label="Dividend / year" value="€620" sub="Estimated" />
        <Stat label="Lifestyle benefits" value="€385" sub="Potential annual value" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-[28px] bg-[#171717] p-6 text-white md:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="text-sm text-[#aaa]">Find shareholder benefits</p><h2 className="mt-1 text-3xl font-medium tracking-tight">Where are you going?</h2></div>
            <p className="text-sm text-[#aaa]">Your holdings are checked against eligible demo benefits.</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input value={destination} onChange={e => setDestination(e.target.value)} className="min-h-14 flex-1 rounded-2xl bg-white px-5 text-base text-black outline-none" placeholder="Tokyo, Japan" />
            <button onClick={() => setSearched(true)} className="min-h-14 rounded-2xl bg-white px-7 font-medium text-black transition hover:bg-[#eee]">Find my benefits →</button>
          </div>
          {searched && <p className="mt-4 text-sm text-[#bbb]">Found {benefits.length} eligible demo benefits around {destination}.</p>}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-5 flex items-end justify-between"><div><p className="text-sm text-[#888]">Your portfolio</p><h2 className="text-3xl font-semibold tracking-tight">Holdings</h2></div><span className="text-sm text-[#888]">3 positions</span></div>
        <div className="grid gap-3 md:grid-cols-3">{holdings.map(h => <div key={h.ticker} className="rounded-3xl border border-[#e2e2de] bg-white p-5"><div className="flex items-center justify-between"><span className="rounded-xl bg-[#f1f1ed] px-3 py-2 text-sm font-semibold">{h.ticker}</span><span className="text-sm text-[#888]">{h.shares} shares</span></div><p className="mt-5 font-medium">{h.name}</p><p className="mt-1 text-sm text-[#888]">Manual holding • eligibility enabled</p></div>)}</div>
      </section>

      <section className="border-t border-[#e2e2de] bg-white"><div className="mx-auto max-w-6xl px-6 py-16"><div className="mb-7 flex items-end justify-between"><div><p className="text-sm text-[#888]">Tokyo demo</p><h2 className="text-3xl font-semibold tracking-tight">Benefits you can use</h2></div><div className="text-right"><p className="text-sm text-[#888]">Potential trip saving</p><p className="text-2xl font-semibold">€{totalSaving}</p></div></div><div className="grid gap-4 md:grid-cols-2">{benefits.map(b => <div key={b.title} className="rounded-3xl border border-[#e2e2de] p-5"><div className="flex gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f3ef] text-xl">{b.icon}</div><div className="flex-1"><div className="flex justify-between gap-3"><div><p className="font-medium">{b.title}</p><p className="mt-1 text-sm text-[#888]">{b.company} • {b.type}</p></div><span className="font-semibold">€{b.saving} save</span></div><div className="mt-5 flex justify-between text-xs text-[#999]"><span>{b.distance} away</span><span>DEMO • source required</span></div></div></div></div>)}</div></div></section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-[#999]">ShareNomad MVP • Informational only, not investment advice.</footer>
    </main>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return <div className="rounded-3xl border border-[#e2e2de] bg-white p-6"><p className="text-sm text-[#888]">{label}</p><p className="mt-4 text-3xl font-semibold tracking-tight">{value}</p><p className="mt-2 text-sm text-[#888]">{sub}</p></div>;
}
