import { TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";

const TextFieldSelect = ({array, setArray, value, setVaule, singleSelect}) => {

    // useEffect(() => {
    //     console.log("Other is other")
    //     return () => {
    //         if(singleSelect){
    //             setArray(value);
    //         }
    //         else{
    //             const midarr = value.split(",");
    //             const arr = [...array, ...midarr];
    //             setArray(arr);
    //         }
    //     }
    // }, []);

    return (
        <TextField
            label="Other"
            variant="standard"
            fullWidth={true}
            onChange={(e) => {
                e.stopPropagation();
                setVaule(e.target.value);
            }}
            value={value}
        />
    );
}
 
export default TextFieldSelect;