export const statsToSeed = [
  {
    category: "App & Download Trends",
    label: "Global app store in-app purchase revenue (CY2025)",
    value: 167,
    unit: "$Bn",
    format: "number",
    trend: "up",
    deltaLabel: "+10.6% YoY",
    sourceName: "Sensor Tower — State of Mobile 2026",
    sourceUrl: "https://sensortower.com/report/state-of-mobile-2026",
    asOfDate: "Jan 2026",
    order: 1,
    status: "published",
  },
  {
    category: "App & Download Trends",
    label: "ChatGPT — time to reach 1 billion monthly active users",
    value: 3,
    unit: "years — fastest of any app",
    format: "number",
    trend: "up",
    deltaLabel: "Faster than TikTok, YouTube & Instagram",
    sourceName: "Sensor Tower — State of AI 2026",
    sourceUrl: "https://sensortower.com/report/state-of-ai-2026",
    asOfDate: "May 2026",
    order: 2,
    status: "published",
  },
  {
    category: "App & Download Trends",
    label: "Downloads of apps with \"AI\" in their description (H1 2026)",
    value: 10,
    unit: "Bn, global",
    format: "number",
    trend: "up",
    deltaLabel: "On track per Sensor Tower",
    sourceName: "Sensor Tower — State of AI 2026",
    sourceUrl: "https://sensortower.com/report/state-of-ai-2026",
    asOfDate: "H1 2026",
    order: 3,
    status: "published",
  },
  {
    category: "App & Download Trends",
    label: "Global time spent on generative AI apps, H1 2026",
    value: 36,
    unit: "Bn hours (vs 17.2Bn in H1 2025)",
    format: "number",
    trend: "up",
    deltaLabel: "≈2x YoY",
    sourceName: "Sensor Tower — State of AI 2026",
    sourceUrl: "https://sensortower.com/report/state-of-ai-2026",
    asOfDate: "H1 2026",
    order: 4,
    status: "published",
  },
];

