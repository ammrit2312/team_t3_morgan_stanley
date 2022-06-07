import React from "react";
import EmailField from "../FormComponents/EmailField";
import PhoneField from "../FormComponents/PhoneField";
import SelectMenu from "../FormComponents/Select";
import TextArea from "../FormComponents/TextArea";
import TextFieldComp from "../FormComponents/TextField";

// components


const Form = ({form_construct}) => {
    return (
        <>
            {form_construct.map((form_component, index) => (
                <div style={{width: "100%"}}>
                    {form_component.input==="input" && 
                    <TextFieldComp 
                        label={form_component.label} 
                        required={form_component.required}
                        onChange={form_component.setVar}
                        value={form_component.value}
                    />}
                    {form_component.input==="email" && 
                    <EmailField
                        required={form_component.required} 
                        onChange={form_component.setVar} 
                        email={form_component.value}
                    />}
                    {form_component.input==="phone" && 
                    <PhoneField
                        required={form_component.required} 
                        onChange={form_component.setVar} 
                        phone={form_component.value}
                    />}
                    {form_component.input==="textarea" &&
                    <TextArea
                        label={form_component.label}
                        required={form_component.required}
                        onChange={form_component.setVar}
                        value={form_component.value}

                    />}
                    {form_component.input==="select" &&
                    <SelectMenu
                        label={form_component.label}
                        multiple={form_component.multiple}
                        value={form_component.value}
                        handleChange={form_component.setVar}
                        setVar={form_component.setVar}
                        options={form_component.options}
                        required={form_component.required}
                    />
                    }
                </div>
            ))}
        </>
    );
}
 
export default Form;