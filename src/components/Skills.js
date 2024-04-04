import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Skills.css';
import SkillsLangsView from './SkillsLangsView';
import ProjectsModal from './SkillsProjectsModal';
import CertificatesModal from './SkillsCertificatesModal';
import { motion, useInView, useAnimation } from 'framer-motion';

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Skills = () => {
  const [projectModalIsOpen, setProjectModalIsOpen] = useState(false);
  const [certificatesModalIsOpen, setCertificatesModalIsOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div className="spc">
      <motion.ul
        className="spc__langs"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <SkillsLangsView iconPath="ai.svg" name="Deep learning" level="none" />
        <SkillsLangsView iconPath="c-sharp.svg" name="C#" level="high" />
        <SkillsLangsView iconPath="python-5.svg" name="Python" level="high" />
        <SkillsLangsView iconPath="mysql-icon.svg" name="MySQL" level="high" />
        <SkillsLangsView iconPath="mssql.svg" name="MsSQL" level="high" />
        <SkillsLangsView iconPath="html5.svg" name="HTML" level="high" />
        <SkillsLangsView iconPath="css3.svg" name="CSS" level="med" />
        <SkillsLangsView
          iconPath="javascript.svg"
          name="JavaScript"
          level="high"
        />
        <SkillsLangsView iconPath="react.svg" name="React" level="high" />
        <SkillsLangsView iconPath="react.svg" name="React-Native" level="low" />
        <SkillsLangsView
          iconPath="node-dot-js.svg"
          name="Node.js"
          level="high"
        />
      </motion.ul>
      <div className="spc__buttons">
        <motion.div
          className="spc__button"
          onClick={() => setProjectModalIsOpen(true)}
        >
          <img
            className="spc__button-icon"
            src={require(`../images/projects.png`)}
            alt="My Projects Logo"
          />
          <span className="spc__button-text">See some of my projects</span>
        </motion.div>
        <motion.div
          className="spc__button"
          onClick={() => setCertificatesModalIsOpen(true)}
        >
          <img
            className="spc__button-icon--1"
            src={require(`../images/certificates.png`)}
            alt="My Certificates Logo"
          />
          <span className="spc__button-text">See my certifications</span>
        </motion.div>
      </div>
      <CertificatesModal
        certificatesModalIsOpen={certificatesModalIsOpen}
        closeCertificatesModal={() => setCertificatesModalIsOpen(false)}
      />
      <ProjectsModal
        projectModalIsOpen={projectModalIsOpen}
        closeProjectsModal={() => setProjectModalIsOpen(false)}
      />
    </div>
  );
};

export default Skills;
