import React from "react";
import { TextField } from "@mui/material";
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
                <button className={styles.chatBottom__button} onClick={sendButton}>Send</button>
            </form>
        </div>
    );
}

export default ChatBottom;