import { motion } from 'framer-motion';

const SkillItem = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="card text-center cursor-pointer"
    >
      {skill.icon && (
        <div className="text-4xl md:text-5xl mb-4 flex justify-center">
          {skill.icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
      <div className="w-full bg-gray-200 dark:bg-dark-800 rounded-full h-2 mb-3">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {skill.proficiency}%
      </p>
    </motion.div>
  );
};

export default SkillItem;
