import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socials = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com' },
    { icon: '✉️', label: 'Email', href: 'mailto:your@email.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex gap-4 justify-center flex-wrap"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg bg-gray-100 dark:bg-dark-800 text-2xl hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
