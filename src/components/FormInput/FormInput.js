import React from "react";
import Error from "../Error/Error";

const FormInput = ({
  register,
  error,
  errorText,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} {...inputProps} className="form-control" />
      {error && error.type === "required" ? (
        <Error error={errorText.requiredMessage} />
      ) : null}
      {error && error.type === "maxLength" ? (
        <Error error={errorText.maxLengthMessage} />
      ) : null}
    </>
  );
};

export default FormInput;
