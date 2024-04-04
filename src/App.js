import './app.css';
import React from 'react';
import HeroHeader from './components/heroHeader';
import AboutVscode from './components/AboutVscode';
import Skills from './components/Skills';
import MyNotebooksView from './components/MyNotebooksView';
import ContactView from './components/ContactView';
import { motion } from 'framer-motion';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <div className="gradient-background">
      <div className="gradient-overlay"></div>
      <div className="home-section w-screen h-screen flex flex-col justify-center">
        <header className="home-container">
          <Avatar />
          <h1 className="hero_header flex ">
            <HeroHeader />
          </h1>
        </header>
      </div>
      <section className="about-section">
        <h2 className="header-2">About</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AboutVscode />
        </motion.div>
      </section>
      <section className="skills-section flex flex-col justify-center items-center">
        <h2 className="header-2">Talents, Projects & Certifications</h2>
        <motion.div
          // initial={{ translateX: -600, opacity: 0 }}
          // whileInView={{ translateX: 0, opacity: 1 }}
          // transition={{ duration: 0.6, type: 'spring' }}
          // viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
      </section>
      <section className="notebooks-section flex flex-col justify-center items-center">
        <h2 className="header-2">My Notebooks</h2>
        <MyNotebooksView />
      </section>
      <motion.div
        className="contact-section w-screen  flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="contact-h2-hidden">Contact</h2>
        <ContactView />
      </motion.div>
      <footer className="footer w-screen flex flex-col justify-center items-center text-center">
        <span>Design & Built by SERKAN KAAN KUHEYLAN</span>
        <span>
          Copyright © 2024 serkankaankuheylan.com - All Rights Reserved.
        </span>
      </footer>
      <div className="gradient-shine"></div>
    </div>
  );
};

export default App;
