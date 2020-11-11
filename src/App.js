/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlipMove from 'react-flip-move';
import Image from "./Image"

function App() {

  const [image, setImage] = useState([]);


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



  return (
    <div className='App'>
      <FlipMove className="flip">
        {image.map((image) => (
          <Image image={image}></Image>
        ))}
      </FlipMove>
    </div >
  );
}

export default App;
