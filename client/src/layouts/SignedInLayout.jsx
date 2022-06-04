import styles from "./layouts.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @return Signedin layout for the page
 */

// componenets
import Drawer from "@mui/material/Drawer";
// import Menu from "../components/design/Navbars/Menu";
import { GiHamburgerMenu } from "react-icons/gi";

// constants
// import { signedInBrandNavLinks } from "../constants/navbar.constants";

export default function SignedInBrandLayout() {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <main className={styles.container}>
        {/* <Drawer
            anchor="left"
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
        >
            <Menu items={signedInBrandNavLinks} />
        </Drawer>
        <div className={styles.header}>
            <GiHamburgerMenu onClick={()=>setShowDrawer(!showDrawer)}/>
            <div>
            Navbar
            </div>
        </div> */}
        <Outlet />
        </main>
    );
}
