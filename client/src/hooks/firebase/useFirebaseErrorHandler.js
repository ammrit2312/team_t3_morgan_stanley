// [08/03/2022] Please refer: https://firebase.google.com/docs/auth/admin/errors

import { useNavigate } from "react-router-dom";

// constants
import { entireRoutes } from "../../constants/routes";

// utils
import showNotification from "../../utils/notifications.utils";

/**
 * @author Mayank1403 <mayank1403@gmail.com>
 * @description - Custom useErrorHandlers hook to handle firebase errors side-effects.
 * @returns {Object} - Object containing various error handlers. A list of which is as follows:
 *  - firebaseErrorHandler
 */
function useFirebaseErrorHandler() {
  // Objects
  const navigate = useNavigate();

  function firebaseErrorHandler(error) {
    // error code returned by firebase of the form "auth/<error-name>", return undefined if error is from server side
    const errorCode = error.code;

    console.log(error);

    switch (errorCode) {
      case "auth/email-already-in-use":
        handleEmailAlreadyInUse();
        break;

      case "auth/invalid-email":
        handleInvalidEmail();
        break;

      case "auth/user-not-found":
        handleUserNotFound();
        break;

      case "auth/weak-password":
        handleWeakPassword();
        break;

      case "auth/wrong-password":
        handleWrongPassword();
        break;

      case "auth/id-token-expired":
        handleIdTokenExpired();
        break;

      case "auth/id-token-revoked":
        handleIdTokenRevoked();
        break;

      case "auth/insufficient-permission":
        handleInsufficientPermission();
        break;

      case "auth/internal-error":
        handleInternalError();
        break;

      case "auth/invalid-argument":
        handleInvalidArgument();
        break;

      case null:
        break;

      case undefined:
        break;

      default:
        showNotification({
          title: `Error: ${errorCode} Kindly reach out to our support team.`,
          type: "danger",
        });
        navigate(`../`);
        break;
    }
  }

  function handleEmailAlreadyInUse() {
    showNotification({
      title: `Email already in use! Sign In instead.`,
      type: "info",
    });
    navigate(entireRoutes.SIGN_IN);
  }

  function handleInvalidEmail() {
    showNotification({ title: "Enter a valid email.", type: "warning" });
  }

  function handleUserNotFound() {
    showNotification({
      title: "User not found! Sign Up instead.",
      type: "warning",
    });
    navigate(entireRoutes.SIGN_IN);
  }

  function handleWeakPassword() {
    showNotification({
      title: "Weak Password! Set a strong one.",
      type: "warning",
    });
  }

  function handleWrongPassword() {
    showNotification({ title: "Wrong Password! Try again.", type: "danger" });
    navigate(entireRoutes.SIGN_IN);
  }

  function handleIdTokenExpired() {
    showNotification({
      title: "Session expired! Sign In again.",
      type: "warning",
    });
    navigate(entireRoutes.SIGN_IN);
  }

  function handleIdTokenRevoked() {
    showNotification({
      title: "Session revoked! Sign In again.",
      type: "warning",
    });
    navigate(entireRoutes.SIGN_IN);
  }

  function handleInsufficientPermission() {
    showNotification({ title: "Insufficient Permission!", type: "danger" });
  }

  function handleInternalError() {
    showNotification({
      title: "Internal Server Error! Kindly reach out to our support team.",
      type: "danger",
    });
  }

  function handleInvalidArgument() {
    showNotification({
      title: "Internal Argument! Kindly reach out to our support team.",
      type: "danger",
    });
  }

  return {
    firebaseErrorHandler,
  };
}

export default useFirebaseErrorHandler;
