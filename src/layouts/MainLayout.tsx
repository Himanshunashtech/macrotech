import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/3d/ParticlesBackground';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <motion.main
        className="flex-grow z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;