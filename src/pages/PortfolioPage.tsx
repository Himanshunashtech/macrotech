import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import PortfolioCard from '../components/ui/PortfolioCard';
import NeonButton from '../components/ui/NeonButton';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'NextGen AI Assistant',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'An advanced AI assistant platform that helps businesses automate customer support with natural language processing capabilities.',
    client: 'TechCorp Inc.',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
  },
  {
    id: 2,
    title: 'Secure Chain',
    category: 'Blockchain',
    imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A blockchain-based supply chain tracking solution that ensures transparency and security throughout the distribution process.',
    client: 'LogisticsPro',
    technologies: ['Solidity', 'Ethereum', 'React', 'Node.js', 'Web3.js'],
  },
  {
    id: 3,
    title: 'CyberShield',
    category: 'Cybersecurity',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'An enterprise-grade security system that protects digital assets from advanced cyber threats using AI-powered detection.',
    client: 'SecureBank',
    technologies: ['Python', 'Machine Learning', 'Java', 'Elasticsearch', 'Docker'],
  },
  {
    id: 4,
    title: 'HealthTrack Mobile',
    category: 'Mobile Development',
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A comprehensive health tracking mobile application that integrates with wearable devices to monitor vital health metrics.',
    client: 'MedTech Solutions',
    technologies: ['React Native', 'Firebase', 'Swift', 'Kotlin', 'GraphQL'],
  },
  {
    id: 5,
    title: 'DataVision Analytics',
    category: 'Data Analytics',
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A powerful data visualization platform that transforms complex datasets into actionable business insights through interactive dashboards.',
    client: 'Global Analytics',
    technologies: ['Python', 'D3.js', 'R', 'Tableau', 'SQL'],
  },
  {
    id: 6,
    title: 'CloudOps',
    category: 'Cloud Solutions',
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A cloud infrastructure management platform that optimizes resource allocation and reduces operational costs.',
    client: 'CloudPro',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Go', 'Prometheus'],
  },
  {
    id: 7,
    title: 'VirtualTour',
    category: 'AR/VR Development',
    imageUrl: 'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A virtual reality platform for immersive property tours, allowing potential buyers to explore properties remotely.',
    client: 'RealEstate Pro',
    technologies: ['Unity3D', 'C#', 'WebXR', 'Three.js', 'Blender'],
  },
  {
    id: 8,
    title: 'SmartFactory',
    category: 'IoT Solutions',
    imageUrl: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'An IoT-based factory automation system that enhances production efficiency and enables predictive maintenance.',
    client: 'Manufacturing Plus',
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Python', 'Node.js'],
  },
  {
    id: 9,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    description: 'A high-performance e-commerce platform with advanced search capabilities and personalized recommendations.',
    client: 'Shopping Network',
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Redis'],
  },
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Blockchain',
  'Cybersecurity',
  'Mobile Development',
  'Data Analytics',
  'Cloud Solutions',
  'AR/VR Development',
  'IoT Solutions',
  'Web Development',
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | typeof portfolioItems[0]>(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore our innovative projects across various technology domains"
      />

      {/* Filter Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-blue/20 text-neon-blue'
                    : 'bg-cyber-gray text-gray-300 hover:bg-neon-blue/10 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <PortfolioCard
                    title={project.title}
                    category={project.category}
                    imageUrl={project.imageUrl}
                    link="#"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-cyber-gray w-full max-w-4xl rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent"></div>
                <button
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cyber-dark/50 text-white hover:bg-neon-blue/20"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-medium rounded-full backdrop-blur-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-neon-blue font-semibold mb-2">Client</h4>
                    <p className="text-gray-300">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-neon-pink font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-cyber-dark text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <NeonButton color="blue">View Project</NeonButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="green" withAccent={true}>
                Our Impact
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                The results we've achieved for our clients
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="95%" label="Client Satisfaction" color="blue" />
            <StatCard number="40%" label="Average ROI" color="pink" />
            <StatCard number="65%" label="Process Efficiency Increase" color="green" />
            <StatCard number="30%" label="Cost Reduction" color="purple" />
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} withAccent={true}>
                Ready to Start Your Project?
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 mb-8">
                Let's collaborate to create something amazing together. Our team is ready to bring your ideas to life.
              </p>
              <NeonButton as="a" href="/contact" color="blue" size="lg">
                Start a Project
              </NeonButton>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
}

const StatCard = ({ number, label, color }: StatCardProps) => {
  const colorClasses = {
    blue: 'text-neon-blue',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
    purple: 'text-neon-purple',
  };

  return (
    <motion.div
      className="bg-cyber-dark p-6 rounded-xl border border-cyber-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className={`text-4xl font-bold mb-2 ${colorClasses[color]}`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

export default PortfolioPage;