import React, { Component } from 'react';
import '../../src/styles.css';
import { fetchImages } from '../api';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';

export class ImageGallery extends Component {
  state = {
    photos: null,
    searchQuery: null,
    isLoading: false,
    page:1
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery)
      this.setState({ isLoading: true });
    setTimeout(() => {
      this.fetchImages(this.props.searchQuery).finally(() => {
        this.setState({ isLoading: false });
      });
    }, '2000');
  }

  fetchImages = async searchQuery => {
    try {
      const images = await fetchImages(searchQuery);
      this.setState({ photos: images, searchQuery });
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };
  
  handleClickLoadMore

  render() {
    const { photos, isLoading } = this.state;

    return (
      <>
        {isLoading && <MagnifyingGlass />}
        {photos && (
          <>
            {' '}
            <ul className="ImageGallery">
              {photos &&
                photos.map(({ id, webformatURL }) => (
                  <ImageGalleryItem
                    id={id}
                    key={id}
                    webformatURL={webformatURL}
                  />
                ))}
            </ul>
            <Button />
          </>
        )}
      </>
    );
  }
}
