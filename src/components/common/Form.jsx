import React, { Component } from "react";
import Input from "../common/Input";
import Select from "../common/select";
import TextArea from "./TextArea";
import Joi from 'joi-browser';


class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();

  
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label, source=false) {
    return (
      <button disabled={this.validate()} >
        {label}
        {source && <img src={source} />}
      </button>
    );
  }

  renderSelect(name, label, options, placeholder) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
      />
    );
  }

  renderTextArea(name, rows, cols){
    const {data} = this.state;
    return (
      <TextArea
        name={name}
        rows={rows}
        cols={cols}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderInput(name, label, type = "text", placeholder) {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        placeholder={placeholder}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
