import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import NeonHeading from '../components/ui/NeonHeading';
import BlogCard from '../components/ui/BlogCard';
import NeonButton from '../components/ui/NeonButton';

// Blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Business Operations',
    excerpt: 'Explore how artificial intelligence is transforming business operations across industries.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Dr. Sarah Chen',
    date: 'May 15, 2024',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
  },
  {
    id: '2',
    title: 'Blockchain Security: Best Practices for Enterprises',
    excerpt: 'Learn essential security practices for implementing blockchain technology in enterprise environments.',
    imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Rodriguez',
    date: 'April 28, 2024',
    readTime: '10 min read',
    category: 'Blockchain',
  },
  {
    id: '3',
    title: 'The Rise of Quantum Computing and Its Implications',
    excerpt: 'Discover how quantum computing is set to revolutionize computational capabilities across industries.',
    imageUrl: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Dr. Alex Morgan',
    date: 'April 12, 2024',
    readTime: '12 min read',
    category: 'Quantum Computing',
  },
  {
    id: '4',
    title: 'IoT Security Challenges in Smart Cities',
    excerpt: 'Examining the security challenges and solutions for IoT implementations in urban environments.',
    imageUrl: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Emma Wilson',
    date: 'March 30, 2024',
    readTime: '9 min read',
    category: 'IoT Solutions',
  },
  {
    id: '5',
    title: 'Augmented Reality in Industrial Training',
    excerpt: 'How AR is transforming employee training and reducing costs in manufacturing settings.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'James Thompson',
    date: 'March 15, 2024',
    readTime: '7 min read',
    category: 'AR/VR Development',
  },
  {
    id: '6',
    title: 'Cloud Migration Strategies for Legacy Systems',
    excerpt: 'Strategic approaches to modernizing legacy systems through cloud migration.',
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Lisa Wang',
    date: 'February 28, 2024',
    readTime: '11 min read',
    category: 'Cloud Solutions',
  },
  {
    id: '7',
    title: 'Machine Learning in Predictive Maintenance',
    excerpt: 'Using ML algorithms to predict equipment failures before they happen and optimize maintenance schedules.',
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Daniel Johnson',
    date: 'February 14, 2024',
    readTime: '9 min read',
    category: 'Machine Learning',
  },
  {
    id: '8',
    title: 'Cybersecurity Trends for 2025 and Beyond',
    excerpt: 'Emerging cybersecurity threats and defense strategies for the coming years.',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Marcus Lee',
    date: 'January 30, 2024',
    readTime: '10 min read',
    category: 'Cybersecurity',
  },
  {
    id: '9',
    title: 'The Impact of 5G on Mobile Application Development',
    excerpt: 'How 5G networks are changing the landscape of mobile app development and user experiences.',
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sophia Garcia',
    date: 'January 15, 2024',
    readTime: '8 min read',
    category: 'Mobile Development',
  },
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Blockchain',
  'Cloud Solutions',
  'Cybersecurity',
  'IoT Solutions',
  'Machine Learning',
  'Mobile Development',
  'Quantum Computing',
  'AR/VR Development',
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection
        title="Our Tech Blog"
        subtitle="Explore the latest insights, trends, and innovations in technology"
      />

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neon-blue" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-neon-blue/30 rounded-md bg-cyber-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
              />
            </div>

            {/* Categories */}
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex gap-2 pb-2 md:pb-0">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-neon-blue/20 text-neon-blue'
                        : 'bg-cyber-gray text-gray-300 hover:bg-neon-blue/10 hover:text-white'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1); // Reset to first page on category change
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  {currentPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BlogCard
                        id={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        imageUrl={post.imageUrl}
                        author={post.author}
                        date={post.date}
                        readTime={post.readTime}
                        category={post.category}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <motion.button
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1
                          ? 'bg-cyber-gray text-gray-500 cursor-not-allowed'
                          : 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20'
                      }`}
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                      whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                    >
                      Previous
                    </motion.button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <motion.button
                        key={page}
                        className={`w-8 h-8 rounded-md flex items-center justify-center ${
                          currentPage === page
                            ? 'bg-neon-blue text-cyber-dark font-medium'
                            : 'bg-cyber-gray text-white hover:bg-neon-blue/20 hover:text-neon-blue'
                        }`}
                        onClick={() => handlePageChange(page)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {page}
                      </motion.button>
                    ))}

                    <motion.button
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? 'bg-cyber-gray text-gray-500 cursor-not-allowed'
                          : 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20'
                      }`}
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                      whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                    >
                      Next
                    </motion.button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">No articles found matching your search criteria.</p>
              <NeonButton
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </NeonButton>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-gray">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-cyber-dark rounded-2xl p-8 border border-neon-pink/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <NeonHeading level={2} color="pink">
                Subscribe to Our Newsletter
              </NeonHeading>
              <p className="mt-4 text-gray-300">
                Stay updated with the latest technology insights and innovations. No spam, just valuable content.
              </p>
            </div>

            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  className="flex-grow px-4 py-3 rounded-md bg-cyber-gray/70 border border-neon-pink/30 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50 focus:border-neon-pink"
                  placeholder="Enter your email address"
                  required
                />
                <NeonButton color="pink" type="submit">
                  Subscribe
                </NeonButton>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;