import { motion } from 'framer-motion';
import { Code, Palette, Rocket } from 'lucide-react';
import myImage from '../assets/myimage.png';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and design patterns.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful interfaces with attention to detail and user experience.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that provide smooth user interactions.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            <h1 className="section-title">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get to know me better and discover what drives my passion for web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={myImage}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                I'm Muthumanimurugan KR
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a React JS Developer with 2 years of experience, passionate about creating beautiful, functional web applications. I've worked on various projects ranging from small websites to complex web applications using modern React technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new React features, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and staying updated with the latest trends in React development.
              </p>
              <div className="pt-4">
                <a href="#contact" className="btn-primary">
                  Let's Work Together
                </a>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants} className="card">
                  <Icon className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            My Journey
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            {[
              {
                year: '2022',
                title: 'Started React Development',
                description: 'Began my journey as a React developer, learning modern JavaScript and React fundamentals',
              },
              {
                year: '2023',
                title: 'React JS Developer',
                description: 'Worked on multiple React projects, building responsive web applications and user interfaces',
              },
              {
                year: '2024',
                title: 'Senior React Developer',
                description: 'Leading React development projects, mentoring junior developers, and implementing best practices',
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 pl-8 md:pl-0 md:mb-16"
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary-500 md:left-1/2 md:transform md:-translate-x-1/2 mt-1">
                  <div className="absolute inset-1 rounded-full bg-white dark:bg-dark-900" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'} card`}>
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-primary-500 bg-primary-100 dark:bg-primary-900 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
