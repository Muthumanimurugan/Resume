import { motion } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
import image from "../assets/logo.png";
import Justplay from "../assets/app_logo.png";
import Medscheme from "../assets/medschme.png";    

const Projects = () => {
  const projects = [
    {
      title: 'Value Streak',
      description: 'A multi-role business management platform for Admin, Vendor, and User flows with RBAC, stepper-based forms, advertisement slot management, secure access control, and a responsive UI.',
      image: image,
      tags: ['React.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Firebase'],
    },
    {
      title: 'Justplay',
      description: 'A turf booking app with location-based discovery, role-based management for owners and admins, secure payments, real-time notifications, and responsive booking workflows.',
      image: Justplay,
      tags: ['React', 'JavaScript', 'API Integration', 'Firebase', 'Payment Gateway'],
    },
    {
      title: 'MedScheme Ticketing System',
      description: 'A role-based support platform for Admin, Sub-Admin, and Agent users featuring ticket lifecycle workflows, REST API integration, FCM notifications, and reusable React TypeScript UI modules.',
      image: Medscheme,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Axios', 'Firebase Cloud Messaging'],
    },
    {
      title: 'MedScheme AI Chatbot',
      description: 'A React-powered chatbot widget integrated with Rasa AI and Socket.IO for real-time support, quick replies, multimedia interaction, document uploads, and ticket creation.',
      image: Medscheme,
      tags: ['React', 'JavaScript', 'Socket.IO', 'Rasa AI', 'Docker'],
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
              A selection of recent applications covering role-based systems, real-time collaboration, secure workflows, and AI-powered chatbot experiences.
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
