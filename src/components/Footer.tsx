import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-cyber-gray border-t border-neon-blue/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-neon-blue animate-glow" />
              <span className="ml-2 text-xl font-bold text-white">
                <span className="text-neon-blue">Macro</span>Tech
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Pioneering the future of technology with innovative solutions that transform industries.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Linkedin />} href="#" />
              <SocialIcon icon={<Github />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/services">AI Solutions</FooterLink>
              <FooterLink to="/services">Blockchain Development</FooterLink>
              <FooterLink to="/services">IoT Integration</FooterLink>
              <FooterLink to="/services">Cloud Computing</FooterLink>
              <FooterLink to="/services">Cybersecurity</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-3">1234 Tech Avenue</p>
              <p className="mb-3">Innovation District</p>
              <p className="mb-3">Future City, FC 54321</p>
              <p className="mb-3">
                <a href="mailto:info@macrotech.com" className="hover:text-neon-pink">
                  info@macrotech.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-neon-blue">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-neon-blue/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MacroTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-neon-blue text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-neon-blue text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-neon-blue text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 p-2 rounded-full bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
      {children}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-cyber-light text-white hover:text-neon-blue hover:bg-cyber-light/80 transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;