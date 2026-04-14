import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import SocialLinks from '../components/common/SocialLinks';
import myImage from '../assets/myimage.png';

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
        <div className="container-custom">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <img
                src={myImage}
                alt="Avatar"
                className="w-32 h-32 md:w-48 mt-5 md:h-48 rounded-full mx-auto shadow-xl border-4 border-primary-500"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
            >
              Hey, I'm Muthumanimurugan KR
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              React JS Developer with 2 years of experience creating beautiful, responsive, and user-friendly web applications
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap mb-12"
            >
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <SocialLinks />
            </motion.div>

            <motion.button
              variants={itemVariants}
              onClick={scrollToProjects}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block p-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Happy Clients', value: '10+' },
              { label: 'Years Experience', value: '2+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center card"
              >
                <p className="text-5xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="projects-section" className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to see my work?
            </h2>
            <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              Check out my projects and find out how I can help bring your ideas to life.
            </p>
            <Link to="/projects" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
