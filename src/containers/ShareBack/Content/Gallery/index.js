import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import BASIC_PYTHON_IMAGE from 'assets/images/basic-python.jpg';

const Gallery = () => {
  const images = [
    {
      original: BASIC_PYTHON_IMAGE,
      thumbnail: BASIC_PYTHON_IMAGE,
    },
  ];
  return (
    <ImageGallery
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay
      slideInterval={5000}
      items={images}
    />
  );
};

export default Gallery;
