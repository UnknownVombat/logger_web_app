import React from 'react';
import {useParams} from "react-router-dom";
import styles from './ChatMessages.module.css'
import Message from './MessagesDiv/MessagesDiv'
import ChatsMessagesHeader from "./ChatsMessagesHeader";

const ChatMessages = () => {
    const {chat_id} = useParams();
    try{return (
        <div className={styles.ChatMessagesDiv}>
            <ChatsMessagesHeader chat_id={chat_id}/>
            <Message chat_id={chat_id}/>
        </div>
    )} catch {return (<div className={styles.h3}>Чат не найден</div>)}

};

export default ChatMessages;