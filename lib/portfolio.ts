export type Holding = {
  ticker: string;
  name: string;
  shares: number;
};

export type Benefit = {
  id: string;
  company: string;
  title: string;
  category: string;
  minimumShares: number;
  saving: number;
  distance: string;
  destination: string;
  demo: boolean;
};

export const demoHoldings: Holding[] = [
  { ticker: "SONY", name: "Sony Group", shares: 50 },
  { ticker: "DIS", name: "Walt Disney Co.", shares: 15 },
  { ticker: "AIR", name: "Airbus SE", shares: 30 },
];

export const demoBenefits: Benefit[] = [
  { id: "sony-hotel", company: "SONY", title: "Hotel partner benefit", category: "Accommodation", minimumShares: 1, saving: 120, distance: "2.3 km", destination: "Tokyo", demo: true },
  { id: "sony-food", company: "SONY", title: "Restaurant benefit", category: "Food", minimumShares: 10, saving: 30, distance: "1.1 km", destination: "Tokyo", demo: true },
  { id: "dis-experience", company: "DIS", title: "Experience benefit", category: "Experience", minimumShares: 10, saving: 45, distance: "4.8 km", destination: "Tokyo", demo: true },
  { id: "air-shopping", company: "AIR", title: "Shopping benefit", category: "Shopping", minimumShares: 25, saving: 30, distance: "6.2 km", destination: "Tokyo", demo: true },
];

export function eligibleBenefits(holdings: Holding[], benefits: Benefit[]) {
  return benefits.filter((benefit) => {
    const holding = holdings.find((h) => h.ticker === benefit.company);
    return Boolean(holding && holding.shares >= benefit.minimumShares);
  });
}

export function totalSavings(benefits: Benefit[]) {
  return benefits.reduce((sum, benefit) => sum + benefit.saving, 0);
}
