import css from './ImageCard.module.css';

const ImageCard = ({ small, regular, description, openModal }) => {
  return (
    <div className={css.imageWrapper}>
      <img
        src={small}
        alt={description}
        className={css.image}
        onClick={() => openModal(regular, description)}
      />
      {/* <p>{description}</p> */}
    </div>
  );
};

export default ImageCard;
