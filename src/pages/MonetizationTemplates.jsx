import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const MonetizationTemplates = () => {
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
    templateWindow: {
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
    templateGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '30px',
    },
    templateCard: {
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      borderRadius: '12px',
      padding: '25px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardIcon: {
      fontSize: '2rem',
      color: '#E31B23',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    cardDescription: {
      color: '#aaa',
      fontSize: '0.95rem',
      marginBottom: '15px',
      flex: 1,
    },
    cardButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      color: '#E31B23',
      fontSize: '0.9rem',
      fontWeight: '600',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '0',
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
      marginBottom: '30px',
    },
    featureBox: {
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      borderRadius: '12px',
      padding: '30px',
      marginBottom: '30px',
    },
    featureTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#E31B23',
    },
    featureDescription: {
      color: '#bbb',
      fontSize: '1.05rem',
      lineHeight: 1.6,
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
  };

  // CSS for animations would be in a separate CSS file
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 10px rgba(227, 27, 35, 0.5); }
      50% { box-shadow: 0 0 20px rgba(227, 27, 35, 0.8); }
      100% { box-shadow: 0 0 10px rgba(227, 27, 35, 0.5); }
    }
  `;

  return (
    <div style={styles.body}>
      <style>{animationStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Monetization Templates" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Monetization <span style={styles.accent}>Templates</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Convert interactions into revenue</span> with high-performance templates designed for publishers, creators, and growth marketers
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Main Content Description */}
        <div style={styles.templateWindow}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '25px'}}>
            Drive Engagement & <span style={styles.accent}>Monetization</span>
          </h2>
          <p style={{...styles.sectionText, textAlign: 'center', marginBottom: '30px'}}>
            Built for publishers, creators, and growth marketers, these templates are designed specifically for user engagement that leads to monetization. Whether it's a quiz that unlocks a reward, a feedback survey for app installs, or a sign-up form that drives incentive-based actions, these templates are optimized for conversion.
          </p>
          
          {/* Template Preview Grid */}
          <div style={styles.templateGrid}>
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>🏆</div>
              <h3 style={styles.cardTitle}>Quiz Rewards</h3>
              <p style={styles.cardDescription}>
                Engage users with interactive quizzes that unlock rewards, driving both engagement and monetization.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>📱</div>
              <h3 style={styles.cardTitle}>App Install Surveys</h3>
              <p style={styles.cardDescription}>
                Generate app installs through surveys that reward users for their feedback and participation.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>✉️</div>
              <h3 style={styles.cardTitle}>Sign-Up Incentives</h3>
              <p style={styles.cardDescription}>
                Convert visitors into leads with sign-up forms offering incentives for completing the process.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>🔄</div>
              <h3 style={styles.cardTitle}>Traffic Monetization</h3>
              <p style={styles.cardDescription}>
                Monetize your existing traffic through survey flows that connect to our offer ecosystem.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Feature Boxes */}
        <div style={{marginTop: '60px'}}>
          <div style={styles.featureBox}>
            <h3 style={styles.featureTitle}>Zero Coding Required</h3>
            <p style={styles.featureDescription}>
              Our templates are ready to deploy with no technical skills needed. Simply select your template, customize the content, and launch your campaign within minutes.
            </p>
          </div>
          
          <div style={styles.featureBox}>
            <h3 style={styles.featureTitle}>Track Responses & Automate Rewards</h3>
            <p style={styles.featureDescription}>
              Monitor engagement metrics in real-time and set up automatic reward distribution when users complete your desired actions, creating a seamless experience.
            </p>
          </div>
          
          <div style={styles.featureBox}>
            <h3 style={styles.featureTitle}>Offer Ecosystem Integration</h3>
            <p style={styles.featureDescription}>
              Plug directly into our high-quality offer ecosystem with pre-built integrations. Connect your templates to monetization opportunities with just a few clicks.
            </p>
          </div>
        </div>
        
        {/* Main Content Sections */}
        <div style={styles.flexSection}>
          {/* User Experience Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <h3 style={{...styles.sectionTitle, textAlign: 'center'}}>Seamless User Experience</h3>
              <p style={{...styles.sectionText, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                Drive monetization without sacrificing user experience. Our templates are designed to feel natural and engaging, maintaining the quality of your brand while generating revenue.
              </p>
            </div>
            <div style={styles.imageContainer}>
              <img src="https://i.postimg.cc/B6q0ttcv/ui-ux-representations-with-smartphone-23-2150201875.jpg" alt="Seamless User Experience" style={styles.featureImage} />
            </div>
          </div>
          
          {/* Partner Tools Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.imageContainer}>
              <img src="https://img.freepik.com/free-vector/paper-style-core-values-background_23-2149079276.jpg?semt=ais_hybrid&w=740" alt="Partner Tools Section" style={styles.featureImage} />
            </div>
            <div>
              <h3 style={{...styles.sectionTitle, textAlign: 'center'}}>
                Exclusive <span style={styles.accent}>Partner Tools</span> Access
              </h3>
              <p style={{...styles.sectionText, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                These powerful monetization templates are available under special access inside the partner tools section. Connect with our team to gain exclusive access and start leveraging these high-converting templates today.
              </p>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          Many partners use these templates to power traffic monetization through surveys and lead flows — all while maintaining a seamless user experience and maximizing revenue potential.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
  <button
    onClick={() => navigate('/login')}
    style={styles.ctaButton}
  >
    Explore Partner Tools Section
    <ArrowRight size={24} />
  </button>
</div>

        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2.5x</div>
            <div style={styles.statLabel}>Average ROI Increase</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>75%</div>
            <div style={styles.statLabel}>Completion Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Active Campaigns Globally</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationTemplates;