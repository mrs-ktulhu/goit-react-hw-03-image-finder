import React from 'react';
import '../../src/styles.css';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className="ImageGalleryItem" id={id} >
      <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  );
};
