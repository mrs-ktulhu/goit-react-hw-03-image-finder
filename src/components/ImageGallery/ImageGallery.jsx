import React from 'react';
import { ImagesGallery } from './ImagesGallery.styled';
import ImageGalleryItem from './ImageGalleryItem'; 

const ImageGallery = ({ photos, onPhotoClick }) => (
  
  <ImagesGallery>
    {photos.map(photo => (
      <ImageGalleryItem
        id={photo.id}
        key={photo.webformatURL}
        imageUrl={photo.webformatURL}
        alt={photo.alt}
        onClick={() => onPhotoClick(photo.id)}
      />
    ))}
  </ImagesGallery>
);

export default ImageGallery;
