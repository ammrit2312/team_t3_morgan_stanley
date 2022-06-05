import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// styles
import styles from "./Checkbox.module.css";

/**
 *
 * @param {String} label A label for the checkbox
 * @param {Boolean} disabled Whether the checkbox is disabled or not
 * @param {Boolean} checked Whether the checkbox is checked or not
 * @param {String} color The color of the checkbox. Values allowed are success, secondry, default, primary, error, info, warning
 * @param {String} size The size of the checkbox. Values allowed are small, medium, large
 * @param {Function} onChange A function to be called when the checkbox is checked or unchecked
 * @returns Checkbox
 */

export default function CheckboxLabels({
  label = "",
  disabled = false,
  checked = true,
  color = "success",
  size = "small",
  onChange,
}) {
  return (
    <FormGroup>
      <FormControlLabel
        disabled={disabled}
        className={styles.label}
        control={
          <Checkbox
            defaultChecked={checked}
            color={color}
            onChange={onChange}
            size={size}
          />
        }
        label={<span className={styles.label}>{label}</span>}
      />
    </FormGroup>
  );
}
