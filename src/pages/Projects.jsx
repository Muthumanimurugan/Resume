import { motion } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
import image from "../assets/logo.png";
import Justplay from "../assets/app_logo.png";
import Medscheme from "../assets/medschme.png";    

const Projects = () => {
  const projects = [
    {
      title: 'valuestreak',
      description:"A role-based product management application where admins manage categories and advertisements, vendors add and manage products, and users can browse, bookmark, and rate products with secure access control and responsive design.",
      image: image,
      tags: ['React', 'JavaScript', 'API Integration', 'CSS','Firebase'],
      // github: 'https://github.com',
      // demo: 'https://example.com',
    },
    {
      title: 'Justplay',
      description: 'A turf booking application where users can discover and book turfs based on location, turf owners can manage listings and slots, and admins verify and monitor activities, with secure payments, real-time notifications, and role-based access control.',
      image: Justplay,
       tags: ['React', 'JavaScript', 'API Integration', 'CSS','Firebase','payment gateway'],
      // github: 'https://github.com',
      // demo: 'https://example.com',
    },
    {
      title: 'Medscheme ticketing system',
      description: 'A role-based ticketing system with chatbot integration that automatically creates category-based tickets for unresolved queries, featuring real-time notifications, REST API integration, and a reusable React TypeScript UI for efficient ticket management by admins and agents.',
      image: Medscheme,
      tags: ['React', 'API Integration', 'Tailwind CSS', 'TypeScript', 'Firebase'],
      // github: 'https://github.com',
      // demo: 'https://example.com',
    },
    {
      title: 'Medscheme webbot',
      description: 'A chatbot integrated using Socket.io for real-time communication, where users can ask questions and receive instant responses. If a query cannot be answered, the chatbot automatically raises a ticket. The chatbot is embedded into external websites using a script-based integration, enabling seamless customer support and ticket creation',
      image: Medscheme,
      tags: ['React',  'CSS',"Socket.io", 'JavaScript', 'Firebase'],
      // github: 'https://github.com',  
      // demo: 'https://example.com',
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
