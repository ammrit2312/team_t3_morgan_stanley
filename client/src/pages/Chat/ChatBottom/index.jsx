import React from "react";
import { TextField } from "@mui/material";
import Button from "../../../components/design/Button"
import styles from '../chat.module.css';

const ChatBottom = ({input, setInput, sendButton}) => {
    return (
        <div className={styles.chatBottom}>
            <form className={styles.chatBottom__form}>
                <TextField 
                    id="outlined-basic" 
                    label="Text" 
                    variant="outlined"  
                    className={styles.chatBottom__text}
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <Button onClick={sendButton} value="Send"/>
            </form>
        </div>
    );
}

export default ChatBottom;