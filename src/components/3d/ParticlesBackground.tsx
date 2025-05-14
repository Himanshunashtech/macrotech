import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  delay: number;
}

const colors = ['#00FFFF', '#FF00FF', '#00FF66'];

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive particle count
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        delay: Math.random() * 5,
      });
    }
    
    setParticles(newParticles);
    
    // Start animation
    controls.start({
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
    
    // Cleanup
    return () => {
      controls.stop();
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            filter: `blur(1px)`,
          }}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{
            delay: particle.delay,
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;