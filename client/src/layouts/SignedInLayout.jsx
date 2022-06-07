import React from "react";
import styles from "./layouts.module.css";
import { Outlet } from "react-router-dom";

// components
import SignedOutNavbar from "../components/design/Navbars/SignedOutNavbar";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @return Signedin layout for the page
 */

export default function SignedInLayout({navLinks}) {

    return (
        <main className={styles.container}>
            <SignedOutNavbar navLinks={navLinks} signedOut={false}/>
            <Outlet />
        </main>
    );
}
