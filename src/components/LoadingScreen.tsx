import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cyber-dark z-50">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <Cpu className="w-20 h-20 text-neon-blue" />
        </motion.div>
        
        <motion.h1 
          className="mt-4 text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-neon-blue">Macro</span>Tech
        </motion.h1>
        
        <motion.div 
          className="w-48 h-1 bg-cyber-gray mt-6 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-neon-blue"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              delay: 0.7,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Initializing future tech...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;