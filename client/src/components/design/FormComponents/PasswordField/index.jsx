import React from 'react'
import styles from '../fieldStyles.module.css'

import TextField from '@mui/material/TextField';

const PasswordField = ({label="Password", variant="outlined", fullWidth=true, required}) => {
  return (
    <div className={styles.container}>
        <TextField label={label} variant={variant} fullWidth={fullWidth} type="password" required={required}/>
    </div>
  )
}

export default PasswordField