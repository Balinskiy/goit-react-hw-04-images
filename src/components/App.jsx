import * as ImageService from 'service/image-service';
import React, { useState, useEffect } from 'react';
import { Appdiv } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { LoadmoreButton } from './Button/Button.styled';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getImages();
  }, [search]);

  return (
    <>
      <Appdiv>
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
