import ChatBottom from "./ChatBottom";
import React from "react";
import styles from './chat.module.css';
import Message from "./Message";
import {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

const Chat = () => {

    const {id, userid, username} = useParams();
    const [input, setInput] = useState();
    const [messages, setMessages] = useState([]);

    const user = userid;
    const chat_id = id;

    const messagesEnd = useRef(null);

    const scrollToBottom = () => { 
        if (messagesEnd !== null) {
            messagesEnd.current.scrollIntoView({ behavior: "smooth" });
        }
    } 
    let date = new Date();
    setInterval(()=>{
        date = new Date();
    }, 3);

    //update the whole array 
    // useEffect(()=>{
    //     db.collection('chat').doc(chat_id).get().then((querySnapshot)=>{
    //         setMessages(querySnapshot.data().chat);
    //     });
    //     console.log(messages);
    // }, [date])

    const sendMessage = (e) => {
        e.preventDefault();
        // feCa73Z5qm3BO4vyjAyh
        const data = {
            message: input,
            username: username,
            key: messages.length + 1
        };

        let check = messages;
        check.push(data);
        setMessages(check);

        // console.log("This is the message", messages);
        // db.collection("chat").doc(chat_id).update({chat: messages});
        setInput('');
        scrollToBottom();
    }

    return (
        <div className={styles.chat}>
            <div className={styles.main__text}>
                {messages.map((message, key)=>(
                    <Message username={username} message={message} key={`message-${key}`}/>
                ))}
                <div style={{ marginTop: "75px", float:"left", clear: "both" }} ref={messagesEnd} />
            </div>
            <div className={styles.chat__main}>
                <ChatBottom input={input} setInput={setInput} sendButton={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;