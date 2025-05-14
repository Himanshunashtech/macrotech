import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <Cpu className="w-8 h-8 text-neon-blue animate-glow" />
            <span className="ml-2 text-xl font-bold text-white">
              <span className="text-neon-blue">Macro</span>Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                isActive={location.pathname === link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact button - Desktop */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="neon-button bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20"
              style={{ '--neon-color': '#00FFFF' } as React.CSSProperties}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-neon-pink" />
              ) : (
                <Menu className="h-6 w-6 text-neon-blue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-cyber-gray/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-neon-blue neon-text'
                    : 'text-white hover:text-neon-pink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="neon-button block text-center w-full bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20"
                style={{ '--neon-color': '#00FFFF' } as React.CSSProperties}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, isActive, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="relative font-medium transition-colors duration-300"
    >
      <span className={isActive ? 'text-neon-blue neon-text' : 'text-white hover:text-neon-pink'}>
        {children}
      </span>
      {isActive && (
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
          layoutId="navbar-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default Navbar;