import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// firebase functions
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  sendPasswordResetEmail,
} from "firebase/auth";

// config
import auth from "../../config/firebase.config";

// hooks
import useFirebaseErrorHandler from "./useFirebaseErrorHandler";

// constants
import { entireRoutes, routes } from "../../constants/routes";
import { accountTypes } from "../../constants/accounts.constants";

// redux actions
import { setUser, resetUser } from "../../redux/ducks/userDuck";

// utils
import showNotification from "../../utils/notifications.utils";
// import { setCookie, deleteCookie } from "../../utils/auth.utils";

/**
 * @author Mayank1403 <mayank1403@gmail.com>
 * @returns {Object} - Returns an object containing the following functions:
 *  - createUserWithEmailAndPassword
 *  - signOutFirebaseUser
 *  - signInUserWithEmailAndPassword
 *  - resetUserPassword
 */
function useFirebaseAuth() {
  // Objects
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firebaseErrorHandler } = useFirebaseErrorHandler();

  /**
   * @author Mayank1403 <mayank1403@gmail.com>
   * @description - Deletes the user from firebase.
   * @param {Object} firebaseError - Error object
   *
   */
  async function deleteUserFromFirebase(firebaseError) {
    if (auth.currentUser) {
      deleteUser(auth.currentUser)
        .then(() => {
          firebaseErrorHandler(firebaseError);
        })
        .catch((error) => {
          firebaseErrorHandler(error);
        });
    } else {
      firebaseErrorHandler(firebaseError);
    }
  }

  /**
   * @author Mayank1403 <mayank1403@gmail.com>
   * @description - Signs out the user from firebase.
   */
  function signOutFirebaseUser() {
    signOut(auth)
      .then(() => {
        // reset user in redux
        // dispatch(resetUser());

        // redirecting to sign in page
        navigate(entireRoutes.BASE);
      })
      .catch((error) => {
        firebaseErrorHandler(error);
      });
  }

  /**
   * @author Mayank1403 <mayank1403@gmail.com>
   * @description sends user email for password reset
   */
  function resetUserPassword() {
    try {
      if (auth.currentUser !== null) {
        sendPasswordResetEmail(auth, auth.currentUser.email).then(() => {
          showNotification({
            title: "Password reset email sent",
            type: "success",
          });
        });
      } else {
        // if you reset password after clearing cookies, it will throw error
        showNotification({
          title: "Try to Sign In or Sign Up first",
          type: "warning",
        });
      }
    } catch (error) {
      firebaseErrorHandler(error);
    }
  }

  function forgotUserPassword(email) {
    try {
      if (auth.currentUser !== null) {
        sendPasswordResetEmail(auth, email).then(() => {
          showNotification({
            title: "Password reset email sent",
            type: "success",
          });
        });
      } else {
        // if you reset password after clearing cookies, it will throw error
        showNotification({
          title: "Try to Sign In or Sign Up first",
          type: "warning",
        });
      }
    } catch (error) {
      firebaseErrorHandler(error);
    }
  }

  /**
   * @author Mayank1403 <mayank1403@gmail.com>
   * @description - Creates a new user with email and password.
   * @param {String} email - Email of the user
   * @param {String} password - Password of the user
   * @param {integer} accountType - type of account
   */
  async function signUpWithEmailAndPassword(email, password, accountType) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        const { user } = userCredential;
        console.log("user credentials:", userCredential);
        
        showNotification({
          title: "Sign Up Successful",
          type: "info",
        });
        navigate(entireRoutes.VOLUNTEER_FORM);
        
        // set user in redux
        if (accountType === accountTypes.VOLUNTEER) {
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              formFilled: false,
              accountType: accountTypes.VOLUNTEER, 
            })
          );
        }
      })
      .catch((error) => {
        deleteUserFromFirebase(error);
      });
  }

  /**
   *
   * @author Mayank1403 <mayank1403@gmail.com>
   * @description Signs in the user with email and password.
   * @param {String} email email of the user
   * @param {String} password password of the user
   */
  async function signInUserWithEmailAndPassword(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        const { user } = userCredential;
        console.log("user scredentialss:", userCredential);
        // set user in redux
        // check if user exists in our database
        // if not, rediret to form
        // if yes, redirect to dashboard
      })
      .catch((error) => {
        console.log("errorrrr", error);
      });
  }

  return {
    signUpWithEmailAndPassword,
    signOutFirebaseUser,
    signInUserWithEmailAndPassword,
    resetUserPassword,
    forgotUserPassword,
  };
}

export default useFirebaseAuth;
