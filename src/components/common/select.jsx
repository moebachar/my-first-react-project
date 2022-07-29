import React from "react";
import './select.css';

const Select = ({ name, label, options, error, placeholder, ...rest }) => {
  return (
    <div className="select">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="select__input">
        <option value={placeholder} >{placeholder}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="danger-alert">{error}</div>}
    </div>
  );
};

export default Select;
