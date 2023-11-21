import React from 'react';
import {useParams} from "react-router-dom";
import styles from './ChatMessages.module.css'
import Message from './MessagesDiv/MessagesDiv'
import ChatMessagesHeader from "./ChatMessagesHeader/ChatMessagesHeader";
import {messages} from "../../Array";
import {messageStorage} from "../../storages/MessagesStorage";

const ChatMessages = () => {
    const {chat_id} = useParams();
    const revokeMessages = messageStorage((state) => state.revokeMessages)
    revokeMessages(chat_id, messages[chat_id])
    try{return (
        <div className={styles.ChatMessagesDiv}>
            <ChatMessagesHeader />
            <Message />
        </div>
    )} catch {return (<div className={styles.h3}>Чат не найден</div>)}

};

export default ChatMessages;