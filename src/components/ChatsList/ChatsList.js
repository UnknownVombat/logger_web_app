import React from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";
import {messageStorage} from "../../storages/MessagesStorage";

const ChatsList = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    // const user_id = 530472030
    const setUser = messageStorage((state) => state.setUser);
    const filterChats = chatStorage((state) => state.filterChats)
    setUser({user_id})
    filterChats()
    const chats = chatStorage((state => state.filteredChats));
    if (chats.length === 0) {
        return (<div className={styles.ChatDiv}>
                    <h3 className={styles.h3}>Чаты</h3>
                    <p>Идет загрузка</p>
                </div>)
    }
    try {
        return (
            <div className={styles.ChatDiv}>
                <h3 className={styles.h3}>Чаты</h3>
                {chats.map((chat) => {return ChatCard(chat)})}
            </div>
        )
    } catch (error) {
        alert(`Ошибка блядских чатов ${error}`)
        return (
            <div className={styles.ChatDiv}>
                <h3 className={styles.h3}>Чаты</h3>
                <p>В данный момент у вас нет активных чатов</p>
            </div>
        );
    }

};

export default ChatsList;