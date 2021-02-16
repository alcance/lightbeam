import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [location, setLocation] = useState('Crazy Rd. 123');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
        <p>{response}</p>
        {/*<form method='POST' action='https://systec-puzzle.herokuapp.com/lightbeam' onSubmit={(e) => handleSubmit(e)}>*/}
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            name='location'
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <Input />
          <Button />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
