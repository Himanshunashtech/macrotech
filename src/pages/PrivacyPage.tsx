import { motion } from 'framer-motion';

const PrivacyPolicy = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark text-gray-300">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-8">Privacy Policy</h2>
        <p className="mb-6">At MacroTech, we value your privacy. This policy outlines how we collect, use, and protect your information when you interact with our website.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">1. Information We Collect</h3>
        <p className="mb-4">We may collect personal information, such as your name, email, and usage data, to improve your experience.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">2. How We Use Your Information</h3>
        <p className="mb-4">We use the data to enhance our services, improve our website, and communicate important updates.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">3. Your Rights</h3>
        <p className="mb-4">You have the right to access, modify, or delete your data at any time.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">4. Data Security</h3>
        <p className="mb-4">We implement robust security measures to protect your data from unauthorized access.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">5. Third-Party Services</h3>
        <p className="mb-4">We may share your information with trusted third-party providers for analytics and support.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">6. Policy Updates</h3>
        <p className="mb-4">We may update this policy periodically to reflect changes in our practices or legal requirements.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">7. Contact Us</h3>
        <p className="mb-4">If you have any questions or concerns about this policy, please reach out to us.</p>
      </motion.div>
    </div>
  </section>
);

export default PrivacyPolicy;