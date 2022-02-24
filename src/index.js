import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

ReactDOM.render(<App />, document.querySelector('#root'));
  axios.get('https://api.unsplash.com/photos', {
    header: {
      Authorization: `Client-ID 8r88ONMf_N9rYKKN7TgnpFCIccTYziB1XarGZTgviNI`,
    }
  });
