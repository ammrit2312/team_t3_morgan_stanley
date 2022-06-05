import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import styles from "./SignedOutNavbar.module.css";

// assets
import Logo from "../../../../assets/images/logo.png";

// constants 
import { entireRoutes } from "../../../../constants/routes";
import { colors } from "../../../../constants/colors.constants";

// components
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import Menu from "../Menu";
import Divider from "@mui/material/Divider";
import NavLink from "../NavLink";
import Button from "../../Button";

const SignedOutNavbar = ({ navLinks }) => {

    const navigate = useNavigate();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header className={styles.container}>
            <img
                src = {Logo}
                alt = "Toybank"
                className={styles.logo}
            />
            <div className={styles.navContainer}>
                <nav className={styles.nav}>
                    {navLinks.map((item, index) => (
                        // add links
                        <NavLink key={index} data={item} />
                    ))}
                </nav>
                <Button
                    value="Sign In"
                    onClick={() => navigate(entireRoutes.BASE)}
                    customStyles={{
                        backgroundColor: colors.PRIMARY_ORANGE,
                        borderRadius: "10px",
                        width: "60%",
                        border: "0",
                    }}
                />
            </div>
            <GiHamburgerMenu
                className={styles.menuIcon}
                onClick={() => setIsDrawerOpen(true)}
            />
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Menu menu={navLinks} />
                <Divider />
                <Button 
                    value="Sign In" 
                    onClick={() => navigate(entireRoutes.BASE)} 
                    customStyles={{
                        backgroundColor: colors.PRIMARY_ORANGE,
                        borderRadius: "10px",
                        width: "80%",
                        border: "0",
                        marginTop: "10px",
                    }}
                />
            </Drawer>
        </header>
    );
}
 
export default SignedOutNavbar;
