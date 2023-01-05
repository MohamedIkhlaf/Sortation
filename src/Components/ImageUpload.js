import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadModel } from '@tensorflow/tfjs-converter';


function ImageUpload() {

  const [files, setFiles] = useState([]);
  const [error, setError] = useState();
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // image only input 
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

  // delete input
  const deleteInput = () => { 
    setFiles("")
  }
   
  useEffect(() => {
    async function loadModel() {
      const model = await tf.loadLayersModel('./srs/Models/AngleNN.json');
      console.log(model)
      console.log("model")

      setModel(model);
    }
    loadModel();
  }, []);

  async function handlePredictClick() {
    // Make a prediction using the model
    const prediction = model.predict(files);
    setPrediction(prediction);
  }

  // if (model == null) {
  //   return <div>Loading model...</div>;
  // }

   
  return (
    
    <form>
      <input directory="" webkitdirectory="" type="file" onChange={onImageChange} />  
      <button onClick= {() => deleteInput} style={{width: '60px', height: '25px'}} >Delete</button>
      <div className="output" style={{ paddingTop: "10px" }}>
        {error && <div className="error">{error}</div>}
        <div className="imagebox" style={{ paddingTop: "2px"}}>
          {files.map((file) => (
            <img src={file} alt="uploaded" style={{ width: '100px', height: '100px', padding: '2px' }} />
          ))}
        </div>
      </div>

      <div> 
        <button onClick={handlePredictClick}>Predict</button>
        {prediction && <div>Prediction: {prediction}</div>}
      </div>
    </form>
  );
}

export default ImageUpload;

