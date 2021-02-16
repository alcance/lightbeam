import React, { useState } from 'react';
import './App.css';
import rocket from './rocket_gsg.svg'


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
        <img src={rocket} className='space-rocket'/>
        {/* <p>{response}</p> */}
        <form className='space-form' onSubmit={handleSubmit}>
          <p className="space-header">
            <strong>Start communications:</strong>
          </p>
          <input
            type="text"
            value={location}
            onChange={handleChange}
            className="space-input"
          />
          <button type="submit" className="space-button">Submit</button>
        </form>
      </div>
    );
}
