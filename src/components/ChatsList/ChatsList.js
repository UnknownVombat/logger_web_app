import React, {useEffect} from 'react';
import styles from './ChatsList.module.css'
import ChatCard from "./ChatCard/ChatCard";
import {chatStorage} from "../../storages/ChatSearchStorage";
import {getChats} from "../../Requests";
import ChatsListHeader from "./ChatsListHeader/ChatsListHeader";
import {authStorage} from "../../storages/AuthStorage";

const ChatsList = () => {
    // const user_id = 530472030
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const chats = chatStorage((state => state.filteredChats));
    const filterChats = chatStorage((state) => state.filterChats)
    const setChats = chatStorage((state) => state.setChats);
    const resetStep = authStorage((state) => state.resetStep)
    useEffect(() => {
        async function parseChats(user_id){
            const chatsList = await getChats({user_id});
            setChats(chatsList);
            filterChats()
        }

        parseChats(user_id)
    }, [user_id, setChats, filterChats]);
    resetStep('api')
    if (chats.length === 0) {
        return (<div className={styles.ChatDiv}>
                    <h3 className={styles.h3}>Чаты</h3>
                    <p>Нет результатов</p>
                </div>)
    }
    return (
        <div className={styles.ChatDiv}>
            <ChatsListHeader />
            {chats.map((chat) => {return ChatCard(chat)})}
        </div>
    )


};

export default ChatsList;