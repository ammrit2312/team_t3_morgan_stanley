import React from "react";
import styles from './Button.module.css';

/**
 *
 * @param {String | Component} value The content to be shown inside the button.
 * @param {String} type The type of button. Accepted values are "button", "submit", "reset". Default is "button".
 * @param {Function} onClick The function to be called when the button is clicked.
 * @param {Boolean} disabled Whether the button is disabled or not.
 * @param {String} btnType The type of button. Accepted values are "primary", "secondary", "tertiary". Default is "primary".
 * @param {Object} customStyles An object containing the custom styles to be applied to the button.
 * @returns A custom Button component
 */
function Button({ value, type = 'button', onClick, disabled, btnType = 'primary', customStyles={} }) {
  return (
    <button className={`${styles.button} ${styles[btnType]}`} type={type} disabled={disabled} onClick={onClick} style={customStyles}>
      {value}
    </button>
  );
}

export default Button;
