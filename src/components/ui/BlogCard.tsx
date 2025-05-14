import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  imageUrl,
  author,
  date,
  readTime,
  category,
}: BlogCardProps) => {
  return (
    <motion.article
      className="bg-cyber-gray rounded-xl overflow-hidden border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold text-white mb-2 hover:text-neon-blue transition-colors duration-300">
            {title}
          </h3>
        </Link>

        <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <User className="w-4 h-4 mr-1 text-neon-pink" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1 text-neon-green" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-neon-blue" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-neon-blue hover:text-neon-pink font-medium text-sm transition-colors duration-300"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;