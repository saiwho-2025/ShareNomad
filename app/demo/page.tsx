"use client";

import { useMemo, useState } from "react";
import { demoLisbon14, TimeHorizon } from "../../lib/life-plan";

const horizons: TimeHorizon[] = ["2-3 Days", "7 Days", "14 Days", "30 Days"];

export default function DemoPage() {
  const [horizon, setHorizon] = useState<TimeHorizon>("14 Days");
  const plan = useMemo(() => ({ ...demoLisbon14, horizon }), [horizon]);
  const grouped = plan.activities.reduce<Record<number, typeof plan.activities>>((acc, activity) => {
    (acc[activity.day] ||= []).push(activity);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#151515]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <a href="/" className="text-sm text-[#777]">← ShareNomad</a>
        <header className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-sm font-medium uppercase tracking-[0.2em] text-[#777]">End-to-end demo</p><h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em]">14 days in Lisbon.</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-[#666]">A life plan that combines work, skills, experiences, seasonality and asset-supported value.</p></div>
          <div className="rounded-3xl border border-[#e2e2de] bg-white p-4 text-sm"><p className="text-[#888]">Demo profile</p><p className="mt-1 font-medium">€3,500 budget · 5h work/day</p><p className="mt-1 text-[#888]">Portuguese · Surf · Yoga · Food</p></div>
        </header>

        <div className="mt-10 flex flex-wrap gap-2">{horizons.map(item => <button key={item} onClick={() => setHorizon(item)} className={`rounded-full px-5 py-3 text-sm font-medium ${item === horizon ? "bg-[#171717] text-white" : "border border-[#ddd] bg-white"}`}>{item}</button>)}</div>

        <section className="mt-6 grid gap-4 md:grid-cols-6">
          <Metric label="Destination" value="Lisbon" sub="Portugal" wide />
          <Metric label="Destination Score" value="92" sub="/ 100" />
          <Metric label="Life Value" value="89" sub="/ 100" />
          <Metric label="Skills" value="94" sub="/ 100" />
          <Metric label="Asset Support" value="€620" sub="18% of cost" />
          <Metric label="Season" value="95" sub="October" />
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[#171717] p-6 text-white"><p className="text-sm text-[#aaa]">Realizable value</p><p className="mt-3 text-4xl font-semibold">€620</p><p className="mt-2 text-sm text-[#aaa]">Verified/eligible value should be separated from illustrative demo data before launch.</p></div>
          <div className="rounded-3xl border border-[#e2e2de] bg-white p-6"><p className="text-sm text-[#888]">Expected trip cost</p><p className="mt-3 text-4xl font-semibold">€3,450</p><p className="mt-2 text-sm text-[#888]">Accommodation, food, transport, activities and work.</p></div>
          <div className="rounded-3xl border border-[#e2e2de] bg-white p-6"><p className="text-sm text-[#888]">Recommendation confidence</p><p className="mt-3 text-4xl font-semibold">88%</p><p className="mt-2 text-sm text-[#888]">Confidence should be driven by source quality and freshness.</p></div>
        </section>

        <section className="mt-12"><div className="flex items-end justify-between"><div><p className="text-sm text-[#888]">Personal secretary</p><h2 className="text-3xl font-semibold tracking-tight">Life plan</h2></div><span className="text-sm text-[#888]">{horizon}</span></div>
          <div className="mt-6 space-y-4">{Object.entries(grouped).map(([day, activities]) => <div key={day} className="rounded-3xl border border-[#e2e2de] bg-white p-5"><div className="flex items-center justify-between"><h3 className="font-semibold">Day {day}</h3><span className="text-sm text-[#888]">{activities[0]?.date}</span></div><div className="mt-4 space-y-2">{activities.map(activity => <div key={`${activity.day}-${activity.time}-${activity.title}`} className="grid gap-2 rounded-2xl bg-[#f7f7f4] p-4 md:grid-cols-[130px_1fr_auto_auto] md:items-center"><span className="text-sm font-medium">{activity.time}</span><div><p className="font-medium">{activity.title}</p><p className="mt-1 text-xs text-[#888]">{activity.category} · {activity.duration}</p></div><span className="text-sm">€{activity.cost}</span>{activity.bookingStatus === "Book" ? <button className="rounded-full border border-[#ccc] bg-white px-3 py-2 text-xs font-medium">Book</button> : <span className="text-xs text-[#999]">Planned</span>}</div>)}</div></div>)}</div>
        </section>

        <section className="mt-10 rounded-[28px] border border-[#e2e2de] bg-white p-6 md:p-8"><p className="text-sm text-[#888]">How the secretary thinks</p><div className="mt-4 grid gap-4 md:grid-cols-4"><Step n="01" title="Discover" text="Compare destinations for your assets, dates and preferences." /><Step n="02" title="Optimize" text="Fit work, skills, culture and rest into the time horizon." /><Step n="03" title="Support" text="Prioritize eligible asset benefits and show their value." /><Step n="04" title="Execute" text="Turn planned activities into bookable actions." /></div></section>
        <p className="mt-8 text-xs leading-5 text-[#999]">Demo only. Prices, benefits, schedules and scores are illustrative. Production recommendations must be based on current, source-verified data.</p>
      </div>
    </main>
  );
}
function Metric({ label, value, sub, wide }: { label: string; value: string; sub: string; wide?: boolean }) { return <div className={`${wide ? "md:col-span-2" : "md:col-span-1"} rounded-3xl border border-[#e2e2de] bg-white p-5`}><p className="text-sm text-[#888]">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#999]">{sub}</p></div>; }
function Step({ n, title, text }: { n: string; title: string; text: string }) { return <div><span className="text-xs text-[#999]">{n}</span><h3 className="mt-2 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#777]">{text}</p></div>; }
