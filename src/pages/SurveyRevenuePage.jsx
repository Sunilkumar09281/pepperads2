// SurveyMonetization.tsx
import React from 'react';

const SurveyMonetization = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">
          Survey <span className="text-red-400">Monetization</span>
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12">
          Turn every survey into a revenue engine — From optimized funnels to real-time dashboards, unlock the full earning potential of your audience engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Smart Offer Matching",
              desc: "Serve the right offers to the right users. Match your audience with high-converting surveys and campaigns for better ROI and user satisfaction."
            },
            {
              title: "Real-Time Dashboard & Pepeleads",
              desc: "Monitor traffic, conversions, and earnings effortlessly. Our intuitive dashboard gives you full visibility into performance across campaigns."
            },
            {
              title: " Funnels That Convert",
              desc: "Build survey flows that guide users seamlessly—from initial click to qualified action. Retain interest and drive quality traffic every step of the way."
            },
            {
              title: "Automation & Rewards",
              desc: "Reward your audience instantly after survey completion. Set up automated incentives that encourage repeat engagement and boost retention."
            }
          ].map((card, i) => (
            <div key={i} className="bg-[#111] rounded-xl p-6 hover:shadow-green-500/30 transition-shadow shadow-md">
              <h3 className="text-xl font-semibold text-red-400 mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyMonetization;
