/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlipMove from 'react-flip-move';

function App() {
  const [image, setImage] = useState([]);
  const [button, setButton] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://api-dev.insidetrak.interactive1.com/homepage/get-latest-images`
      )
      .then((res) => {
        setImage(res.data.data);
        console.log('state', image);
      });
  }, []);

  let handleHide = (e) => {
    document.getElementById(`card ${e}`).style.display = "none";
  };

  let handleChange = (e) => {
    document.getElementById(`button ${e}`).innerHTML = setButton(button => !button)

  };

  return (
    <div className='App'>
      <FlipMove>
        {image.map((image) => (
          <div key={image.id} id={`card ${image.id}`} className="card">
            <img className='pictures' src={image.thumbnailUrls.imedia_1024} />
            <h4 className='h4'>{image.title}</h4>
            <p>{image.authorScreenName}</p>
            <p>{image.description}</p>
            <p>{image.publishedOn}</p>
            <button class="btn btn-outline-primary" id={`button ${image.id}`} onClick={() => handleChange(image.id)}>{button ? "Pregledano" : "Nepregledano"}</button>

            <button class="btn btn-outline-danger" onClick={() => handleHide(image.id)}>Sakrij</button>
          </div>
        ))}
      </FlipMove>
    </div >
  );
}

export default App;
