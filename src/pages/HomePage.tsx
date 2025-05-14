import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Cloud,
  BarChart3,
  Lock
} from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import NeonButton from '../components/ui/NeonButton';
import NeonCard from '../components/ui/NeonCard';

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom artificial intelligence solutions tailored to your business needs with machine learning and neural networks.',
    icon: <Cpu />,
    color: 'blue' as const,
  },
  {
    title: 'Blockchain Development',
    description: 'Secure and transparent blockchain implementations for various applications including smart contracts and NFTs.',
    icon: <Server />,
    color: 'pink' as const,
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets from emerging threats and vulnerabilities.',
    icon: <ShieldCheck />,
    color: 'green' as const,
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native-like performance and exceptional user experiences.',
    icon: <Smartphone />,
    color: 'purple' as const,
  },
];

const testimonials = [
  {
    quote: "MacroTech's AI solutions have transformed our customer service operations, reducing response times by 75% while improving satisfaction scores.",
    author: "Alex Morgan",
    position: "CTO",
    company: "GlobalCorp",
    color: 'blue' as const,
  },
  {
    quote: "The blockchain implementation provided by MacroTech has revolutionized our supply chain transparency and reduced verification costs significantly.",
    author: "Sarah Chen",
    position: "Operations Director",
    company: "LogisticsPro",
    color: 'pink' as const,
  },
  {
    quote: "Their cybersecurity team identified vulnerabilities that our previous audits missed. MacroTech's proactive approach has proven invaluable.",
    author: "Michael Rodriguez",
    position: "Security Officer",
    company: "SecureBank",
    color: 'green' as const,
  },
];

const features = [
  {
    title: 'High Performance',
    description: 'Optimized solutions that deliver exceptional speed and efficiency.',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration with leading cloud platforms for scalability.',
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    title: 'Advanced Analytics',
    description: 'Data-driven insights to make informed business decisions.',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade security protocols for your sensitive data.',
    icon: <Lock className="w-5 h-5" />,
  },
];

const HomePage = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroSection
        title="Future Technology For Tomorrow's Solutions"
        subtitle="We create cutting-edge digital experiences with innovative technology solutions that transform industries and drive growth."
        ctaText="Explore Services"
        ctaLink="/services"
        secondaryCtaText="Our Portfolio"
        secondaryCtaLink="/portfolio"
        withScroll={true}
      />

      {/* Services Section */}
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
                Our Services
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge solutions using advanced technologies to help businesses thrive in the digital age.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  onClick={() => { /* navigate to service */ }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <NeonButton color="blue" size="lg">
                View All Services
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 bg-cyber-gray"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number={10} label="Years Experience" color="blue" />
            <StatCard number={200} label="Projects Completed" color="pink" />
            <StatCard number={50} label="Team Members" color="green" />
            <StatCard number={15} label="Industry Awards" color="purple" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <NeonHeading level={2} color="pink" className="mb-6" withAccent={true}>
                  Why Choose MacroTech
                </NeonHeading>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  We combine cutting-edge technology with creative expertise to deliver solutions that exceed expectations. Our team of specialists works closely with you to understand your unique challenges and create tailored solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={feature.title}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/about">
                  <NeonButton color="pink">
                    Learn More About Us
                  </NeonButton>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative h-[400px] md:h-[500px] w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Futuristic technology" 
                className="rounded-xl h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-pink/30 rounded-xl mix-blend-overlay" />
              <div className="absolute inset-0 backdrop-blur-[1px] rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                What Our Clients Say
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by forward-thinking companies around the world
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  color={testimonial.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center relative">
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
                Let's collaborate to create innovative solutions that will propel your company into the future.
              </p>
              <Link to="/contact">
                <NeonButton color="blue" size="lg">
                  Get in Touch
                </NeonButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface StatCardProps {
  number: number;
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <NeonCard color={color} className="text-center">
        <motion.h3 
          className={`text-4xl md:text-5xl font-bold mb-2 ${colorClasses[color]} neon-text`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            duration: 0.8,
            delay: 0.2
          }}
        >
          {number}+
        </motion.h3>
        <p className="text-gray-300 text-lg">{label}</p>
      </NeonCard>
    </motion.div>
  );
};

export default HomePage;