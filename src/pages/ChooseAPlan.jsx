import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseAPlan = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Team Advantage",
      price: "₹1,550/user/month",
      subText: "Starting at 3 users, billed annually",
      features: [
        "Survey sharing with view/edit control",
        "Centralized comment collection",
        "Team analysis, filtering & exporting",
        "Notifications for new responses",
        "Shared asset library for branding",
        "Add or reassign contributor seats anytime",
        "Free integrations with popular collaboration apps",
        "50,000 responses/year (₹5.00/additional response)",
        "24/7 expedited email support",
        "Quizzes with custom feedback",
        "Custom logo, colors, survey URL",
        "Skip logic, question & answer piping",
        "All data exports (CSV, XLS, PPT, PDF, SPSS)",
        "Accept payments",
        "Text analysis & statistical significance",
        "Multi-survey analysis",
        "Advanced analyze features",
        "SurveyMonkey industry benchmarks",
        "Multilingual surveys",
      ],
    },
    {
      title: "Team Premier",
      price: "₹3,800/user/month",
      subText: "Starting at 3 users, billed annually",
      features: [
        "Everything in Team Advantage, plus:",
        "100,000 responses/year",
        "Phone support + 24/7 email support",
        "Click map data visualization",
        "Response Quality metrics",
        "Crosstabs",
        "Unlimited filters, compare rules, and trends",
        "Advanced survey logic tools",
        "Block randomization",
        "White-label surveys",
        "Survey completion redirect",
        "Remove SurveyMonkey footer",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      subText: "Contact us for a personalized quote",
      features: [
        "Everything in Team Premier, plus:",
        "Unlimited surveys and questions",
        "Advanced collaboration features",
        "Unlimited API access",
        "Flexible user types",
        "HIPAA-compliant features",
        "Custom branding and white-label options",
        "Salesforce, Marketo, Eloqua, Tableau integrations",
        "Admin dashboard, user control, and migration",
        "Enhanced governance and security",
        "Single sign-on (SSO)",
        "Audit log activity tracking",
        "Dedicated customer success manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Choose a <span className="text-red-600">Plan</span>
        </h1>
        <p className="text-gray-300 mt-4">
          Find a plan that fits your needs. Whether you're just getting started or scaling up, we've got you covered.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-black border-2 border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-700 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">{plan.title}</h2>
            <p className="text-red-500 text-lg font-semibold">{plan.price}</p>
            {plan.subText && (
              <p className="text-gray-400 text-sm mb-4">{plan.subText}</p>
            )}
            <ul className="text-gray-300 list-disc list-inside space-y-2 h-80 overflow-y-auto pr-2 scrollbar-hide">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
          onClick={() => navigate('/login')}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-red-300 transition"
        >
          Get started
        </button>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Still not sure which plan is right for you?
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Contact our support team for a personalized recommendation, or explore our FAQ to learn more about each plan’s features and benefits.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default ChooseAPlan;
