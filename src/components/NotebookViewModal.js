import React, { useState, useEffect } from 'react';
import './NotebookViewModal.css';
import Modal from 'react-modal';
import HTMLFlipBook from 'react-pageflip';

Modal.setAppElement('#root');

const NotebookViewModal = ({
  notebookModalIsOpen,
  closeNotebookModal,
  pageCoverPath,
  pageImageFolder,
  totalPageNumber,
  pageImageType,
  pageWidth,
  pageHeight,
}) => {
  const imageAspectRatio = pageWidth / pageHeight;

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(10px)', // Add this line for the blur effect
    },
    content: {
      border: 'none',
      padding: '0 0 0 0',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#333333',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
      overflow: 'hidden',
      borderRadius: '30px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${imageWidth}px`,
      height: `${imageHeight}px`,
      display: 'flex',
      justifyCenter: 'center',
      alignItems: 'center',
    },
  };

  useEffect(() => {
    function updateImageDimensions() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let viewportWidth, viewportHeight;

      if (windowWidth >= 885) {
        viewportHeight = windowHeight * 0.9;
      } else if (windowHeight <= 590) {
        viewportHeight = windowHeight * 0.98;
      } else {
        viewportWidth = windowWidth * 0.95;
      }

      const newImageWidth =
        viewportWidth || viewportHeight * imageAspectRatio * 2;
      const newImageHeight =
        viewportHeight || viewportWidth / (imageAspectRatio * 2);

      setImageWidth(newImageWidth);
      setImageHeight(newImageHeight);
    }

    // Initial update
    updateImageDimensions();

    // Listen for window resize events
    window.addEventListener('resize', updateImageDimensions);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateImageDimensions);
    };
  }, []);

  return (
    <Modal
      isOpen={notebookModalIsOpen}
      onRequestClose={closeNotebookModal}
      style={customStyles}
      closeTimeoutMS={300}
    >
      <HTMLFlipBook width={imageWidth / 2} height={imageHeight} size="stretch">
        <div className="page page-cover">
          <div className="page-content">
            <div className="page-image">
              <img src={require(`../images/notebooks/${pageCoverPath}`)} />
            </div>
          </div>
        </div>

        {Array.from({ length: totalPageNumber + 1 }, (_, index) => (
          <div className="page" key={index}>
            <div className="page-content">
              <div className="page-image">
                <div
                  className={`pageNumber ${
                    index % 2 === 0 ? 'page-odd' : 'page-even'
                  }`}
                >
                  {index}
                </div>

                {index === 0 ? (
                  <div className="page-info">
                    click or hold and drag to turn a page
                  </div>
                ) : (
                  ''
                )}

                <img
                  src={require(`../images/notebooks/${pageImageFolder}/${index}.${pageImageType}`)}
                  alt={`Page ${index}`}
                />

                {index === totalPageNumber ? (
                  <div className="page-info-end">
                    <div>THE END</div>
                    <div>Thank you!</div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </Modal>
  );
};

export default NotebookViewModal;
