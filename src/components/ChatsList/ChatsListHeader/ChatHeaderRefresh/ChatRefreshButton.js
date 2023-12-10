import React from 'react';
import {getChats} from "../../../../Requests";
import {chatStorage} from "../../../../storages/ChatSearchStorage";
import {NavLink} from "react-router-dom";
import styles from "./ChatRefreshButton.module.css";


const ChatRefreshButton = () => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id;
    const filterChats = chatStorage((state) => state.filterChats)
    const setChats = chatStorage((state) => state.setChats);
    async function parseChats(user_id){
        const chatsList = await getChats({user_id});
        setChats(chatsList);
        filterChats()
    }

    return (
        <NavLink to={'/'} className={styles.buttonDiv} onClick={() => parseChats(user_id)}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default ChatRefreshButton;