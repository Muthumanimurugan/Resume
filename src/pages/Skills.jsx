import { motion } from 'framer-motion';
import SkillItem from '../components/common/SkillItem';

const Skills = () => {
  const skills = [
    { name: 'React', icon: '⚛️', proficiency: 95 },
    { name: 'JavaScript', icon: '📜', proficiency: 90 },
    { name: 'TypeScript', icon: '🔷', proficiency: 80 },
    { name: 'HTML/CSS', icon: '🎨', proficiency: 92 },
    { name: 'Node.js', icon: '🟢', proficiency: 75 },
    { name: 'Git', icon: '🔧', proficiency: 88 },
    { name: 'Redux', icon: '🔄', proficiency: 85 },
    { name: 'Tailwind CSS', icon: '💨', proficiency: 90 },
    { name: 'Next.js', icon: '▲', proficiency: 80 },
    { name: 'REST APIs', icon: '🔌', proficiency: 85 },
    { name: 'Unit Testing', icon: '🧪', proficiency: 80 },
    { name: 'TypeScript', icon: '🔷', proficiency: 90 },
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: skills.slice(0, 4),
    },
    {
      title: 'Backend',
      skills: skills.slice(4, 8),
    },
    {
      title: 'DevOps & Tools',
      skills: skills.slice(8, 12),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
            <h1 className="section-title">My Skills</h1>
            <p className="section-subtitle">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container-custom">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                {category.title}
              </h2>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                {category.skills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Soft Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Communication',
              'Project Management',
              'Time Management',
              'Creative Thinking',
              'Attention to Detail',
              'Continuous Learning',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card text-center"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Experience
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                role: 'React JS Developer',
                company: 'Tech Solutions Inc',
                period: '2023 - Present',
                description: 'Developing modern React applications, implementing responsive designs, and working with state management solutions',
              },
              {
                role: 'Frontend Developer',
                company: 'WebDev Agency',
                period: '2022 - 2023',
                description: 'Built interactive user interfaces using React, JavaScript, and modern CSS frameworks',
              },
            ].map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card border-l-4 border-primary-500"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-sm font-medium text-primary-500">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  {job.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
