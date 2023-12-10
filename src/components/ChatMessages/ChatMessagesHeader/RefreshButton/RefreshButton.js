import React from 'react';
import styles from "./RefreshButton.module.css";
import {NavLink} from "react-router-dom";
import {getMessages} from "../../../../Requests";
import {messageStorage} from "../../../../storages/MessagesStorage";


const RefreshButton = ({chat_id}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const setMessages = messageStorage((state) => state.setMessages);
    async function parseMess(user_id, chat_id) {
        const mess = await getMessages(user_id, chat_id);
        setMessages(mess);
    }

    return (
        <NavLink to={`/messages/${chat_id[0]}/${chat_id[1]}`} className={styles.buttonDiv} onClick={() => parseMess(user_id, chat_id[0])}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default RefreshButton;