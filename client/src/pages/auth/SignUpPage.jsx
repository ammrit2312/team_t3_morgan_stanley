import React from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

import EmailField from "../../components/design/FormComponents/EmailField";
import PasswordField from "../../components/design/FormComponents/PasswordField";
import Button from "../../components/design/Button";

import img from "../../assets/images/sign-up.svg";

// constants
import { colors } from "../../constants/colors.constants";

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <img src={img} alt="sign-up" className={styles.imageStyle}/>
        </div>
        <form className={styles.rightContainer}>
          <div className={styles.formWrapper}>
          <div className={styles.heading}>Sign Up</div>
            <EmailField required={true}/>
            <PasswordField required={true}/>
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
            />
            <div>
              <span className={styles.text}>Already have an account?</span> <Link to="/" className={styles.link}>Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
