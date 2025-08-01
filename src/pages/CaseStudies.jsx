import React from 'react';

const caseStudies = [
  {
    title: "Dove’s “Real Beauty” – Evolution Campaign",
    type: "Brand / Awareness & Sales Growth",
    challenge: "Dove aimed to redefine beauty standards amid heavy competition and societal criticism of beauty norms.",
    solution: "Ogilvy & Mather produced the groundbreaking Evolution film—a 75‑second viral spot showing the transformation in beauty advertising and its unrealistic portrayal of women.",
    results: "With a modest budget (~C$135K), the campaign earned over US$150 million in earned media exposure. Within a month of release it reached 1.7 million views; a year later, 12 million. Sales of Dove soap doubled—from $2B to $4B over 3 years.",
    why: "Dove’s emotional storytelling built authenticity, resonated globally, and achieved market-leading ROI—all through content that aligned with its brand values.",
  },
  {
    title: "Honda UK’s “Cog” – Engineering Narrative",
    type: "Agency / Brand Awareness & Sales",
    challenge: "Honda needed to stand out in the fiercely competitive UK automotive market.",
    solution: "Developed a 120-second Rube Goldberg–style ad that dramatized the ingenuity of Honda Accord’s engineering.",
    results: "UK’s site traffic spiked — over 250,000 users accessed interactive content. Sales increased by 28%, ~£400M in extra revenue.",
    why: "Cog combined cinematic creativity with interaction, delivering extraordinary sales ROI and brand uplift.",
  },
  {
    title: "ReTreet Resort in Alabama",
    type: "Creator / Influencer-Led Launch",
    challenge: "Minimal brand awareness and credibility.",
    solution: "Partnered with trusted travel influencers to create high‑quality Instagram Reels and content.",
    results: "Revenue doubled, ROI increased from $13 to $28, Instagram followers grew 650%, and influencer visits drove bookings.",
    why: "Authentic partnerships dramatically amplified credibility, reach, and conversion.",
  },
  {
    title: "Shop Premium Outlets via Mavely",
    type: "Brand / Influencer Commerce",
    challenge: "Struggled to scale direct influencer-driven sales.",
    solution: "Integrated Mavely affiliate SmartLinks, influencer app placements, newsletters.",
    results: "100,000+ orders, 500% GMV growth, AOV up 30%, and 900% growth during promos.",
    why: "Affiliate infrastructure + influencer enablement unlocked massive social commerce ROI.",
  },
  {
    title: "ALDI Australia’s “Shop ALDI First” Campaign",
    type: "Brand / Trust & Conversion",
    challenge: "Positioning during cost-of-living crisis.",
    solution: "BMF’s campaign emphasized trust and savings; positioned ALDI against Woolworths/Coles.",
    results: "Won Grand Effie; became most trusted grocery brand. Surpassed competitors in consumer trust.",
    why: "Simple, trust-led messaging led to real share gains.",
  },
  {
    title: "Heinz’s Cannes Awarded Creative Campaign",
    type: "Brand / Sales Reversal & Share Growth",
    challenge: "Losing share in a declining ketchup category.",
    solution: "Focused on consistent creative storytelling around product heritage.",
    results: "Reversed decline, regained share, won Cannes, and grew revenue sustainably.",
    why: "Consistency + creativity reversed market decline and drove long-term growth.",
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-16">
      <h2 className="text-center text-4xl font-bold mb-4">
        Case Study <span className="text-red-500">Highlights</span>
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
        Explore proven strategies from brands, agencies, creators, and retailers who unlocked remarkable business results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-zinc-900 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-400 mb-1">{study.title}</h3>
            <p className="text-sm italic text-gray-400 mb-3">{study.type}</p>
            <p><strong>Challenge:</strong> {study.challenge}</p>
            <p><strong>Solution:</strong> {study.solution}</p>
            <p><strong>Results:</strong> {study.results}</p>
            <p className="text-green-300"><strong>Why It Matters:</strong> {study.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
