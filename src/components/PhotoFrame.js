import React from 'react';
import '../App.css';

const PhotoFrame = ({ imageSrc, altText }) => {
  return (
    <div className="photo-frame">
      <img src={imageSrc} alt={altText} className="photo" />
    </div>
  );
};

export default PhotoFrame;
