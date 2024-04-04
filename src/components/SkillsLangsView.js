import React, { useEffect, useRef } from 'react';
import './SkillsLangsView.css';
import { motion, useInView, useAnimation } from 'framer-motion';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SkillsLangsView = ({ iconPath, name, level }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  return (
    <motion.li
      className="spc__lang-container"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="spc_lang">
        <div className="spc__lang-icon">
          <img
            src={require(`../images/SVG/${iconPath}`)}
            className="langIcon"
          />
        </div>
        <div className="spc__lan-name">{name}</div>
      </div>
      <div className="spc__lan-level-container">
        {level === 'none' ? (
          <div className="spc__lan-level--none">★</div>
        ) : (
          <div className={`spc__lan-level spc__lan-level--${level}`}></div>
        )}
      </div>
    </motion.li>
  );
};

export default SkillsLangsView;
