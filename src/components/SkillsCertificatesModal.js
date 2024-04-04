import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import { GrClose } from 'react-icons/gr';
import './image.css';
import './SkillsProjectsModal.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(4px)', // Add this line for the blur effect
  },
  content: {
    padding: '0 0 0 0',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // width: '50%',
    maxWidth: '957px',
  },
};

const images = [
  {
    original: require('../images/certificates/Coursera-deep.png'),
    thumbnail: '',
    description: '01-Neural Network and Deep Learning, signed by Andrew Ng',
    link: 'https://coursera.org/verify/F7JZACMMSVC7',
  },
  {
    original: require('../images/certificates/Coursera-tuning.png'),
    thumbnail: '',
    description: '02-Hyperparameter Tuning, Regularization and Optimization',
    link: 'https://coursera.org/verify/6J4SNELWHAGT',
  },
  {
    original: require('../images/certificates/Coursera-machine.png'),
    thumbnail: '',
    description:
      '03-Structuring Machine Learning Projects, signed by Andrew Ng',
    link: 'https://coursera.org/verify/R76HPYAYN599',
  },
  {
    original: require('../images/certificates/Coursera-conv.png'),
    thumbnail: '',
    description: '04-Convolutional Neural Networks, signed by Andrew Ng',
    link: 'https://coursera.org/verify/QL4SBMTT5UXY',
  },
  // Add more images with their URLs and links
];

const renderCustomSlide = item => {
  return (
    <div className="custom-slide">
      <div className="header">MY CERTIFICATES</div>
      <div className="galery-overlay">
        <div className="line1">{item.description}</div>
        <div className="line2">
          Verify at: <a href={item.link}>{item.link}</a>
        </div>
      </div>
      <img src={item.original} alt={item.description} />
    </div>
  );
};

const CertificatesModal = ({
  certificatesData,
  closeCertificatesModal,
  certificatesModalIsOpen,
}) => {
  return (
    <Modal
      isOpen={certificatesModalIsOpen}
      onRequestClose={closeCertificatesModal}
      style={customStyles}
      closeTimeoutMS={300}
    >
      <ImageGallery
        items={images}
        renderItem={renderCustomSlide}
        additionalClass="custom-gallery"
        showThumbnails={false}
        showBullets={true}
        infinite={false}
        lazyLoad={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </Modal>
  );
};

export default CertificatesModal;
