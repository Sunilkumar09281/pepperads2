import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const EmployeeReview = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const styles = {
    body: {
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: '#fff',
      lineHeight: 1.6,
      backgroundImage: "url('/api/placeholder/1920/1080')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    hero: {
      position: 'relative',
      height: '500px',
      marginBottom: '60px',
    },
    heroImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, #000, transparent, #000)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      animation: 'fadeIn 2s ease-in-out',
    },
    accent: {
      color: '#E31B23',
    },
    surveyWindow: {
      background: 'rgba(0, 0, 0, 0.75)',
      borderRadius: '20px',
      maxWidth: '900px',
      margin: '20px auto',
      padding: '40px',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundImage: "url('/api/placeholder/900/600')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      position: 'relative',
      zIndex: 1,
    },
    surveyOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '20px',
      zIndex: -1,
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#E31B23',
    },
    question: {
      marginBottom: '30px',
      position: 'relative',
      zIndex: 2,
    },
    questionTitle: {
      fontSize: '1.1rem',
      fontWeight: 500,
      marginBottom: '15px',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    optionInput: {
      accentColor: '#E31B23',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    },
    optionLabel: {
      color: '#e0e0e0',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E31B23',
      color: 'white',
      padding: '14px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    successMessage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: '#4caf50',
      fontSize: '1.1rem',
      fontWeight: 500,
      marginTop: '20px',
      animation: 'fadeIn 0.3s ease-in-out',
    },
    flexSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
      margin: '80px 0',
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    },
    flexLeft: {
      flex: 1,
    },
    flexRight: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#E31B23',
    },
    sectionText: {
      color: '#aaa',
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
    centeredText: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '60px auto',
      fontSize: '1.2rem',
      color: '#bbb',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E31B23',
      color: 'white',
      padding: '14px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    ctaContainer: {
      textAlign: 'center',
      margin: '40px 0',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '60px',
    },
    statCard: {
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      borderRadius: '12px',
      padding: '30px 20px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#E31B23',
      marginBottom: '10px',
    },
    statLabel: {
      color: '#aaa',
      fontSize: '1.1rem',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    featureImage: {
      maxWidth: '100%',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    },
    textAreaContainer: {
      marginTop: '10px',
    },
    textArea: {
      width: '100%',
      minHeight: '100px',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(0, 0, 0, 0.3)',
      color: '#fff',
      fontSize: '1rem',
      resize: 'vertical',
    },
  };

  // CSS for the custom scrollbar and animations
  const extraStyles = `
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .option-input:hover {
      transform: scale(1.1);
    }

    .survey-window:hover {
      box-shadow: 0 12px 40px rgba(227, 27, 35, 0.2);
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }

    .submit-button:hover {
      background-color: #c71018;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(227, 27, 35, 0.4);
    }
  `;

  return (
    <div style={styles.body}>
      <style>{extraStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Employee Review" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Employee <span style={styles.accent}>Review</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Evaluate employee performance</span>, run self-assessments, or check workplace satisfaction with our employee review templates
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Survey Window */}
        <div style={styles.surveyWindow} className="survey-window">
          <div style={styles.surveyOverlay}></div>
          <h2 style={styles.formTitle}>Employee Performance Review</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>1. How would you rate your overall job satisfaction?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-1" 
                    name="q1" 
                    style={styles.optionInput} 
                    className="option-input"
                    required
                  />
                  <label htmlFor="q1-1" style={styles.optionLabel}>Very satisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-2" 
                    name="q1" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q1-2" style={styles.optionLabel}>Satisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-3" 
                    name="q1" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q1-3" style={styles.optionLabel}>Neutral</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-4" 
                    name="q1" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q1-4" style={styles.optionLabel}>Dissatisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-5" 
                    name="q1" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q1-5" style={styles.optionLabel}>Very dissatisfied</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>2. How would you rate the work-life balance at our company?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-1" 
                    name="q2" 
                    style={styles.optionInput} 
                    className="option-input"
                    required
                  />
                  <label htmlFor="q2-1" style={styles.optionLabel}>Excellent</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-2" 
                    name="q2" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q2-2" style={styles.optionLabel}>Good</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-3" 
                    name="q2" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q2-3" style={styles.optionLabel}>Average</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-4" 
                    name="q2" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q2-4" style={styles.optionLabel}>Poor</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-5" 
                    name="q2" 
                    style={styles.optionInput} 
                    className="option-input"
                  />
                  <label htmlFor="q2-5" style={styles.optionLabel}>Very poor</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>3. What areas do you think the company could improve?</h3>
              <div style={styles.textAreaContainer}>
                <textarea 
                  id="q3" 
                  name="q3" 
                  placeholder="Please share your thoughts here..." 
                  style={styles.textArea}
                  required
                />
              </div>
            </div>
            
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.submitButton} className="submit-button">
                Submit Review
              </button>
            </div>
            
            {submitted && (
              <div style={styles.successMessage}>
                <Check size={20} />
                Review submitted successfully!
              </div>
            )}
          </form>
        </div>
        
        {/* Main Content */}
        <div style={styles.flexSection}>
          {/* HR Professionals Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            }
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>For HR Professionals</h3>
              <p style={styles.sectionText}>
                Designed for HR professionals and team leads, these templates are structured for quick deployment and high response rates. From quarterly check-ins to remote team surveys, the system supports branded formats and response tracking.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/cCpKLNjx/Adobe-Express-file.png" alt="HR Dashboard" style={styles.featureImage} />
              </div>
            </div>
          </div>
          
          {/* Remote Teams Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            }
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Remote Team Solutions</h3>
              <p style={styles.sectionText}>
                Organizations with larger teams or remote models can also integrate these forms with bonus-based reward flows — and for those using gamified HR surveys, the structure works well with our publisher automation options that incentivize participation in meaningful ways.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/d00TnFb1/remotetem.jpg" alt="Remote Team Engagement" style={styles.featureImage} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          Create a culture of continuous improvement through feedback that empowers both employees and management to work toward shared goals.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
         <button 
  onClick={() => navigate('/login')}
  style={styles.ctaButton}
  className="hover:bg-red-600 transition"
>
  Create Your Employee Review Form
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard} className="stat-card">
            <div style={styles.statNumber}>89%</div>
            <div style={styles.statLabel}>Completion Rate</div>
          </div>
          <div style={styles.statCard} className="stat-card">
            <div style={styles.statNumber}>30+</div>
            <div style={styles.statLabel}>HR Templates</div>
          </div>
          <div style={styles.statCard} className="stat-card">
            <div style={styles.statNumber}>5k+</div>
            <div style={styles.statLabel}>Companies Using  Forms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeReview;