import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseAPlan = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Team Advantage",
      price: "$18.50 per user monthly",
      subText: "Starting at 3 users, billed annually",
      features: [
        "Survey sharing with view/edit control",
        "Centralized comment collection",
        "Team analysis, filtering & exporting",
        "Notifications for new responses",
        "Shared asset library for branding",
        "Add or reassign contributor seats anytime",
        "Free integrations with popular collaboration apps",
        "50,000 responses/year ($0.06/additional response)",
        "24/7 expedited email support",
        "Quizzes with custom feedback",
        "Custom logo, colors, survey URL",
        "Skip logic, question & answer piping",
        "All data exports (CSV, XLS, PPT, PDF)",
      ],
    },
    {
      title: "Team Premier",
      price: "$45.50 per user monthly",
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
        "Response Quality metrics",
        "Survey completion redirect",
        "Priority onboarding assistance",
        "Audit logs and compliance reports",
        "Data export automation",
        "Custom user permissions",
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
        "Unlimited API accessFlexible user types",
        "HIPAA-compliant features",
        "Custom branding and white-label options",
        "Salesforce, Marketo, Eloqua, Tableau integrations",
        "Admin dashboard, user control, and migration",
        "Enhanced governance and securitySingle sign-on (SSO)",
        "Audit log activity tracking",
        "Dedicated customer success manager",
        "Legal & compliance reviews",
        "Custom SLA and support terms",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-14 px-4">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold">
          Choose a <span className="text-red-600">Plan</span>
        </h1>
        <p className="text-gray-300 text-xl mt-4">
          Find a plan that fits your needs. Whether you're just getting started or scaling up, we've got you covered.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-black border-2 border-red-600 rounded-2xl p-8 shadow-xl hover:shadow-red-700 transition duration-300"
          >
            <h2 className="text-5xl font-bold text-center mb-3">{plan.title}</h2>
            <p className="text-red-500 text-2xl font-semibold text-center">{plan.price}</p>
            {plan.subText && (
              <p className="text-gray-400 text-lg text-center mb-6">{plan.subText}</p>
            )}
            <ul className="text-gray-300 text-lg list-disc list-inside space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/login")}
                className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-red-500 transition"
              >
                Choose your plan
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Still not sure which plan is right for you?
        </h3>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
          Contact our support team for a personalized recommendation, or explore our FAQ to learn more about each plan’s features and benefits.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-red-500 transition"
        >
          Choose your plan
        </button>
      </div>
    </div>
  );
};

export default ChooseAPlan;
