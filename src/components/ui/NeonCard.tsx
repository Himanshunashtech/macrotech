import { motion } from 'framer-motion';

interface NeonCardProps {
  children: React.ReactNode;
  color?: 'blue' | 'pink' | 'green' | 'purple';
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const NeonCard = ({
  children,
  color = 'blue',
  className = '',
  hoverable = true,
  onClick,
}: NeonCardProps) => {
  // Map color names to tailwind classes and CSS variables
  const colorMap = {
    blue: {
      border: 'border-neon-blue/20',
      glow: '#00FFFF',
    },
    pink: {
      border: 'border-neon-pink/20',
      glow: '#FF00FF',
    },
    green: {
      border: 'border-neon-green/20',
      glow: '#00FF66',
    },
    purple: {
      border: 'border-neon-purple/20',
      glow: '#9D00FF',
    },
  };

  const hoverProps = hoverable
    ? {
        whileHover: {
          scale: 1.02,
          boxShadow: `0 0 20px 1px ${colorMap[color].glow}30`,
        },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <motion.div
      className={`neon-border bg-cyber-gray/50 backdrop-blur-sm rounded-xl border ${colorMap[color].border} p-6 ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{ '--neon-color': colorMap[color].glow } as React.CSSProperties}
      onClick={onClick}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
};

export default NeonCard;