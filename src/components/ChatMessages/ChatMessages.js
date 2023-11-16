import React from 'react';
import {Link, useParams} from "react-router-dom";
import {messages} from "../../Array";
import styles from './ChatMessages.module.css'
import Message from './MessagesDiv/MessagesDiv'

const ChatMessages = () => {
    const {chat_id} = useParams();
    try{return (
        <div className={styles.ChatMessagesDiv}>
            <h3 className={styles.h3}>Диалог с пользователем {messages[chat_id].name}</h3>
            <Link to={'/'}><h2 className={styles.h2}>Возврат к чатам</h2></Link>
            <Message chat_id={chat_id}/>
        </div>
    )} catch {return (<div className={styles.h3}>Чат не найден</div>)}

};

export default ChatMessages;