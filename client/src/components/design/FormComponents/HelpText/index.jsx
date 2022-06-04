import styles from "./HelpText.module.css";

// Icons
import { MdInfo, MdWarning, MdError } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";

/**
 *
 * @param {String} helpText The message to be displayed
 * @param {String} type The type of the message. Acceptable values "normal" | "info" | "success" | "error" | "warning"
 * @returns Custom HelpText component which can be displayed below form components
 */
const HelpText = ({ helpText, state = "normal" }) => {
  return (
    <div className={styles.container}>
      {state !== "normal" && (
        <>
          <div className={styles.iconWrapper}>
            {state === "info" && (
              <MdInfo className={`${styles.icon} ${styles.info}`} />
            )}
            {state === "success" && (
              <RiCheckboxCircleFill
                className={`${styles.icon} ${styles.success}`}
              />
            )}
            {state === "error" && (
              <MdError className={`${styles.icon} ${styles.error}`} />
            )}
            {state === "warning" && (
              <MdWarning className={`${styles.icon} ${styles.warning}`} />
            )}
          </div>
          <p className={styles[state]}>{helpText}</p>
        </>
      )}
    </div>
  );
};

export default HelpText;
