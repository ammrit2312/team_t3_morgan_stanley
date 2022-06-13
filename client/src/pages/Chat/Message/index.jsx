import React, { forwardRef, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from '../chat.module.css';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username.toLowerCase() === message.username.toLowerCase();
    // const isUser = true;

    console.log("Stuff", message)
    
    return (
        <div ref = {ref} className={`${styles.message} ${isUser && styles.message_user}`}>
            <Card className={isUser ? styles.message_userCard : styles.message_guestCard}>
                <CardContent className={styles.message__message}>
                    <Typography 
                        variant = "div"
                        component = "div"
                        className={styles.message__div}
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
);  



export default Message;