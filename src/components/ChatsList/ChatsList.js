import React from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";
import {getChats} from "../../Requests";

const ChatsList = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    wa.showAlert(user_id)
    const chatsList = getChats(user_id);
    const setChats = chatStorage((state) => state.setChats);
    setChats(chatsList);
    const chats = chatStorage((state => state.filteredChats));
    return (
        <div className={styles.ChatDiv}>
            <h3 className={styles.h3}>Чаты</h3>
            {chats.map((chat) => {return ChatCard(chat)})}
        </div>
    );
};

export default ChatsList;