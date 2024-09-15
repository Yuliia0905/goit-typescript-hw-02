import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, imgUrl, imgAlt, imgDescription }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      maxWidth: '90%',
      maxHeight: '90%',
      height: 'auto',
      overflow: 'hidden',
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div className={css.content}>
          <img src={imgUrl} alt={imgAlt} />
          <p>{imgDescription}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
