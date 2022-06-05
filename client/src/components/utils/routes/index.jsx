import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";

// constants
import { accountTypes } from "../../../constants/accounts.constants";

// components
import SignedOutRouter from "./SignedOutRouter";
import SignedInAdminRouter from "./SignedInAdminRouter";
import SignedInVolunteerRouter from "./SignedInVolunteerRouter";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns The main Router
 */
export default function Router() {
    // const currUser = useSelector((state)=>state.user);

    // const [firebaseUserState, setFirebaseUserState] = useState(-1);
    // const auth = getAuth();

    // onAuthStateChanged(auth, (user)=>{
    //     setFirebaseUserState(user);
    // });

    // if(firebaseUserState === null)
    //     return <SignedOutRouter/>;
    // if(currUser.userType === accountTypes.ADMIN)
    //     return <SignedInAdminRouter/>;
    // else if(currUser.userType === accountTypes.VOLUNTEER)
    //     return <SignedInVolunteerRouter/>;
    // else
    //     return <div>No Idea Man</div>;
    return <SignedOutRouter/>
}
