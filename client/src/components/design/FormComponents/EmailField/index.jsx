import React, {useState,useEffect} from "react";
import styles from "../fieldStyles.module.css";

import { regexValidateEmail } from "../../../../utils/regex.utils";

import TextField from "@mui/material/TextField";

const EmailField = ({
  label = "Email",
  variant = "outlined",
  fullWidth = true,
  required,
  onChange=()=>{},
  email=""
}) => {
  // States
  const [emailState, setEmailState] = useState("normal");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    if (email.length === 0) {
      setEmailState("normal");
      setHelpText("");
      return;
    }
    // RegEx check for email
    if (regexValidateEmail(email)) {
      setEmailState("success");
      setHelpText("Valid email");
    } else {
      setEmailState("error");
      setHelpText("Invalid email, check the format");
    }
  }, [email]);

  return (
    <div className={styles.container}>
      <TextField
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        type="email"
        required={required}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        state={emailState}
        value={email}
        helperText={helpText}
      />
    </div>
  );
};

export default EmailField;