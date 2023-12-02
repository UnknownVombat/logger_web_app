import React from 'react';
import MessageCard from "../MessageCard/MessageCard";
import styles from './MessagesDiv.module.css'
import {messageStorage} from "../../../storages/MessagesStorage";

const MessagesDiv = () => {
    const messages = messageStorage((state) => state.messages)
    try {
        return (
            <div className={styles.MessagesDiv}>
                {messages.map((message) => {return MessageCard(message)})}
            </div>
        );
    } catch (error) {
        window.location.reload()
    }

};

export default MessagesDiv;