import { ImageList } from '@mui/material';
import React, { useState } from 'react';

function ImageUpload() {

  const [files, setFiles] = useState([]);
  const [error, setError] = useState();

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const onImageChange = (e) => {
    let inputImages = e.target.files;

    for (let i = 0; i < inputImages.length; i++) {
      const inputImage = inputImages[i];

      if (inputImage && types.includes(inputImage.type)){  
        const reader = new FileReader();
        reader.onload = (e) => {
          setFiles((prevImages) => [...prevImages, e.target.result]);
        };
        reader.readAsDataURL(inputImage);
        setError("")
      }else{
        setFiles(null);
        setError('Please select an image file (png, jpeg or jpg)');
      }      
    }
   }
   
  return (
    
    <form>
      {/* <input type="file" onChange={onImageChange} /> */}
      <input directory="" webkitdirectory="" type="file" onChange={onImageChange} />
      <div className="output" style={{ paddingTop: "10px" }}>
        {error && <div className="error">{error}</div>}
        <div className="imagebox" style={{ paddingTop: "2px"}}>
          {files.map((file) => (
            <img src={file} alt="uploaded" style={{ width: '100px', height: '100px', padding: '2px' }} />
          ))}
        </div>
      </div>
    </form>
  );
}

export default ImageUpload;

