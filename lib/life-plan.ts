export type TimeHorizon = "2-3 Days" | "7 Days" | "14 Days" | "30 Days";

export type Activity = {
  day: number;
  date: string;
  time: string;
  title: string;
  category: "Work" | "Skill" | "Culture" | "Wellness" | "Food" | "Free";
  duration: string;
  cost: number;
  supportedValue: number;
  bookingStatus: "Plan" | "Book";
};

export type DestinationPlan = {
  destination: string;
  country: string;
  horizon: TimeHorizon;
  seasonScore: number;
  lifeValueScore: number;
  skillValueScore: number;
  assetSupportValue: number;
  expectedCost: number;
  assetSupportRatio: number;
  destinationScore: number;
  confidence: number;
  activities: Activity[];
};

export const demoLisbon14: DestinationPlan = {
  destination: "Lisbon",
  country: "Portugal",
  horizon: "14 Days",
  seasonScore: 95,
  lifeValueScore: 89,
  skillValueScore: 94,
  assetSupportValue: 620,
  expectedCost: 3450,
  assetSupportRatio: 0.18,
  destinationScore: 92,
  confidence: 88,
  activities: [
    { day: 1, date: "Oct 12", time: "09:00–14:00", title: "Deep work", category: "Work", duration: "5h", cost: 18, supportedValue: 0, bookingStatus: "Plan" },
    { day: 1, date: "Oct 12", time: "16:00–18:00", title: "Portuguese crash course", category: "Skill", duration: "2h", cost: 32, supportedValue: 0, bookingStatus: "Book" },
    { day: 1, date: "Oct 12", time: "19:30", title: "Neighborhood dinner", category: "Food", duration: "1.5h", cost: 28, supportedValue: 10, bookingStatus: "Book" },
    { day: 2, date: "Oct 13", time: "09:00–14:00", title: "Deep work", category: "Work", duration: "5h", cost: 18, supportedValue: 0, bookingStatus: "Plan" },
    { day: 2, date: "Oct 13", time: "15:30–17:30", title: "Surf lesson", category: "Skill", duration: "2h", cost: 55, supportedValue: 0, bookingStatus: "Book" },
    { day: 2, date: "Oct 13", time: "18:00–19:00", title: "Sunset walk", category: "Wellness", duration: "1h", cost: 0, supportedValue: 0, bookingStatus: "Plan" },
    { day: 3, date: "Oct 14", time: "09:00–14:00", title: "Deep work", category: "Work", duration: "5h", cost: 18, supportedValue: 0, bookingStatus: "Plan" },
    { day: 3, date: "Oct 14", time: "16:00–18:00", title: "AI & coding workshop", category: "Skill", duration: "2h", cost: 70, supportedValue: 0, bookingStatus: "Book" },
    { day: 4, date: "Oct 15", time: "09:00–14:00", title: "Deep work", category: "Work", duration: "5h", cost: 18, supportedValue: 0, bookingStatus: "Plan" },
    { day: 4, date: "Oct 15", time: "17:30–18:30", title: "Yoga", category: "Wellness", duration: "1h", cost: 18, supportedValue: 5, bookingStatus: "Book" },
    { day: 5, date: "Oct 16", time: "09:00–14:00", title: "Deep work", category: "Work", duration: "5h", cost: 18, supportedValue: 0, bookingStatus: "Plan" },
    { day: 5, date: "Oct 16", time: "15:30–18:30", title: "Food & market tour", category: "Culture", duration: "3h", cost: 65, supportedValue: 15, bookingStatus: "Book" },
    { day: 6, date: "Oct 17", time: "10:00–16:00", title: "Cascais surf day", category: "Skill", duration: "6h", cost: 95, supportedValue: 0, bookingStatus: "Book" },
    { day: 6, date: "Oct 17", time: "19:00", title: "Seafood dinner", category: "Food", duration: "1.5h", cost: 35, supportedValue: 10, bookingStatus: "Book" },
    { day: 7, date: "Oct 18", time: "10:00–13:00", title: "Museum & old town", category: "Culture", duration: "3h", cost: 22, supportedValue: 0, bookingStatus: "Book" },
    { day: 7, date: "Oct 18", time: "15:00–17:00", title: "Free time", category: "Free", duration: "2h", cost: 0, supportedValue: 0, bookingStatus: "Plan" },
  ],
};
