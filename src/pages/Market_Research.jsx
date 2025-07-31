import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight, BarChart } from 'lucide-react';

const Market_Research = () => {
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
      border: '1px solid rgba(227, 27, 35, 0.2)',
      boxShadow: '0 8px 30px rgba(227, 27, 35, 0.4)',
    },
    tabContainer: {
      display: 'flex',
      marginBottom: '30px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    tab: {
      padding: '12px 20px',
      fontSize: '1.1rem',
      fontWeight: '500',
      color: '#aaa',
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
      transition: 'all 0.3s ease',
    },
    activeTab: {
      color: '#fff',
      borderBottom: '3px solid #E31B23',
    },
    surveyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
    surveyQuestion: {
      background: 'rgba(40, 40, 40, 0.4)',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    questionTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '15px',
      color: '#eee',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
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
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    },
    optionLabel: {
      color: '#ccc',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    textareaContainer: {
      marginTop: '30px',
    },
    textarea: {
      width: '100%',
      background: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: '#fff',
      padding: '15px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
    },
    rangeLabelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      color: '#aaa',
      fontSize: '0.9rem',
    },
    rangeInput: {
      width: '100%',
      accentColor: '#E31B23',
      height: '8px',
      borderRadius: '4px',
      cursor: 'pointer',
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
      fontWeight: '600',
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
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    surveyTypeRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '30px',
    },
    surveyTypeCard: {
      flex: '1 1 200px',
      background: 'rgba(50, 50, 50, 0.4)',
      borderRadius: '10px',
      padding: '15px',
      cursor: 'pointer',
      border: '2px solid transparent',
      transition: 'all 0.3s ease',
    },
    surveyTypeCardActive: {
      borderColor: '#E31B23',
      background: 'rgba(60, 30, 30, 0.4)',
    },
    surveyTypeTitle: {
      fontSize: '1rem',
      fontWeight: '500',
      marginBottom: '5px',
    },
    surveyTypeDesc: {
      fontSize: '0.85rem',
      color: '#aaa',
    },
    analyticsSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '25px',
      background: 'rgba(40, 40, 40, 0.6)',
      borderRadius: '15px',
      marginTop: '40px',
    },
    analyticsIcon: {
      fontSize: '2rem',
      color: '#E31B23',
    },
    analyticsContent: {
      flex: 1,
    },
    analyticsTitle: {
      fontSize: '1.2rem',
      fontWeight: '500',
      marginBottom: '5px',
    },
    analyticsDesc: {
      color: '#aaa',
      lineHeight: 1.6,
    },
  };

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
        <img src="/api/placeholder/1200/500" alt="Marketing Survey" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Marketing <span style={styles.accent}>Survey</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Understand your audience</span> and optimize campaigns with data-driven insights from our marketing survey templates
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Survey Type Selection */}
        <div style={styles.surveyWindow}>
          <div style={styles.surveyTypeRow}>
            <div style={{...styles.surveyTypeCard, ...styles.surveyTypeCardActive}}>
              <h4 style={styles.surveyTypeTitle}>Product Launch</h4>
              <p style={styles.surveyTypeDesc}>Gather feedback on new products</p>
            </div>
            <div style={styles.surveyTypeCard}>
              <h4 style={styles.surveyTypeTitle}>Brand Perception</h4>
              <p style={styles.surveyTypeDesc}>Measure brand awareness</p>
            </div>
            <div style={styles.surveyTypeCard}>
              <h4 style={styles.surveyTypeTitle}>Competitor Analysis</h4>
              <p style={styles.surveyTypeDesc}>Compare against competitors</p>
            </div>
            <div style={styles.surveyTypeCard}>
              <h4 style={styles.surveyTypeTitle}>Target audience profile</h4>
              <p style={styles.surveyTypeDesc}>Understand your audience</p>
            </div>
          </div>
          
          {/* Survey Grid Layout */}
          <div style={styles.surveyGrid}>
            <div style={styles.surveyQuestion}>
              <h3 style={styles.questionTitle}>How did you hear about our product?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input type="radio" id="q1-1" name="q1" style={styles.optionInput} />
                  <label htmlFor="q1-1" style={styles.optionLabel}>Social Media</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q1-2" name="q1" style={styles.optionInput} />
                  <label htmlFor="q1-2" style={styles.optionLabel}>Search Engine</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q1-3" name="q1" style={styles.optionInput} />
                  <label htmlFor="q1-3" style={styles.optionLabel}>Friend/Referral</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q1-4" name="q1" style={styles.optionInput} />
                  <label htmlFor="q1-4" style={styles.optionLabel}>Advertisement</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q1-5" name="q1" style={styles.optionInput} />
                  <label htmlFor="q1-5" style={styles.optionLabel}>Other</label>
                </div>
              </div>
            </div>
            
            <div style={styles.surveyQuestion}>
              <h3 style={styles.questionTitle}>Which feature are you most excited about?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input type="checkbox" id="q2-1" name="q2" style={styles.optionInput} />
                  <label htmlFor="q2-1" style={styles.optionLabel}>AI Integration</label>
                </div>
                <div style={styles.option}>
                  <input type="checkbox" id="q2-2" name="q2" style={styles.optionInput} />
                  <label htmlFor="q2-2" style={styles.optionLabel}>Mobile Support</label>
                </div>
                <div style={styles.option}>
                  <input type="checkbox" id="q2-3" name="q2" style={styles.optionInput} />
                  <label htmlFor="q2-3" style={styles.optionLabel}>Data Analytics</label>
                </div>
                <div style={styles.option}>
                  <input type="checkbox" id="q2-4" name="q2" style={styles.optionInput} />
                  <label htmlFor="q2-4" style={styles.optionLabel}>Customization</label>
                </div>
                <div style={styles.option}>
                  <input type="checkbox" id="q2-5" name="q2" style={styles.optionInput} />
                  <label htmlFor="q2-5" style={styles.optionLabel}>Automation</label>
                </div>
              </div>
            </div>
            
            <div style={styles.surveyQuestion}>
              <h3 style={styles.questionTitle}>How likely are you to purchase in the next 30 days?</h3>
              <div style={styles.rangeLabelContainer}>
                <span>Not Likely</span>
                <span>Very Likely</span>
              </div>
              <input type="range" min="1" max="10" style={styles.rangeInput} />
            </div>
            
            <div style={styles.surveyQuestion}>
              <h3 style={styles.questionTitle}>Which industry best describes your business?</h3>
              <div style={styles.options}>
                <div style={styles.option}>
                  <input type="radio" id="q4-1" name="q4" style={styles.optionInput} />
                  <label htmlFor="q4-1" style={styles.optionLabel}>Technology</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q4-2" name="q4" style={styles.optionInput} />
                  <label htmlFor="q4-2" style={styles.optionLabel}>Healthcare</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q4-3" name="q4" style={styles.optionInput} />
                  <label htmlFor="q4-3" style={styles.optionLabel}>Education</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q4-4" name="q4" style={styles.optionInput} />
                  <label htmlFor="q4-4" style={styles.optionLabel}>E-commerce</label>
                </div>
                <div style={styles.option}>
                  <input type="radio" id="q4-5" name="q4" style={styles.optionInput} />
                  <label htmlFor="q4-5" style={styles.optionLabel}>Other</label>
                </div>
              </div>
            </div>
          </div>
          
          <div style={styles.textareaContainer}>
            <h3 style={styles.questionTitle}>What's the main challenge our product could help you solve?</h3>
            <textarea 
              placeholder="Tell us about your needs..." 
              style={styles.textarea}
            ></textarea>
          </div>
          
          <div style={styles.analyticsSection}>
            <BarChart size={40} color="#E31B23" />
            <div style={styles.analyticsContent}>
              <h4 style={styles.analyticsTitle}>Real-time Analytics</h4>
              <p style={styles.analyticsDesc}>
                See survey responses as they come in. Our dashboard gives you instant insights so you can make data-driven decisions faster.
              </p>
            </div>
          </div>
          
          <button 
  style={styles.ctaButton}
  onClick={() => navigate('/login')}
