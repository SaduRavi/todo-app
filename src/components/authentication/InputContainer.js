import React, { useState } from "react";
import "./styles/InputContainer.css";
import Signup from "./Signup";
import Signin from "./Signin";
import Logo from "./Logo";

export default function InputContainer() {
  const [viewSignup, setViewSignup] = useState(true);
  const toggleView = () => {
    setViewSignup(!viewSignup);
  };
  return (
    <div className="inputContainer">
      <div className="logoSection"><Logo /></div>
      {viewSignup ? (
        <Signup toggleView={toggleView} />
      ) : (
        <Signin toggleView={toggleView} />
      )}
    </div>
  );
}
