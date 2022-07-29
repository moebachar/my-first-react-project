import React from 'react';
import './input.css'

function Input({ name, label, error, ...rest }) {
    return (
        <div className="input-box" >
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="input-field" />
            {error && <div className="danger-alert">{error}</div>}
        </div>
    );
}

export default Input;