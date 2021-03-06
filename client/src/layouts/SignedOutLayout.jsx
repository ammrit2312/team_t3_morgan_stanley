import React from "react";
import styles from "./layouts.module.css";
import { Outlet } from "react-router-dom";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @return Signedout layout for the page
 */

// constants
import { signedOutNavbarLinks } from "../constants/navbar.constants";

// components
// import SignedOutNavbar from "../components/design/Navbars/SignedOutNavbar";
import SignedOutNavbar from "../components/design/Navbars/SignedOutNavbar";

export default function SignedOutLayout() {
  return (
    <main className={styles.container}>
      <SignedOutNavbar navLinks={signedOutNavbarLinks} signedOut={true}/>
      <Outlet />
    </main>
  );
}
