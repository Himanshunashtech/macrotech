import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const PortfolioCard = ({ title, category, imageUrl, link }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.open(link, '_blank')}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-cyber-dark/50 to-transparent"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? 0.9 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Neon border effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: 'inset 0 0 15px rgba(0, 255, 255, 0.7)',
          borderRadius: '0.75rem',
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.div
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-neon-blue text-sm font-medium mb-1">{category}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <motion.div
              className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue"
              animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;