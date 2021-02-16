import React from 'react';

const Formulario = ({ onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <div className="field">
            <input
              type="text"
              value={value}
              onChange={onChange}
            />
            <button type="submit">Send Location</button>
          </div>
        </form>
    );
}
 
export default Formulario;