import React, { Component } from 'react';
import { fetchImages } from '../../api';
import { ImagesGallery } from './ImagesGallery.styled';
import ImageGalleryItem from './ImageGalleryItem'; 
import Button from '../Buton/Button';

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
      const images = await fetchImages(searchQuery, page);
      this.setState((prevState) => ({
        photos: [...prevState.photos, ...images],
        searchQuery,
        page: page + 1,
        isLoading: false,
      }));
  };

  handleClickLoadMore = () => {
    this.setState({ isLoading: true });
    this.fetchImages(this.state.searchQuery, this.state.page);
  };

  render() {
    const { photos } = this.state;

    return (
      <>
        {photos.length > 0 && (
          <>
            <ImagesGallery>
              {photos.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  id={id}
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  openModal={() => this.openModal(largeImageURL)} 
                />
              ))}
            </ImagesGallery>
            <Button onClick={this.handleClickLoadMore}>Загрузить больше</Button>
          </>
        )}
      </>
    );
  }
}

export default ImageGallery;
