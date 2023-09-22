import React, { Component } from 'react';
import '../../src/styles.css';
import { fetchImages } from '../api';
import { MagnifyingGlass } from 'react-loader-spinner';
import ImageGalleryItem from './ImageGalleryItem'; 
import Button from './Button';

class ImageGallery extends Component {
  state = {
    photos: [],
    searchQuery: null,
    isLoading: false,
    page: 1,
    selectedImage: '', 
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true, photos: [], page: 1 });
      this.fetchImages(this.props.searchQuery, 1);
    }
  }

  fetchImages = async (searchQuery, page) => {
    try {
      const images = await fetchImages(searchQuery, page);
      this.setState((prevState) => ({
        photos: [...prevState.photos, ...images],
        searchQuery,
        page: page + 1,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

  handleClickLoadMore = () => {
    this.setState({ isLoading: true });
    this.fetchImages(this.state.searchQuery, this.state.page);
  };

  render() {
    const { photos, isLoading } = this.state;

    return (
      <>
        {isLoading && <MagnifyingGlass />}
        {photos.length > 0 && (
          <>
            <ul className="ImageGallery">
              {photos.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  id={id}
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  openModal={() => this.openModal(largeImageURL)} 
                />
              ))}
            </ul>
            <Button onClick={this.handleClickLoadMore}>Загрузить больше</Button>
          </>
        )}
      </>
    );
  }
}

export default ImageGallery;
