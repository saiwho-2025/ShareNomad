# ShareNomad Whitepaper

## Asset-Aware Global Lifestyle Optimization

**Version:** 0.1 — September 2026  
**Status:** Product concept / prototype specification

---

## Abstract

ShareNomad is a privacy-first global lifestyle optimization platform. It helps people convert information about assets they choose to disclose into practical lifestyle value across destinations and time windows.

The product connects five layers:

**Assets → Benefits → Location → Time → Life Plan**

Rather than acting as a brokerage, investment adviser, or generic travel booking site, ShareNomad is designed as an **asset-aware lifestyle secretary**. A user can enter selected holdings manually, choose a destination or ask for recommendations, specify a 2–3 day, 7 day, 14 day, or 30 day horizon, and receive a plan combining work, accommodation, food, experiences, short courses, wellness, transport, and eligible benefits.

A central design principle is **data minimization**: ShareNomad does not need access to a user's brokerage account to deliver its core value. The default model is manual or selective asset disclosure. Brokerage connectivity, if ever offered, should be optional and read-only.

This whitepaper describes the product thesis, value model, privacy architecture, recommendation engine, scheduling model, risk controls, and roadmap.

---

## 1. The Problem

Modern travelers and digital nomads manage several disconnected systems:

- financial assets and shareholder benefits;
- travel search and accommodation;
- loyalty programs;
- courses and skill acquisition;
- restaurants and experiences;
- calendars and work commitments;
- local cost and seasonal conditions.

Today, these systems rarely optimize together.

A person may own shares in companies that provide useful benefits, yet discover those benefits only after deciding where to travel. A travel planner may optimize price and attractions without knowing the user's existing benefits. A loyalty optimizer may maximize points without considering learning goals, work hours, or quality of life.

ShareNomad starts from the opposite direction:

> **Given what the user chooses to disclose, where and when can those resources create the greatest practical lifestyle value?**

---

## 2. Product Thesis

ShareNomad's thesis is that **location and time are conversion layers between financial ownership and lived experience**.

A portfolio does not create lifestyle value simply because it exists. Value becomes actionable when an eligible benefit can be used at a particular place and time.

The product therefore models:

`Asset → Eligibility → Location → Season → Activity → Schedule → Experience`

The goal is not to maximize the number of benefits shown. The goal is to maximize the user's **realizable lifestyle value** subject to time, budget, work, energy, and personal preferences.

---

## 3. What ShareNomad Is — and Is Not

### ShareNomad is

- a lifestyle intelligence layer;
- a destination and time-window optimizer;
- a personal itinerary and scheduling assistant;
- an asset-benefit discovery tool;
- an optional booking orchestration layer.

### ShareNomad is not

- a broker;
- a trading platform;
- a custodian of user funds;
- an investment adviser;
- a promise of financial return;
- a replacement for official benefit terms or booking providers.

The platform should clearly distinguish **verified benefits**, **estimated value**, and **illustrative prototype data**.

---

## 4. Core Product Model

### 4.1 User Inputs

The minimum useful input set is:

1. destination or destination preference;
2. time horizon: 2–3, 7, 14, or 30 days;
3. budget;
4. work constraints;
5. lifestyle interests;
6. optional selected assets / holdings.

The user should be able to use the product without connecting a brokerage account.

### 4.2 Output

The product generates a Personal Life Plan containing:

- destination score;
- seasonality score;
- lifestyle value score;
- skill-acquisition value;
- estimated trip cost;
- eligible asset-supported value;
- asset support ratio;
- daily schedule;
- activities and courses;
- restaurant and accommodation candidates;
- booking actions where supported.

---

## 5. Lifestyle Value Model

The initial model separates value into several dimensions instead of reducing everything to money.

### 5.1 Financially Supported Value

`Asset Support Value = Σ eligible benefit value`

Only benefits that match the user's disclosed assets and applicable eligibility rules should be counted as realizable.

### 5.2 Asset Support Ratio

A simple explanatory metric is:

`Asset Support Ratio = Asset Support Value / Expected Plan Cost`

Example:

- expected plan cost: €3,500;
- eligible asset-supported value: €620;
- support ratio: 17.7%.

This does **not** mean the user earned 17.7% investment return. It means approximately that portion of the modeled plan cost could be supported by eligible benefits under the stated assumptions.

### 5.3 Experience Value

Experience value can include:

- accommodation quality;
- food quality;
- cultural access;
- service quality;
- nature and outdoor access;
- convenience;
- social opportunities.

### 5.4 Skill Value

ShareNomad treats short-term learning as a lifestyle asset. Examples include:

- yoga;
- surfing;
- diving;
- programming;
- English or local-language courses;
- driving lessons;
- practical life skills.

