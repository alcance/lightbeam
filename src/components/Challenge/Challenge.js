import React, { useState } from "react";
import axios from "axios";
import "./../../App.css";

import {Button} from 'react-bootstrap';

import Spinner from '../Spinner/'

const Challenge = () => {
    const remoteServer = "https://systec-puzzle.herokuapp.com/lightbeam";
    const [location, setLocation] = useState("Crazy Rd. 123");
    const [response, setResponse] = useState("");
    const [cargando, setCargando] = useState(false);
    const [errorClass, setErrorClass] = useState('Response');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCargando(true);
        axios
            .post(remoteServer, {
                location: location,
            })
            .then((res) => {
                setResponse(res);
                setErrorClass('Response');
            })
            .catch((err) => {
                setCargando(false);
                setErrorClass('Response red');
                setResponse('503 Service Unavailable');
            });
    };
    return ( 
        <div className='Container'>
                <h3 className='Response'>Response: </h3>
                {cargando ? <Spinner /> :
                <p className={errorClass}>{response}</p>
                }
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <h3>
                    Post to Server:
                </h3>
                <div className='inputContainer'>
                    <input
                        name='location'
                        type='text'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button className='button' type='submit'>Submit</Button>
                </div>
            </form>
        </div>
     );
}
 
export default Challenge;