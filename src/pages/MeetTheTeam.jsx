import React from 'react';
import { User, Mail, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: 'Developers',
      role: '',
      bio: 'Our developers are building a fast, reliable backend with scalable infrastructure and seamless third-party integrations. They ensure the platform performs smoothly across devices and high-traffic environments.',
      image: 'https://i.pinimg.com/1200x/8e/90/80/8e9080b568929a595e9396ba8b23b04a.jpg',
    },
    {
      name: 'Designers',
      role: '',
      bio: 'Our designers focus on crafting clean, intuitive interfaces that make survey creation effortless. Their goal is to improve user experience and maximize form completion rates through smart design.',
      image: 'https://i.pinimg.com/736x/e5/07/a6/e507a6976227212ae105e91b75b7125d.jpg',
    },
    {
      name: 'Data Strategists',
      role: '',
      bio: 'Our data team works on optimizing how responses are collected, analyzed, and structured. They ensure partners get meaningful insights and actionable reporting from every campaign.',
      image: 'https://i.pinimg.com/1200x/64/92/8b/64928b4c618ce60985affe954b2f8b59.jpg',
    },
    {
      name: 'Marketers',
      role: '',
      bio: 'Our marketers experiment with affiliate strategies, monetization flows, and growth tactics. Their job is to help publishers and creators maximize revenue through smarter audience engagement.',
      image: 'https://i.pinimg.com/1200x/28/2d/03/282d03a423f03b0793a7c2e83deb04ea.jpg',
    },
    {
      name: 'Data Analysts',
      role: '',
      bio: 'Our data analysts dive deep into user behavior, form performance, and campaign metrics. They transform raw data into actionable insights—guiding product improvements, conversion strategies, and smarter decision-making across the platform.',
      image: 'https://i.pinimg.com/736x/ea/4d/88/ea4d886083a992fa149dce9fcf014355.jpg',
    },
    {
      name: 'Customer Success Team',
      role: '',
      bio: 'Together, we’re building a platform that’s simple enough for solo creators and powerful enough for enterprises—focused on performance, automation, and long-term partner value.',
      image: 'https://i.pinimg.com/736x/91/dc/94/91dc940d444ca40f6f7f92329842afbb.jpg',
    },
  ];
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Sparkling Effect */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* Sparkle Elements */}
        <div className="sparkle-container absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="sparkle absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-2">
            Meet Our <span className="text-red-600">Team</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Team Description */}
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <p className="text-xl text-gray-300">
          We're a scrappy team of developers, designers, marketers, and data strategists from around the world. Led by founders with experience in automation, affiliate marketing, and form-based tech, our goal is to build a platform that works not just for enterprises, but for solo creators and small teams too.
        </p>
        <p className="text-xl text-gray-300 mt-4">
          Many of us have backgrounds in audience monetization and growth marketing, which gives us unique insight into what forms convert best—both for data collection and revenue.
        </p>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                {/* Social Icons that appear on hover */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                    <User className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <h4 className="text-red-500 font-medium mb-3">{member.role}</h4>
                <p className="text-gray-400">{member.bio}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end">
                  <a href="#" className="text-sm text-red-500 flex items-center group/link">
                    <span className="group-hover/link:underline">View Profile</span>
                    <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join the Team CTA */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-gray-300 mb-6">
              The passionate minds shaping every pixel, product, and partnership.
              From developers to designers, each team member plays a role in making our platform simple, smart, and scalable.
            </p>
            <button
              onClick={() => navigate('/ContactUs')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
              View Option
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MeetTheTeam;
