import React, {useEffect} from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";
import {getChats} from "../../Requests";
import {messageStorage} from "../../storages/MessagesStorage";

const ChatsList = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const setChats = chatStorage((state) => state.setChats);
    const setUser = messageStorage((state) => state.setUser);
    const filterChats = chatStorage((state) => state.filterChats)
    useEffect(() => {
        async function parseChats(user_id){
            setUser({user_id})
            const chatsList = await getChats({user_id});
            setChats(chatsList);
            filterChats()
        }

        parseChats(user_id)
    }, [user_id, setChats, setUser, filterChats]);
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