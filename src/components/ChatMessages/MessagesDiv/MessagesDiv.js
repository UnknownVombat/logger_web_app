import React from 'react';
import MessageCard from "../MessageCard/MessageCard";
import styles from './MessagesDiv.module.css'
import {messageStorage} from "../../../storages/MessagesStorage";

const MessagesDiv = () => {
    const messages = messageStorage((state) => state.messages)

    if (messages.length > 0){
        return (
            <div className={styles.MessagesDiv}>
                {messages.map((message) => {return MessageCard(message)})}
            </div>
        );
    } else {
        return (
            <div className={styles.MessagesDiv}>
                <p>Нет сообщений</p>
            </div>
        );
    }

};

export default MessagesDiv;