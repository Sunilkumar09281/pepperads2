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
      <h1 className="text-4xl font-bold mb-4 text-center">NPS Calculator</h1>
      <p className="mb-10 text-gray-300 text-center max-w-xl mx-auto">
        Use this tool to calculate your Net Promoter Score and understand customer loyalty.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div>
          <label className="block mb-2 text-sm font-medium">Promoters (9–10)</label>
          <input
            type="number"
            value={promoters}
            onChange={(e) => setPromoters(e.target.value)}
            className="w-full px-4 py-2 rounded text-black"
            placeholder="Enter number"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Passives (7–8)</label>
          <input
            type="number"
            value={passives}
            onChange={(e) => setPassives(e.target.value)}
            className="w-full px-4 py-2 rounded text-black"
            placeholder="Enter number"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Detractors (0–6)</label>
          <input
            type="number"
            value={detractors}
            onChange={(e) => setDetractors(e.target.value)}
            className="w-full px-4 py-2 rounded text-black"
            placeholder="Enter number"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button
          onClick={calculateNPS}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
        >
          Calculate NPS
        </button>
      </div>

      {/* Result */}
      {nps !== null && (
        <div className="mt-6 text-xl text-center">
          <p>
            Your Net Promoter Score (NPS) is:{" "}
            <span className="font-bold text-green-400">{nps}</span>
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">What is NPS?</h3>
        <p className="text-gray-300 mb-4">
          Net Promoter Score (NPS) is a powerful metric used to measure customer loyalty. It's derived from asking a single key question:
        </p>
        <p className="text-red-400 italic mb-6">“On a scale from 0 to 10, how likely are you to recommend our product or service to a friend or colleague?”</p>

        <p className="mb-3 font-semibold text-lg text-center">
          Based on responses, customers fall into three categories:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mb-6 max-w-2xl mx-auto">
          <li><strong>Promoters (9–10):</strong> Enthusiastic, loyal customers likely to refer others and fuel growth.</li>
          <li><strong>Passives (7–8):</strong> Satisfied but unenthusiastic customers vulnerable to competitors.</li>
          <li><strong>Detractors (0–6):</strong> Unhappy customers who can harm your brand through negative word-of-mouth.</li>
        </ul>

        <p className="mb-3 font-semibold text-lg text-center">The NPS formula is:</p>
        <p className="text-white text-lg font-mono mb-4">
          NPS = % Promoters − % Detractors
        </p>
        <p className="text-gray-300">
          A score above 0 is considered good. A score above 50 is excellent.
        </p>
      </div>
    </div>
  );
};

export default NPSCalculator;
