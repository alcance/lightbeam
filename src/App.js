import React, { useState } from 'react';
import './App.css';


export default function App() {

  const [location, setLocation] = useState('')
  // const [response, setResponse] = useState({})
  const handleSubmit = async e => {
    e.preventDefault()

    console.log(location)
    let res = await fetch('http://systec-puzzle.herokuapp.com/lightbeam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({location})
    })
    .catch(err=>console.warn(err))
    console.log(res)
    // if(res.ok) setResponse(res)
  };

  const handleChange = (e) => setLocation(e.target.value)

    return (
      <div className="App">
        {/* <p>{response}</p> */}
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={location}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
