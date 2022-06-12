import React from "react";
import styles from "../fieldStyles.module.css";

import TextField from "@mui/material/TextField";

const TextFieldComp = ({
  label,
  variant = "outlined",
  fullWidth = true,
  required,
  onChange=()=>{},
  value="",
  type="input"
}) => {

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
        value={value}
      />
    </div>
  );
};

export default TextFieldComp;