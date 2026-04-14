import { motion } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce React App',
      description: 'A fully functional e-commerce platform built with React, featuring product catalog, shopping cart, and payment integration using Stripe.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'JavaScript', 'Stripe', 'CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management Dashboard',
      description: 'A collaborative task management application with real-time updates, user authentication, and project organization features.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather App',
      description: 'A responsive weather dashboard that displays real-time weather data with beautiful visualizations and location-based features.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'API Integration', 'CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern personal portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with React, featuring markdown support, user comments, categories, and search functionality.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media metrics with interactive charts and performance tracking built with React.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Chart.js', 'API'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">
              Here are some of my recent works that showcase my skills and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to start a project?
            </h2>
            <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects. Let's work together!
            </p>
            <a href="#contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
