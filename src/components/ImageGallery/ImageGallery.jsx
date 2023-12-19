import React from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onModalOpen }) => {
  console.log(images);

  return (
    <>
      <ImageGalleryList className="gallery">
        {images.map(image => (
          <ImageItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
            onModalOpen={onModalOpen}
          />
        ))}
      </ImageGalleryList>
    </>
  );
};

export default ImageGallery;
