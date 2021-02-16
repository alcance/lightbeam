import React, { useState } from 'react'
import { fetchData } from '../helpers/fetch';

export const Form = ({setResponse}) => {

    const [state, setState] = useState({
        location: 'Crazy Rd. 123'
    });

    const { location } = state;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (location.trim().length > 0) {
            const resp = await fetchData({location: location.trim()});
            setResponse(resp);
            setState({
                location: ''
            })
        }
        else {
            alert('Message cannot be empty');
        }
    }

    const handleChange = (e) => {
        setState({
            location: e.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <strong className="main">Post to Server</strong>
            </p>
            <input
                type="text"
                className="input-text"
                value={location}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="submit-btn"
            >
                Submit
            </button>
        </form>
    )
}