A 14-day plan can therefore optimize not only for places visited but also for **capabilities gained**.

---

## 6. Time as a First-Class Variable

ShareNomad uses four standardized horizons:

- **2–3 days:** concentrated experience;
- **7 days:** short lifestyle immersion;
- **14 days:** balanced work + learning + travel;
- **30 days:** temporary living / digital-nomad mode.

The same destination can have different value depending on the horizon.

For example, a destination may be excellent for a 3-day experience but poor for a 30-day work-and-learning plan. The engine should therefore score **destination × time horizon**, not destination alone.

---

## 7. Scheduling Engine

The scheduler is designed as a constrained optimization problem.

### Hard constraints

- available dates;
- work hours;
- activity opening times;
- course schedules;
- budget ceiling;
- minimum course attendance;
- required travel time.

### Soft constraints

- weather;
- seasonality;
- distance;
- energy / density of activities;
- user preferences;
- benefit utilization;
- free time;
- neighborhood coherence.

A simplified objective is:

`Maximize: Lifestyle Value + Skill Value + Asset Support + Convenience`

subject to the hard constraints above.

The scheduler should preserve recovery and unstructured time rather than maximizing activity count.

---

## 8. Distance and Density

Distance is not a brand promise. It is a **planning variable**.

Travel time between activities has a real opportunity cost. The scheduler should prefer geographically coherent days when the quality and value are otherwise comparable.

A future metric, **Life Value Density**, can describe how much useful value is experienced per unit of time and friction.

It should not be interpreted as “more activities are always better.” A high-quality two-hour experience can have more lifestyle value than four low-quality activities.

---

## 9. Privacy by Design

Privacy is a strategic product feature, not merely a compliance task.

### Principle

> **ShareNomad is asset-aware, not account-connected.**

The core service should work without access to a brokerage account.

### Default data model

The user may provide:

- ticker / security identifier;
- optional share quantity;
- destination preferences;
- travel dates;
- lifestyle goals.

The product should not require:

- cash balances;
- transaction history;
- cost basis;
- tax information;
- trading permissions;
- transfer permissions.

### Optional portfolio import

A future version may allow a user to upload a portfolio snapshot or CSV and extract only the minimum fields required for benefit matching. The original document should have a clear retention policy and should not be retained by default unless necessary and consented to.

### Brokerage connectivity

If brokerage connectivity is ever introduced, it should be:

- optional;
- read-only;
- limited to positions where technically feasible;
- transparent about permissions;
- revocable;
- subject to data minimization and security review.

No trading or money movement should be part of the ShareNomad product thesis.

---

## 10. GDPR and Regulatory Posture

ShareNomad should be designed with EU privacy principles in mind, including purpose limitation, data minimization, storage limitation, integrity/confidentiality, and accountability.

The product should avoid collecting sensitive financial information when it is unnecessary for the stated purpose.

Before production launch, the company should obtain qualified legal advice on:

- GDPR controller/processor roles;
- lawful basis and consent where applicable;
- privacy notices;
- retention and deletion policies;
- international data transfers;
- data protection impact assessment requirements;
- financial-services perimeter and investment-advice risk;
- consumer protection and travel-service obligations;
- payment and booking responsibilities.

This whitepaper is a product and risk-design document, not legal advice.

---

## 11. Trust Architecture

Every recommendation should have a confidence and provenance layer.

Information should be classified as:

**Verified** — current official/provider source checked.

**Estimated** — model-derived estimate with assumptions.

**Illustrative** — prototype/demo value that is not suitable for reliance.

The interface should make this distinction visible.

A benefit should never be represented as guaranteed merely because a ticker appears in a user's portfolio.

---

## 12. The AI Lifestyle Secretary

The long-term interface is conversational.

A user can say:

> “I have 14 days in Lisbon. I work five hours a day. I want to learn Portuguese and surf. Keep the budget below €3,500.”

The secretary should:

1. understand the constraints;
2. compare destination/time combinations;
3. identify eligible benefits;
4. build a daily schedule;
5. preserve free time;
6. explain trade-offs;
7. accept changes in natural language;
8. re-optimize the schedule;
9. prepare booking actions.

Example:

> “Don't schedule anything Wednesday afternoon.”

The system should move or remove the conflicting activity and recompute the plan rather than requiring manual calendar editing.

---

## 13. Booking Philosophy

Booking is an execution layer, not the initial product moat.

### Phase 1

External booking links / deep links.

### Phase 2

Partner APIs for activities, accommodation, restaurants, and transport.

### Phase 3

Multi-action booking orchestration where technically and contractually supported.

The user should always be able to see:

