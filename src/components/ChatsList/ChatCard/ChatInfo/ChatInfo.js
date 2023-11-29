import React from 'react';
import styles from "./ChatInfo.module.css";

const ChatInfo = ({chat}) => {
    return (
        <div key={chat.chat_id} className={styles.CardDiv}>
            <p>Пользователь: {chat.name}</p>
            <p>TelegramID: {chat.telegramId}</p>
            <p>Username: {chat.username}</p>
            <p>Last recent message: {chat.lastMessage}</p>
        </div>
    );
};

export default ChatInfo;