import { memo } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { auth, provider, provider2, firestore } from "../firebase/firebase";
import Logo from "../images/logo.png";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import "../styles/Login.css";

function Login() {
  const googleSignIn = () => {
    auth.signInWithRedirect(provider).catch((e) => alert(e.message));
  };
  const facebookSignIn = () => {
    auth.signInWithRedirect(provider2).catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="FredChat logo" />
        <div className="login__text">
          <h1>
            Join <span className="app_name">FredChat</span>
          </h1>
        </div>
            <Button onClick={googleSignIn} className="btn">
              <span className="sign_in">Sign in with</span>{" "}
              <img src={Google} height="20" width="20" alt="google" />
            </Button>
            <Button onClick={facebookSignIn} className="btn">
              <span className="sign_in">Sign in with</span>{" "}
              <img src={Facebook} height="20" width="20" alt="google" />
            </Button>
      </div>
    </div>
  );
}

export default memo(Login);
