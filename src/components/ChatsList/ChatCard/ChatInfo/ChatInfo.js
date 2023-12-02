import React from 'react';
import styles from "./ChatInfo.module.css";

const ChatInfo = ({chat}) => {
    const date = new Date(chat.lastMessage)
    const newDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDay() +
        '.' + date.getMonth() + '.' + date.getFullYear()
    return (
        <div key={chat.chat_id} className={styles.CardDiv}>
            <p>Пользователь: {chat.name}</p>
            <p>TelegramID: {chat.telegramId}</p>
            <p>Username: {chat.username}</p>
            <p>Last recent message: {newDate}</p>
        </div>
    );
};

export default ChatInfo;