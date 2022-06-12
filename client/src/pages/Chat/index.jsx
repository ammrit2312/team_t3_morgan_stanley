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

let socket;
const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const currUser = useSelector((state) => state.user);
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        socket = io("http://localhost:8005");
        socket.on("send-message", (data)=>{
            const stuff = {message: data, username: ADMIN_ID};
            setMessages([...messages, stuff]);
        });

        setRoom(ADMIN_ID+"-"+"sLeCdk5sMBU221SA2NJNjeDMBgW2");//useId
        const check = ADMIN_ID+"-"+"sLeCdk5sMBU221SA2NJNjeDMBgW2"
        console.log("Room", check);
        socket.emit("join-room", check , (data)=>{
            console.log(data);
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        console.log("Message", currentMessage, room);
        socket.emit("message", {messageSent: currentMessage, senderID: "sLeCdk5sMBU221SA2NJNjeDMBgW2", room })
    };

    return (
        <main className={styles.chat}>
            <section className={styles.main__text}>
                {messages.map((message, key)=>(
                    <Message username={"sLeCdk5sMBU221SA2NJNjeDMBgW2"} message={message} key={`message-${key}`}/>
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