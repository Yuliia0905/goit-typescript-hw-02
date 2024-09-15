import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, description, urls: { small, regular } }) => (
        <li key={id} className={css.item}>
          <ImageCard
            small={small}
            regular={regular}
            description={description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
