import React, { Component } from 'react';
import '../../src/styles.css';
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
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt="Gallery Item"
          className="ImageGalleryItem-image"
          onClick={this.handleOpenModal}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;



