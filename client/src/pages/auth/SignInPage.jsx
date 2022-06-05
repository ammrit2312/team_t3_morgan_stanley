import React from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

import EmailField from "../../components/design/FormComponents/EmailField";
import PasswordField from "../../components/design/FormComponents/PasswordField";
import Button from "../../components/design/Button";

import img from "../../assets/images/sign-in.png";

// constants
import { colors } from "../../constants/colors.constants";

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <img src={img} alt="sign-in" className={styles.imageStyle}/>
        </div>
        <div className={styles.rightContainer}>
          <form className={styles.formWrapper}>
          <div className={styles.heading}>Sign In</div>
            <EmailField required={true}/>
            <PasswordField required={true}/>
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
            />
            <div>
              <span className={styles.text}>Not having an account?</span> <Link to="/volunteer/sign-up" className={styles.link}>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
