import React, {useEffect} from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";
import {messageStorage} from "../../storages/MessagesStorage";
import {getChats} from "../../Requests";

const ChatsList = () => {
    // const user_id = 530472030
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const chats = chatStorage((state => state.filteredChats));
    const setUser = messageStorage((state) => state.setUser);
    const filterChats = chatStorage((state) => state.filterChats)
    const setChats = chatStorage((state) => state.setChats);
    useEffect(() => {
        async function parseChats(user_id){
            const chatsList = await getChats({user_id});
            setChats(chatsList);
            filterChats()
        }

        setUser({user_id})
        parseChats(user_id)
    }, [user_id, setChats, setUser, filterChats]);
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
        window.location.reload()
        return (<div className={styles.ChatDiv}>
            <h3 className={styles.h3}>Чаты</h3>
            <p>Идет загрузка</p>
        </div>);
    }

};

export default ChatsList;