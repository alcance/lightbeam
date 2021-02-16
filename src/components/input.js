import React from 'react';

export default function InputLocation ({location, handleChange}) {
    return(
        <input
        className="space-input"
        type="text"
        value={location}
        onChange={handleChange}
      />
    )
}