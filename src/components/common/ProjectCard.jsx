import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ translateY: -5 }}
      className="card group"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 dark:from-primary-900 to-primary-50 dark:to-dark-900">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags &&
          project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={18} />
            Code
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
