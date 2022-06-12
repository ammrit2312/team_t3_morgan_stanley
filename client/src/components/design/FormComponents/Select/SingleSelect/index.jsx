import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SingleSelect = ({selectItem, setSelectItem, label, options, required}) => {
    const handleChange = (event) => {
        setSelectItem(event.target.value);
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectItem}
                    label={label}
                    onChange={handleChange}
                    required={required}
                >
                    {options.map((option, index)=>(
                        <MenuItem value={option.value} key={index}>{option.label}</MenuItem>
                    ))}
                     <MenuItem value={"Other"}>
                        Other
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
 
export default SingleSelect;