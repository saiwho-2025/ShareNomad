"use client";

import { FormEvent, useMemo, useState } from "react";
import { demoBenefits, demoHoldings, eligibleBenefits, Holding } from "../../lib/portfolio";

export default function PortfolioPage() {
  const [holdings, setHoldings] = useState<Holding[]>(demoHoldings);
  const [ticker, setTicker] = useState("");
  const [shares, setShares] = useState("");
  const eligible = useMemo(() => eligibleBenefits(holdings, demoBenefits), [holdings]);

  function addHolding(event: FormEvent) {
    event.preventDefault();
    const normalized = ticker.trim().toUpperCase();
    const count = Number(shares);
    if (!normalized || !Number.isFinite(count) || count <= 0) return;

    setHoldings((current) => {
      const existing = current.find((h) => h.ticker === normalized);
      if (existing) return current.map((h) => h.ticker === normalized ? { ...h, shares: h.shares + count } : h);
      return [...current, { ticker: normalized, name: normalized, shares: count }];
    });
    setTicker("");
    setShares("");
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-10 text-[#151515]">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-[#777]">← ShareNomad</a>
        <header className="mt-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#777]">Portfolio</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em]">Your holdings unlock your benefits.</h1>
          <p className="mt-5 text-lg leading-8 text-[#666]">Add shares manually. ShareNomad uses the holding quantity to determine eligibility for the current demo benefit catalog.</p>
        </header>

        <form onSubmit={addHolding} className="mt-10 rounded-[28px] bg-[#171717] p-6 text-white md:p-8">
          <h2 className="text-2xl font-medium">Add holding</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ticker, e.g. SONY" className="min-h-14 rounded-2xl bg-white px-5 text-black outline-none" />
            <input value={shares} onChange={(e) => setShares(e.target.value)} placeholder="Number of shares" inputMode="decimal" className="min-h-14 rounded-2xl bg-white px-5 text-black outline-none" />
            <button className="min-h-14 rounded-2xl bg-white px-7 font-medium text-black">Add stock</button>
          </div>
        </form>

        <section className="mt-10">
          <div className="flex items-end justify-between"><div><p className="text-sm text-[#888]">My portfolio</p><h2 className="text-3xl font-semibold">Holdings</h2></div><span className="text-sm text-[#888]">{holdings.length} positions</span></div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {holdings.map((holding) => {
              const count = eligible.filter((b) => b.company === holding.ticker).length;
              return <div key={holding.ticker} className="rounded-3xl border border-[#e2e2de] bg-white p-5"><div className="flex items-center justify-between"><span className="rounded-xl bg-[#f1f1ed] px-3 py-2 text-sm font-semibold">{holding.ticker}</span><span className="text-sm text-[#888]">{holding.shares} shares</span></div><p className="mt-5 font-medium">{holding.name}</p><p className="mt-2 text-sm text-[#888]">{count} eligible demo benefit{count === 1 ? "" : "s"}</p></div>;
            })}
          </div>
        </section>

        <section className="mt-12 rounded-[28px] border border-[#e2e2de] bg-white p-6 md:p-8">
          <div className="flex items-end justify-between"><div><p className="text-sm text-[#888]">Eligibility engine</p><h2 className="text-3xl font-semibold">Benefits you qualify for</h2></div><span className="text-2xl font-semibold">{eligible.length}</span></div>
          <div className="mt-6 space-y-3">{eligible.map((benefit) => <div key={benefit.id} className="flex items-center justify-between rounded-2xl bg-[#f7f7f4] p-4"><div><p className="font-medium">{benefit.title}</p><p className="mt-1 text-sm text-[#888]">{benefit.company} · {benefit.category} · requires {benefit.minimumShares}+ shares</p></div><span className="font-semibold">€{benefit.saving}</span></div>)}</div>
        </section>

        <p className="mt-8 text-xs leading-5 text-[#999]">Demo benefits are illustrative and not verified real-world shareholder offers. Always confirm eligibility and terms with the official company or benefit provider before relying on an offer.</p>
      </div>
    </main>
  );
}
