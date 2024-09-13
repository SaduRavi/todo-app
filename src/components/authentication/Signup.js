import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../common/TextInput";
import { SubmitButton } from "../common/SubmitButton";
import { ValidationSchema } from "../../validation/ValidationSchema";
import { saveSignupUser } from "../../functions/SaveSignupUser";

export default function Signup({ toggleView }) {
  return (
    <div className="signupForm">
      <h1> SIGN UP</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={Yup.object({
          username: ValidationSchema.username,
          email: ValidationSchema.email,
          password: ValidationSchema.password,
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const valid = saveSignupUser(values);
            if (valid) {
              alert("User Created!! Login to continue");
              toggleView();
            } else {
              alert("Email Already is use");
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form
          style={{
            textAlign: "center",
          }}
        >
          <TextInput label="Username" name="username" type="text" />
          <TextInput label="Email" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />
          <p>
            Already have an account?{"  "}
            <a
              onClick={toggleView}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Login
            </a>
          </p>
          <SubmitButton />
        </Form>
      </Formik>
    </div>
  );
}
