import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ThreeCard from '../Animationcards/Threecard';
import StepsComponent from '../Animationcards/stepcards';
import Road from '../Animationcards/Road';
import BlurText from '../Animationcards/Blurtext';
import { motion, useInView } from 'framer-motion';
import RotatingText from '../Animationcards/RotatingText';
import CardSwap, { Card } from '../Animationcards/CardSwap';
import { animationVariants, hoverEffects, createScrollAnimation } from '../utils/animations';

// Custom hook for intersection observer with enhanced options
const useScrollAnimation = (options = {}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px 0px",
    amount: 0.3,
    ...options
  });
  return [ref, isInView];
};

// Enhanced Feature Card with particle animation
const FeatureCard = ({ icon, title, description, gradient, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative p-8 rounded-2xl ${gradient} backdrop-blur-sm border border-white/10 cursor-pointer group overflow-hidden`}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: "0 25px 80px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.4 }
      }}
    >
      {/* Animated particles background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          initial={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0, 0.3, 0],
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3
            }
          }}
        />
      ))}

      <motion.div
        className="text-4xl mb-4 relative z-10"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <motion.h3
        className="text-xl font-bold mb-3 text-white relative z-10"
        whileHover={{ 
          color: "#ff4444",
          textShadow: "0 0 10px rgba(255, 68, 68, 0.7)"
        }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-300 relative z-10"
        whileHover={{ 
          color: "#ffffff",
          letterSpacing: "0.5px"
        }}
      >
        {description}
      </motion.p>

      {/* Enhanced hover shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

// Enhanced Testimonial Card with floating effect
const TestimonialCard = ({ name, role, content, avatar, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 relative overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 60px rgba(255, 68, 68, 0.3)",
        borderColor: "#ff4444",
        transition: { duration: 0.4 }
      }}
      animate={{
        y: [0, -5, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Animated floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            transition: {
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }
          }}
        />
      ))}

      <motion.div
        className="absolute top-4 right-4 text-6xl text-red-600/20"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        "
      </motion.div>

      <motion.div
        className="flex items-center mb-4"
        whileHover={{ x: 5 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            rotate: [0, 5, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          {avatar}
        </motion.div>
        <div>
          <motion.h4
            className="font-semibold text-white"
            whileHover={{ 
              color: "#ff4444",
              x: 3,
              textShadow: "0 0 8px rgba(255, 68, 68, 0.5)"
            }}
          >
            {name}
          </motion.h4>
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ color: "#ffffff" }}
          >
            {role}
          </motion.p>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-300 italic"
        whileHover={{ 
          color: "#ffffff",
          letterSpacing: "0.3px"
        }}
      >
        {content}
      </motion.p>

      {/* Enhanced animated border */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

// Enhanced Stat Card with counter animation
const StatCard = ({ number, label, suffix = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center group cursor-pointer"
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-red-600 mb-2"
        initial={{ scale: 0.9 }}
        whileInView={{ 
          scale: 1,
          textShadow: "0 0 20px rgba(255, 68, 68, 0.8)",
          transition: { duration: 0.5 }
        }}
        whileHover={{
          scale: 1.2,
          textShadow: "0 0 30px rgba(255, 68, 68, 1)"
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        >
          {number}
        </motion.span>{suffix}
      </motion.div>
      <motion.p
        className="text-gray-400 uppercase tracking-wide"
        whileHover={{ 
          color: "#ffffff",
          letterSpacing: "1px"
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

// Enhanced Floating Card with 3D perspective
const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -15, 0],
        rotateY: [0, 5, 0],
        rotateX: [0, 2, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className="transform-gpu perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        whileHover={{ 
          z: 30,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Landing2 = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Enhanced scroll-triggered animations with different configurations
  const [navRef, navInView] = useScrollAnimation({ margin: "0px" });
  const [heroRef, heroInView] = useScrollAnimation({ margin: "-100px" });
  const [blurTextRef, blurTextInView] = useScrollAnimation({ amount: 0.5 });
  const [featuresRef, featuresInView] = useScrollAnimation({ margin: "-100px" });
  const [cardsRef, cardsInView] = useScrollAnimation({ margin: "-150px" });
  const [statsRef, statsInView] = useScrollAnimation({ margin: "-100px" });
  const [templateRef, templateInView] = useScrollAnimation({ amount: 0.3 });
  const [testimonialsRef, testimonialsInView] = useScrollAnimation({ margin: "-100px" });
  const [stepsRef, stepsInView] = useScrollAnimation({ margin: "-100px" });
  const [rotatingRef, rotatingInView] = useScrollAnimation({ amount: 0.8 });
  const [roadRef, roadInView] = useScrollAnimation({ margin: "-50px" });

  return (
    <motion.div
      className="bg-black text-white min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </motion.div>

      {/* Navbar with smooth fade entrance */}
      <motion.section
        ref={navRef}
        className="mb-10 relative z-50"
        variants={animationVariants.fadeInDown}
        initial="hidden"
        animate={navInView ? "visible" : "hidden"}
      >
        <Navbar />
      </motion.section>

      {/* Hero Section with cinematic entrance */}
      <motion.section
        ref={heroRef}
        className="mb-16 relative z-10"
        variants={animationVariants.heroEntrance}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <Hero />
      </motion.section>

      {/* Blur Text with enhanced cinematic reveal */}
      <motion.section
        ref={blurTextRef}
        className="bg-black py-12 flex items-center justify-center px-4 relative z-10"
        variants={animationVariants.cinematicEntrance}
        initial="hidden"
        animate={blurTextInView ? "visible" : "hidden"}
      >
        <motion.div
          whileHover={hoverEffects.subtleScale}
          className="relative"
        >
          {/* Animated decoration */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-red-500/20 blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: 4,
                repeat: Infinity
              }
            }}
          />
          <BlurText
            text="Isn't this so cool?!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          />
        </motion.div>
      </motion.section>

      {/* Feature Cards Section with enhanced stagger */}
      <motion.section
        ref={cardsRef}
        className="mb-36 relative z-10"
        variants={animationVariants.staggerContainer}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        <motion.div variants={animationVariants.scaleIn}>
          <ThreeCard />
        </motion.div>
      </motion.section>

      {/* Add extra space between ThreeCard and Template sections */}
      <div className="my-32" />

      {/* Enhanced Template Section with sophisticated split animations */}
      <motion.section
        ref={templateRef}
        className="py-24 bg-black relative z-10"
        variants={animationVariants.staggerContainer}
        initial="hidden"
        animate={templateInView ? "visible" : "hidden"}
      >
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full bg-red-500/20 blur-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            transition: {
              duration: 8,
              repeat: Infinity
            }
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-500/20 blur-lg"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              delay: 2
            }
          }}
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
          {/* Left Text Content with enhanced text styling */}
          <motion.div
            className="max-w-md text-center md:text-left"
            variants={animationVariants.slideInLeft}
          >
            <motion.h2
              className="text-4xl font-extrabold mb-4 leading-tight overflow-hidden"
              variants={animationVariants.textReveal}
            >
              <motion.span 
                className="block text-white/90"
                whileHover={{
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Explore some
              </motion.span>
              <motion.span
                className="block text-red-600 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
                variants={animationVariants.textReveal}
                whileHover={{
                  ...hoverEffects.glow,
                  color: "#ff4444",
                  textShadow: "0 0 20px rgba(255, 68, 68, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                Dreamy templates
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400"
              variants={animationVariants.fadeInUp}
              whileHover={{
                color: "#ffffff",
                letterSpacing: "0.5px"
              }}
            >
              Just look at it go!
            </motion.p>
          </motion.div>

          {/* Right Card Swap Stack with enhanced animations */}
          <motion.div
            style={{ height: '600px', width: '500px', position: 'relative' }}
            variants={animationVariants.slideInRight}
            whileHover={hoverEffects.lift}
          >
            {/* Floating decorative elements for cards */}
            <motion.div 
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-pink-500/10 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
                transition: {
                  duration: 5,
                  repeat: Infinity
                }
              }}
            />
            
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <motion.img
                  src="https://i.postimg.cc/j5FXYtmR/neon-geometric-background-1.jpg"
                  alt="Card 1"
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={hoverEffects.dramaticScale}
                  initial={{ filter: "brightness(0.8)" }}
                  whileInView={{ filter: "brightness(1)" }}
                  transition={{ duration: 0.8 }}
                />
              </Card>
              <Card>
                <motion.img
                  src="https://i.postimg.cc/m2HGqrJ2/18895810-6015590.jpg"
                  alt="Card 2"
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={hoverEffects.dramaticScale}
                  initial={{ filter: "brightness(0.8)" }}
                  whileInView={{ filter: "brightness(1)" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </Card>
              <Card>
                <motion.img
                  src="https://i.postimg.cc/9Qx5wqqb/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset.jpg"
                  alt="Card 3"
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={hoverEffects.dramaticScale}
                  initial={{ filter: "brightness(0.8)" }}
                  whileInView={{ filter: "brightness(1)" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </Card>
            </CardSwap>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 px-4 relative z-10"
        variants={animationVariants.staggerContainer}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={animationVariants.textReveal}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-4"
            whileHover={{
              textShadow: "0 0 15px rgba(255,255,255,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            What People <motion.span 
              className="text-red-600 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{
                textShadow: "0 0 20px rgba(255, 68, 68, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              Are Saying
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            whileHover={{
              color: "#ffffff",
              letterSpacing: "0.3px"
            }}
          >
            Don't just take our word for it - hear from our satisfied customers
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Product Manager"
            content="This platform made it incredibly easy to collect feedback from our customers. Highly recommended!"
            avatar="SJ"
            delay={0.1}
          />

          <TestimonialCard
            name="Mike Chen"
            role="Creative Director"
            content="The animations and layout are so clean! It's intuitive and pleasant to use. Great job!"
            avatar="MC"
            delay={0.2}
          />

          <TestimonialCard
            name="Emily Rodriguez"
            role="Marketing Lead"
            content="A seamless experience from start to finish. I especially love the mobile responsiveness!"
            avatar="ER"
            delay={0.3}
          />
        </div>
      </motion.section>

      {/* Step Cards with enhanced cinematic entrance */}
      <motion.section
        ref={stepsRef}
        className="mb-20 relative z-10"
        variants={animationVariants.cinematicEntrance}
        initial="hidden"
        animate={stepsInView ? "visible" : "hidden"}
      >
        <StepsComponent />
      </motion.section>

      {/* Enhanced Rotating Text Section */}
      <motion.div
        ref={rotatingRef}
        className="flex justify-center items-center h-[40vh] bg-black text-white text-4xl md:text-5xl font-extrabold space-x-4 relative z-10"
        variants={animationVariants.staggerContainer}
        initial="hidden"
        animate={rotatingInView ? "visible" : "hidden"}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(20px)'
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </motion.div>

        <motion.span
          className="text-gray-300 relative z-10"
          variants={animationVariants.fadeInUp}
          whileHover={{
            color: "#ffffff",
            scale: 1.05,
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            transition: { duration: 0.3 }
          }}
        >
          Creative
        </motion.span>
        <motion.span
          className="bg-red-600 text-white px-4 py-2 rounded-xl relative overflow-hidden z-10"
          variants={animationVariants.scaleInBounce}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(220, 38, 38, 0.8)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Enhanced background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
              repeatDelay: 2
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-30"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
              delay: 1,
              repeatDelay: 3
            }}
          />
          <div className="relative z-10">
            <RotatingText
              texts={['Surveys', 'ideas', 'design', 'Reach']}
              mainClassName="text-white"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </motion.span>
      </motion.div>

      {/* Road Section with enhanced cinematic reveal */}
      <motion.section
        ref={roadRef}
        className="mb-20 relative z-10"
        variants={animationVariants.cinematicEntrance}
        initial="hidden"
        animate={roadInView ? "visible" : "hidden"}
      >
        <Road />
      </motion.section>

      {/* Enhanced Amazing Start Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(30px)'
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-2xl mx-auto text-center px-6 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-8 text-white space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-red-500 font-black bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Start
              </span>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 15px rgba(244, 114, 182, 0.7)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-pink-400 font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Experiment
              </span>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-yellow-400 font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Achieve
              </span>
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }}
            whileHover={{
              color: "#ffffff",
              letterSpacing: "0.3px",
              transition: { duration: 0.3 }
            }}
          >
            <span className="font-bold text-white">Built for advertisers:</span> From{' '}
            <span className="font-bold text-red-400 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              awareness
            </span>{' '}
            to{' '}
            <span className="font-bold text-pink-400 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              action
            </span>
            , manage{' '}
            <span className="font-bold text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              full-funnel campaigns
            </span>{' '}
            effortlessly.
          </motion.p>
        </div>
      </section>
      {/* Contact Info Section */}
<section className="py-10 bg-black text-gray-300 text-center relative z-10 px-4">
  <h3 className="text-xl font-semibold mb-2 text-white">Get in Touch</h3>
  <p className="mb-1">📍 123 Startup Street, Innovation City, IN 532001</p>
  <p className="mb-1">📞 +91-98765-43210</p>
  <p>📧 contact@yourstartup.com</p>
</section>

      {/* Enhanced cinematic overlay with parallax effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />

      {/* Enhanced grain texture overlay for film-like quality */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='40' cy='20' r='1'/%3E%3Ccircle cx='15' cy='35' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      {/* Contact Us Floating Button */}
<motion.a
  href="https://pepperadsresponses.web.app/survey/da59928f-d959-44d5-8361-7c70fd06af8d"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 20px rgba(255, 0, 100, 0.6)",
  }}
>
  Contact Us
</motion.a>

<section className="py-10 bg-black text-gray-300 text-center relative z-10 px-4">
  <h4 className="text-xl font-semibold mb-4 text-white">Find us on</h4>
  <div className="flex justify-center items-center gap-6 flex-wrap">
    <a href="https://clutch.co/" target="_blank" rel="noopener noreferrer">
      <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a2e6552c41e001ca4ad09f7c3e808c9a/clutch-co.png" alt="Clutch" className="h-10" loading="lazy" />
    </a>
    <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" alt="Yelp" className="h-10" loading="lazy" />
    </a>
    {/* Add more logos if listed */}
  </div>
</section>


    </motion.div>
  );
};

export default Landing2;