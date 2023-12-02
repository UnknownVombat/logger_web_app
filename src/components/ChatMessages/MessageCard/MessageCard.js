import React from 'react';
import styles from './MessageCard.module.css'
import {messageStorage} from "../../../storages/MessagesStorage";

const MessageCard = (message) => {
    const user_id = messageStorage((state) => state.user_id)
    const from = (message.senderId === user_id ? 'user': 'opponent')
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    const date = new Date(message.time)
    const newDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDay() +
        '.' + date.getMonth() + '.' + date.getFullYear()
    return (
        <div className={cl[from]} key={message.id}>
            {message?.img ? <img src={message.img} alt=''/>: null}
            {message?.text ? <p>{message.text}</p>: null}
            <p className={styles.time}>{newDate}</p>
        </div>
    );
};

export default MessageCard;