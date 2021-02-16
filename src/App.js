import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('Crazy Rd. 123');
  const response = '';
  const handleSubmit = async (e) => {
  };

    return (
      <div className="App">
        <p>{ response ? response : 'Aun no hay nada. '}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={location}
            onChange={e => setLocation({ location: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
export default App;