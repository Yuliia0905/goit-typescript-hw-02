import css from './ImageCard.module.css';

export interface ImageCardProps {
  small: string;
  regular: string;
  description: string;
  openModal: (regular: string, description: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  small,
  regular,
  description,
  openModal,
}) => {
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
