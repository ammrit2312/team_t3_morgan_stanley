import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextFieldComp from "../../TextField";

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
  const [textVal, setTextVal] = React.useState("");
  const handleChange = (event) => {
    event.stopPropagation()
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
          <MenuItem value={"Other"}>
            <Checkbox checked={item.indexOf("Other") > -1}/>
            <ListItemText primary={"Other"} />
          </MenuItem>
        </Select>
        {/* <div>
          {item.indexOf("Other") > -1 && <TextFieldComp label={"Metion the other options (put ',' between different values)"} variant={"outlined"} required={true} value={textVal} onChange={setTextVal}/>}
        </div> */}
      </FormControl>
    </div>
  );
};

export default MultiSelect;
