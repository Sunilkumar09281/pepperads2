import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Clock, Users, Check } from 'lucide-react';

const EventSignup = () => {
  const navigate = useNavigate();

  const [eventType, setEventType] = useState('conference');

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
    signupWindow: {
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
    eventTypeSelector: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap',
      marginBottom: '30px',
    },
    eventTypeButton: {
      background: 'rgba(50, 50, 50, 0.4)',
      border: '2px solid transparent',
      borderRadius: '12px',
      padding: '12px 20px',
      fontSize: '1rem',
      color: '#ccc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    eventTypeButtonActive: {
      borderColor: '#E31B23',
      background: 'rgba(60, 30, 30, 0.4)',
      color: '#fff',
    },
    eventDetails: {
      background: 'rgba(40, 40, 40, 0.4)',
      borderRadius: '15px',
      padding: '25px',
      marginBottom: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    eventHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '10px',
    },
    eventTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    eventBadge: {
      background: '#E31B23',
      color: '#fff',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500',
    },
    eventProperty: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1rem',
      color: '#ddd',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: '500',
      marginBottom: '8px',
      color: '#eee',
    },
    formInput: {
      width: '100%',
      background: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: '#fff',
      padding: '12px 15px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
    },
    formSelect: {
      width: '100%',
      background: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: '#fff',
      padding: '12px 15px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    ticketOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '30px',
    },
    ticketOption: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(50, 50, 50, 0.4)',
      borderRadius: '12px',
      padding: '15px 20px',
      borderLeft: '4px solid #E31B23',
    },
    ticketDetails: {
      flex: 1,
    },
    ticketName: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '5px',
    },
    ticketDescription: {
      fontSize: '0.9rem',
      color: '#aaa',
    },
    ticketPrice: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#E31B23',
    },
    ticketSelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    ticketQuantity: {
      width: '50px',
      textAlign: 'center',
      background: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: '#fff',
      padding: '8px',
      fontSize: '1rem',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginTop: '20px',
    },
    checkbox: {
      accentColor: '#E31B23',
      width: '18px',
      height: '18px',
      cursor: 'pointer',
    },
    perksList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '20px',
    },
    perkItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    checkCircle: {
      color: '#E31B23',
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
  };

  const scrollbarStyles = `
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
        <img src="/api/placeholder/1200/500" alt="Event Signup" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Event <span style={styles.accent}>Signup</span>
          </h1>
          <p style={styles.heroSubtitle}>
            <span style={styles.accent}>Streamline registrations</span> for your online and offline events with our customizable signup templates
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Event Signup Form */}
        <div style={styles.signupWindow}>
          {/* Event Type Selector */}
          <div style={styles.eventTypeSelector}>
            <button 
              style={{
                ...styles.eventTypeButton,
                ...(eventType === 'conference' ? styles.eventTypeButtonActive : {})
              }}
              onClick={() => setEventType('conference')}
            >
              <Users size={18} />
              Conference
            </button>
            <button 
              style={{
                ...styles.eventTypeButton,
                ...(eventType === 'webinar' ? styles.eventTypeButtonActive : {})
              }}
              onClick={() => setEventType('webinar')}
            >
              <Calendar size={18} />
              Webinar
            </button>
            <button 
              style={{
                ...styles.eventTypeButton,
                ...(eventType === 'workshop' ? styles.eventTypeButtonActive : {})
              }}
              onClick={() => setEventType('workshop')}
            >
              <Clock size={18} />
              Workshop
            </button>
            <button 
              style={{
                ...styles.eventTypeButton,
                ...(eventType === 'meetup' ? styles.eventTypeButtonActive : {})
              }}
              onClick={() => setEventType('meetup')}
            >
              <MapPin size={18} />
              Meetup
            </button>
          </div>
          
          {/* Event Details */}
          <div style={styles.eventDetails}>
            <div style={styles.eventHeader}>
              <h2 style={styles.eventTitle}>Digital Marketing Summit 2025</h2>
              <span style={styles.eventBadge}>Limited Seats</span>
            </div>
            
            <div style={styles.eventProperty}>
              <Calendar size={18} />
              <span>September 28-30, 2025</span>
            </div>
            
            <div style={styles.eventProperty}>
              <MapPin size={18} />
              <span>Tech Conference Center, San Francisco</span>
            </div>
            
            <div style={styles.eventProperty}>
              <Clock size={18} />
              <span>9:00 AM - 5:00 PM (PST)</span>
            </div>
            
            <div style={styles.eventProperty}>
              <Users size={18} />
              <span>Expected Attendees: 500+</span>
            </div>
          </div>
          
          {/* Registration Form */}
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>First Name *</label>
              <input 
                type="text" 
                placeholder="Enter your first name" 
                style={styles.formInput} 
                required 
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Last Name *</label>
              <input 
                type="text" 
                placeholder="Enter your last name" 
                style={styles.formInput} 
                required 
              />
            </div>
          </div>
          
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email Address *</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={styles.formInput} 
                required 
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                style={styles.formInput} 
              />
            </div>
          </div>
          
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Company/Organization</label>
              <input 
                type="text" 
                placeholder="Enter your company name" 
                style={styles.formInput} 
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Job Title</label>
              <input 
                type="text" 
                placeholder="Enter your job title" 
                style={styles.formInput} 
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Which sessions are you interested in?</label>
            <select style={styles.formSelect}>
              <option value="">Select your interest</option>
              <option value="content">Content Marketing</option>
              <option value="seo">SEO Strategies</option>
              <option value="social">Social Media Marketing</option>
              <option value="analytics">Analytics & Data</option>
              <option value="all">All Sessions</option>
            </select>
          </div>
          
          {/* Ticket Options */}
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginTop: '30px', marginBottom: '20px'}}>
            Choose Your Ticket
          </h3>
          
          <div style={styles.ticketOptions}>
            <div style={styles.ticketOption}>
              <div style={styles.ticketDetails}>
                <h4 style={styles.ticketName}>Early Bird</h4>
                <p style={styles.ticketDescription}>Access to all sessions and workshops</p>
              </div>
              <div style={styles.ticketPrice}>$299</div>
              <div style={styles.ticketSelector}>
                <select style={styles.ticketQuantity}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            
            <div style={styles.ticketOption}>
              <div style={styles.ticketDetails}>
                <h4 style={styles.ticketName}>VIP Pass</h4>
                <p style={styles.ticketDescription}>Premium seating, exclusive networking event</p>
              </div>
              <div style={styles.ticketPrice}>$499</div>
              <div style={styles.ticketSelector}>
                <select style={styles.ticketQuantity}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
            
            <div style={styles.ticketOption}>
              <div style={styles.ticketDetails}>
                <h4 style={styles.ticketName}>Team Bundle (5 tickets)</h4>
                <p style={styles.ticketDescription}>Group discount, shared materials</p>
              </div>
              <div style={styles.ticketPrice}>$1,199</div>
              <div style={styles.ticketSelector}>
                <select style={styles.ticketQuantity}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>
          
          <div style={styles.perksList}>
            <div style={styles.perkItem}>
              <Check size={18} style={styles.checkCircle} />
              <span>Confirmation email with event details</span>
            </div>
            <div style={styles.perkItem}>
              <Check size={18} style={styles.checkCircle} />
              <span>Calendar invitation for your schedule</span>
            </div>
            <div style={styles.perkItem}>
              <Check size={18} style={styles.checkCircle} />
              <span>Post-event access to presentation materials</span>
            </div>
          </div>
          
          <div style={styles.checkboxContainer}>
            <input type="checkbox" id="newsletter" style={styles.checkbox} />
            <label htmlFor="newsletter">Subscribe to our newsletter for future events</label>
          </div>
          
          <div style={styles.checkboxContainer}>
            <input type="checkbox" id="terms" style={styles.checkbox} required />
            <label htmlFor="terms">I agree to the terms and conditions</label>
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
          {/* RSVP Management Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Manage RSVPs & Registrations</h3>
              <p style={styles.sectionText}>
                Manage RSVPs, signups, and registrations for online or offline events using our clean, easy-to-edit event signup templates. You can customize branding, add confirmation emails, and even collect feedback post-event. Popular with educators, creators, and community managers, these templates streamline your registration process.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/mrQ764VW/register.jpg" alt="Event Registration" style={styles.featureImage} />
              </div>
            </div>
          </div>
          
          {/* Traffic Segmentation Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={styles.flexLeft}>
              <h3 style={styles.sectionTitle}>Segment Traffic & Drive Engagement</h3>
              <p style={styles.sectionText}>
                These templates are also used by publishers to drive segmented traffic into high-intent journeys. Some of our top partners use event forms to segment users before sending them into incentivized flows (like surveys or offers), maximizing engagement and converting audience interest into meaningful actions.
              </p>
            </div>
            <div style={styles.flexRight}>
              <div style={styles.imageContainer}>
                <img src="https://i.postimg.cc/d1hwVsfz/traffic.avif" alt="Traffic Segmentation" style={styles.featureImage} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Line */}
        <p style={styles.centeredText}>
          Create professional event registration experiences that collect the right information while providing a seamless signup flow for your attendees.
        </p>
        
        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button 
  style={styles.ctaButton}
  onClick={() => navigate('/login')}
>
  Create Event Signup Form
  <ArrowRight size={24} />
</button>

        </div>
        
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10000+</div>
            <div style={styles.statLabel}>Events Managed Globally</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>98%</div>
            <div style={styles.statLabel}>Completion Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2.5M+</div>
            <div style={styles.statLabel}>Registrations Processed Globally</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSignup;