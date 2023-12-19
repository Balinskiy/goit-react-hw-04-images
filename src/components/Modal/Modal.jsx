import React from 'react';
import { Modaldiv } from './Modal.styled';

const Modal = ({ largeImageURL, onModalClose }) => {
  const onBackDropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  };

  return (
    <Modaldiv onClick={onBackDropClick}>
      <div>
        <img src={largeImageURL} alt="" />
      </div>
    </Modaldiv>
  );
};

export default Modal;