>
  Try this Template
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Main Content */}
        <div style={styles.flexSection}>
          {/* Testing Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Test Ideas & Understand Audience</h3>
              <p style={styles.sectionText}>
                Running a campaign? Launching a new product? Use our pre-made marketing survey templates to test ideas, understand your audience, and optimize messages. From A/B testing feedback to buyer persona research, these forms give marketers a smart head start.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/2yV8s8zc/audience.jpg" alt="Marketing Testing" style={styles.featureImage} />
              </div>
            </div>
          </div>
          
          {/* Conversion Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>High-Conversion Quiz Funnels</h3>
              <p style={styles.sectionText}>
                Many growth marketers and affiliate teams also repurpose these surveys for building high-conversion quiz funnels and post-click experiences. When paired with the analytics and offer automation tools in our <strong style={styles.accent}>partner dashboard</strong>, these templates can serve both branding and monetization purposes — especially for those in performance marketing and content monetization niches.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/NGC01VYs/3d-rendering-abstract-black-white-geometric-background-23-2150853677.jpg" alt="Conversion Funnels" style={styles.featureImage} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          Transform how you collect and leverage customer data with our marketing survey tools designed for both insights and revenue generation.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button 
  style={styles.ctaButton}
  onClick={() => navigate('/login')}
>
  Create Marketing Survey
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>45%</div>
            <div style={styles.statLabel}>Higher Conversion Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10000+</div>
            <div style={styles.statLabel}>Marketing Surveys Created Globally</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>3x</div>
            <div style={styles.statLabel}>ROI Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market_Research;