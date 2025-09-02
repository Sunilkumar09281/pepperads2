import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import useQueryParamsContent from '../hooks/useQueryParamsContent';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import StepsComponent from '../Animationcards/stepcards';


const Hero = () => {
  const navigate = useNavigate();
  const { title, image, paragraph } = useQueryParamsContent();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState(null);

  // Ensure email is loaded from user or localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (user?.email) {
      setEmail(user.email);
      localStorage.setItem('userEmail', user.email); // sync back to localStorage
    } else if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [user]);

  const handleStartSurvey = async () => {
    console.log("Start Creating button clicked!");
    console.log("Loading state:", loading);
    console.log("User state:", user);
    
    if (loading) {
      console.log("Still loading, returning...");
      return;
    }

    if (!user) {
      console.log("No user found, redirecting to login");
      alert("Please log in first to start creating.");
      navigate('/login');
      return;
    }

    // Get user data from authentication context
    const userData = {
      email: user.email,
      username: user.displayName || user.email?.split('@')[0] || 'User',
      uid: user.uid
    };

    console.log("User data prepared:", userData);

    try {
      console.log("Attempting to save email to backend...");
      // Optional: Save email to your backend if needed
      const response = await fetch('https://survey-ai-033z.onrender.com/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userData.email })
      });

      const data = await response.json();
      console.log("Flask backend response:", data);

      // Redirect to hostsliceresponse.web.app with user data
      const targetUrl = `https://hostsliceresponse.web.app/?email=${encodeURIComponent(userData.email)}&username=${encodeURIComponent(userData.username)}&uid=${encodeURIComponent(userData.uid)}`;
      console.log("Opening URL:", targetUrl);
      
      const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        console.error("Popup blocked! Trying location.href instead");
        window.location.href = targetUrl;
      } else {
        console.log("Successfully opened new window");
      }

    } catch (error) {
      console.error("Backend error:", error);
      // Still redirect even if backend call fails
      const targetUrl = `https://hostsliceresponse.web.app/?email=${encodeURIComponent(userData.email)}&username=${encodeURIComponent(userData.username)}&uid=${encodeURIComponent(userData.uid)}`;
      console.log("Opening URL (fallback):", targetUrl);
      
      const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        console.error("Popup blocked! Trying location.href instead");
        window.location.href = targetUrl;
      } else {
        console.log("Successfully opened new window (fallback)");
      }
    }
  };

  const defaultTitle = (
    <>
      Create Online Surveys, Forms & PDFs That
      <span className="text-[#E31B23]"> Work for You</span>
    </>
  );

  const defaultImage = "https://i.postimg.cc/mkTZMTHD/GW-Generated-Image-4-9-2025-3-10-32-PM.png";
  
  return (
    <>
      <section className="pt-10 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {title ? (
                  <>
                    {title} <span className="text-[#E31B23]">🌟</span>
                  </>
                ) : (
                  defaultTitle
                )}
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                {paragraph || "Build smart surveys fast — whether you want to create from scratch, upload a PDF, or generate one with AI."}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={handleStartSurvey} className="btn-primary flex items-center">
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => navigate('/contactUs')}
                  className="btn-secondary flex items-center">
                  Try AI Form Builder <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={image || defaultImage}
                alt="Survey Dashboard" 
                className="rounded-lg shadow-2xl pb-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#E31B23] text-white p-4 rounded-lg">
                <p className="font-semibold">✨ AI-Powered</p>
                <p className="text-sm">Generate forms instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
