import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('Crazy Rd. 123');
  const response = '';

  const handleSubmit = async (e) => {
    fetch('https://systec-puzzle.herokuapp.com/lightbeam', {
      method: "POST",
      body: JSON.stringify(location),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };

  return (
    <div className="App bg-green-400 text-white h-screen w-screen flex justify-center items-center">
      <div>
        <p className="text-2xl font-bold my-1">{response ? response : '¡Aún no hay nada Esponja! ;)'}</p>
        <form className="flex flex-col my-1" onSubmit={handleSubmit}>
          <p className="text-lg my-1">
            <strong>Mensaje de ayuda:</strong>
          </p>
          <input
            className="py-1 px-3 rounded text-gray-500 my-1"
            type="text"
            value={location}
            onChange={e => setLocation({ location: e.target.value })}
          />
          <button className="my-2 border rounded border-white py-1 px-3 hover:bg-white hover:text-green-400" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default App;