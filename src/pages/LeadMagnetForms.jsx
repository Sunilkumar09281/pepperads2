import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const LeadMagnetForms = () => {
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
        <img src="/api/placeholder/1200/500" alt="Lead Magnet Forms" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Lead Magnet <span style={styles.accent}>Forms</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Pre-built templates optimized for collecting emails</span>, phone numbers, and custom data — perfect for gated content, webinars, or free downloads
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Main Content Description */}
        <div style={styles.templateWindow}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '25px'}}>
            Capture Leads & <span style={styles.accent}>Grow Your List</span>
          </h2>
          <p style={{...styles.sectionText, textAlign: 'center', marginBottom: '30px'}}>
            Built for marketers, content creators, and business owners, these templates are designed specifically for high-conversion lead generation. Each form is optimized to maximize completion rates while capturing the precise data you need to nurture relationships and drive business growth.
          </p>
          
          {/* Template Preview Grid */}
          <div style={styles.templateGrid}>
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>📚</div>
              <h3 style={styles.cardTitle}>Ebook Download</h3>
              <p style={styles.cardDescription}>
                Capture emails with a professional form designed specifically for digital content downloads.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>🎥</div>
              <h3 style={styles.cardTitle}>Webinar Registration</h3>
              <p style={styles.cardDescription}>
                Streamlined registration forms that boost webinar sign-ups with smart field validation.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>🔄</div>
              <h3 style={styles.cardTitle}>Multi-step Forms</h3>
              <p style={styles.cardDescription}>
                Progressive forms that increase completion rates by breaking the process into manageable steps.
              </p>
              <button style={styles.cardButton}>
                Preview <ArrowRight size={16} />
              </button>
            </div>
            
            <div style={styles.templateCard}>
              <div style={styles.cardIcon}>🛠️</div>
              <h3 style={styles.cardTitle}>Tool Access</h3>
              <p style={styles.cardDescription}>
                Gated access forms that provide value through free tools while capturing qualified leads.
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
            <h3 style={styles.featureTitle}>Drag & Drop Builder</h3>
            <p style={styles.featureDescription}>
              Customize any template with our intuitive drag-and-drop builder. Add fields, change colors, and match your brand identity without any coding required.
            </p>
          </div>
          
          <div style={styles.featureBox}>
            <h3 style={styles.featureTitle}>CRM & Email Marketing Integration</h3>
            <p style={styles.featureDescription}>
              Connect seamlessly with popular CRM and email marketing platforms. Automatically sync your leads and trigger follow-up sequences when forms are submitted.
            </p>
          </div>
          
          <div style={styles.featureBox}>
            <h3 style={styles.featureTitle}>Advanced Analytics & A/B Testing</h3>
            <p style={styles.featureDescription}>
              Track form performance with detailed analytics and optimize conversion rates through built-in A/B testing capabilities for form fields, layout, and messaging.
            </p>
          </div>
        </div>
        
        {/* Main Content Sections */}
        <div style={styles.flexSection}>
          {/* Conversion Optimization Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <h3 style={{...styles.sectionTitle, textAlign: 'center'}}>Conversion-Optimized Design</h3>
              <p style={{...styles.sectionText, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                Every form is built using data-driven best practices for maximum conversion. From smart field validation to progress indicators, these templates incorporate proven design elements that increase completion rates by up to 43%.
              </p>
            </div>
            <div style={styles.imageContainer}>
            <img
  src="https://i.postimg.cc/fTzR8cyB/smart-adult-caucasian-designer-with-beard-sitting-working-table-desk-video-conference-with-clients-y.avif"
  alt="Conversion-Optimized Design"
  style={{
    ...styles.featureImage,
    maxWidth: '500px',   // or 400px / 300px depending on your design
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    display: 'block'
  }}
/>
            </div>
          </div>
          
          {/* Automated Delivery Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.imageContainer}>
            <img
  src="https://i.postimg.cc/QtxPWd0N/adult-person-interacting-with-futuristic-delivery-robot-23-2151211027.jpg"
  alt="Conversion-Optimized Design"
  style={{
    ...styles.featureImage,
    maxWidth: '500px',   // or 400px / 300px depending on your design
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    display: 'block'
  }}
/>
            </div>
            <div>
              <h3 style={{...styles.sectionTitle, textAlign: 'center'}}>
                Automated <span style={styles.accent}>Content Delivery</span>
              </h3>
              <p style={{...styles.sectionText, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                Instantly deliver your lead magnets upon form submission. Our automated delivery system handles file storage, secure access links, and follow-up emails—all without requiring technical setup.
              </p>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          These professionally designed lead generation forms have helped businesses collect over 2 million qualified leads—with implementation times measured in minutes, not days.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button 
  style={styles.ctaButton}
  onClick={() => navigate('/login')}
>
  Browse Form Templates
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>43%</div>
            <div style={styles.statLabel}>Higher Conversion Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Template Designs</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2M+</div>
            <div style={styles.statLabel}>Leads Generated</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetForms;