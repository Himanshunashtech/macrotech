import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'blue' | 'pink' | 'green';
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ children, color = 'blue', variant = 'solid', size = 'md', fullWidth = false, className = '', ...props }, ref) => {
    // Map color names to tailwind classes and CSS variables
    const colorMap = {
      blue: {
        bg: 'bg-neon-blue/10',
        border: 'border-neon-blue',
        text: 'text-neon-blue',
        hover: 'hover:bg-neon-blue/20',
        shadow: 'shadow-neon-blue',
        cssVar: '#00FFFF',
      },
      pink: {
        bg: 'bg-neon-pink/10',
        border: 'border-neon-pink',
        text: 'text-neon-pink',
        hover: 'hover:bg-neon-pink/20',
        shadow: 'shadow-neon-pink',
        cssVar: '#FF00FF',
      },
      green: {
        bg: 'bg-neon-green/10',
        border: 'border-neon-green',
        text: 'text-neon-green',
        hover: 'hover:bg-neon-green/20',
        shadow: 'shadow-neon-green',
        cssVar: '#00FF66',
      },
    };

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    // Variant classes
    const variantClasses = {
      solid: `${colorMap[color].bg} ${colorMap[color].text} ${colorMap[color].hover}`,
      outline: `bg-transparent border-2 ${colorMap[color].border} ${colorMap[color].text} hover:${colorMap[color].bg}`,
      ghost: `bg-transparent ${colorMap[color].text} hover:${colorMap[color].bg}`,
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        className={`neon-button ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-dark focus:${colorMap[color].border} ${className}`}
        style={{ '--neon-color': colorMap[color].cssVar } as React.CSSProperties}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

NeonButton.displayName = 'NeonButton';

export default NeonButton;