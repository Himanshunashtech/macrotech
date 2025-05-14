import { motion } from 'framer-motion';
import { 
  Cpu, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Database,
  Cloud,
  Video,
  Headphones
} from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import ServiceCard from '../components/ui/ServiceCard';
import NeonButton from '../components/ui/NeonButton';
import NeonCard from '../components/ui/NeonCard';

const services = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom artificial intelligence solutions tailored to your business needs with machine learning and neural networks.',
    icon: <Cpu />,
    color: 'blue' as const,
    detailedDescription: 'Our AI solutions leverage cutting-edge machine learning algorithms and neural networks to solve complex business problems. From predictive analytics to computer vision and natural language processing, we build custom AI systems that automate processes, generate insights, and create competitive advantages.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'Recommendation Engines'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Secure and transparent blockchain implementations for various applications including smart contracts and NFTs.',
    icon: <Server />,
    color: 'pink' as const,
    detailedDescription: 'Our blockchain development services create secure, transparent, and tamper-proof digital solutions. We design and implement custom blockchain networks, develop smart contracts, and create decentralized applications (dApps) that revolutionize business processes across industries.',
    features: [
      'Smart Contract Development',
      'Decentralized Apps (dApps)',
      'NFT Marketplaces',
      'Tokenization Solutions',
      'Enterprise Blockchain Systems'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets from emerging threats and vulnerabilities.',
    icon: <ShieldCheck />,
    color: 'green' as const,
    detailedDescription: 'Our cybersecurity services provide robust protection for your digital infrastructure. We implement multi-layered security strategies, conduct thorough vulnerability assessments, and develop custom security protocols to safeguard your sensitive data and critical systems from evolving cyber threats.',
    features: [
      'Penetration Testing',
      'Security Audits',
      'Threat Detection Systems',
      'Security Architecture Design',
      'Incident Response Planning'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native-like performance and exceptional user experiences.',
    icon: <Smartphone />,
    color: 'purple' as const,
    detailedDescription: 'Our mobile development team creates engaging, high-performance applications for iOS and Android platforms. Using the latest technologies and frameworks, we build responsive, intuitive, and feature-rich mobile experiences that connect businesses with their customers wherever they are.',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Development',
      'Mobile UI/UX Design',
      'App Performance Optimization',
      'Mobile Payment Integration'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights using advanced analytics and visualization techniques.',
    icon: <Database />,
    color: 'blue' as const,
    detailedDescription: 'Our data analytics services help businesses make data-driven decisions by extracting meaningful insights from complex datasets. We design comprehensive data pipelines, implement advanced analytics models, and create interactive visualizations that reveal trends, patterns, and opportunities hidden in your data.',
    features: [
      'Business Intelligence Dashboards',
      'Big Data Processing',
      'Predictive Analytics',
      'Real-time Analytics',
      'Custom Data Visualizations'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to optimize your operations and reduce costs.',
    icon: <Cloud />,
    color: 'pink' as const,
    detailedDescription: 'Our cloud solutions provide businesses with flexible, scalable, and cost-effective infrastructure. We design, implement, and manage cloud environments that optimize performance, enhance security, and enable rapid innovation while reducing operational overhead and capital expenses.',
    features: [
      'Cloud Migration Strategies',
      'Multi-Cloud Architectures',
      'Serverless Computing',
      'Cloud Security & Compliance',
      'DevOps Automation'
    ]
  },
  {
    id: 'ar-vr',
    title: 'AR/VR Development',
    description: 'Immersive augmented and virtual reality experiences for training, marketing, and product visualization.',
    icon: <Video />,
    color: 'green' as const,
    detailedDescription: 'Our AR/VR development creates immersive digital experiences that transform how businesses train employees, engage customers, and visualize products. We build custom augmented and virtual reality applications that bridge the physical and digital worlds, creating memorable and interactive experiences.',
    features: [
      'VR Training Simulations',
      'AR Product Visualization',
      'Interactive 3D Experiences',
      'Virtual Showrooms',
      'Immersive Marketing Campaigns'
    ]
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    description: 'Connect physical devices to digital networks for smart automation and data collection.',
    icon: <Headphones />,
    color: 'purple' as const,
    detailedDescription: 'Our IoT solutions connect physical devices to digital networks, enabling smart automation and real-time monitoring across various environments. We design end-to-end IoT ecosystems that collect, analyze, and act on data from connected devices, creating more efficient and responsive systems.',
    features: [
      'IoT Architecture Design',
      'Sensor Integration',
      'Edge Computing Solutions',
      'IoT Data Analytics',
      'Smart Facility Management'
    ]
  },
];

const ServicePage = () => {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Cutting-edge technology solutions to transform your business"
      />

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} withAccent={true}>
                What We Offer
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to address the most complex challenges
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 8).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                  onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' })}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-cyber-gray' : 'bg-cyber-dark'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 mr-4 rounded-lg flex items-center justify-center text-${service.color === 'blue' ? 'neon-blue' : service.color === 'pink' ? 'neon-pink' : service.color === 'green' ? 'neon-green' : 'neon-purple'} bg-cyber-light`}>
                    {service.icon}
                  </div>
                  <NeonHeading level={2} color={service.color} className="mb-0">
                    {service.title}
                  </NeonHeading>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {service.detailedDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-white text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <span className={`inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-${service.color === 'blue' ? 'neon-blue' : service.color === 'pink' ? 'neon-pink' : service.color === 'green' ? 'neon-green' : 'neon-purple'}`}></span>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <NeonButton as="a" href="/contact" color={service.color === 'blue' ? 'blue' : service.color === 'pink' ? 'pink' : service.color === 'green' ? 'green' : 'blue'}>
                  Request a Consultation
                </NeonButton>
              </motion.div>

           <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className={`relative h-[400px] md:h-[500px] w-full ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
