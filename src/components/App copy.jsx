// import * as ImageService from 'service/image-service';
// import React, { useState, useEffect } from 'react';
// import { Appdiv } from './App.styled';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import { LoadmoreButton } from './Button/Button.styled';
// import Modal from './Modal/Modal';
// import Loader from './Loader/Loader';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [search, setSearch] = useState('');
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [modalImg, setModalImg] = useState('');
//   const [loadMore, setLoadMore] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const getImages = async () => {
//     setLoading(true);
//     try {
//       const searchResult = await ImageService.getImages(search, page);
//       setImages(prev => [...prev, ...searchResult.hits]);
//       setLoadMore(prev => Math.ceil(searchResult.totalHits / 12));
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const searchImages = search => {
//     setSearch(search);
//     setImages([]);
//     setPage(1);
//   };

//   const onLoadMore = () => {
//     setPage(prev => prev + 1);
//   };

//   const onModalOpen = largeImageURL => {
//     setModalImg(largeImageURL);
//   };

//   const onModalClose = () => {
//     setModalImg('');
//   };

//   useEffect(() => {
//     getImages();
//   }, [search]);

//   return (
//     <>
//       <Appdiv>
//         <Searchbar onSubmit={searchImages} />
//         {loading && <Loader />}

//         <ImageGallery images={images} onModalOpen={onModalOpen} />
//         {loadMore && (
//           <LoadmoreButton type="button" onClick={onLoadMore}>
//             Load More
//           </LoadmoreButton>
//         )}
//         {modalImg && (
//           <Modal largeImageURL={modalImg} onModalClose={onModalClose} />
//         )}
//       </Appdiv>
//     </>
//   );
// };

// export default App;

// Original File App.jsx
//
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import * as ImageService from 'service/image-service';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Appdiv } from './App.styled';
import { LoadmoreButton } from './Button/Button.styled';

export class App extends Component {
  state = {
    images: [],
    search: '',
    error: null,
    page: 1,
    modalImg: '',
    loadMore: false,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { search, page } = this.state;
    this.setState({ loading: true });
    try {
      const searchResult = await ImageService.getImages(search, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...searchResult.hits],
        loadMore: this.state.page < Math.ceil(searchResult.totalHits / 12),
      }));
      console.log('searchResult', searchResult);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  searchImages = search => {
    this.setState({ search, images: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalOpen = largeImageURL => {
    this.setState({ modalImg: largeImageURL });
  };

  onModalClose = () => {
    this.setState({ modalImg: '' });
  };

  render() {
    const { images, modalImg, loadMore, loading } = this.state;
    return (
      <>
        <Appdiv>
          <Searchbar onSubmit={this.searchImages} />
          {loading && <Loader />}

          <ImageGallery images={images} onModalOpen={this.onModalOpen} />
          {loadMore && (
            <LoadmoreButton type="button" onClick={this.onLoadMore}>
              Load More
            </LoadmoreButton>
          )}
          {modalImg && (
            <Modal largeImageURL={modalImg} onModalClose={this.onModalClose} />
          )}
        </Appdiv>
      </>
    );
  }
}
export default App;
