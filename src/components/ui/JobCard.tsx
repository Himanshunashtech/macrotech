import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import NeonButton from './NeonButton';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  applyLink: string;
}

const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  requirements,
  applyLink,
}: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-cyber-gray border border-neon-blue/20 rounded-xl overflow-hidden"
      whileHover={{ borderColor: 'rgba(0, 255, 255, 0.4)' }}
      layout
    >
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-neon-blue">{department}</p>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="bg-neon-blue/10 text-neon-blue text-xs font-medium px-2.5 py-1 rounded-full mr-2">
              {type}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-neon-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-neon-blue" />
              )}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap text-gray-400 text-sm">
          <div className="flex items-center mr-4 mb-2">
            <MapPin className="w-4 h-4 mr-1 text-neon-pink" />
            {location}
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 mr-1 text-neon-green" />
            {type}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 overflow-hidden"
          >
            <div className="border-t border-neon-blue/10 py-4">
              <p className="text-gray-300 mb-4">{description}</p>
              
              <h4 className="text-white font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-1">
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              
              <div className="flex justify-end mb-2">
                <NeonButton
                  color="blue"
                  as="a"
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </NeonButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobCard;