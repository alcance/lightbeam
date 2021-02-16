import React, { useState } from 'react';
import { Form } from './components/Form';

export const LightBeamApp = () => {

    const [response, setResponse] = useState('');

    return (
        <div className="container">
            <p>{response}</p>
            <fieldset className="form">
                <Form
                    setResponse={setResponse}
                />
            </fieldset>
        </div>
    )
}
