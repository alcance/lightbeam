import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
    const remoteServer = "https://systec-puzzle.herokuapp.com/lightbeam";
    const [location, setLocation] = useState("Crazy Rd. 123");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(remoteServer, {
                location: location,
            })
            .then((res) => setResponse(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className='App'>
            <p>{response}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <strong>Post to Server:</strong>
                </p>
                <input
                    name='location'
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default App;