- provider;
- price;
- cancellation terms;
- location;
- availability timestamp;
- benefit eligibility;
- what ShareNomad knows versus estimates.

---

## 14. Competitive Positioning

Several product categories already exist:

- shareholder-benefit platforms;
- AI travel planners;
- loyalty and points optimizers;
- booking marketplaces;
- digital-nomad destination guides.

ShareNomad should not position itself as simply another AI travel planner or shareholder-perks catalog.

Its intended differentiation is the **Personal Lifestyle Optimization Graph**:

`Personal Assets × Location × Time × Goals × Constraints → Optimal Life Plan`

The defensible layer is the accumulated mapping between assets, eligibility, destinations, seasons, activities, costs, and user outcomes.

---

## 15. MVP Roadmap

### V1 — Interactive Planner

- destination selection;
- 2–3 / 7 / 14 / 30 days;
- budget;
- goals;
- manual holdings;
- benefit eligibility demo;
- generated life plan.

### V1.5 — Auto Scheduler

- hard/soft constraints;
- activity conflicts;
- travel-time optimization;
- free-time protection;
- natural-language rescheduling.

### V2 — Verified Data Layer

- official shareholder benefits;
- activity providers;
- accommodation;
- restaurants;
- seasonality;
- weather and local conditions;
- source freshness and provenance.

### V3 — Execution Layer

- booking links;
- partner APIs;
- confirmations;
- calendar integration;
- trip changes and re-planning.

### V4 — Global Lifestyle Optimization

- temporary living;
- digital-nomad optimization;
- education/skills;
- tax/residency information as a separate informational layer;
- multi-destination optimization.

---

## 16. Risk Management Framework

### Financial risk

Do not represent lifestyle benefits as investment returns. Do not provide personalized investment recommendations.

### Data risk

Minimize financial data. Avoid brokerage credentials where unnecessary. Encrypt data in transit and at rest. Define retention and deletion controls.

### Recommendation risk

Show source, timestamp, assumptions, and confidence. Do not guarantee prices, availability, or benefits without live verification.

### Booking risk

Clearly identify the merchant/provider responsible for fulfillment and cancellation.

### Regulatory risk

Keep financial information informational unless and until specialist counsel approves a regulated feature set.

### Model risk

Maintain deterministic business rules for eligibility and cost calculations. AI should explain and orchestrate; it should not silently invent eligibility.

---

## 17. Success Metrics

The core product metrics should measure realized usefulness rather than engagement alone.

### Primary

**Plan Completion Rate** — percentage of generated plans that users save, book, or meaningfully modify.

**Realizable Value Rate** — verified benefit value successfully used / modeled eligible value.

**Schedule Acceptance Rate** — percentage of generated plans accepted without major manual rebuilding.

**Re-plan Success Rate** — percentage of natural-language changes successfully incorporated without violating hard constraints.

### Secondary

- time to first useful plan;
- booking conversion;
- average supported value per trip;
- skill activities completed;
- destination recommendation acceptance;
- user-reported planning time saved.

---

## 18. Product North Star

The long-term North Star should be:

> **Realized Lifestyle Value per User-Day**

This captures the original thesis better than raw bookings, page views, or number of benefits listed.

The product succeeds when users can say:

> “ShareNomad made this period of my life more valuable than I could have planned myself.”

---

## 19. Conclusion

ShareNomad begins with a simple observation: people already own resources that can create real-world lifestyle value, but the connection between ownership, place, time, learning, experiences, and execution is fragmented.

The opportunity is not to build another booking engine. It is to build an intelligence layer that answers:

> **Where and when should I live, travel, learn, and experience the world to make the best use of the resources I already have?**

The product's strategic principles are therefore:

1. **Asset-aware, not account-dependent.**
2. **Location and time are first-class variables.**
3. **Lifestyle value is multidimensional.**
4. **The scheduler optimizes life, not activity count.**
5. **Privacy and user control are product features.**
6. **Verified data beats invented precision.**
7. **Booking is an execution layer, not the core moat.**

ShareNomad's long-term ambition is to become a trusted **AI Global Lifestyle Secretary**: a system that helps people transform assets, time, and personal goals into better lived experiences around the world.

---

## Appendix A — Example

**Input**

- Destination: Lisbon
- Horizon: 14 days
- Budget: €3,500
- Work: 5 hours/day
- Goals: Portuguese, surfing, yoga, food
- Assets: user-selected holdings

**Output**

- destination/time recommendation;
- estimated plan cost;
- verified eligible benefit value where available;
- asset support ratio;
- course and experience schedule;
- work blocks;
- meals and recovery time;
- booking actions;
- confidence and source labels.

All monetary values in the current prototype are illustrative unless explicitly connected to a verified source.
