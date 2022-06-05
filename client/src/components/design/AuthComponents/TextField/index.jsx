import styles from "../FormComponents.module.css";

// Components
import HelpText from "../HelpText";

/**
 *
 * @param {String} value The value of the text field
 * @param {String} label The label of the text field
 * @param {String} type The type of the text field
 * @param {Boolean} readonly Whether the text field is readonly
 * @param {Boolean} disabled Whether the text field is disabled
 * @param {Number} maxlength The maxlength of the text field
 * @param {String} placeholder The placeholder of the text field
 * @param {Boolean} required Whether the text field is required
 * @param {String} autofocus Whether the text field is autofocused or not. Acceptable values "on" | "off"
 * @param {String} autocomplete The autocomplete of the text field
 * @param {Function} onChange The function to be called when the text field is changed
 * @param {String} state The state of the text field. Acceptable values "normal" | "error" | "success" | "warning" | "info"
 * @param {Object} helpText The message to be displayed along with the type. Example:
 * {
 *  msg : "Incorrect",
 *  type : "error"
 * }
 *
 * The type of the message. Acceptable values "info" | "success" | "error" | "warning"
 * @returns A custom TextField component
 */
const TextField = ({
  value,
  label,
  type = "text",
  readonly = false,
  disabled = false,
  maxlength,
  placeholder,
  required = false,
  autofocus = false,
  autocomplete = "on",
  onChange = () => {},
  state = "normal",
  helpText = "",
}) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper} ${styles[state]}`}>
        <div className={styles.valueWrapper}>
          {label && (
            <label className={styles.label}>
              {label} {required && <span className={styles.required}>*</span>}{" "}
            </label>
          )}

          <input
            value={value}
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
      </div>
      <HelpText {...{ helpText, state }} />
    </div>
  );
};

export default TextField;
