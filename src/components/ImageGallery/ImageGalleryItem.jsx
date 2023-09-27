import React from 'react';
import { ImagesGalleryItem, ImagesGalleryImg } from './ImagesGallery.styled';


const ImageGalleryItem = ({ imageUrl, alt, onClick }) => (
  <ImagesGalleryItem>
    <ImagesGalleryImg src={imageUrl} alt={alt} onClick={onClick} />
  </ImagesGalleryItem>
);

export default ImageGalleryItem;



