import React from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";

const ChatsList = () => {
    const chats = chatStorage((state => state.filteredChats))
    console.log(chats)
    return (
        <div className={styles.ChatDiv}>
            <h3 className={styles.h3}>Чаты</h3>
            {chats.map((chat) => {return ChatCard(chat)})}
        </div>
    );
};

export default ChatsList;