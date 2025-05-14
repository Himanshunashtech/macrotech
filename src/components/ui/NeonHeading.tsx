interface NeonHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'blue' | 'pink' | 'green' | 'purple' | 'yellow';
  className?: string;
  withAccent?: boolean;
}

const NeonHeading = ({
  children,
  level = 2,
  color = 'blue',
  className = '',
  withAccent = false,
}: NeonHeadingProps) => {
  // Map color names to tailwind classes
  const colorClasses = {
    blue: 'text-neon-blue',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
    purple: 'text-neon-purple',
    yellow: 'text-neon-yellow',
  };

  // Dynamic tag based on heading level
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  // Size classes based on heading level
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <HeadingTag
      className={`${sizeClasses[level]} ${colorClasses[color]} neon-text leading-tight tracking-tight ${className}`}
    >
      {withAccent ? (
        <>
          <span className="inline-block w-10 h-0.5 bg-current mr-4 align-middle"></span>
          {children}
        </>
      ) : (
        children
      )}
    </HeadingTag>
  );
};

export default NeonHeading;