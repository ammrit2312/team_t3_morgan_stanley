import { useState, useEffect } from "react";
import { regexValidateEmail } from "../../../../utils/regex.utils";

// Components
import TextField from "../TextField";

/**
 *
 * @param {String} email email entered by the user
 * @param {Boolean} autofocus whether the field should autofocus or not. Default is false
 * @param {Function} onChange function to be called when the value of the field changes.
 * @param {String} label label of the field. Default is "Email"
 * @param {String} placeholder placeholder of the field. Default is "Enter email..."
 * @param {Boolean} readonly whether the field is readonly or not. Default is false
 * @param {Boolean} disabled whether the field is disabled or not. Default is false
 * @param {Boolean} required whether the field is required or not. Default is false
 * @returns A custom Email Component
 * @author Mayank1403 <mayank1403@gmail.com>
 */
const EmailField = ({
  email,
  autofocus = false,
  onChange,
  label = "Email",
  placeholder = "Enter email...",
  readonly = false,
  disabled = false,
  required = false,
}) => {
  // States
  const [emailState, setEmailState] = useState("normal");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    if (email.length === 0) {
      setEmailState("normal");
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
    <TextField
      value={email}
      label={label}
      type="email"
      readonly={readonly}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      autofocus={autofocus}
      autocomplete="on"
      onChange={onChange}
      state={emailState}
      helpText={helpText}
    />
  );
};

export default EmailField;
