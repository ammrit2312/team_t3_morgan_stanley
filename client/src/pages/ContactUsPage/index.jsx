import React, { useState } from "react";

import EmailField from "../../components/design/FormComponents/EmailField";
import TextArea from "../../components/design/FormComponents/TextArea";
import TextField from "../../components/design/FormComponents/TextField";
import Button from "../../components/design/Button";

import styles from "./styles.module.css";
import { colors } from "../../constants/colors.constants";

const ContactUsPage = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, title, message);
  }

  return (
    <div className={styles.container}>
      <form className={styles.innerCoontainer} onSubmit={handleSubmit}>
        <EmailField required={true} onChange={setEmail} email={email} />
        <TextField
          label="Title"
          required={true}
          onChange={setTitle}
          value={title}
        />
        <TextArea
          label="Message"
          required={true}
          onChange={setMessage}
          value={message}
          maxRows={5}
        />
        <Button
          value="Submit"
          customStyles={{
            backgroundColor: colors.PRIMARY_ORANGE,
            borderRadius: "10px",
            width: "100%",
            border: "0",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactUsPage;
