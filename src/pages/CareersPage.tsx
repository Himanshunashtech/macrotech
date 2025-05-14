import { motion } from 'framer-motion';
import { UsersRound, Heart, GraduationCap, Clock, MapPin } from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import NeonCard from '../components/ui/NeonCard';
import NeonButton from '../components/ui/NeonButton';
import JobCard from '../components/ui/JobCard';

const benefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and fitness subsidies.',
    icon: <Heart className="w-8 h-8 text-neon-pink" />,
    color: 'pink' as const,
  },
  {
    title: 'Continuous Learning',
    description: 'Education stipends, professional development, and conference attendance.',
    icon: <GraduationCap className="w-8 h-8 text-neon-blue" />,
    color: 'blue' as const,
  },
  {
    title: 'Flexible Work',
    description: 'Remote work options, flexible hours, and unlimited PTO policy.',
    icon: <Clock className="w-8 h-8 text-neon-green" />,
    color: 'green' as const,
  },
  {
    title: 'Team Culture',
    description: 'Collaborative environment, team events, and innovation days.',
    icon: <UsersRound className="w-8 h-8 text-neon-purple" />,
    color: 'purple' as const,
  },
];

const jobs = [
  {
    title: 'Senior AI Engineer',
    department: 'Artificial Intelligence',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for an experienced AI Engineer to join our team and help develop cutting-edge artificial intelligence solutions for our clients. You\'ll be working on machine learning models, neural networks, and integrating AI technology into various applications.',
    requirements: [
      'M.S. or Ph.D. in Computer Science, Machine Learning, or related field',
      '5+ years of experience in AI/ML development',
      'Proficiency in Python, PyTorch or TensorFlow, and related ML frameworks',
      'Experience with natural language processing and computer vision',
      'Strong problem-solving skills and ability to work in a team environment',
    ],
    applyLink: '#',
  },
  {
    title: 'Blockchain Developer',
    department: 'Blockchain',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our blockchain team to design and develop decentralized applications and smart contracts. You\'ll be working on groundbreaking blockchain projects that are transforming industries through secure and transparent digital solutions.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in blockchain development',
      'Proficiency with Solidity, Ethereum, and Web3.js',
      'Understanding of cryptographic principles and consensus mechanisms',
      'Experience with DApp development and smart contract auditing',
    ],
    applyLink: '#',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'London, UK',
    type: 'Full-time',
    description: 'We\'re seeking a creative and experienced UX/UI Designer to create stunning interfaces for our futuristic digital products. You\'ll work closely with developers and product managers to deliver exceptional user experiences.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of UX/UI design experience for digital products',
      'Proficiency with Figma, Adobe XD, and other design tools',
      'Strong portfolio demonstrating UI design skills and user-centered design process',
      'Experience designing for web and mobile applications',
    ],
    applyLink: '#',
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Join our security team to help protect our clients\' digital assets from evolving cyber threats. You\'ll be responsible for implementing security protocols, conducting vulnerability assessments, and responding to security incidents.',
    requirements: [
      'Bachelor\'s degree in Computer Science, Cybersecurity, or related field',
      'Security certifications such as CISSP, CEH, or OSCP',
      '3+ years of experience in cybersecurity',
      'Knowledge of network security, penetration testing, and security frameworks',
      'Experience with security monitoring tools and incident response',
    ],
    applyLink: '#',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for a DevOps Engineer to help build and maintain our cloud infrastructure and deployment pipelines. You\'ll work on automating processes, optimizing performance, and ensuring the reliability of our systems.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in DevOps or SRE roles',
      'Experience with AWS, Azure, or GCP cloud platforms',
      'Proficiency with containerization (Docker, Kubernetes)',
      'Knowledge of infrastructure as code (Terraform, Ansible)',
    ],
    applyLink: '#',
  },
];

