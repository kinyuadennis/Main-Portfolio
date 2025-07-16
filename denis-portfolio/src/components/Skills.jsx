import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJs, 
  FaJava, 
  FaDocker, 
  FaLinux, 
  FaGitAlt, 
  FaAws, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiXgboost, 
  SiHuggingface, 
  SiFlask, 
  SiFastapi, 
  SiMongodb, 
  SiPostgresql, 
  SiKubernetes, 
  SiAnaconda, 
  SiJupyter, 
  SiStreamlit, 
  SiNumpy, 
  SiPandas,
  SiGithubactions,
  SiTerraform
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaPython,
      skills: [
        { name: 'Python', level: 95, icon: FaPython, color: '#3776ab' },
        { name: 'JavaScript', level: 85, icon: FaJs, color: '#f7df1e' },
        { name: 'Java', level: 70, icon: FaJava, color: '#007396' },
        { name: 'Bash', level: 80, icon: FaLinux, color: '#4eaa25' },
        { name: 'C++', level: 65, icon: null, color: '#00599c' },
      ]
    },
    {
      title: 'ML & AI',
      icon: SiTensorflow,
      skills: [
        { name: 'Scikit-learn', level: 90, icon: SiScikitlearn, color: '#f7931e' },
        { name: 'TensorFlow', level: 85, icon: SiTensorflow, color: '#ff6f00' },
        { name: 'PyTorch', level: 80, icon: SiPytorch, color: '#ee4c2c' },
        { name: 'XGBoost', level: 85, icon: SiXgboost, color: '#337ab7' },
        { name: 'Hugging Face', level: 75, icon: SiHuggingface, color: '#ffcc4d' },
        { name: 'NumPy', level: 90, icon: SiNumpy, color: '#013243' },
        { name: 'Pandas', level: 95, icon: SiPandas, color: '#150458' },
      ]
    },
    {
      title: 'Web & Backend',
      icon: FaReact,
      skills: [
        { name: 'Flask', level: 90, icon: SiFlask, color: '#000000' },
        { name: 'FastAPI', level: 85, icon: SiFastapi, color: '#009688' },
        { name: 'React', level: 75, icon: FaReact, color: '#61dafb' },
        { name: 'Node.js', level: 70, icon: FaNodeJs, color: '#68a063' },
        { name: 'HTML/CSS', level: 80, icon: null, color: '#e34c26' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: FaDocker,
      skills: [
        { name: 'Docker', level: 85, icon: FaDocker, color: '#2496ed' },
        { name: 'Kubernetes', level: 70, icon: SiKubernetes, color: '#326ce5' },
        { name: 'AWS', level: 75, icon: FaAws, color: '#ff9900' },
        { name: 'GitHub Actions', level: 80, icon: SiGithubactions, color: '#2088ff' },
        { name: 'Linux', level: 90, icon: FaLinux, color: '#fcc624' },
        { name: 'Git', level: 90, icon: FaGitAlt, color: '#f05032' },
      ]
    },
    {
      title: 'Databases & Tools',
      icon: SiMongodb,
      skills: [
        { name: 'MongoDB', level: 80, icon: SiMongodb, color: '#47a248' },
        { name: 'PostgreSQL', level: 85, icon: SiPostgresql, color: '#336791' },
        { name: 'Jupyter', level: 90, icon: SiJupyter, color: '#f37626' },
        { name: 'Anaconda', level: 85, icon: SiAnaconda, color: '#44a833' },
        { name: 'Streamlit', level: 80, icon: SiStreamlit, color: '#ff4b4b' },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: null,
      skills: [
        { name: 'Network Security', level: 75, icon: null, color: '#ff6b6b' },
        { name: 'Penetration Testing', level: 70, icon: null, color: '#4ecdc4' },
        { name: 'Vulnerability Assessment', level: 80, icon: null, color: '#45b7d1' },
        { name: 'Security Automation', level: 75, icon: null, color: '#96ceb4' },
        { name: 'Threat Intelligence', level: 70, icon: null, color: '#feca57' },
      ]
    }
  ];

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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-carbon/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-glow mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="cyber-border p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon && (
                    <category.icon className="text-neon-blue" size={24} />
                  )}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && (
                            <skill.icon 
                              size={16} 
                              style={{ color: skill.color }}
                              className="group-hover:scale-110 transition-transform duration-300"
                            />
                          )}
                          <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-purple-glow"
                          variants={progressVariants}
                          custom={skill.level}
                          style={{
                            boxShadow: `0 0 10px ${skill.color}40`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Learning */}
          <motion.div variants={categoryVariants} className="mt-16">
            <div className="cyber-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                Certifications & Learning
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'AWS Machine Learning Specialty', status: 'In Progress', color: 'text-yellow-400' },
                  { name: 'Docker Certified Associate', status: 'Completed', color: 'text-green-400' },
                  { name: 'Kubernetes Administrator', status: 'Planned', color: 'text-blue-400' },
                  { name: 'TensorFlow Developer Certificate', status: 'In Progress', color: 'text-yellow-400' },
                  { name: 'Ethical Hacking (CEH)', status: 'In Progress', color: 'text-yellow-400' },
                  { name: 'MLOps Engineering', status: 'Completed', color: 'text-green-400' },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-carbon/50 p-4 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                    <p className={`text-sm ${cert.color}`}>{cert.status}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={categoryVariants} className="mt-16 text-center">
            <div className="cyber-border p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                "In the rapidly evolving field of AI and technology, I believe in continuous learning 
                and adaptation. Every project is an opportunity to learn something new, whether it's 
                mastering a new framework, understanding a different domain, or solving a unique problem. 
                My goal is to stay at the forefront of technological innovation while building practical, 
                scalable solutions."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;