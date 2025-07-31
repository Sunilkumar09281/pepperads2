import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CustomerFeedback = () => {
  const navigate = useNavigate();

  const styles = {
    body: {
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: '#fff',
      lineHeight: 1.6,
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
        background: 'linear-gradient(145deg, rgba(40,0,0,0.7), rgba(20,0,0,0.6))',
        borderRadius: '20px',
        maxWidth: '900px',
        margin: '20px auto',
        padding: '40px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(227, 27, 35, 0.2)', // subtle red border
        boxShadow: '0 8px 30px rgba(227, 27, 35, 0.4)', // red glow
      },
      
    surveyScroll: {
      maxHeight: '400px',
      overflowY: 'auto',
      paddingRight: '15px',
    },
    question: {
      marginBottom: '25px',
    },
    questionTitle: {
      fontSize: '1.1rem',
      fontWeight: 500,
      marginBottom: '10px',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
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
        color: '#ccc',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        ':hover': {
          color: '#E31B23',
        },
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
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
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
    submitButton: {
        marginTop: '30px',
        backgroundColor: '#E31B23',
        color: '#fff',
        padding: '14px 30px',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 12px rgba(227, 27, 35, 0.3)',
        transition: 'all 0.3s ease',
      },
    featureImage: {
      maxWidth: '100%',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
  };

  // CSS for the custom scrollbar would need to be in a separate CSS file
  const scrollbarStyles = `
    .survey-scroll::-webkit-scrollbar {
      width: 8px;
    }
    
    .survey-scroll::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    
    .survey-scroll::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  return (
    <div style={styles.body}>
      <style>{scrollbarStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Customer Feedback" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Customer <span style={styles.accent}>Feedback</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Gather powerful insights</span> from your customers using our ready-to-use customer feedback form templates
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Survey Window */}
        <div style={styles.surveyWindow}>
          <div style={styles.surveyScroll} className="survey-scroll">
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>1. How would you rate your overall experience with our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-1" 
                    name="q1" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q1-1" style={styles.optionLabel}>Excellent</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-2" 
                    name="q1" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q1-2" style={styles.optionLabel}>Good</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-3" 
                    name="q1" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q1-3" style={styles.optionLabel}>Average</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-4" 
                    name="q1" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q1-4" style={styles.optionLabel}>Poor</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q1-5" 
                    name="q1" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q1-5" style={styles.optionLabel}>Very Poor</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>2. How likely are you to recommend our product to a friend or colleague?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-1" 
                    name="q2" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q2-1" style={styles.optionLabel}>Very Likely</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-2" 
                    name="q2" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q2-2" style={styles.optionLabel}>Likely</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-3" 
                    name="q2" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q2-3" style={styles.optionLabel}>Neutral</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-4" 
                    name="q2" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q2-4" style={styles.optionLabel}>Unlikely</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q2-5" 
                    name="q2" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q2-5" style={styles.optionLabel}>Very Unlikely</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>3. Which feature do you find most valuable?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q3-1" 
                    name="q3" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q3-1" style={styles.optionLabel}>User Interface</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q3-2" 
                    name="q3" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q3-2" style={styles.optionLabel}>Performance</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q3-3" 
                    name="q3" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q3-3" style={styles.optionLabel}>Customer Support</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q3-4" 
                    name="q3" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q3-4" style={styles.optionLabel}>Pricing</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q3-5" 
                    name="q3" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q3-5" style={styles.optionLabel}>Reliability</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>4. What was your primary reason for choosing our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q4-1" 
                    name="q4" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q4-1" style={styles.optionLabel}>Features</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q4-2" 
                    name="q4" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q4-2" style={styles.optionLabel}>Price</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q4-3" 
                    name="q4" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q4-3" style={styles.optionLabel}>Ease of use</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q4-4" 
                    name="q4" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q4-4" style={styles.optionLabel}>Recommendation</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q4-5" 
                    name="q4" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q4-5" style={styles.optionLabel}>Brand reputation</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>5. How often do you use our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q5-1" 
                    name="q5" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q5-1" style={styles.optionLabel}>Daily</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q5-2" 
                    name="q5" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q5-2" style={styles.optionLabel}>Weekly</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q5-3" 
                    name="q5" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q5-3" style={styles.optionLabel}>Monthly</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q5-4" 
                    name="q5" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q5-4" style={styles.optionLabel}>Rarely</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q5-5" 
                    name="q5" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q5-5" style={styles.optionLabel}>First time user</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>6. How satisfied are you with our customer service?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q6-1" 
                    name="q6" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q6-1" style={styles.optionLabel}>Very satisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q6-2" 
                    name="q6" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q6-2" style={styles.optionLabel}>Satisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q6-3" 
                    name="q6" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q6-3" style={styles.optionLabel}>Neutral</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q6-4" 
                    name="q6" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q6-4" style={styles.optionLabel}>Dissatisfied</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q6-5" 
                    name="q6" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q6-5" style={styles.optionLabel}>Very dissatisfied</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>7. What improvements would you like to see in our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q7-1" 
                    name="q7" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q7-1" style={styles.optionLabel}>More features</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q7-2" 
                    name="q7" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q7-2" style={styles.optionLabel}>Better performance</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q7-3" 
                    name="q7" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q7-3" style={styles.optionLabel}>Improved user interface</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q7-4" 
                    name="q7" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q7-4" style={styles.optionLabel}>Lower price</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q7-5" 
                    name="q7" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q7-5" style={styles.optionLabel}>Better support</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>8. How easy was it to get started with our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q8-1" 
                    name="q8" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q8-1" style={styles.optionLabel}>Very easy</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q8-2" 
                    name="q8" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q8-2" style={styles.optionLabel}>Easy</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q8-3" 
                    name="q8" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q8-3" style={styles.optionLabel}>Neutral</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q8-4" 
                    name="q8" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q8-4" style={styles.optionLabel}>Difficult</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q8-5" 
                    name="q8" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q8-5" style={styles.optionLabel}>Very difficult</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>9. Did our product meet your expectations?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q9-1" 
                    name="q9" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q9-1" style={styles.optionLabel}>Exceeded expectations</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q9-2" 
                    name="q9" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q9-2" style={styles.optionLabel}>Met expectations</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q9-3" 
                    name="q9" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q9-3" style={styles.optionLabel}>Partially met expectations</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q9-4" 
                    name="q9" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q9-4" style={styles.optionLabel}>Did not meet expectations</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q9-5" 
                    name="q9" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q9-5" style={styles.optionLabel}>Unsure</label>
                </div>
              </div>
            </div>
            
            <div style={styles.question}>
              <h3 style={styles.questionTitle}>10. Would you purchase from us again?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q10-1" 
                    name="q10" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q10-1" style={styles.optionLabel}>Definitely</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q10-2" 
                    name="q10" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q10-2" style={styles.optionLabel}>Probably</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q10-3" 
                    name="q10" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q10-3" style={styles.optionLabel}>Not sure</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q10-4" 
                    name="q10" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q10-4" style={styles.optionLabel}>Probably not</label>
                </div>
                <div style={styles.option}>
                  <input 
                    type="radio" 
                    id="q10-5" 
                    name="q10" 
                    style={styles.optionInput} 
                  />
                  <label htmlFor="q10-5" style={styles.optionLabel}>Definitely not</label>
                </div>
                
              </div>
             
            </div>

          </div>
          <button 
  onClick={() => navigate('/login')}
  style={styles.ctaButton}
  className="hover:bg-red-600 transition"
>
  Submit Feedback Form
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Main Content */}
        <div style={styles.flexSection}>
          {/* Easy Collection Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Easy Collection</h3>
              <p style={styles.sectionText}>
                Whether you're collecting product reviews, support ratings, or NPS scores, these templates make it easy to ask the right questions. Perfect for ecommerce brands, service providers, or app developers who want to improve user experience.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/D0LrcWXn/feed.jpg" alt="Easy Feedback Collection" style={styles.featureImage} />
              </div>
            </div>
          </div>
          
          {/* Monetization Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/gJnFrp6v/monetization.jpg" alt="Feedback Monetization" style={styles.featureImage} />
              </div>
            </div>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Engagement & Monetization</h3>
              <p style={styles.sectionText}>
                Creators who use feedback forms as part of lead generation funnels can also tie these surveys to larger user engagement paths — including rewards and bonuses for participation. We've seen partners utilize such feedback flows within traffic monetization strategies, turning every form submission into valuable insight <strong>and</strong> potential earnings.
              </p>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          As the digital world becomes more interactive, we're empowering every user to create feedback forms that do more than just collect information.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button 
  onClick={() => navigate('/login')}
  style={styles.ctaButton}
  className="hover:bg-red-600 transition"
>
  Start creating Feedback Form
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Form Templates</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50k+</div>
            <div style={styles.statLabel}>Active Users Globally</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>1M+</div>
            <div style={styles.statLabel}>Forms Created Globally</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;