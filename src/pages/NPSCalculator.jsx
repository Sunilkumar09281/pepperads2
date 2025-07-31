import React, { useState } from 'react';

const NPSCalculator = () => {
  const [promoters, setPromoters] = useState('');
  const [passives, setPassives] = useState('');
  const [detractors, setDetractors] = useState('');
  const [nps, setNps] = useState(null);

  const calculateNPS = () => {
    const total = Number(promoters) + Number(passives) + Number(detractors);
    if (total === 0) return;
    const result = ((promoters - detractors) / total) * 100;
    setNps(result.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 font-sans">
      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">NPS Calculator</h1>
      <p className="mb-12 text-gray-300 text-xl text-center max-w-3xl mx-auto">
        Use this tool to calculate your Net Promoter Score and understand customer loyalty.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <label className="block mb-3 text-lg font-semibold">Promoters (9–10)</label>
          <input
            type="number"
            value={promoters}
            onChange={(e) => setPromoters(e.target.value)}
            className="w-full px-5 py-3 rounded text-black text-lg"
            placeholder="Enter number"
          />
        </div>
        <div>
          <label className="block mb-3 text-lg font-semibold">Passives (7–8)</label>
          <input
            type="number"
            value={passives}
            onChange={(e) => setPassives(e.target.value)}
            className="w-full px-5 py-3 rounded text-black text-lg"
            placeholder="Enter number"
          />
        </div>
        <div>
          <label className="block mb-3 text-lg font-semibold">Detractors (0–6)</label>
          <input
            type="number"
            value={detractors}
            onChange={(e) => setDetractors(e.target.value)}
            className="w-full px-5 py-3 rounded text-black text-lg"
            placeholder="Enter number"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={calculateNPS}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-lg rounded"
        >
          Calculate NPS
        </button>
      </div>

      {/* Result */}
      {nps !== null && (
        <div className="mt-8 text-2xl text-center">
          <p>
            Your Net Promoter Score (NPS) is:{" "}
            <span className="font-bold text-green-400">{nps}</span>
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">What is NPS?</h3>
        <p className="text-gray-300 text-lg mb-5">
          Net Promoter Score (NPS) is a powerful metric used to measure customer loyalty. It's derived from asking a single key question:
        </p>
        <p className="text-red-400 italic text-xl mb-8">
          “On a scale from 0 to 10, how likely are you to recommend our product or service to a friend or colleague?”
        </p>

        <p className="mb-5 font-semibold text-2xl">Based on responses, customers fall into three categories:</p>
        <ul className="list-disc list-inside text-left text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          <li><strong>Promoters (9–10):</strong> Enthusiastic, loyal customers likely to refer others and fuel growth.</li>
          <li><strong>Passives (7–8):</strong> Satisfied but unenthusiastic customers vulnerable to competitors.</li>
          <li><strong>Detractors (0–6):</strong> Unhappy customers who can harm your brand through negative word-of-mouth.</li>
        </ul>

        <p className="mb-4 font-semibold text-2xl">The NPS formula is:</p>
        <p className="text-white text-2xl font-mono mb-6">
          NPS = % Promoters − % Detractors
        </p>
        <p className="text-gray-300 text-lg">
          A score above 0 is considered good. A score above 50 is excellent.
        </p>
      </div>
    </div>
  );
};

export default NPSCalculator;
