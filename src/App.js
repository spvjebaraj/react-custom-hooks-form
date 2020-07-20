import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput/FormInput";
import "./styles.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container-fluid">
      <div className="col-sm-12">
        <h3>Profile</h3>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FormInput
              id="username"
              name="username"
              label="Username"
              type="text"
              register={register({ required: true, maxLength: 20 })}
              error={errors.username}
              errorText={{
                requiredMessage: required,
                maxLengthMessage: maxLength
              }}
            />
          </div>
          <div className="form-group">
            <FormInput
              id="name"
              name="name"
              label="Name"
              type="text"
              register={register({ required: true, maxLength: 50 })}
              error={errors.username}
              errorText={{
                requiredMessage: required,
                maxLengthMessage: maxLength
              }}
            />
          </div>

          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
