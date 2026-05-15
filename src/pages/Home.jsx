import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Linkedin } from 'lucide-react';
import SocialLinks from '../components/common/SocialLinks';
import myImage from '../assets/myimage.png';

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Years Experience', value: '2+' },
  ];

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




  const user = { 
    name: 'Muthumanimurugan KR',
    
  }
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-white via-primary-50 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
        <div className="container-custom">
          <motion.div
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 text-sm font-semibold w-max">
                Available for opportunities
              </span>

              <div>
                <h1 className="text-5xl md:text-[4.5rem] leading-tight font-bold tracking-tight text-gray-900 dark:text-white">
                  Muthumanimurugan KR
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  React JS Developer crafting responsive user experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-dark-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                  <MapPin size={16} />
                  Namakkal, Tamil Nadu, India
                </div>
              </div>

              <p className="max-w-3xl text-base md:text-lg text-gray-600 dark:text-gray-300">
                I build scalable, responsive web applications with React, JavaScript, and modern UI patterns. My work focuses on clean interfaces, strong user interactions, and reliable front-end architecture.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get In Touch
                </Link>
                <Link to="/projects" className="btn-outline inline-flex items-center justify-center gap-2">
                  Explore Projects
                </Link>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>

              <div>
                <SocialLinks />
              </div>

              <motion.button
                variants={itemVariants}
                onClick={scrollToProjects}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center p-3 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800 transition-all"
                aria-label="Scroll to projects"
              >
                <ArrowDown size={24} />
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-primary-200/20 dark:border-white/10 dark:bg-dark-900"
            >
              <img
                src={myImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <p className="text-5xl font-bold text-primary-500 mb-3">
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
