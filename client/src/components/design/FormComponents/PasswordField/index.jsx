import { useState, useEffect } from 'react';
import styles from '../FormComponents.module.css';

// Components
import HelpText from '../HelpText';

// Icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// utils
import { regExpPassword } from '../../../../constants/regex.constants';

/**
 *
 * @param {String} password The password entered by the user
 * @param {String} label The label of the text field. Default is "Password"
 * @param {Boolean} readonly Whether the text field is readonly. Default is false
 * @param {Boolean} disabled Whether the text field is disabled. Default is false
 * @param {Number} maxlength The maxlength of the text field
 * @param {String} placeholder The placeholder of the text field. Default is "Enter password..."
 * @param {Boolean} required Whether the text field is required. Default is true
 * @param {String} autofocus Whether the text field is autofocused or not. Acceptable values true | false. Default is false
 * @param {String} autocomplete The autocomplete of the text field. Acceptable values "on" | "off". Default is "off"
 * @param {Function} onChange The function to be called when the text field is changed
 * @param {Boolean} useRegex Whether to use the regex or not. Default is true
 * @returns A custom PasswordField component
 * @author Mayank1403 <mayank1403@gmail.com>
 */

const PasswordField = ({
  password,
  label = 'Password',
  readonly = false,
  disabled = false,
  maxlength,
  placeholder = 'Enter password...',
  required = true,
  autofocus = false,
  autocomplete = 'off',
  onChange = () => {},
  useRegex = true,
}) => {
  // states
  const [type, setType] = useState('password');
  const [state, setState] = useState('normal');
  const [helpText, setHelpText] = useState('');

  useEffect(() => {
    // Regex is diabled at SignIn Page therefore this if statement is used.
    if (!useRegex) {
      return;
    }
    if (password.length === 0) {
      setState('normal');
      return;
    }
    // RegEx check for password validation
    if (regExpPassword.test(password)) {
      setState('success');
      setHelpText('Valid password');
      return;
    } else {
      setState('warning');
      setHelpText('Invalid password');
    }
  }, [password]);

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${styles[state]}`}>
        <div className={styles.valueWrapper}>
          {label && (
            <label className={styles.label}>
              {label} {required && <span className={styles.required}>*</span>}{' '}
            </label>
          )}

          <input
            value={password}
            placeholder={placeholder}
            className={styles.input}
            type={type}
            readOnly={readonly}
            disabled={disabled}
            maxLength={maxlength}
            required={required}
            autoFocus={autofocus}
            autoComplete={autocomplete}
            onChange={onChange}
          />
        </div>
        <div className={styles.iconWrapper}>
          {type === 'password' ? (
            <AiFillEye className={styles.icon} onClick={() => setType('text')} />
          ) : (
            <AiFillEyeInvisible className={styles.icon} onClick={() => setType('password')} />
          )}
        </div>
      </div>
      {useRegex && <HelpText {...{ helpText, state }} />}
    </div>
  );
};

export default PasswordField;