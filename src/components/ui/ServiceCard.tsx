import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NeonCard from './NeonCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'pink' | 'green' | 'purple';
  onClick?: () => void;
}

const ServiceCard = ({ title, description, icon, color, onClick }: ServiceCardProps) => {
  // Map color names to tailwind classes
  const colorClasses = {
    blue: 'text-neon-blue',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
    purple: 'text-neon-purple',
  };

  return (
    <NeonCard color={color} className="h-full" onClick={onClick}>
      <div className="flex flex-col h-full">
        <motion.div
          className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${colorClasses[color]} bg-cyber-light`}
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        <h3 className={`text-xl font-semibold ${colorClasses[color]} mb-3`}>{title}</h3>
        
        <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{description}</p>
        
        <motion.div
          className={`inline-flex items-center ${colorClasses[color]} text-sm font-medium mt-auto`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </motion.div>
      </div>
    </NeonCard>
  );
};

export default ServiceCard;