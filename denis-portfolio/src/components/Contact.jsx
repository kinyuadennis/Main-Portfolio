import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaPaperPlane,
  FaTwitter,
  FaCalendarAlt,
  FaDownload
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'denis@example.com',
      link: 'mailto:denis@example.com',
      color: '#00d4ff'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+254 123 456 789',
      link: 'tel:+254123456789',
      color: '#8b5cf6'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi,Kenya',
      color: '#00ff88'
    },
    {
      icon: FaCalendarAlt,
      title: 'Availability',
      value: 'Open to opportunities',
      link: '#',
      color: '#ff6b6b'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/denis-ai',
      color: '#333333'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/denis-ai',
      color: '#0077b5'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/denis_ai',
      color: '#1da1f2'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      url: 'mailto:denis@example.com',
      color: '#ea4335'
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
    <section id="contact" className="py-20 bg-carbon/30">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-glow mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="cyber-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaPaperPlane className="text-neon-blue" />
                  Send Message
                </h3>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-400"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-carbon/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-carbon/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-carbon/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-carbon/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cyber-button w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="cyber-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-carbon/50 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${info.color}20`, border: `1px solid ${info.color}40` }}
                      >
                        <info.icon size={20} style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="cyber-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Connect With Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-carbon/50 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <social.icon 
                        size={24} 
                        style={{ color: social.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="cyber-border p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-300 mb-6">
                  Whether you need ML solutions, web development, or DevOps expertise, 
                  I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#"
                    className="cyber-button flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload />
                    Download Resume
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/denis-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-midnight transition-all duration-300 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCalendarAlt />
                    Schedule Call
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Denis. Built with React, TailwindCSS, and lots of ☕
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;