import React from 'react';
import styles from './MessageCard.module.css'
import {messageStorage} from "../../../storages/MessagesStorage";

const MessageCard = (message) => {
    const user_id = messageStorage((state) => state.user_id)
    const from = (message.senderId === user_id ? 'user': 'opponent')
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    const date = new Date(message.time)
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    const newDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + day +
        '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    return (
        <div className={cl[from]} key={message.id}>
            {message?.img ? <img src={message.img} alt=''/>: null}
            {message?.text ? <p>{message.text}</p>: null}
            <p className={styles.time}>{newDate}</p>
        </div>
    );
};

export default MessageCard;