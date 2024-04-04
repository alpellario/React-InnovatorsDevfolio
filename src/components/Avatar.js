import React, { useEffect, useState } from 'react';
import './Avatar.css';

import { motion } from 'framer-motion';
import { ImLinkedin } from 'react-icons/im';

const Avatar = ({ src, alt, onAvatarClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      scale: 0.2,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  useEffect(() => {
    if (isOpen) {
    }
  }, [isOpen]);
  return (
    <div className="avatar-wrap">
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="avatar-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 150,
            restDelta: 0.001,
          },
        }}
      >
        <motion.div
          className="avatar-container"
          transition={{
            duration: 0.6,
            type: 'spring',
            bounce: 3,
            stiffness: 200,
          }}
          whileHover={{ scale: [null, 1.5, 1.3] }}
          whileTap={{ scale: [null, 1, 0.8] }}
        >
          <ImLinkedin
            className={`avatar-icon ${isOpen ? 'avatar-icon-hidden' : ''}`}
          />
          <img className="avatar" src={src} alt={alt} />
        </motion.div>
      </motion.div>

      <motion.a
        href="https://www.linkedin.com/in/serkan-kaan-k%C3%BCheylan-a482b3180/"
        target="_blank"
        rel="noreferrer"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className="linkedin-container"
        transition={{
          duration: 0.6,
          type: 'spring',
          bounce: 3,
          stiffness: 200,
        }}
        whileHover={{ scale: [null, 1.2, 1.1], transition: { duration: 0.2 } }}
        whileTap={{ scale: [null, 1, 0.8] }}
      >
        <ImLinkedin className="linkedin-icon" />
        <div className="linkedin-text">Visit my LinkedIn profile</div>
      </motion.a>
    </div>
  );
};

export default Avatar;
