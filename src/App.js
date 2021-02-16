import React, { Component, useState } from 'react';
import axios from 'axios';

import './App.css';

import Formulario from './components/Formulario';

const URL = 'https://systec-puzzle.herokuapp.com/lightbeam'

function App() {
  const [location, setLocation] = useState('Portoviejo')

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post(URL, location)
    console.log(response);
  };

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className="App">
      <Formulario value={location} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}
export default App;