const CareersPage = () => {
  return (
    <>
      <HeroSection
        title="Join Our Team"
        subtitle="Be part of a team building the future of technology"
      />

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="blue" className="mb-6" withAccent={true}>
                Why Join MacroTech
              </NeonHeading>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At MacroTech, we\'re building the future of technology with a team of passionate innovators. We offer a dynamic environment where you can grow your career, work on cutting-edge projects, and make a real impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our culture is built on collaboration, continuous learning, and pushing boundaries. We celebrate diversity of thought and background, knowing that different perspectives drive innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-neon-blue mr-2"></div>
                  <span className="text-white">Innovation-driven culture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-neon-pink mr-2"></div>
                  <span className="text-white">Work-life balance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-neon-green mr-2"></div>
                  <span className="text-white">Career advancement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                  <span className="text-white">Global opportunities</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-xl h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-transparent rounded-xl mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
                Benefits & Perks
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                We take care of our team so they can focus on what matters
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NeonCard color={benefit.color} className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className={`text-xl font-semibold text-${benefit.color === 'blue' ? 'neon-blue' : benefit.color === 'pink' ? 'neon-pink' : benefit.color === 'green' ? 'neon-green' : 'neon-purple'} mb-3`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
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
                Team Voices
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from the people who make MacroTech extraordinary
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EmployeeTestimonial
              name="James Wilson"
              position="Senior AI Engineer"
              photo="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="Working at MacroTech has given me the opportunity to push the boundaries of AI while collaborating with some of the most talented people in the industry."
              color="blue"
              delay={0}
            />
            <EmployeeTestimonial
              name="Elena Rodriguez"
              position="UX/UI Designer"
              photo="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="The creative freedom and support I receive here has allowed me to grow both professionally and personally. Every day brings exciting new challenges."
              color="pink"
              delay={0.2}
            />
            <EmployeeTestimonial
              name="Michael Chen"
              position="Blockchain Developer"
              photo="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="The culture at MacroTech emphasizes innovation and continuous learning. I\'ve had the chance to work on groundbreaking projects that are making real impact."
              color="green"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="purple" withAccent={true}>
                Open Positions
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help build the future of technology
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                  requirements={job.requirements}
                  applyLink={job.applyLink}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Don\'t see a position that fits your skills? We\'re always looking for talented individuals to join our team.
            </p>
            <NeonButton as="a" href="/contact" color='green'>
              Send Your Resume
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="blue" withAccent={true}>
                Our Hiring Process
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                What to expect when you apply to join MacroTech
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessStep 
              number="01" 
              title="Application" 
              description="Submit your resume and cover letter through our careers portal."
              color="blue"
            />
            <ProcessStep 
              number="02" 
              title="Initial Interview" 
              description="A brief call with our recruiting team to discuss your background and interests."
              color="pink"
            />
            <ProcessStep 
              number="03" 
              title="Technical Assessment" 
              description="Complete a skills-based assessment relevant to the position you\'re applying for."
              color="green"
            />
            <ProcessStep 
              number="04" 
              title="Final Interviews" 
              description="Meet with the team members and leadership you\'d be working with."
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center relative">
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
                Ready to Take the Next Step?
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 mb-8">
                Join our team of innovators and help shape the future of technology.
              </p>
              <NeonButton as="a" href="#" color="blue" size="lg">
                View Open Positions
              </NeonButton>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface EmployeeTestimonialProps {
  name: string;
  position: string;
  photo: string;
  quote: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
  delay: number;
}

const EmployeeTestimonial = ({ name, position, photo, quote, color, delay }: EmployeeTestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <NeonCard color={color} className="h-full">
        <div className="flex flex-col">
          <div className="mb-4">
            <img 
              src={photo} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-cyber-dark"
            />
          </div>
          <p className="text-gray-300 italic mb-6">"{quote}"</p>
          <div className="mt-auto">
            <p className="font-semibold text-white">{name}</p>
            <p className={`text-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : color === 'green' ? 'neon-green' : 'neon-purple'} text-sm`}>
              {position}
            </p>
          </div>
        </div>
      </NeonCard>
    </motion.div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
}

const ProcessStep = ({ number, title, description, color }: ProcessStepProps) => {
  const colorClasses = {
    blue: 'text-neon-blue border-neon-blue/30',
    pink: 'text-neon-pink border-neon-pink/30',
    green: 'text-neon-green border-neon-green/30',
    purple: 'text-neon-purple border-neon-purple/30',
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-cyber-gray p-6 rounded-xl border border-cyber-light h-full">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${colorClasses[color]} border mb-4`}>
          {number}
        </div>
        <h3 className={`text-xl font-semibold ${colorClasses[color].split(' ')[0]} mb-3`}>{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default CareersPage;