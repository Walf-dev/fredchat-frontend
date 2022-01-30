import * as React from "react";
import "../styles/loader.css";
import Logo from "../images/logo.png";
export default function Loader() {
  return (
    <div>
      <div className="spinner">
        <div className="container">
          <div className="loader"></div>
        </div>
      </div>
      <p className="logo">
        <img src={Logo} alt="logo" height="30" width="30" />
        <span>Loading...</span>
      </p>
    </div>
  );
}
