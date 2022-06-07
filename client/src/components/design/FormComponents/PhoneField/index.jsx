import React, { useState, useEffect } from "react";
import styles from "../fieldStyles.module.css";

import TextField from "@mui/material/TextField";

const PhoneField = ({
  label = "Phone Number",
  variant = "outlined",
  fullWidth = true,
  required,
  onChange = () => {},
  phone = "",
}) => {
  // States
  const [phoneState, setPhoneState] = useState("normal");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    if (phone.length === 0) {
      setPhoneState("normal");
      setHelpText("");
      return;
    }

    if (phone.length < 10) {
      setPhoneState("error");
      setHelpText("Invalid Phone Number, check the format");
    } else{
        setPhoneState("success");
        setHelpText("Valid Phone Number");
    }
  }, [phone]);

  return (
    <div className={styles.container}>
      <TextField
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        type="input"
        required={required}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        state={phoneState}
        value={phone}
        helperText={helpText}
      />
    </div>
  );
};

export default PhoneField;
