import React, { useEffect, useState } from 'react';
import { Appdiv } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import { LoadmoreButton } from './Button/Button.styled';
import Modal from './Modal/Modal';
import * as ImageService from 'service/image-service';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;

    const getImages = async () => {
      setLoading(true);
      try {
        const searchResult = await ImageService.getImages(search, page);
        setImages(prev => [...prev, ...searchResult.hits]);
        setLoadMore(prev => Math.ceil(searchResult.totalHits / 12));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [page, search]);

  const searchImages = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onModalOpen = largeImageURL => {
    setModalImg(largeImageURL);
  };

  const onModalClose = () => {
    setModalImg('');
  };

  return (
    <>
      <Appdiv>
        {error && <p>Error: {error.message}</p>}
        <Searchbar onSubmit={searchImages} />
        {loading && <Loader />}

        <ImageGallery images={images} onModalOpen={onModalOpen} />
        {loadMore && (
          <LoadmoreButton type="button" onClick={onLoadMore}>
            Load More
          </LoadmoreButton>
        )}
        {modalImg && (
          <Modal largeImageURL={modalImg} onModalClose={onModalClose} />
        )}
      </Appdiv>
    </>
  );
};

export default App;
