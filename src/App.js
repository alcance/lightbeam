import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Message from './components/Message/Message';
import TextInput from './components/TextInput/TextInput';

export default function App() {
  const [state, SetState] = useState({
    response: '',
    location: 'Crazy Rd. 123',
    loading: false,
    typeResponse: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetState({ ...state, loading: true, response: "Loading...", typeResponse: 'loading' }); 
    setTimeout(() => {
      SetState({
        ...state,
        response: 'Server Error',
        loading: false,
        typeResponse: 'error',
      });
    }, 1000);

    /*try {
      const data = await fetch(
        'https://systec-puzzle.herokuapp.com/lightbeam',
        {
          method: 'POST',
          body: {
            location: state.location,
          },
          mode: 'cors',
        }
      );
      const res = await data.json();
      SetState({
        ...state,
        response: res,
        typeResponse: 'success',
      });
      console.log(res);
    } catch (error) {
      SetState({ ...state, response: error, typeResponse: 'error' });
      console.log(error);
    }*/
  };

  const handleChange = (value) => {
    SetState({
      ...state,
      location: value,
    });
  };

  return (
    <div className='App'>
      <div className='container'>
        <h2 className='text-center'>Post to Server:</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            handleChange={handleChange}
            defaultValue={""}
            placeholder='Enter your message'
          />
          <Button title='Submit' disabled={state.loading} />
          <Message message={state.response} type={state.typeResponse} />
        </form>
      </div>
    </div>
  );
}
