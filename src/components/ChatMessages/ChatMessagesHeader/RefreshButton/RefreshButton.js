import React from 'react';
import styles from "./RefreshButton.module.css";
import {NavLink} from "react-router-dom";
import {getMessages} from "../../../../Requests";


const RefreshButton = ({chat_id}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    return (
        <NavLink to={`/messages/${chat_id[0]}/${chat_id[1]}`} className={styles.CardLink} onClick={() => getMessages(user_id, chat_id[0])}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default RefreshButton;