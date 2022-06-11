import React, { useState } from "react";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";

import EmailField from "../../components/design/FormComponents/EmailField";
import PasswordField from "../../components/design/FormComponents/PasswordField";
import Button from "../../components/design/Button";

import useFirebaseAuth from "../../hooks/firebase/useFirebaseAuth";

import img from "../../assets/images/sign-up.svg";

// utils
import {regexValidateEmail, regexValidatePassword} from "../../utils/regex.utils";
import showNotification from "../../utils/notifications.utils";

// constants
import { colors } from "../../constants/colors.constants";

const SignUpPage = ({ accountType }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signUpWithEmailAndPassword } = useFirebaseAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regexValidateEmail(email) && regexValidatePassword(password)) {
      signUpWithEmailAndPassword(email, password, accountType);
    }else{
      showNotification({
        type: "danger",
        message: "Invalid format of email or password",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <img src={img} alt="sign-up" className={styles.imageStyle} />
        </div>
        <form className={styles.rightContainer} onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <div className={styles.heading}>Sign Up</div>
            <EmailField required={true} onChange={setEmail} email={email} />
            <PasswordField
              required={true}
              onChange={setPassword}
              password={password}
            />
            <div className={styles.passwordCriteria}>
              <p>Password must contain following</p>
              <ul>
                <li>At least 8 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
                <li>At least one number</li>
                <li>At least one special character</li>
              </ul>
            </div>
            <Button
              value="Sign Up"
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
              <span className={styles.text}>Already have an account?</span>{" "}
              <Link to="/" className={styles.link}>
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
