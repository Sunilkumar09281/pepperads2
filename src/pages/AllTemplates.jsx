import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowRight, Search, Filter, Tag, Download, Star } from 'lucide-react';

const AllTemplates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    searchSection: {
      margin: '40px auto',
      maxWidth: '800px',
    },
    searchBar: {
      display: 'flex',
      position: 'relative',
      marginBottom: '30px',
    },
    searchInput: {
      width: '100%',
      padding: '16px 20px 16px 50px',
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      border: '1px solid rgba(227, 27, 35, 0.3)',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '1.1rem',
    },
    searchIcon: {
      position: 'absolute',
      left: '15px',
      top: '15px',
      color: '#aaa',
    },
    categoryFilters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '40px',
      justifyContent: 'center',
    },
    categoryBtn: {
      padding: '10px 20px',
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '30px',
      color: '#ccc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    categoryBtnActive: {
      backgroundColor: 'rgba(227, 27, 35, 0.7)',
      color: '#fff',
      border: '1px solid rgba(227, 27, 35, 0.8)',
    },
    templatesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '40px',
    },
    templateCard: {
      backgroundColor: 'rgba(30, 30, 30, 0.7)',
      borderRadius: '15px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
    templateImgContainer: {
      height: '180px',
      overflow: 'hidden',
      position: 'relative',
    },
    templateImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    templateType: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      backgroundColor: 'rgba(227, 27, 35, 0.8)',
      color: '#fff',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    popularBadge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#222',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    templateContent: {
      padding: '20px',
    },
    templateTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    templateDescription: {
      color: '#aaa',
      fontSize: '0.95rem',
      marginBottom: '20px',
      height: '60px',
    },
    templateMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#888',
      fontSize: '0.9rem',
    },
    useButton: {
      backgroundColor: 'rgba(227, 27, 35, 0.8)',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
    moneyTag: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      color: '#72b01d',
      fontSize: '0.9rem',
    },
    featureSection: {
      margin: '80px 0',
    },
    featureTitle: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    featureCard: {
      backgroundColor: 'rgba(30, 30, 30, 0.5)',
      borderRadius: '15px',
      padding: '30px',
      border: '1px solid rgba(227, 27, 35, 0.2)',
    },
    featureIcon: {
      fontSize: '2.5rem',
      color: '#E31B23',
      marginBottom: '20px',
    },
    featureCardTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    featureCardText: {
      color: '#aaa',
      lineHeight: 1.7,
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
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    ctaContainer: {
      textAlign: 'center',
      margin: '60px 0',
    },
  };

  // CSS for animations would need to be in a separate CSS file
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .template-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(227, 27, 35, 0.3);
    }
    
    .category-btn:hover {
      background-color: rgba(227, 27, 35, 0.5);
      color: #fff;
    }
    
    .use-button:hover {
      background-color: rgba(227, 27, 35, 1);
    }
  `;

  // Sample template data
  const templates = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      description: "Measure satisfaction with your product or service with this comprehensive survey template.",
      category: "Feedback",
      popular: true,
      monetizable: true,
      usageCount: "24k",
      image: "https://i.postimg.cc/nr47cj3L/cutomer-satisfaction.jpg"
    },
    {
      id: 2,
      title: "Market Research Questionnaire",
      description: "Collect insights about market trends and customer preferences for your business.",
      category: "Research",
      popular: false,
      monetizable: true,
      usageCount: "16k",
      image: "https://i.postimg.cc/R0Gv9M1z/market-Research.jpg"
    },
    {
      id: 3,
      title: "Event Registration Form",
      description: "Streamline your event signups with this customizable registration template.",
      category: "Events",
      popular: true,
      monetizable: false,
      usageCount: "32k",
      image: "https://i.postimg.cc/JzZw71L2/event-registration.jpg"
    },
    {
      id: 4,
      title: "Job Application Form",
      description: "Collect all necessary information from potential candidates for open positions.",
      category: "HR",
      popular: false,
      monetizable: false,
      usageCount: "19k",
      image: "https://i.postimg.cc/SN41LWFD/job-application-hiring-document-form-concept-53876-125602.jpg"
    },
    {
      id: 5,
      title: "Educational Feedback Form",
      description: "Get valuable feedback from students about courses, instructors, and learning materials.",
      category: "Education",
      popular: false,
      monetizable: true,
      usageCount: "15k",
      image: "https://i.postimg.cc/kgbCVQxw/education.jpg"
    },
    {
      id: 6,
      title: "Contest Entry Form",
      description: "Create engaging contests with this easy-to-customize entry form template.",
      category: "Marketing",
      popular: true,
      monetizable: true,
      usageCount: "28k",
      image: "https://i.postimg.cc/C571Qjvb/contest.jpg"
    },
    {
      id: 7,
      title: "Product Pre-order Form",
      description: "Capture interest and pre-orders for upcoming product launches.",
      category: "Sales",
      popular: false,
      monetizable: true,
      usageCount: "12k",
      image: "https://i.postimg.cc/QtBrcc7f/product.jpg"
    },
    {
      id: 8,
      title: "Healthcare Patient Intake",
      description: "Collect patient information efficiently with this HIPAA-compliant template.",
      category: "Healthcare",
      popular: false,
      monetizable: false,
      usageCount: "10k",
      image: "https://i.postimg.cc/mZHy5hNJ/young-doctor-gesturing-thumb-up-elderly-patient-23-2147896891.jpg"
    },
    {
      id: 9,
      title: "Restaurant Reservation Form",
      description: "Make it easy for customers to book tables at your restaurant.",
      category: "Hospitality",
      popular: false,
      monetizable: false,
      usageCount: "18k",
      image: "https://i.postimg.cc/ZRZvsKbt/waiter-taking-order-from-woman-107420-94752.jpg"
    }
  ];

  // Filter templates based on selected category
  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(templates.map(template => template.category))];

  return (
    <div style={styles.body}>
      <style>{animationStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Template Gallery" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            All <span style={styles.accent}>Templates</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Explore our full template gallery to save time and launch faster. From educational feedback to market research and contest entries, our templates cover dozens of industries and use cases.
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Search Section */}
        <div style={styles.searchSection}>
          <div style={styles.searchBar}>
            <Search style={styles.searchIcon} size={24} />
            <input 
              type="text" 
              placeholder="Search for templates..." 
              style={styles.searchInput}
            />
          </div>
          
          {/* Category Filter Buttons */}
          <div style={styles.categoryFilters}>
            {categories.map(category => (
              <button 
                key={category}
                className="category-btn"
                style={category === selectedCategory ? 
                  {...styles.categoryBtn, ...styles.categoryBtnActive} : 
                  styles.categoryBtn
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Templates Grid */}
        <div style={styles.templatesGrid}>
          {filteredTemplates.map(template => (
            <div 
              key={template.id} 
              style={styles.templateCard}
              className="template-card"
            >
              <div style={styles.templateImgContainer}>
                <img src={template.image} alt={template.title} style={styles.templateImg} />
                <div style={styles.templateType}>{template.category}</div>
                {template.popular && (
                  <div style={styles.popularBadge}>
                    <Star size={14} /> Popular
                  </div>
                )}
              </div>
              <div style={styles.templateContent}>
                <h3 style={styles.templateTitle}>{template.title}</h3>
                <p style={styles.templateDescription}>{template.description}</p>
                <div style={styles.templateMeta}>
                  <span>{template.usageCount} users</span>
                  {template.monetizable && (
                    <span style={styles.moneyTag}>
                      <Tag size={14} /> Monetizable
                    </span>
                  )}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                 <button style={styles.useButton} onClick={() => navigate('/login')}>
  Use Template <ArrowRight size={16} />
</button>

                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features Section */}
        <div style={styles.featureSection}>
          <h2 style={styles.featureTitle}>Why Use Our <span style={styles.accent}>Templates</span></h2>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Filter size={48} color="#E31B23" />
              </div>
              <h3 style={styles.featureCardTitle}>Filter by Category</h3>
              <p style={styles.featureCardText}>
                Easily find the perfect template for your needs by filtering through dozens of categories. From education to market research and contest entries, we have solutions for every industry.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Download size={48} color="#E31B23" />
              </div>
              <h3 style={styles.featureCardTitle}>Convert to PDF</h3>
              <p style={styles.featureCardText}>
                Edit content with our intuitive builder or AI assistant, then convert your forms into branded PDFs. Perfect for professional presentations, email attachments, or printing.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Tag size={48} color="#E31B23" />
              </div>
              <h3 style={styles.featureCardTitle}>Monetization Tools</h3>
              <p style={styles.featureCardText}>
                For power users managing traffic-driven funnels or reward-based engagement, these templates can act as the first step in your monetization ecosystem. Connect forms with performance tracking tools.
              </p>
            </div>
          </div>
        </div>
        
        {/* Publisher Suite Callout */}
        <div style={{
          backgroundColor: 'rgba(30, 30, 30, 0.8)',
          borderRadius: '20px',
          padding: '40px',
          margin: '60px 0',
          border: '1px solid rgba(227, 27, 35, 0.3)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>
            Connect with our <span style={styles.accent}>Publisher Suite</span>
          </h2>
          <p style={{
            color: '#bbb',
            fontSize: '1.2rem',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}>
            We've made it easy to connect form templates with performance tracking tools available in the publisher suite — letting you go from setup to earnings quickly. Perfect for creators and businesses looking to optimize form conversions.
          </p>
          <button style={styles.ctaButton} onClick={() => navigate('/login')}>
  Explore Publisher Suite <ArrowRight size={20} />
</button>

        </div>
        
        {/* CTA Section */}
        <div style={styles.ctaContainer}>
          <button style={styles.ctaButton} onClick={() => navigate('/contact')}>
  Explore All Templates
  <ArrowRight size={24} />
</button>

        </div>
      </div>
    </div>
  );
};

export default AllTemplates;