import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { accountTypes } from "../../../constants/accounts.constants";

// components
import SignedOutRouter from "./SignedOutRouter";
import SignedInAdminRouter from "./SignedInAdminRouter";
import SignedInVolunteerRouter from "./SignedInVolunteerRouter";
import LoadingRouter from "./LoadingRouter";

// api
import { getExistingAccount } from "../../../api/accounts.api";

// actions
import { setUser } from "../../../redux/ducks/userDuck";

/**
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns The main Router
 */
export default function Router() {
  const currUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [firebaseUserState, setFirebaseUserState] = useState(-1);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setFirebaseUserState(user);
  });

  if (firebaseUserState === -1) {
    return <LoadingRouter />;
  }

  if (firebaseUserState === null || firebaseUserState.emailVerified === false) {
    return <SignedOutRouter />;
  } else if (firebaseUserState !== null && firebaseUserState !== -1) {
    if (currUser === null) {
      getExistingAccount(firebaseUserState.uid).then((res) => {
        console.log(res);
        if (!res.data.message) {
          dispatch(
            setUser({
              email: res.data.Email,
              accountType: res.data.AccountType,
              uid: res.data.UserID,
              formFilled: res.data.Filled_Form,
            })
          );
        }
      });
    }
  }

  if (currUser === null) {
    return <SignedOutRouter />;
  } else if (currUser.accountType === accountTypes.ADMIN) {
    return <SignedInAdminRouter />;
  } else if (currUser.accountType === accountTypes.VOLUNTEER) {
    return <SignedInVolunteerRouter />;
  } else return <div>No Idea Man</div>;
}
