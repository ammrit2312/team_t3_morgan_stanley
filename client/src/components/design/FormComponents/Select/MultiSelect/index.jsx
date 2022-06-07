import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelect = ({ list, item, setItem, label, required=false}) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={item}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          required={required}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={item.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          {/* <MenuItem key={name} value={name}>
              <Checkbox checked={item.indexOf(name) > -1} />
              <ListItemText primary={name} />
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelect;
