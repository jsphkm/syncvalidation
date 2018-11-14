import React from 'react';

export const Input = (props) => {
  let error;
  console.log(props);
  if (props.meta.touched && props.meta.error) {
    error = 
      <div className="input-error">
        {props.meta.error}
      </div>
  }
  let warning;
  if (props.meta.touched && props.meta.warning) {
    warning = (
      <div className="input-warning">
        {props.meta.warning}
      </div>
    )
  }
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name}
      autoComplete={props.autocomplete}
      />
      <div className="input-validation">
        {error}
        {warning}
      </div>
    </div>
  )
}