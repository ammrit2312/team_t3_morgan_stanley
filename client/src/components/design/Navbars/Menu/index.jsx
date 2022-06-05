import React from "react";
import { useNavigate } from "react-router-dom";

// components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from '@mui/material/ListItemText';

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {JSX.Element} for the menu items in the navbar
 */

const Menu = ({menu}) => {

    const navigate = useNavigate();

    return (
        <List>
            {menu.map((item, index) => (
                <ListItemButton onClick={()=>navigate(item.path)} key={index}>
                    <ListItemText primary={item.name} />
                </ListItemButton>
            ))}
        </List>
    );
}
 
export default Menu;
