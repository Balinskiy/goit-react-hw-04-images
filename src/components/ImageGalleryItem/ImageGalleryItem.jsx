import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem.styled';

const ImageItem = ({ webformatURL, tags, largeImageURL, onModalOpen }) => {
  return (
    <ImageGalleryItem onClick={() => onModalOpen(largeImageURL)}>
      <img src={webformatURL} alt={tags} />
    </ImageGalleryItem>
  );
};

export default ImageItem;
