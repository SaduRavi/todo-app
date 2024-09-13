import React from "react";
import "./styles/AuthenticationPage.css";
import InputContainer from "../components/authentication/InputContainer";
import Logo from "../components/authentication/Logo";
import bg from "./../assets/bg.png";

export default function AuthenticationPage() {
  return (
    <div className="container">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="bottomContainer">
        <div className="imageContainer">
          <img
            src={bg}
            alt="Background"
            className="image"
          />
        </div>
        <div className="inputPanel">
          <InputContainer />
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  );
}
