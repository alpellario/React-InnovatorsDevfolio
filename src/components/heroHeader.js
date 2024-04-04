import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './HeroHeader.css';
import { motion } from 'framer-motion';

const HeroHeader = () => {
  const [showHello, setShowHello] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [textFormatting, setTextFormatting] = useState(false);
  const [margin, setMargin] = useState('0');

  const handleMarginChange = () => {
    setMargin('60px');
  };

  return (
    <motion.div
      className={`flex flex-${!textFormatting ? 'row' : 'col'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="headerCode mr-4">{`<>`}</div>
      <h1 className="visually-hidden">
        Hey I'm Serkan Kaan Kuheylan - Welcome to my portfolio!
      </h1>
      <motion.div className={`${textFormatting ? 'ml-16' : 'ml-0'} mr-2`}>
        <TypeAnimation
          style={{
            fontSize: '4rem',
            whiteSpace: 'pre-line',
            display: 'block',
            // fontFamily: 'Roboto',
          }}
          sequence={[
            1400,
            'Hey',
            ,
            600,
            () => {
              setTextFormatting(true);
              handleMarginChange();
            },

            "Hey\nI'm Serkan Kaan Kuheylan",
            ,
            600,
            "Hey\nI'm Serkan Kaan Kuheylan\nWelcome to my page!",
            1000,
            "Hey\nI'm Serkan Kaan Kuheylan\nWelcome to my website!",
            1000,
            "Hey\nI'm Serkan Kaan Kuheylan\nWelcome to my portfolio!",
            1000,
          ]}
          speed={60}
        />
      </motion.div>

      <div className="headerCode">{`</>`}</div>
    </motion.div>
  );
};

export default HeroHeader;
