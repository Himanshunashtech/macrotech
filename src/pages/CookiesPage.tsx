import { motion } from 'framer-motion';


const CookiePolicy = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark text-gray-300">
    <div className="container mx-auto">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-8">Cookie Policy</h2>
        <p className="mb-6">Our website uses cookies to enhance your experience and improve functionality. This policy outlines how we use cookies.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">1. What are Cookies?</h3>
        <p className="mb-4">Cookies are small data files stored on your device to improve site performance.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">2. Types of Cookies We Use</h3>
        <p className="mb-4">We use both session and persistent cookies for better user experience.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">3. How We Use Cookies</h3>
        <p className="mb-4">We use cookies to remember your preferences and analyze site traffic.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">4. Managing Cookies</h3>
        <p className="mb-4">You can disable cookies through your browser settings, but this may affect site functionality.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">5. Third-Party Cookies</h3>
        <p className="mb-4">We may use third-party cookies for analytics and advertising purposes.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">6. Data Protection</h3>
        <p className="mb-4">We take data security seriously and protect cookie data accordingly.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">7. Contact Us</h3>
        <p className="mb-4">For questions regarding this policy, please reach out to us.</p>
      </motion.div>
    </div>
  </section>
);

export default CookiePolicy