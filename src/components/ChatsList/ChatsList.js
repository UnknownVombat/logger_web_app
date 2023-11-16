import React from 'react';
import styles from './ChatsList.module.css'
import {chats} from "../../Array";
import ChatCard from "./ChatCard/ChatCard";

const ChatsList = () => {
    return (
        <div className={styles.ChatDiv}>
            <h3 className={styles.h3}>Чаты</h3>
            {chats.map((chat) => {return ChatCard(chat)})}
        </div>
    );
};

export default ChatsList;