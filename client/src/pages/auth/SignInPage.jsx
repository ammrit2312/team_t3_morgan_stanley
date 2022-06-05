import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

// components
import EmailField from "../../components/design/FormComponents/EmailField";
import PasswordField from "../../components/design/FormComponents/PasswordField";
import Button from "../../components/design/Button";
import CheckboxLabels from "../../components/design/FormComponents/Checkbox";

// hooks
import useFirebaseAuth from "../../hooks/firebase/useFirebaseAuth";

// constants
import {colors} from "../../constants/colors.constants";

// image
import img from "../../assets/images/sign-in.svg";

const SignInPage = () => {

  // hooks
  const { signInUserWithEmailAndPassword } = useFirebaseAuth();

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = () => {
    // check if email is valid
    // TODO

    // Check if Password is valid
    // TODO

    signInUserWithEmailAndPassword(email, password);
  };

  return (
    <main className={styles.container}>
      <img src={img} alt="Treasure" loading="lazy" className={styles.image} />
      <div className={styles.rightColumn}>
        <div className={styles.form}>
          <div className={styles.title}>Sign in to Treasure</div>
          <form>
            <EmailField
              email={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField
              password={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.linkContainer}>
              <div className={styles.forgotPassword}>
                <Link
                  to={"/"}
                  className={styles.link}
                >
                  Forgot Password?
                </Link>
              </div>

              <div>
                <CheckboxLabels
                  label="Remember Me"
                  onChange={(e) => {
                    setRememberMe(e.target.checked);
                  }}
                  color="success"
                />
              </div>
              
              {/* <div >
                <Link 
                  to={`/${account?"brand":"influencer"}/sign-in`} className={`${styles.link}`}>
                    Not an {account ? "an" : "a"}{" "}{accountTypesNames[account]}? Click here
                </Link>
              </div> */}
            </div>

            <Button
              value="Login"
              onClick={handleSignIn}
              disabled={email === "" || password === ""}
              customStyles={{
                backgroundColor: colors.PRIMARY_ORANGE,
                borderRadius: "10px",
                marginBottom: "20px",
                width: "100%",
                border: "0",
              }}
            />

            <Button
              value="Not an exisiting user?"
              onClick={handleSignIn}
              disabled={email === "" || password === ""}
              customStyles={{
                backgroundColor: colors.PRIMARY_BLUE,
                borderRadius: "10px",
                width: "100%",
                border: "0",
              }}
            />

          </form>
        </div>
      </div>
    </main>
  )
}

export default SignInPage