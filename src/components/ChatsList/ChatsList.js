import React from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";

const ChatsList = () => {
    // const user_id = 530472030
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