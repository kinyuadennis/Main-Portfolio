import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaLinux, 
  FaReact, 
  FaJs, 
  FaDatabase,
  FaAws,
  FaCode
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiFlask, 
  SiFastapi, 
  SiMongodb, 
  SiPostgresql,
  SiJupyter,
  SiAnaconda
} from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: 'Python', icon: FaPython, color: '#3776ab' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'Docker', icon: FaDocker, color: '#2496ed' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Git', icon: FaGitAlt, color: '#f05032' },
    { name: 'Linux', icon: FaLinux, color: '#fcc624' },
    { name: 'Jupyter', icon: SiJupyter, color: '#f37626' },
    { name: 'Anaconda', icon: SiAnaconda, color: '#44a833' },
    { name: 'AWS', icon: FaAws, color: '#ff9900' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-carbon/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-glow mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Description */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <motion.div
                  className="cyber-border p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-neon-blue mb-4">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a Python-savvy Machine Learning Engineer with hands-on experience in real-world systems, 
                    blending my love for automation, data, and AI. From building SACCO systems and petrol station 
                    dashboards to deploying models via Docker and crafting phishing detection tools — I turn ideas 
                    into deployed systems.
                  </p>
                </motion.div>

                <motion.div
                  className="cyber-border p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-neon-blue mb-4">Current Focus</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm currently leveling up in Deep Learning, MLOps, and DevSecOps to become a full-stack AI engineer. 
                    My goal is to bridge the gap between cutting-edge AI research and practical, scalable solutions 
                    that solve real-world problems.
                  </p>
                </motion.div>

                <motion.div
                  className="cyber-border p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-neon-blue mb-4">What Drives Me</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm passionate about creating AI solutions that are not just intelligent, but also secure, 
                    scalable, and maintainable. Whether it's building ML pipelines, securing systems, or optimizing 
                    deployment workflows, I love the challenge of bringing AI from concept to production.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Tech Stack */}
            <motion.div variants={itemVariants}>
              <div className="cyber-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center gradient-text mb-8">
                  Tech Stack
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={techVariants}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="p-3 rounded-lg bg-carbon/50 group-hover:bg-carbon/80 transition-all duration-300 border border-gray-600 group-hover:border-neon-blue/50">
                        <tech.icon
                          size={24}
                          style={{ color: tech.color }}
                          className="group-hover:drop-shadow-lg"
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-2 group-hover:text-neon-blue transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              className="text-center cyber-border p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            
            <motion.div
              className="text-center cyber-border p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-neon-blue mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
            
            <motion.div
              className="text-center cyber-border p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-neon-blue mb-2">5+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;