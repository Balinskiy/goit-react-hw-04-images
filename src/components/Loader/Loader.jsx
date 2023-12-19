import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderOverlay>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
      />
    </LoaderOverlay>
  );
};

export default Loader;
