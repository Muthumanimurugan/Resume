import { motion } from 'framer-motion';
import {Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Mail, label: 'Email', href: 'mailto:your@email.com' },
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
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            aria-label={social.label}
          >
            <Icon size={22} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
