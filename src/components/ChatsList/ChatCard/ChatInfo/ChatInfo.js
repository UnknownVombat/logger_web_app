import React from 'react';
import styles from "./ChatInfo.module.css";

const ChatInfo = ({chat}) => {
    const date = new Date(chat.lastMessage)
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    let hour = date.getHours()
    if (hour < 10) {
        hour = '0' + hour
    }
    let minute = date.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    let seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    let month = date.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    const newDate = hour + ':' + minute + ':' + seconds + ' ' + day +
        '.' + month + '.' + date.getFullYear()
    return (
        <div key={chat.chat_id} className={styles.CardDiv}>
            <p>Пользователь: {chat.name}</p>
            <p>TelegramID: {chat.telegramId}</p>
            <p>Username: {chat.username}</p>
            <p>Последнее сообщение: {newDate}</p>
        </div>
    );
};

export default ChatInfo;