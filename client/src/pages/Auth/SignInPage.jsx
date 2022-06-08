import React, { useState } from "react";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";

import EmailField from "../../components/design/FormComponents/EmailField";
import PasswordField from "../../components/design/FormComponents/PasswordField";
import Button from "../../components/design/Button";

import img from "../../assets/images/sign-in.png";
import Wave from "../../assets/Top_wave.svg";

import useFirebaseAuth from "../../hooks/firebase/useFirebaseAuth";

// constants
import { colors } from "../../constants/colors.constants";
import { entireRoutes } from "../../constants/routes";
import { accountTypes } from "../../constants/accounts.constants";

const SignInPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signInUserWithEmailAndPassword } = useFirebaseAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUserWithEmailAndPassword(email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <img src={img} alt="sign-in" className={styles.imageStyle} />
        </div>
        <div className={styles.rightContainer}>
          <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <div className={styles.heading}>Sign In</div>
            <EmailField required={true} onChange={setEmail} email={email} />
            <PasswordField
              required={true}
              onChange={setPassword}
              password={password}
              useRegex={false}
            />
            <Link to={entireRoutes.FORGOT_PASSWORD} className={styles.link}>
              Forgot Password?
            </Link>
            <Button
              value="Login"
              customStyles={{
                backgroundColor: colors.PRIMARY_ORANGE,
                borderRadius: "10px",
                width: "100%",
                border: "0",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              type="submit"
            />
            <div>
              <span className={styles.text}>Not having an account?</span>{" "}
              <Link to={entireRoutes.SIGN_UP} className={styles.link}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
