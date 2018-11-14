import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from './input';
import {required, hasSix} from './validators';

const LoginForm = (props) => {
  function printValues(values) {
    console.log(values);
  }
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit(values => printValues(values))}>
      <Field component={Input}
      label="Email"
      type="email"
      name="email"
      autocomplete="email"
      validate={[required, hasSix]}
      />
      <Field component={Input}
      label="Password"
      type="password"
      name="password"
      autocomplete="password"
      validate={[required, hasSix]}
      />
      <button
      type="submit"
      >Submit</button>
    </form>
  )
}

export default reduxForm({
  form: "login"
})(LoginForm);