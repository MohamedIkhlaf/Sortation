import React, { useState } from 'react';

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages((prevImages) => [...prevImages, e.target.result]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
      <input type="file" webkitdirectory mozdirectory msdirectory odirectory directory onChange={handleFileSelect} />
      <div style={{ display: 'flex' }}>
        {images.map((image) => (
          <img src={image} alt="uploaded" style={{ width: '100px', height: '100px' }} />
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
