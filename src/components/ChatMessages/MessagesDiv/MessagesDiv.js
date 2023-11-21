import React from 'react';
import MessageCard from "../MessageCard/MessageCard";
import styles from './MessagesDiv.module.css'
import {messageStorage} from "../../../storages/MessagesStorage";

const MessagesDiv = () => {
    const messages = messageStorage((state) => state.messages)
    return (
        <div className={styles.MessagesDiv}>
            {messages.map((message) => {return MessageCard(message)})}
        </div>
    );
};

export default MessagesDiv;