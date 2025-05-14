import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  withScroll?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  withScroll = false,
}: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {i % 2 === 0 ? (
                  <span>{word} </span>
                ) : (
                  <span className="text-neon-blue neon-text">{word} </span>
                )}
              </span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NeonButton
            as="a"
            href={ctaLink}
            color="blue"
            size="lg"
          >
            {ctaText}
          </NeonButton>

          {secondaryCtaText && secondaryCtaLink && (
            <NeonButton
              as="a"
              href={secondaryCtaLink}
              color="pink"
              variant="outline"
              size="lg"
            >
              {secondaryCtaText}
            </NeonButton>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {withScroll && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.8 },
            y: { delay: 1, duration: 2, repeat: Infinity },
          }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 text-neon-blue animate-bounce" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroSection;