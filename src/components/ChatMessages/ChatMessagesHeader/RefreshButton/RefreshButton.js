import React from 'react';
import styles from "./RefreshButton.module.css";
import {messageStorage} from "../../../../storages/MessagesStorage";


function makeRequest(chat_id){
    console.log('Делаем запрос для чата', chat_id)
}

const RefreshButton = () => {
    const chat_id = messageStorage((state) => state.chat_id)
    return (
        <div className={styles.buttonDiv} onClick={() => makeRequest(chat_id)}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </div>
    );
};

export default RefreshButton;