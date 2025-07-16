import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const titles = [
    'Machine Learning Engineer',
    'Python Developer',
    'DevOps Learner',
    'AI Enthusiast',
    'Data Scientist'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        setTimeout(typeWriter, 50);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        isDeleting = false;
        setTimeout(typeWriter, 500);
      }
    };
    
    typeWriter();
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleDownloadResume = () => {
    // This would be linked to an actual resume file
    console.log('Downloading resume...');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-white">Hello, I'm </span>
              <span className="gradient-text">Denis</span>
            </motion.h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono h-10 flex items-center justify-center">
              <span className="mr-2">I'm a </span>
              <span className="text-neon-blue glow-text">
                {displayText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Python-savvy Machine Learning Engineer with hands-on experience in real-world systems, 
            blending automation, data, and AI. From building SACCO systems to deploying models via Docker 
            — I turn ideas into deployed systems.
          </motion.p>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-neon-blue" />
              <span>denis@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-neon-blue" />
              <span>Nairobi, Kenya</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="cyber-button flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-midnight transition-all duration-300"
            >
              Let's Work Together
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/denis-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/denis-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:denis@example.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;