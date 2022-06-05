import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import styles from "./SignedOutNavbar.module.css";

// assets
import Logo from "../../../../assets/images/logo.png";

// constants 
import { entireRoutes } from "../../../../constants/routes";

// components
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import Menu from "../Menu";
import Divider from "@mui/material/Divider";
import NavLink from "../NavLink";

const SignedOutNavbar = ({ navLinks }) => {

    const navigate = useNavigate();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header>
            <img
                src = {Logo}
                alt = "Toybank"
            />
            <div>
                <nav>
                    {navLinks.map((item, index) => (
                        // add links
                        <NavLink key={index} data={item} />
                    ))}
                </nav>
            </div>
        </header>
    );
}
 
export default SignedOutNavbar;
