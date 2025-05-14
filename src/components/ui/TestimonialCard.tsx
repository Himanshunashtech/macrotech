import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import NeonCard from './NeonCard';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  color?: 'blue' | 'pink' | 'green' | 'purple';
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  color = 'blue',
}: TestimonialCardProps) => {
  return (
    <NeonCard color={color} className="relative">
      <motion.div
        className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-cyber-dark rounded-full"
        whileHover={{ rotate: 20 }}
      >
        <Quote className={`w-4 h-4 text-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}`} />
      </motion.div>
      
      <div className="pt-4">
        <p className="text-gray-300 italic mb-6 leading-relaxed">"{quote}"</p>
        
        <div className="flex items-center">
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-gray-400 text-sm">
              {position}, <span className={`text-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}`}>{company}</span>
            </p>
          </div>
        </div>
      </div>
    </NeonCard>
  );
};

export default TestimonialCard;