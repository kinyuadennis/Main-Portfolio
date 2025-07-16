import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode, FaDatabase, FaShield, FaRobot, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PhishScanner',
      category: 'ml',
      description: 'Advanced phishing detection system using machine learning algorithms and Flask web framework. Features real-time URL analysis, email scanning, and threat intelligence integration.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'TensorFlow', 'NLP', 'Cybersecurity'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/phishscanner',
      demo: 'https://phishscanner-demo.herokuapp.com',
      features: ['Real-time URL scanning', 'Email analysis', 'ML-based detection', 'Threat intelligence'],
      icon: FaShield
    },
    {
      id: 2,
      title: 'SACCO Management System',
      category: 'fullstack',
      description: 'Comprehensive SACCO (Savings and Credit Cooperative) management system for Kigumo Travellers. Features member management, loan processing, and financial reporting.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/sacco-system',
      demo: 'https://sacco-demo.com',
      features: ['Member management', 'Loan processing', 'Financial reports', 'Mobile responsive'],
      icon: FaDatabase
    },
    {
      id: 3,
      title: 'Petrol Station Dashboard',
      category: 'dashboard',
      description: 'Real-time dashboard for petrol station management with inventory tracking, sales analytics, and pump monitoring. Built for Cool Petroleum Products.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSocket', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/petrol-dashboard',
      demo: 'https://petrol-dashboard-demo.com',
      features: ['Real-time monitoring', 'Inventory management', 'Sales analytics', 'Pump control'],
      icon: FaChartLine
    },
    {
      id: 4,
      title: 'Football Match Predictor',
      category: 'ml',
      description: 'Machine learning model using XGBoost for predicting football match outcomes. Incorporates team statistics, player performance, and historical data.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'FastAPI', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/football-predictor',
      demo: 'https://football-predictor.streamlit.app',
      features: ['Match outcome prediction', 'Team statistics', 'Historical analysis', 'API integration'],
      icon: FaRobot
    },
    {
      id: 5,
      title: 'Dockerized ML Pipeline',
      category: 'devops',
      description: 'End-to-end MLOps pipeline with automated model training, validation, and deployment using Docker, FastAPI, and CI/CD practices.',
      technologies: ['Docker', 'FastAPI', 'GitHub Actions', 'MLflow', 'Kubernetes', 'Python'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/ml-pipeline',
      demo: 'https://ml-pipeline-demo.com',
      features: ['Automated training', 'Model versioning', 'CI/CD deployment', 'Monitoring'],
      icon: FaCode
    },
    {
      id: 6,
      title: 'LSTM Time-Series Analyzer',
      category: 'ml',
      description: 'Advanced time-series analysis using LSTM networks for stock prediction and Premier League match forecasting with real-time data processing.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'NumPy', 'Streamlit'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/denis-ai/lstm-analyzer',
      demo: 'https://lstm-analyzer.streamlit.app',
      features: ['Time-series prediction', 'LSTM models', 'Real-time data', 'Interactive visualization'],
      icon: FaChartLine
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'ml', name: 'Machine Learning', icon: FaRobot },
    { id: 'fullstack', name: 'Full Stack', icon: FaDatabase },
    { id: 'devops', name: 'DevOps', icon: FaCode },
    { id: 'dashboard', name: 'Dashboards', icon: FaChartLine }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="py-20 bg-midnight">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-glow mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              Explore my latest work in machine learning, full-stack development, and DevOps
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-neon-blue text-midnight'
                    : 'bg-carbon/50 text-gray-300 hover:bg-carbon/80 hover:text-neon-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={16} />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-48 bg-gradient-to-br from-neon-blue/20 to-purple-glow/20 flex items-center justify-center">
                    <project.icon size={48} className="text-neon-blue" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-carbon/80 rounded-full hover:bg-neon-blue hover:text-midnight transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-carbon/80 rounded-full hover:bg-neon-blue hover:text-midnight transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-neon-blue rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-600">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaPlay size={16} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/denis-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;