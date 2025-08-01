import React, { useState } from 'react';
import { BarChart3,ArrowRight, Zap, Database, Search, BookOpen, Copy, Star, Filter, ChevronDown, Tag, ThumbsUp } from 'lucide-react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIPromptsLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All Industries');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  
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
    searchContainer: {
      display: 'flex',
      maxWidth: '700px',
      margin: '0 auto 40px',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      background: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(227, 27, 35, 0.3)',
      borderRadius: '12px',
      padding: '16px 20px 16px 50px',
      fontSize: '1.1rem',
      color: '#fff',
      backdropFilter: 'blur(10px)',
    },
    searchIcon: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      color: '#E31B23',
    },
    filterBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '40px 0',
      flexWrap: 'wrap',
      gap: '20px',
    },
    categories: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    categoryButton: {
      padding: '10px 18px',
      backgroundColor: 'rgba(40, 40, 40, 0.8)',
      color: '#ccc',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '30px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    activeCategory: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      border: '1px solid rgba(227, 27, 35, 0.5)',
    },
    dropdownContainer: {
      position: 'relative',
    },
    dropdownButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      backgroundColor: 'rgba(40, 40, 40, 0.8)',
      color: '#ccc',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '10px',
      fontSize: '0.9rem',
      cursor: 'pointer',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '45px',
      right: '0',
      backgroundColor: 'rgba(30, 30, 30, 0.95)',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '10px',
      width: '200px',
      zIndex: 10,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    dropdownItem: {
      padding: '12px 15px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    promptsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '25px',
      margin: '30px 0',
    },
    promptCard: {
      background: 'linear-gradient(145deg, rgba(40,0,0,0.7), rgba(20,0,0,0.6))',
      borderRadius: '15px',
      overflow: 'hidden',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    promptHeader: {
      backgroundColor: 'rgba(227, 27, 35, 0.15)',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    promptTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    promptBody: {
      padding: '20px',
      minHeight: '180px',
    },
    promptText: {
      color: '#ccc',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    tagContainer: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '15px',
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      backgroundColor: 'rgba(227, 27, 35, 0.15)',
      color: '#E31B23',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.8rem',
    },
    promptFooter: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    promptStats: {
      display: 'flex',
      gap: '15px',
      color: '#aaa',
      fontSize: '0.9rem',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    copyButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    featuredPrompt: {
      background: 'linear-gradient(145deg, rgba(60,0,0,0.8), rgba(30,0,0,0.7))',
      borderRadius: '20px',
      padding: '30px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(227, 27, 35, 0.3)',
      boxShadow: '0 12px 40px rgba(227, 27, 35, 0.4)',
      margin: '20px 0 50px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    featuredHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#E31B23',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
    featuredTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    featuredDescription: {
      color: '#ccc',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      marginBottom: '20px',
    },
    featuredContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      color: '#bbb',
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    featuredFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px',
    },
    ctaSection: {
      textAlign: 'center',
      margin: '60px 0',
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    ctaText: {
      color: '#aaa',
      fontSize: '1.1rem',
      maxWidth: '700px',
      margin: '0 auto 30px',
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
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      margin: '40px 0',
    },
    pageButton: {
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      backgroundColor: 'rgba(40, 40, 40, 0.6)',
      color: '#ccc',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    activePage: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      border: '1px solid rgba(227, 27, 35, 0.5)',
    }
  };

  const categories = ['All', 'Feedback', 'Lead Generation', 'Customer Support', 'Product Research', 'Market Research', 'Employee Surveys'];
  
  const industries = ['All Industries', 'E-commerce', 'SaaS', 'Healthcare', 'Education', 'Finance', 'Real Estate', 'Travel', 'Food & Beverage', 'Entertainment'];
  
  const prompts = [
    {
      id: 1,
      title: "Product Satisfaction Survey",
      text: "What features of [product] do you use most? What improvements would make it more valuable to you?",
      category: "Feedback",
      industry: "E-commerce",
      tags: ["Customer Experience", "Product"],
      stats: { uses: 12.5, rating: 4.8 }
    },
    {
      id: 2,
      title: "Lead Qualification Questionnaire",
      text: "What pain points are you currently facing? What solutions have you tried before?",
      category: "Lead Generation",
      industry: "SaaS",
      tags: ["Sales", "B2B"],
      stats: { uses: 9.7, rating: 4.9 }
    },
    {
      id: 3,
      title: "Feature Prioritization Survey",
      text: "Which of these potential features would be most valuable to your workflow?",
      category: "Product Research",
      industry: "SaaS",
      tags: ["Product Development", "UX"],
      stats: { uses: 8.3, rating: 4.7 }
    },
    {
      id: 4,
      title: "Customer Support Experience",
      text:"Was your recent issue resolved? How could we improve our support process?",
      category: "Customer Support",
      industry: "All Industries",
      tags: ["Support", "CX"],
      stats: { uses: 15.2, rating: 4.6 }
    },
    {
      id: 5,
      title: "Market Trends Assessment",
      text: "What changes have you seen in your buying habits over the past year?",
      category: "Market Research",
      industry: "Retail",
      tags: ["Trends", "Consumer Behavior"],
      stats: { uses: 7.8, rating: 4.5 }
    },
    {
      id: 6,
      title: "Employee Satisfaction Survey",
      text: "How would you rate your work-life balance? What one thing could improve your daily experience?",
      category: "Employee Surveys",
      industry: "All Industries",
      tags: ["HR", "Company Culture"],
      stats: { uses: 10.4, rating: 4.8 }
    }
  ];
  const navigate = useNavigate();


  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="AI Prompts Library" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            AI <span style={styles.accent}>Prompts</span> Library
          </h1>
          <p style={styles.heroSubtitle}>
            A curated set of <span style={styles.accent}>ready-to-use prompts</span> to feed the AI Survey Tool — categorized by industry and intent
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <Search size={20} style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search for prompts by keyword or topic..." 
            style={styles.searchInput} 
          />
        </div>
        
        {/* Featured Prompt */}
        <div style={styles.featuredPrompt}>
          <div style={styles.featuredHeader}>
            <Star size={20} /> FEATURED PROMPT
          </div>
          
          <div>
            <h2 style={styles.featuredTitle}>Enhanced NPS + Sentiment Analysis</h2>
            <p style={styles.featuredDescription}>
             Go beyond just a Net Promoter Score. This advanced prompt set uncovers the "why" behind the score to give you deeper insights into customer sentiment.
            </p>
            
            <div style={styles.featuredContent}>
              On a scale from 0–10, how likely are you to recommend [product/service] to a friend or colleague?<br/><br/>
              
              What’s the main reason for your score? <br/><br/>
              
              What’s one thing we could improve to earn a higher rating? <br/><br/>
              
              Which other solutions did you consider before choosing us? <br/><br/>
              
             What features of [product/service] are most valuable to you?
            </div>
            
            <div style={styles.featuredFooter}>
              <div style={styles.tagContainer}>
                <span style={styles.tag}><Tag size={14} /> Feedback</span>
                <span style={styles.tag}><Tag size={14} /> All Industries</span>
                <span style={styles.tag}><Tag size={14} /> Customer Loyalty</span>
              </div>
              
              <button style={styles.copyButton}>
                <Copy size={16} /> Copy Prompt
              </button>
            </div>
          </div>
        </div>
        
        {/* Filter Bar */}
        <div style={styles.filterBar}>
          <div style={styles.categories}>
            {categories.map(category => (
              <button 
                key={category}
                style={category === activeCategory ? 
                  {...styles.categoryButton, ...styles.activeCategory} : 
                  styles.categoryButton
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div style={styles.dropdownContainer}>
            <button 
              style={styles.dropdownButton}
              onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
            >
              <Filter size={16} />
              {activeIndustry}
              <ChevronDown size={16} />
            </button>
            
            {showIndustryDropdown && (
              <div style={styles.dropdownMenu}>
                {industries.map(industry => (
                  <div 
                    key={industry}
                    style={{
                      ...styles.dropdownItem,
                      backgroundColor: industry === activeIndustry ? 'rgba(227, 27, 35, 0.1)' : 'transparent'
                    }}
                    onClick={() => {
                      setActiveIndustry(industry);
                      setShowIndustryDropdown(false);
                    }}
                  >
                    {industry}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Prompts Grid */}
        <div style={styles.promptsGrid}>
          {prompts.filter(prompt => 
            (activeCategory === 'All' || prompt.category === activeCategory) &&
            (activeIndustry === 'All Industries' || prompt.industry === activeIndustry)
          ).map(prompt => (
            <div style={styles.promptCard} key={prompt.id}>
              <div style={styles.promptHeader}>
                <h3 style={styles.promptTitle}>{prompt.title}</h3>
                <BookOpen size={18} color="#E31B23" />
              </div>
              
              <div style={styles.promptBody}>
                <p style={styles.promptText}>{prompt.text}</p>
                
                <div style={styles.tagContainer}>
                  <span style={styles.tag}><Tag size={14} /> {prompt.category}</span>
                  <span style={styles.tag}><Tag size={14} /> {prompt.industry}</span>
                  {prompt.tags.map((tag, index) => (
                    <span style={styles.tag} key={index}><Tag size={14} /> {tag}</span>
                  ))}
                </div>
              </div>
              
              <div style={styles.promptFooter}>
                <div style={styles.promptStats}>
                  <span style={styles.statItem}>
                    <ThumbsUp size={16} /> {prompt.stats.rating}
                  </span>
                  <span style={styles.statItem}>
                    <Users size={16} /> {prompt.stats.uses}K
                  </span>
                </div>
                
                <button style={styles.copyButton}>
                  <Copy size={16} /> Copy
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {/* <div style={styles.paginationContainer}>
          <button style={styles.pageButton}>«</button>
          <button style={{...styles.pageButton, ...styles.activePage}}>1</button>
          <button style={styles.pageButton}>2</button>
          <button style={styles.pageButton}>3</button>
          <button style={styles.pageButton}>4</button>
          <button style={styles.pageButton}>5</button>
          <button style={styles.pageButton}>»</button>
        </div> */}
        
        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Create Your <span style={styles.accent}>Custom Prompts</span></h2>
          <p style={styles.ctaText}>
            Build your own prompts with our AI Survey Tool, designed to adapt to your industry, goals, and audience dynamics.
          </p>
          <button 
            onClick={() => navigate('/ContactUs')}
            style={styles.ctaButton}>
            Create Custom Prompt <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPromptsLibrary;
