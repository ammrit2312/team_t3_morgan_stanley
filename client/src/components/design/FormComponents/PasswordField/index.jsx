import React, { useState, useEffect } from "react";
import styles from "../fieldStyles.module.css";

import { regExpPassword } from "../../../../constants/regex.constants";

import TextField from "@mui/material/TextField";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import InputAdornment from "@mui/material/InputAdornment";

const PasswordField = ({
  label = "Password",
  variant = "outlined",
  fullWidth = true,
  required,
  onChange = () => {},
  password = "",
  useRegex = true,
}) => {
  // states
  const [type, setType] = useState("password");
  const [state, setState] = useState("normal");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    // Regex is diabled at SignIn Page therefore this if statement is used.
    if (!useRegex) {
      return;
    }
    if (password.length === 0) {
      setState("normal");
      setHelpText("");
      return;
    }
    // RegEx check for password validation
    if (regExpPassword.test(password)) {
      setState("success");
      setHelpText("Valid password");
      return;
    } else {
      setState("warning");
      setHelpText("Invalid password");
    }
  }, [password]);

  return (
    <div className={styles.container}>
      <TextField
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        type={type}
        required={required}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        state={state}
        value={password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {type === 'password' ? <AiFillEye onClick={()=>setType('text')} className={styles.eyeicon}/> : <AiFillEyeInvisible onClick={()=>setType('password')} className={styles.eyeicon}/>}
            </InputAdornment>
          ),
        }}
        helperText={helpText}
      />
    </div>
  );
};

export default PasswordField;
