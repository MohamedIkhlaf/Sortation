import React, { useState } from 'react';

function ImageUpload() {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  // const [inputImage, setinputImage] = useState();

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const onImageChange = (e) => {

    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFiles({image: URL.createObjectURL(selected)});
      setError('');
    } else {
      setFiles(null);
      setError('Please select an image file (png, jpeg or jpg)');
    }
   }
   

  return (
    
    <form>
      <input type="file" onChange={onImageChange} />
      {/* <input directory="" webkitdirectory="" type="file" onChange={onImageChange} /> */}
      <div className="output">
        {error && <div className="error">{error}</div>}
        {files && <div> <img src={files.image} alt={files.name}></img> </div>}
        {/* {inputImage && <img src={inputImage.name}></img>} */}
        
      </div>

    </form>
  );
}

export default ImageUpload;

