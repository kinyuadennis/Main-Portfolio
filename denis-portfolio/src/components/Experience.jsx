import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaDatabase, FaServer, FaShield } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Machine Learning Engineer (Freelance)',
      company: 'Various Clients',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Freelance',
      icon: FaCode,
      color: '#00d4ff',
      description: 'Building and deploying machine learning solutions for various clients, focusing on practical AI applications.',
      achievements: [
        'Developed and deployed 5+ ML models for phishing detection, fraud prevention, and predictive analytics',
        'Implemented MLOps pipelines using Docker, FastAPI, and CI/CD practices',
        'Created automated data processing systems reducing manual work by 70%',
        'Built real-time inference APIs handling 1000+ requests per minute'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'FastAPI', 'AWS', 'MLOps']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Kigumo Travellers SACCO',
      location: 'Murang\'a, Kenya',
      period: '2022 - 2023',
      type: 'Contract',
      icon: FaDatabase,
      color: '#8b5cf6',
      description: 'Led the development of a comprehensive SACCO management system for member and financial management.',
      achievements: [
        'Designed and implemented a full-stack SACCO management system serving 500+ members',
        'Developed member registration, loan processing, and financial reporting modules',
        'Integrated secure payment processing and automated loan calculations',
        'Delivered the project 2 weeks ahead of schedule with 99.9% uptime'
      ],
      technologies: ['Django', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Docker', 'Linux']
    },
    {
      id: 3,
      title: 'Systems Developer',
      company: 'Cool Petroleum Products',
      location: 'Nairobi, Kenya',
      period: '2021 - 2022',
      type: 'Full-time',
      icon: FaServer,
      color: '#00ff88',
      description: 'Developed and maintained petrol station management systems with real-time monitoring capabilities.',
      achievements: [
        'Built a real-time dashboard for petrol station operations monitoring',
        'Implemented inventory management system reducing stock discrepancies by 85%',
        'Created automated reporting system for daily sales and inventory tracking',
        'Optimized database queries improving system performance by 60%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Chart.js', 'Express.js']
    },
    {
      id: 4,
      title: 'IT Support Specialist',
      company: 'Murang\'a County Government',
      location: 'Murang\'a, Kenya',
      period: '2020 - 2021',
      type: 'Full-time',
      icon: FaShield,
      color: '#ff6b6b',
      description: 'Provided technical support and maintained IT infrastructure for government operations.',
      achievements: [
        'Managed IT infrastructure supporting 200+ government employees',
        'Implemented security protocols reducing system vulnerabilities by 90%',
        'Automated routine maintenance tasks saving 20+ hours weekly',
        'Provided technical training to staff improving digital literacy'
      ],
      technologies: ['Windows Server', 'Linux', 'Network Security', 'Active Directory', 'Backup Systems']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-midnight">
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-glow mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              My journey through various roles, building impactful solutions and gaining valuable experience
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue via-purple-glow to-neon-blue"
              style={{ transformOrigin: 'top' }}
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-midnight border-4 border-neon-blue rounded-full flex items-center justify-center z-10">
                    <experience.icon 
                      size={16} 
                      className="text-neon-blue" 
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                    <motion.div
                      className="cyber-border p-6 rounded-lg"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: `${experience.color}20`,
                              color: experience.color,
                              border: `1px solid ${experience.color}40`
                            }}
                          >
                            {experience.type}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <FaCalendarAlt size={12} />
                            {experience.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaBriefcase size={14} />
                            {experience.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt size={14} />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-neon-blue mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: experience.color }}
                              />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-400 mb-2 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Highlight */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="cyber-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                What I Bring to the Table
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: FaCode,
                    title: 'Full-Stack Development',
                    description: 'End-to-end development from concept to deployment',
                    color: '#00d4ff'
                  },
                  {
                    icon: FaDatabase,
                    title: 'Machine Learning',
                    description: 'Building and deploying ML models for real-world problems',
                    color: '#8b5cf6'
                  },
                  {
                    icon: FaServer,
                    title: 'DevOps & Cloud',
                    description: 'Containerization, CI/CD, and cloud infrastructure',
                    color: '#00ff88'
                  },
                  {
                    icon: FaShield,
                    title: 'Security Focus',
                    description: 'Implementing security best practices and threat detection',
                    color: '#ff6b6b'
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-carbon/50 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <skill.icon 
                      size={32} 
                      className="mx-auto mb-3"
                      style={{ color: skill.color }}
                    />
                    <h4 className="font-semibold text-white mb-2">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="cyber-border p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on challenging projects and contribute to innovative solutions. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <motion.a
                href="#contact"
                className="cyber-button inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBriefcase />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;