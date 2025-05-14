import { motion } from 'framer-motion';

const TermsOfService = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark text-gray-300">
    <div className="container mx-auto">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-8">Terms of Service</h2>
        <p className="mb-6">By using our website, you agree to these terms. Please read them carefully before proceeding.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">1. Acceptable Use</h3>
        <p className="mb-4">You agree not to misuse our services or use them for unlawful purposes.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">2. User Responsibilities</h3>
        <p className="mb-4">You are responsible for maintaining the confidentiality of your account details.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">3. Intellectual Property</h3>
        <p className="mb-4">All content and materials on this site are the intellectual property of MacroTech.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">4. Liability</h3>
        <p className="mb-4">MacroTech is not responsible for any damages arising from the use of this site.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">5. Termination</h3>
        <p className="mb-4">We reserve the right to terminate or suspend access to our site without notice.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">6. Governing Law</h3>
        <p className="mb-4">These terms are governed by the laws of your jurisdiction.</p>
        <h3 className="text-2xl font-semibold text-neon-pink mb-4">7. Amendments</h3>
        <p className="mb-4">We may amend these terms from time to time. Please review them regularly.</p>
      </motion.div>
    </div>
  </section>
);

export default TermsOfService