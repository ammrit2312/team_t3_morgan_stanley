import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

// components
import ChatBottom from "./ChatBottom";
import Message from "./Message";

// css
import styles from './chat.module.css';

// constants
import { ADMIN_ID } from "../../constants/accounts.constants";

const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const currUser = useSelector((state) => state.user);
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const {userId} = useParams();
    const socket = io("http://localhost:8001");

    useEffect(() => {
        socket.on("send-message", (data)=>{
            setMessages([...messages, data]);
        });

        setRoom(ADMIN_ID+"-"+userId);
        socket.emit("join-room", { room }, (data)=>{
            console.log(data);
        });
    }, []);

    const sendMessage = () => {
        socket.emit("message", {messageSent: currentMessage, senderID: currUser.uid, room })
    };

    return (
        <main className={styles.chat}>
            <section className={styles.main__text}>
                {messages.map((message, key)=>(
                    <Message username={currUser.uid} message={message} key={`message-${key}`}/>
                ))}
                {/* <div style={{ marginTop: "75px", float:"left", clear: "both" }} ref={messagesEnd} /> */}
            </section>
            <section className={styles.chat__main}>
                <ChatBottom input={currentMessage} setInput={setCurrentMessage} sendButton={sendMessage}/>
            </section>
        </main>
    );
}

export default Chat;