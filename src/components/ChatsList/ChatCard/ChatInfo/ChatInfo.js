import React from 'react';
import styles from "./ChatInfo.module.css";

const ChatInfo = ({chat}) => {
    return (
        <div key={chat.tgID} className={styles.CardDiv}>
            <p>TelegramID: {chat.tgID}</p>
            <p>Username: {chat.username}</p>
            <p>Last recent message: {chat.date}</p>
        </div>
    );
};

export default ChatInfo;