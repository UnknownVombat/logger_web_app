import React from 'react';
import styles from "./ChatMessages.module.css";
import {messages} from "../../Array";
import {Link} from "react-router-dom";

const ChatsMessagesHeader = (chat_id) => {
    return (
        <Link to={'/'}>
            <div>
                <h3 className={styles.h3}>Диалог с пользователем {messages[chat_id].name}</h3>
                <h2 className={styles.h2}>Возврат к чатам</h2>
            </div>
        </Link>
    );
};

export default ChatsMessagesHeader;