import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './App.css';
import { fetchImagesByQuery } from '../services/api';
import { RiEmotionSadLine } from 'react-icons/ri';

import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [modalImage, setModalImage] = useState({
    isOpen: false,
    imgUrl: '',
    imgAlt: '',
    description: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) return;
    setShowBtn(false);
    setLoading(true);
    setError(null);
    const fetchImages = async () => {
      try {
        const { results, total, total_pages } = await fetchImagesByQuery(
          query,
          page
        );

        if (total === 0) {
          toast('There are no pictures for your request', {
            icon: <RiEmotionSadLine />,
          });
          setPage(1);
          setQuery(query);
          return;
        }

        if (page === 1) {
          setImages(results);
        } else {
          setImages(prevImages => [...prevImages, ...results]);
        }
        setTotalPages(total_pages);
        setShowBtn(page < total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (imgUrl, imgAlt, description) => {
    setModalImage({ isOpen: true, imgUrl, imgAlt, description });
  };
  const closeModal = () => {
    setModalImage({ isOpen: false, imgUrl: '', imgAlt: '', description: '' });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} openModal={openModal} />
      {showBtn && <LoadMoreBtn onClick={handleLoadMoreBtn} />}

      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imgUrl={modalImage.imgUrl}
        imgAlt={modalImage.imgAlt}
        imgDescription={modalImage.description}
      />
    </div>
  );
}

export default App;
