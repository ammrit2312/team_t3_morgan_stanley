import React from "react";
import styles from "../fieldStyles.module.css";

import TextField from "@mui/material/TextField";

const TextArea = ({
  label,
  variant = "outlined",
  fullWidth = true,
  required = false,
  onChange=()=>{},
  value="",
  maxRows=2,
}) => {

  return (
    <div className={styles.container}>
        <TextField
            label={label}
            multiline
            maxRows={maxRows}
            fullWidth={fullWidth}
            value={value}
            required={required}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            variant={variant}
            // defaultValue="Default Value"
        />
    </div>
  );
};

export default TextArea;


