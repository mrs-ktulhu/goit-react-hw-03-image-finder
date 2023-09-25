import React, { Component } from 'react';
import { ImagesGalleryItem, ImagesGalleryImg } from './ImagesGallery.styled';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class ImageGalleryItem extends Component {
  handleOpenModal = () => {
    const { largeImageURL } = this.props;
    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${largeImageURL}" alt="Large Image" />
      </div>
    `);

    instance.show();
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <ImagesGalleryItem>
        <ImagesGalleryImg
          src={webformatURL}
          alt="Gallery Item"
          onClick={this.handleOpenModal}
        />
      </ImagesGalleryItem>
    );
  }
}

export default ImageGalleryItem;



