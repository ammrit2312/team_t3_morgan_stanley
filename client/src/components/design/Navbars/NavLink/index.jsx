import React from "react";
import { Link } from "react-router-dom";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {JSX.Element} for the navlinks items in the navbar (full screen view)
 */

const NavLink = ({ data }) => {
    return (
        <Link to={data.path}>
            {data.name}
        </Link>
    );
}
 
export default NavLink;