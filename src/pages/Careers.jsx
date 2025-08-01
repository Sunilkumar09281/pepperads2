import React from 'react';
import { Briefcase, Code, Brain, Palette, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {

  const positions = [
    {
      title: 'Frontend Developer',
      icon: <Code className="w-6 h-6 text-red-500" />,
      description: 'Build beautiful, responsive interfaces with React and modern web technologies.',
    },
    {
      title: 'AI Engineer',
      icon: <Brain className="w-6 h-6 text-red-500" />,
      description: 'Architect AI-powered systems for dynamic form creation and response analysis.',
    },
    {
      title: 'UX Designer',
      icon: <Palette className="w-6 h-6 text-red-500" />,
      description: 'Design intuitive, delightful user journeys for our form-building platform.',
    },
  ];
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team collaboration" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
          <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                Join Our <span className="text-red-600">Team</span>
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                Help build the future of forms and survey automation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Briefcase className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold">We're Hiring!</h2>
            </div>
            
            <p className="text-xl leading-relaxed text-gray-300 text-center mb-12">
              Whether you're into frontend development, automation, AI prompt design, data analytics or marketing strategy, 
              we want people who think fast, love structure, and enjoy working with creators and marketers.
            </p>

            {/* Position Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-md bg-black/40 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {position.icon}
                    <h3 className="text-xl font-bold text-red-500">{position.title}</h3>
                  </div>
                  <p className="text-gray-300">{position.description}</p>
                  <button 
                    onClick={() => navigate('/login')}

                    className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Requirements Section */}
            <div className="backdrop-blur-md bg-black/40 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">What We're Looking For</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Passion for UX and data-driven design
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Experience with modern web technologies
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Understanding of traffic monetization
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Knowledge of affiliate networks
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => navigate('/login')}
                className="group bg-red-600/90 backdrop-blur-sm hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2">
                View Current Openings
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