export const articlesToSeed = [
  {
    slug: "chatgpt-1-billion-users-sensor-tower-2026",
    title: "ChatGPT Just Became the Fastest App Ever to Hit 1 Billion Users",
    dek: "What Sensor Tower's 2026 download data shows about the platforms, time spent, and revenue behind the shift.",
    type: "research",
    status: "published",
    excerpt:
      "ChatGPT reached one billion monthly active users faster than any mobile app in history. Here's what Sensor Tower's State of AI 2026 report shows about downloads, time spent, and where the competition is closing in.",
    topicSlugs: ["artificial-intelligence", "tech-news", "trending"],
    keyTakeaways: [
      "ChatGPT hit 1 billion monthly active users in May 2026 — about three years after launch, faster than TikTok, YouTube, or Instagram reached the same mark.",
      "ChatGPT, DeepSeek, and Google Gemini together account for nearly 90% of all time spent across AI Assistant apps in Q1 2026.",
      "Apps with \"AI\" in their description are on track for 10 billion global downloads in H1 2026 alone.",
      "Global time spent on generative AI apps is projected to roughly double year-over-year, from 17.2 billion hours (H1 2025) to 36 billion hours (H1 2026).",
      "ChatGPT's US audience share fell below 50% for the first time in March 2026, as Claude's US audience share more than tripled.",
    ],
    faqs: [
      {
        q: "Is ChatGPT still the most-used AI app in 2026?",
        a: "Yes, by a wide margin on total usage — but its dominance is narrowing. Sensor Tower's data shows ChatGPT's US audience share dropped below 50% for the first time in March 2026 as Claude gained ground, even as ChatGPT continues to add users at record speed.",
      },
      {
        q: "What does 'time to 1 billion users' actually measure?",
        a: "It refers to monthly active users (MAU) — people who open the app at least once in a given month — not total lifetime downloads. Sensor Tower's report tracks this milestone across major consumer apps for comparison.",
      },
      {
        q: "Where does this data come from?",
        a: "Sensor Tower's State of AI 2026 and State of Mobile 2026 reports, which aggregate app store download, usage, and revenue data across iOS and Google Play.",
      },
    ],
    contentMarkdown: `Generative AI's growth curve looks less like a normal consumer app and more like a category redefining itself in real time. Sensor Tower's *State of AI 2026* report, released in June 2026, puts hard numbers behind what most people building on top of AI already sensed: adoption hasn't just continued since 2025 — it's accelerated.

## The headline numbers

- **1 billion monthly active users.** ChatGPT crossed this threshold in May 2026, roughly three years after its public launch — making it the fastest app in history to reach that scale, ahead of TikTok, YouTube, and Instagram, each of which took considerably longer.
- **Time spent nearly doubled.** Global time spent on generative AI apps is projected to climb from 17.2 billion hours in H1 2025 to 36 billion hours in H1 2026 — roughly 2x growth year-over-year.
- **Download volume at scale.** Apps with "AI" somewhere in their store description are on track to cross 10 billion global downloads in H1 2026 alone.
- **Revenue is following usage.** In-app purchase revenue from AI apps is expected to surpass $4 billion in H1 2026, a 36% increase over the second half of 2025.

## The field is consolidating — and fragmenting at the same time

Two things are true simultaneously. First, concentration: ChatGPT, DeepSeek, and Google Gemini together account for nearly 90% of all time spent across AI Assistant apps in Q1 2026, leaving comparatively little room for smaller players in the general-assistant category.

Second, and less expected: ChatGPT's own grip is loosening at the margins. Its US audience share fell below 50% for the first time in March 2026, with Claude's US audience share more than tripling over the same stretch. That's not a collapse — ChatGPT is still adding users faster than almost anything else in mobile history — but it's a signal that the "one dominant assistant" assumption is no longer safe to make.

## Why this matters beyond the headline

For anyone building a product, feature, or business around AI, this data has a few concrete implications:

**Distribution is no longer the moat it was in 2024.** When one player can pull a billion users in three years, category-wide download numbers stop being a reliable proxy for any single company's durability. Usage share and time-spent metrics matter more than raw install counts.

**Monetization is catching up to attention, not the other way around.** IAP revenue growth (36% half-over-half) is trailing time-spent growth (2x year-over-year) — meaning most of this engagement still isn't directly monetized yet. That gap is where a lot of the next wave of AI-native business models will get built.

**Multi-model reality is now a planning assumption, not a hedge.** With Claude, Gemini, and DeepSeek all capturing meaningful and growing share alongside ChatGPT, products that lock into a single model provider are making a narrower bet than the market itself is making.

## Sources

Sensor Tower, [State of AI 2026](https://sensortower.com/report/state-of-ai-2026) and [State of Mobile 2026](https://sensortower.com/report/state-of-mobile-2026) reports.`,
  },
  {
    slug: "vc-funding-trends-mid-2026-ai-infrastructure",
    title: "Where Venture Capital Is Actually Going in Mid-2026",
    dek: "A read of July 2026's funding rounds shows investors converging hard on a narrow set of bets.",
    type: "research",
    status: "published",
    excerpt:
      "July 2026's venture rounds — from Together AI's $800M raise to Wonder's $650M Series D — show where institutional money is actually flowing, and why founders outside AI, defense, and infrastructure are having a harder time raising.",
    topicSlugs: ["fintech", "tech-news", "trending"],
    keyTakeaways: [
      "Together AI raised $800M and Quantum Systems raised $1.2B in some of July 2026's largest rounds.",
      "Food-tech platform Wonder closed a $650M Series D at a $9B pre-money valuation.",
      "Alpaca, an agent-first brokerage infrastructure company, raised $135M led by Peak XV — a sign fintech infrastructure is drawing serious capital again.",
      "Spectro Cloud raised $100M+ for AI infrastructure management; Beacon Security closed a $13M seed for agentic cybersecurity.",
      "The through-line: capital is concentrating in AI-as-operating-system plays, industrial/defense bottlenecks, and financial rails built around stablecoins — not spread evenly across sectors.",
    ],
    faqs: [
      {
        q: "Is venture funding actually back in 2026?",
        a: "Directionally yes — deal sizes in July 2026 are large by recent standards — but it's concentrated, not broad-based. Capital is clustering around AI infrastructure, defense-adjacent industrial tech, and financial-rail plays rather than spreading evenly across sectors.",
      },
      {
        q: "What is 'agent-first brokerage infrastructure', as in Alpaca's raise?",
        a: "It refers to brokerage and trading infrastructure built to be used programmatically by AI agents and automated systems, not just human traders through a UI — a growing category as AI agents take on more autonomous financial actions.",
      },
      {
        q: "Where does this funding data come from?",
        a: "Aggregated from venture funding roundups published by Tech Startups (techstartups.com) covering announcements in July 2026.",
      },
    ],
    contentMarkdown: `Looking at July 2026's venture rounds in sequence, a pattern emerges quickly: this isn't a broad recovery in startup funding so much as a narrow, aggressive bet on a handful of categories.

## The headline rounds

- **Together AI — $800M.** One of the largest AI infrastructure raises of the month.
- **Quantum Systems — $1.2B**, closed in late June 2026, underscoring how much capital is flowing into deep-tech and defense-adjacent hardware.
- **Wonder — $650M Series D** at a $9B pre-money valuation, for its food-technology platform — one of the few large consumer-adjacent rounds of the period.
- **Alpaca — $135M**, led by Peak XV, for agent-first brokerage infrastructure — trading and brokerage rails built to be used by AI agents directly, not just human traders through a dashboard.
- **Spectro Cloud — $100M+ Series D** for AI infrastructure management tooling.
- **Beacon Security — $13M seed** for agentic cybersecurity — security tooling designed around autonomous AI agents as both the threat surface and the defense mechanism.

## What the pattern actually says

Three themes keep recurring across these rounds, regardless of stage or sector label:

**AI as infrastructure, not feature.** Together AI and Spectro Cloud aren't consumer-facing AI products — they're the plumbing other companies build AI products on top of. Investors are pricing infrastructure plays as durable bets even as the application layer above them changes quickly.

**Financial rails are being rebuilt around agents and stablecoins.** Alpaca's raise reflects a broader shift: brokerage and payment infrastructure increasingly needs to serve autonomous software clients, not just people. Combined with continued institutional interest in stablecoin-based settlement, financial infrastructure is one of the few "boring" categories pulling in AI-era valuations.

**Security is being re-architected for agents, not just humans.** Beacon Security's seed round is small next to the others, but notable — it's a bet that a meaningful share of future cybersecurity spend will go toward securing AI agents and the actions they take, not just traditional endpoints and networks.

## What this means if you're raising

The clear takeaway for founders: a vague, general-purpose pitch is having a harder time in this market than it did during the last two funding cycles, even though total dollars deployed are large. Capital is chasing specific, infrastructure-level bets in AI, defense-adjacent industrials, and financial rails. Outside those lanes, the bar for traction and specificity before a round closes appears to be materially higher.

## Sources

Venture funding roundups from [Tech Startups](https://techstartups.com/2026/07/15/venture-capital-startup-funding-roundup-july-15-2026-accel-crv-greylock-goldman-sachs-khosla-ventures-m13-and-nava-ventures/), July 2026.`,
  },
  {
    slug: "online-fashion-deals-guide-bewakoof-and-beyond",
    title: "How Big Online Fashion Sales Actually Work — A Reader's Guide",
    dek: "What \"up to 80% off\" really means, and how to verify a deal before you buy — using Bewakoof as a working example.",
    type: "deals",
    status: "published",
    excerpt:
      "\"Up to 80% off\" headlines are everywhere in Indian online fashion retail. Here's how these sales are actually structured — bank discounts, membership programs, seasonal clearance — and how to verify what's really on offer before checkout.",
    topicSlugs: ["trending"],
    keyTakeaways: [
      "\"Up to X% off\" banners describe the best-case discount on select items, not the average discount across a store — treat the top number as a ceiling, not a typical price.",
      "Many D2C fashion brands, including Bewakoof, layer several discount types: sitewide clearance, first-order codes, bank card instant discounts, and paid membership programs — they usually can't all be combined.",
      "Bank-card instant discounts (e.g. a card issuer discount capped at a fixed rupee amount) are issued by the bank, not the brand, and typically apply only above a minimum cart value.",
      "Paid membership tiers (like Bewakoof's TriBe) trade a small upfront fee for guaranteed ongoing discounts and free shipping — worth it only if you shop that brand regularly.",
      "Coupon codes shown on third-party deal-aggregator sites expire quickly and aren't verified in real time — always confirm the discount at checkout on the brand's own site before assuming it will apply.",
    ],
    faqs: [
      {
        q: "Does Parivestra have a partnership with Bewakoof or any other brand mentioned here?",
        a: "No. This is independent, informational coverage of how online retail discounting works, using publicly available information. We don't have an affiliate or partnership relationship with the brands mentioned, and don't guarantee any specific code or offer is currently live.",
      },
      {
        q: "Why don't you just list the current coupon codes?",
        a: "Coupon codes on fashion sites typically expire within days to weeks, and third-party listings are frequently out of date. Rather than publish codes that may not work by the time you read this, we're explaining the underlying discount mechanics so you can evaluate any offer you find on the brand's own site.",
      },
      {
        q: "Are bank card discounts and sitewide sale discounts the same thing?",
        a: "No — sitewide or clearance discounts are set by the retailer and apply broadly. Bank card instant discounts are funded by the card issuer (as part of a promotional tie-up) and usually apply on top of, or instead of, the retailer's own discount, subject to a minimum spend.",
      },
    ],
    contentMarkdown: `Scroll through any online fashion retailer in India right now and you'll see some version of the same banner: "Up to 80% off." It's technically true and also, on its own, not very useful — because it describes the best possible discount on a subset of items, not what you'll actually pay for what you want. Here's how to read past the headline number, using Bewakoof's public sale page as a working example of how these promotions are typically structured.

## The layers of a typical online fashion sale

Most D2C fashion retailers, Bewakoof included, run several discount mechanisms at once rather than one flat "X% off everything":

**1. Sitewide or seasonal clearance discounts.** Set by the retailer, usually ranging widely by category and inventory age — older or overstocked lines get steeper discounts than new arrivals, which is where "up to 80%" comes from. The average discount across the store is almost always well below the advertised ceiling.

**2. First-order or new-user codes.** A flat rupee amount or percentage off, restricted to a customer's first purchase — meant to convert new visitors, not reward repeat shoppers.

**3. Bank card instant discounts.** Card issuers (not the retailer) fund a fixed discount — for example, a percentage off capped at a set rupee amount — for cardholders of a specific bank, usually above a minimum cart value. These are negotiated between the bank and retailer and change periodically.

**4. Paid membership programs.** Bewakoof's "TriBe" membership is a good example of a growing model: pay a small recurring fee (structured as short-term tiers) in exchange for guaranteed ongoing discounts and free shipping with no minimum order. This only pays off if you shop the brand regularly enough to offset the membership cost.

## Why these usually can't be stacked

Retailers generally cap how many discount mechanisms apply to a single order — a sitewide clearance price plus a first-order code plus a bank discount plus a membership discount, all at once, is the exception rather than the rule. Read the terms on the specific offer before assuming discounts combine.

## How to actually verify a deal before you buy

- **Check the brand's own site**, not just a third-party coupon-aggregator listing — codes on aggregator sites are frequently expired or geographically restricted.
- **Add the item to your cart** and apply the code before trusting a headline discount figure — the applied price is the only reliable confirmation.
- **Check the minimum cart value** on bank card offers; many are void below a specific spend threshold.
- **Compare the final price against the item's price history** (browser extensions or price-tracking tools can help) — a "sale" price is only a deal if it's genuinely lower than what the item normally sells for.

None of this is specific to any one brand — it's how promotional pricing works across most D2C fashion retail in India. Treat any specific discount code as time-sensitive and unverified until you see it applied at checkout.

## Sources

General sale structure referenced from Bewakoof's own [sale page](https://www.bewakoof.com/sale-view-all) and [offers page](https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale), current as of July 2026. Specific codes and cashback percentages change frequently and are not reproduced here — verify directly with the retailer.`,
  },
];
