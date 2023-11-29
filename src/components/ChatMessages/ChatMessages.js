import React from 'react';
import {useParams} from "react-router-dom";
import styles from './ChatMessages.module.css'
import MessagesDiv from './MessagesDiv/MessagesDiv'
import ChatMessagesHeader from "./ChatMessagesHeader/ChatMessagesHeader";
import {messageStorage} from "../../storages/MessagesStorage";
import {getMessages} from "../../Requests";

const ChatMessages = () => {
    const {chat_id} = useParams();
    const user_id = messageStorage((state) => state.user_id);
    const name = messageStorage((state) => state.name);
    const mess = getMessages(user_id, chat_id);
    const setMessages = messageStorage((state) => state.setMessages);
    setMessages(mess);
    const revokeMessages = messageStorage((state) => state.revokeMessages)
    revokeMessages(chat_id, name, mess)
    try{return (
        <div className={styles.ChatMessagesDiv}>
            <ChatMessagesHeader />
            <MessagesDiv />
        </div>
    )} catch {return (<div className={styles.h3}>Чат не найден</div>)}

};

export default ChatMessages;