import React, { Component } from 'react';
import '../../src/styles.css';
import { fetchImages } from '../api';
import {MagnifyingGlass} from 'react-loader-spinner';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    photos: null,
    searchQuery: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });
      this.fetchImages(this.props.searchQuery).finally(() => {
        this.setState({ isLoading: false });
      });
    }
  }

  fetchImages = async searchQuery => {
    try {
      const images = await fetchImages(searchQuery);
      this.setState({ photos: images, searchQuery });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

  render() {
    const { photos, isLoading } = this.state;

    return (
      <>
        {isLoading && <MagnifyingGlass/>}
        <ul className="ImageGallery">
          {photos &&
            photos.map(({id, webformatURL}) => (
              <ImageGalleryItem id={id} key={id} webformatURL={webformatURL}/>
            ))}
        </ul>
      </>
    );
  }
}
