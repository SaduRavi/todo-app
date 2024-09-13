import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../common/TextInput";
import { SubmitButton } from "../common/SubmitButton";

import { checkUserLogin } from "../../functions/CheckUserLogin";
import { useNavigate } from "react-router-dom";
import { ValidationSchema } from "../../validation/ValidationSchema";

export default function Signin({ toggleView }) {
  const navigate = useNavigate();
  return (
    <div className="signinForm">
      <h1> SIGN UP</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: ValidationSchema.email,
          password: ValidationSchema.password,
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            const userValid = checkUserLogin(values);
            if (userValid) {
              navigate("/home");
              return;
            } else {
              alert("Invalid User!!");
              resetForm();
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
          <TextInput label="Email" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />
          <p>
            New on our platform?{" "}
            <a
              onClick={toggleView}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Create an account
            </a>
          </p>
          <SubmitButton />
        </Form>
      </Formik>
    </div>
  );
}
