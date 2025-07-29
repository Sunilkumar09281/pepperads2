import React, { useState, useRef, useEffect } from 'react';
import './StepsComponent.css';

const StepsComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      title: "Know Your Audience",
      description: "Launch AI-powered surveys in seconds. Ask the right questions to uncover what your visitors want, who they are, and why they came to your site.",
      cta: "Free Expert Consultation"
    },
    {
      title: "Segment and Target",
      description: "Group users by behavior and responses. Create segments based on interest, intent, or value — so you can personalize offers and messages with precision.",
      cta: "Apply Now"
    },
    {
      title: "Monetize with Smart Offers",
      description: "Plug in affiliate or custom offers. PepperAds automatically matches the best-performing offer to each segment using real-time data.",
      cta: "Explore Options"
    },
    {
      title: "Optimize with Analytics",
      description: "Track clicks, earnings, and survey performance in your dashboard. Learn what works, improve what doesn’t, and grow smarter every day.",
      cta: "Get Help"
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (stepsRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = stepsRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
        
        const stepHeight = scrollHeight / steps.length;
        const currentStep = Math.floor(scrollTop / stepHeight);
        setActiveStep(currentStep);
      }
    };

    if (stepsRef.current) {
      stepsRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (stepsRef.current) {
        stepsRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="steps-container-dark">
      <div className="steps-left-dark" ref={stepsRef}>
        <h2 className="section-title-dark">
          4 Steps To Your <span className="text-red">Dream Destination</span>
        </h2>
        
        {/* Insect progress indicator */}
        <div className="insect-track">
          <div 
            className="insect" 
            style={{ transform: `translateY(${scrollProgress}%)` }}
          >
            <div className="insect-body"></div>
            <div className="insect-wings"></div>
          </div>
        </div>

        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`step-card-dark ${index === activeStep ? 'active-dark' : ''}`}
            onClick={() => {
              setActiveStep(index);
              // Smooth scroll to the step
              if (stepsRef.current) {
                const stepHeight = stepsRef.current.scrollHeight / steps.length;
                stepsRef.current.scrollTo({
                  top: stepHeight * index,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <div className="step-number-dark">{index + 1}</div>
            <div className="step-content-dark">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <button className="step-button-dark">
                {step.cta}
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
      
      <div className="steps-right-dark">
        <div className={`featured-card-dark ${activeStep % 2 === 0 ? 'float-animation-1' : 'float-animation-2'}`}>
          <div className="featured-number-dark">{activeStep + 1}</div>
          <div className="featured-content-dark">
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].description}</p>
            <button className="featured-button-dark">
              {steps[activeStep].cta}
              <span className="arrow">→</span>
            </button>
          </div>
          <div className="card-decoration-featured"></div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
