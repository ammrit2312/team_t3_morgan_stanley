import React from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";

import styles from "../fieldStyles.module.css";

const SelectMenu = ({
  label,
  multiple = false,
  value,
  handleChange,
  options,
  setVar,
  required
}) => {
  // console.log("options", options);
  return (
    <div className={styles.container}>
      {/* <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple={multiple}
                value={value}
                onChange={multiple ? ()=> {} : handleChange}
                input={<OutlinedInput label={label} />}
                // renderValue={(selected) => selected.join(', ')}
                fullWidth={true}
            >
                {multiple && options.map((option)=>(
                    <CheckboxLabels label={option.label} onChange={handleChange} checked={false}/>
                ))}
                {!multiple && options.map((option)=>(
                    <MenuItem key={option.label} value={option.label}>{option.label}</MenuItem>
                ))}
            </Select> */}
      {multiple ? (
        <MultiSelect list={options} item={value} setItem={setVar} label={label} required={required}/>
      ) : (
        <SingleSelect
          selectItem={value}
          setSelectItem={setVar}
          label={label}
          options={options}
          required={required}
        />
      )}
    </div>
  );
};

export default SelectMenu;
