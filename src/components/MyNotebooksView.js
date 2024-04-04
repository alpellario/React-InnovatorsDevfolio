import React, { useEffect, useState } from 'react';
import './MyNotebooksView.css';
import NotebookViewModal from './NotebookViewModal';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

const NOTEBOOKS = [
  {
    id: 1,
    title: 'AI NOTES',
    cover: 'ai/book-cover.jpg',
    imageType: 'jpg',
    folder: 'ai',
    pages: 90,
    pageWidth: 1015,
    pageHeight: 1652,
    cardBackroundColor: '#020202',
    cardTextColor: '#ffffff',
  },
  // Add new notebook here
];

const MyNotebooksView = () => {
  const [aiNotebookModalIsOpen, setAiNotebookModalIsOpen] = useState(false);
  const [notebookModalIsOpen, setNotebookModalIsOpen] = useState(false);
  const [currentNotebookIndex, setCurrentNotebookIndex] = useState(0);
  const [currentNotebook, setCurrentNotebook] = useState(
    NOTEBOOKS[currentNotebookIndex]
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [currentNotebookIndex]);

  const goToNextNotebook = () => {
    if (currentNotebookIndex < NOTEBOOKS.length - 1) {
      setCurrentNotebookIndex(currentNotebookIndex + 1);
      setCurrentNotebook(NOTEBOOKS[currentNotebookIndex + 1]);
    }
  };

  const goToPreviousNotebook = () => {
    if (currentNotebookIndex > 0) {
      setCurrentNotebookIndex(currentNotebookIndex - 1);
      setCurrentNotebook(NOTEBOOKS[currentNotebookIndex - 1]);
    }
  };

  return (
    <div className="notebooks-container-wrapper">
      <div className="notebooks-info">
        <div className="notebooks-info-title">Notebook Count:</div>
        <div className="notebooks-info-count">{NOTEBOOKS.length}</div>
      </div>
      <div className="notebooks-container">
        <motion.div
          onClick={goToPreviousNotebook}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 0.8 },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <div className="arrow notebooks-arrow-left">
            <AiOutlineLeft />
          </div>
        </motion.div>

        <div className="notebooks">
          <motion.div
            className="notebook notebook1 temp"
            animate={{
              scale: isAnimating ? 0.95 : 1,
            }}
            initial={{ opacity: 0, x: '-100%' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.3 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
            }}
          />

          <motion.div
            className="notebook notebook2"
            style={{
              backgroundColor: currentNotebook.cardBackroundColor,
              color: currentNotebook.cardTextColor,
            }}
            animate={{
              y: isAnimating ? -5 : 0,
              scale: isAnimating ? 1.03 : 1,
            }}
            onClick={() => setNotebookModalIsOpen(true)}
            initial={{ opacity: 0, x: '-100%' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.6 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
            }}
          >
            <div className="notebook-header">{currentNotebook.title}</div>
            <div className="notebook-warning">click to open</div>
          </motion.div>
          <motion.div
            className="notebook notebook3 temp"
            animate={{
              scale: isAnimating ? 0.95 : 1,
            }}
            initial={{ opacity: 0, x: '100%' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.9 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
            }}
          />
        </div>
        <motion.div
          onClick={goToNextNotebook}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 0.8 },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <div className="arrow notebooks-arrow-right">
            <AiOutlineRight className="slash-rigt" />
          </div>
        </motion.div>
        <NotebookViewModal
          notebookModalIsOpen={notebookModalIsOpen}
          closeNotebookModal={() => setNotebookModalIsOpen(false)}
          pageImageFolder={currentNotebook.folder}
          pageCoverPath={currentNotebook.cover}
          pageImageType={currentNotebook.imageType}
          totalPageNumber={currentNotebook.pages} //(total page - 1) because starting 0
          pageWidth={currentNotebook.pageWidth}
          pageHeight={currentNotebook.pageHeight}
        />
      </div>
    </div>
  );
};

export default MyNotebooksView;