>

                <img 
                  src={`https://images.pexels.com/photos/${2599244 + index * 10}/pexels-photo-${2599244 + index * 10}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                  alt={service.title} 
                  className="rounded-xl h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.color === 'blue' ? 'neon-blue' : service.color === 'pink' ? 'neon-pink' : service.color === 'green' ? 'neon-green' : 'neon-purple'}/30 to-transparent rounded-xl mix-blend-overlay`} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="pink" withAccent={true}>
                Industries We Serve
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored solutions for diverse sectors
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Finance & Banking', icon: '💼' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Retail & E-commerce', icon: '🛒' },
              { name: 'Education', icon: '🎓' },
              { name: 'Energy & Utilities', icon: '⚡' },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NeonCard color={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'pink' : 'green'} className="text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="green" withAccent={true}>
                Our Process
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                How we deliver exceptional results
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row">
            <ProcessStep 
              number="01" 
              title="Discovery" 
              description="We begin by understanding your business needs, challenges, and goals through in-depth consultation."
              color="blue"
              delay={0}
            />
            <ProcessStep 
              number="02" 
              title="Strategy" 
              description="Our team designs a tailored solution strategy aligned with your specific requirements and objectives."
              color="pink"
              delay={0.2}
            />
            <ProcessStep 
              number="03" 
              title="Development" 
              description="We execute the strategy using agile methodologies, ensuring quality at every step of the process."
              color="green"
              delay={0.4}
            />
            <ProcessStep 
              number="04" 
              title="Deployment" 
              description="The solution is deployed with rigorous testing and optimization for peak performance."
              color="purple"
              delay={0.6}
            />
            <ProcessStep 
              number="05" 
              title="Support" 
              description="We provide ongoing support, updates, and enhancements to ensure long-term success."
              color="blue"
              delay={0.8}
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} withAccent={true}>
                Ready to Transform Your Business?
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can help you achieve your technology goals.
              </p>
              <NeonButton as="a" href="/contact" color="blue" size="lg">
                Schedule a Consultation
              </NeonButton>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
  delay: number;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, color, delay, isLast = false }: ProcessStepProps) => {
  const colorClasses = {
    blue: 'text-neon-blue border-neon-blue',
    pink: 'text-neon-pink border-neon-pink',
    green: 'text-neon-green border-neon-green',
    purple: 'text-neon-purple border-neon-purple',
  };

  return (
    <motion.div 
      className="flex-1 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold ${colorClasses[color]} border-2 mb-4`}>
          {number}
        </div>
        <h3 className={`text-xl font-semibold ${colorClasses[color].split(' ')[0]} mb-3`}>{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      {!isLast && (
        <div className={`hidden md:block absolute top-10 right-0 w-8 h-0.5 ${colorClasses[color].split(' ')[1]}`} />
      )}
    </motion.div>
  );
};

export default ServicePage;