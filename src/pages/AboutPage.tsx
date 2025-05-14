import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, CheckCircle } from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import NeonCard from '../components/ui/NeonCard';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    position: 'CEO & Founder',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'blue' as const,
  },
  {
    name: 'Marcus Williams',
    position: 'CTO',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'pink' as const,
  },
  {
    name: 'Sophia Rodriguez',
    position: 'Head of Design',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'green' as const,
  },
  {
    name: 'David Kim',
    position: 'Lead Developer',
    photo: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'purple' as const,
  },
];

const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description: 'MacroTech was founded with a vision to create innovative technology solutions for the future.',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a breakthrough AI solution.',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in Asia and Europe to serve clients worldwide.',
  },
  {
    year: '2021',
    title: 'Innovation Award',
    description: 'Received the Technology Innovation Award for our blockchain solutions.',
  },
  {
    year: '2023',
    title: 'AI Research Lab',
    description: 'Launched our dedicated AI research laboratory to advance next-generation solutions.',
  },
  {
    year: '2024',
    title: 'Strategic Partnerships',
    description: 'Formed strategic partnerships with leading technology providers worldwide.',
  },
];

const values = [
  {
    title: 'Innovation',
    icon: <Lightbulb className="w-8 h-8 text-neon-blue" />,
    description: 'We constantly push boundaries to develop forward-thinking solutions.',
    color: 'blue' as const,
  },
  {
    title: 'Excellence',
    icon: <Award className="w-8 h-8 text-neon-pink" />,
    description: 'We commit to delivering the highest quality in everything we do.',
    color: 'pink' as const,
  },
  {
    title: 'Integrity',
    icon: <CheckCircle className="w-8 h-8 text-neon-green" />,
    description: 'We maintain the highest ethical standards and transparency in all relationships.',
    color: 'green' as const,
  },
  {
    title: 'Collaboration',
    icon: <Users className="w-8 h-8 text-neon-purple" />,
    description: 'We believe great achievements come from teamwork and partnership.',
    color: 'purple' as const,
  },
];

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="Our Story and Mission"
        subtitle="We're a team of innovators passionate about creating technology that shapes the future."
      />

      {/* Mission and Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="blue" className="mb-6" withAccent={true}>
                Our Mission
              </NeonHeading>
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <Target className="w-10 h-10 text-neon-blue" />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At MacroTech, our mission is to accelerate the world's transition to advanced digital solutions through innovative technology. We empower organizations to harness the full potential of cutting-edge technology to solve complex challenges and create meaningful impact.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in building technology that not only meets today's needs but anticipates tomorrow's challenges. Our solutions are designed to be sustainable, scalable, and adaptable to the ever-changing digital landscape.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our mission" 
                className="rounded-xl h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-transparent rounded-xl mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
                Our Core Values
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NeonCard color={value.color} className="text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className={`text-xl font-semibold text-${value.color === 'blue' ? 'neon-blue' : value.color === 'pink' ? 'neon-pink' : value.color === 'green' ? 'neon-green' : 'neon-purple'} mb-3`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Timeline */}
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
                Our Journey
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                The key milestones that have shaped our company
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 w-px h-full bg-neon-green/30 transform md:translate-x-[-0.5px]"></div>

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <TimelineItem 
                  key={milestone.year}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                  isEven={index % 2 === 0}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="blue" withAccent={true}>
                Meet Our Team
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind our innovations
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMemberCard
                  name={member.name}
                  position={member.position}
                  photo={member.photo}
                  color={member.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="purple" withAccent={true}>
                Global Presence
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Our offices around the world
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-[400px] md:h-[500px] bg-cyber-gray rounded-xl overflow-hidden border border-neon-purple/20"
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our global presence" 
                className="w-full h-full object-cover opacity-50"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4">
                  <LocationCard city="San Francisco" country="USA" color="blue" />
                  <LocationCard city="London" country="UK" color="pink" />
                  <LocationCard city="Singapore" country="Singapore" color="green" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isEven: boolean;
  index: number;
}

const TimelineItem = ({ year, title, description, isEven, index }: TimelineItemProps) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-1 md:max-w-[42%]">
        <div className="md:flex md:flex-col md:items-end md:text-right">
          <NeonCard color={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'pink' : 'green'} className="h-full">
            <h3 className="text-neon-green text-xl font-bold mb-2">{year}</h3>
            <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-300">{description}</p>
          </NeonCard>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-[16%] relative my-4 md:my-0">
        <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-cyber-dark border-2 border-neon-green flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-neon-green"></div>
        </div>
      </div>

      <div className="flex-1 md:max-w-[42%] hidden md:block"></div>
    </motion.div>
  );
};

interface TeamMemberCardProps {
  name: string;
  position: string;
  photo: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
}

const TeamMemberCard = ({ name, position, photo, color }: TeamMemberCardProps) => {
  const colorClasses = {
    blue: 'text-neon-blue border-neon-blue/30',
    pink: 'text-neon-pink border-neon-pink/30',
    green: 'text-neon-green border-neon-green/30',
    purple: 'text-neon-purple border-neon-purple/30',
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl h-80"
      whileHover={{ y: -5 }}
    >
      <img 
        src={photo} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className={`text-xl font-bold ${colorClasses[color].split(' ')[0]}`}>{name}</h3>
        <p className="text-white">{position}</p>
        
        <div className="flex space-x-3 mt-4">
          <motion.div 
            className={`w-8 h-8 rounded-full bg-cyber-dark border ${colorClasses[color].split(' ')[1]} flex items-center justify-center ${colorClasses[color].split(' ')[0]}`}
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </motion.div>
          
          <motion.div 
            className={`w-8 h-8 rounded-full bg-cyber-dark border ${colorClasses[color].split(' ')[1]} flex items-center justify-center ${colorClasses[color].split(' ')[0]}`}
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </motion.div>
          
          <motion.div 
            className={`w-8 h-8 rounded-full bg-cyber-dark border ${colorClasses[color].split(' ')[1]} flex items-center justify-center ${colorClasses[color].split(' ')[0]}`}
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface LocationCardProps {
  city: string;
  country: string;
  color: 'blue' | 'pink' | 'green';
}

const LocationCard = ({ city, country, color }: LocationCardProps) => {
  const colorClasses = {
    blue: 'text-neon-blue border-neon-blue/30',
    pink: 'text-neon-pink border-neon-pink/30',
    green: 'text-neon-green border-neon-green/30',
  };

  return (
    <motion.div 
      className={`bg-cyber-dark/90 backdrop-blur-sm rounded-lg border border-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}/30 p-4 text-center`}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className={`text-xl font-bold ${colorClasses[color].split(' ')[0]}`}>{city}</h3>
      <p className="text-white">{country}</p>
    </motion.div>
  );
};

export default AboutPage;