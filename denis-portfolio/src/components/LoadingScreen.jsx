import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const loadingMessages = [
    'Initializing neural networks...',
    'Loading AI models...',
    'Connecting to cybernet...',
    'Decrypting portfolio data...',
    'Welcome to Denis\'s Digital Domain'
  ];

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    
    const typeWriter = () => {
      if (messageIndex < loadingMessages.length) {
        const currentMessage = loadingMessages[messageIndex];
        
        if (charIndex < currentMessage.length) {
          setDisplayText(currentMessage.substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeWriter, 50);
        } else {
          setTimeout(() => {
            messageIndex++;
            charIndex = 0;
            setDisplayText('');
            typeWriter();
          }, 1000);
        }
      }
    };
    
    typeWriter();
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-midnight flex items-center justify-center z-50"
    >
      <div className="relative">
        {/* Matrix-style background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon-blue/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </motion.div>
          ))}
        </div>
        
        {/* Main loading content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-carbon/80 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/30 max-w-md mx-auto"
          >
            <h2 className="text-2xl font-bold text-neon-blue mb-4">
              DENIS.AI
            </h2>
            <div className="font-mono text-sm text-gray-300 h-6">
              {displayText}
              {showCursor && <span className="text-neon-blue">|</span>}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8"
          >
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-neon-blue rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          animate={{
            y: [0, 400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;