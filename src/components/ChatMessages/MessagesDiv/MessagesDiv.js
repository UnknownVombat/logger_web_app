import React from 'react';
import {messages} from "../../../Array";
import MessageCard from "../MessageCard/MessageCard";
import styles from './MessagesDiv.module.css'

const MessagesDiv = ({chat_id}) => {
    return (
        <div className={styles.MessagesDiv}>
            {messages[chat_id].messages.map((message) => {return MessageCard(message)})}
        </div>
    );
};

export default MessagesDiv;