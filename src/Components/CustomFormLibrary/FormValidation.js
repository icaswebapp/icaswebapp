import React from "react";
import calculatePasswordStrength from "./PasswordStrength";

function FormValidation(initialState, validate , ACTION_TYPE , authenticate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [Strength , setStrength] = React.useState({});

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("TRYING TO AUTHENTICATE!", values.email, values.password);
        authenticate();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors , values , isSubmitting , authenticate]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    if(ACTION_TYPE === 'SIGN_UP' && event.target.name === 'password'){
      var passwordStrength = calculatePasswordStrength(event.target.value);
      setStrength(passwordStrength);
    }
  }

  function handleBlur() {
    const validationErrors = validate(values , ACTION_TYPE);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    Strength
  };
}

export default FormValidation;
