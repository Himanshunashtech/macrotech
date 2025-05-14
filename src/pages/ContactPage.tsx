import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin as MapPinIcon, 
  Clock, 
  Send,
  Check
} from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import NeonButton from '../components/ui/NeonButton';
import NeonCard from '../components/ui/NeonCard';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Reach out to discuss how we can help bring your vision to life"
      />

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="blue" className="mb-6" withAccent={true}>
                Send Us a Message
              </NeonHeading>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-6 flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="text-neon-green w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-neon-green font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name <span className="text-neon-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address <span className="text-neon-pink">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-white mb-2">
                      Service Interest <span className="text-neon-pink">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="blockchain">Blockchain Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white mb-2">
                      Message <span className="text-neon-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-blue/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <NeonButton
                      type="submit"
                      color="blue"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </NeonButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:ml-6">
                <NeonHeading level={2} color="pink" className="mb-6" withAccent={true}>
                  Contact Information
                </NeonHeading>
                <p className="text-gray-300 mb-8">
                  Reach out to us directly or visit our offices. We\'re here to answer any questions you may have.
                </p>

                <div className="space-y-6 mb-8">
                  <ContactInfoItem
                    icon={<Mail className="w-6 h-6 text-neon-blue" />}
                    title="Email"
                    content={<a href="mailto:info@macrotech.com" className="hover:text-neon-blue transition-colors">info@macrotech.com</a>}
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-6 h-6 text-neon-pink" />}
                    title="Phone"
                    content={<a href="tel:+11234567890" className="hover:text-neon-pink transition-colors">+1 (123) 456-7890</a>}
                  />
                  <ContactInfoItem
                    icon={<MapPinIcon className="w-6 h-6 text-neon-green" />}
                    title="Headquarters"
                    content={<>1234 Tech Avenue<br />Innovation District<br />San Francisco, CA 94103</>}
                  />
                  <ContactInfoItem
                    icon={<Clock className="w-6 h-6 text-neon-purple" />}
                    title="Business Hours"
                    content={<>Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />Saturday - Sunday: Closed</>}
                  />
                </div>

                <NeonCard color="blue" className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Global Offices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-neon-blue font-medium">San Francisco</h4>
                      <p className="text-gray-300">United States (Headquarters)</p>
                    </div>
                    <div>
                      <h4 className="text-neon-pink font-medium">London</h4>
                      <p className="text-gray-300">United Kingdom</p>
                    </div>
                    <div>
                      <h4 className="text-neon-green font-medium">Singapore</h4>
                      <p className="text-gray-300">Asia Pacific</p>
                    </div>
                  </div>
                </NeonCard>

                <div className="flex space-x-4">
                  <SocialButton href="#" color="blue" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  } />
                  <SocialButton href="#" color="pink" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  } />
                  <SocialButton href="#" color="green" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  } />
                  <SocialButton href="#" color="purple" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  } />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NeonHeading level={2} color="green" withAccent={true}>
                Visit Our Offices
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                We have locations across the globe to serve you better
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map Image Placeholder */}
            <img 
              src="https://images.pexels.com/photos/16013622/pexels-photo-16013622/free-photo-of-world-map-in-dark-blue-color.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our Global Offices" 
              className="w-full h-full object-cover"
            />
            
            {/* Map Pins */}
            <div className="absolute inset-0">
              <LocationPin location="San Francisco" position="top-1/4 left-1/4" color="blue" />
              <LocationPin location="London" position="top-1/3 left-1/2" color="pink" />
              <LocationPin location="Singapore" position="top-1/2 left-3/4" color="green" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </NeonHeading>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about working with us
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FAQItem
              question="How do I get started with MacroTech?"
              answer="Contact us through our form or via email to schedule an initial consultation. We'll discuss your needs and goals to determine how we can best help you."
              color="blue"
            />
            <FAQItem
              question="What industries do you serve?"
              answer="We work with clients across various sectors including finance, healthcare, manufacturing, retail, education, and energy. Our solutions are adaptable to diverse industry requirements."
              color="pink"
            />
            <FAQItem
              question="How long does a typical project take?"
              answer="Project timelines vary based on complexity and scope. A simple application might take 4-8 weeks, while more complex enterprise systems could take several months. We'll provide a detailed timeline during our consultation."
              color="green"
            />
            <FAQItem
              question="Do you offer ongoing support after project completion?"
              answer="Yes, we offer various support and maintenance packages to ensure your technology continues to perform optimally. We can provide regular updates, monitoring, and technical support."
              color="purple"
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
  icon: React.ReactNode;
}

const SocialButton = ({ href, color, icon }: SocialButtonProps) => {
  const colorClasses = {
    blue: 'text-neon-blue hover:bg-neon-blue/20',
    pink: 'text-neon-pink hover:bg-neon-pink/20',
    green: 'text-neon-green hover:bg-neon-green/20',
    purple: 'text-neon-purple hover:bg-neon-purple/20',
  };

  return (
    <motion.a
      href={href}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClasses[color]} transition-colors duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </motion.a>
  );
};

interface LocationPinProps {
  location: string;
  position: string;
  color: 'blue' | 'pink' | 'green';
}

const LocationPin = ({ location, position, color }: LocationPinProps) => {
  const colorClasses = {
    blue: 'text-neon-blue',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
  };

  return (
    <motion.div
      className={`absolute ${position} flex flex-col items-center`}
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
      <MapPinIcon className={`w-8 h-8 ${colorClasses[color]}`} />
      <div className={`${colorClasses[color]} text-sm font-semibold bg-cyber-dark/80 px-2 py-1 rounded-md mt-1`}>
        {location}
      </div>
    </motion.div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  color: 'blue' | 'pink' | 'green' | 'purple';
}

const FAQItem = ({ question, answer, color }: FAQItemProps) => {
  const colorClasses = {
    blue: 'text-neon-blue',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
    purple: 'text-neon-purple',
  };

  return (
    <motion.div
      className="bg-cyber-gray rounded-xl p-6 border border-cyber-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <h3 className={`text-lg font-semibold ${colorClasses[color]} mb-3`}>{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </motion.div>
  );
};

export default ContactPage;