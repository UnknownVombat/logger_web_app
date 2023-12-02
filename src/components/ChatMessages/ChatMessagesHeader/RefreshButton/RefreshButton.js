import React from 'react';
import styles from "./RefreshButton.module.css";
import {getMessages} from "../../../../Requests";


// function makeRequest(chat_id){
//     console.log('Делаем запрос для чата', chat_id)
// }

const RefreshButton = ({chat_id}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    return (
        <div className={styles.buttonDiv} onClick={() => getMessages(user_id, chat_id)}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </div>
    );
};

export default RefreshButton;