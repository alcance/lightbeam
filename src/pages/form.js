import React, { useState } from "react";

import InputLocation from '../components/input';
import Button from '../components/button';
import rocket from '../rocket_gsg.svg'

import '../App.css';

export default function FormLocation() {
    const [location, setLocation] = useState('Crazy Rd. 123')
    const [response, setResponse] = useState('')
    const handleSubmit = async e => {
      e.preventDefault()
      setResponse('');
      console.log(location)
      let res = await fetch('http://systec-puzzle.herokuapp.com/lightbeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({location})
      })
      .catch(err=>console.warn(err));
      if (res) {
        const result = await res.json();
        setResponse(result);
      } else {
        setResponse(`Couldn't reach astronauts`)
      }
    };
  
    const handleChange = (e) => setLocation(e.target.value)

  return (
    <div>
      <div className="App">
        <img alt="rocket" src={rocket} className="space-rocket" />
        {response && <p className="space-message space-text">{response}</p>}
        <form className="space-form" onSubmit={handleSubmit}>
          <p className="space-header">
            <strong>Start communications:</strong>
          </p>
          <div className="space-holder">
            <InputLocation location={location} handleChange={handleChange} />
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}
