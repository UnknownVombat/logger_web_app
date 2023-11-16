import React from 'react';
import styles from "./HeaderText.module.css";
import {messages} from "../../../../Array";

const HeaderText = (chat_id) => {
    return (
        <div className={styles.textDiv}>
            <h3 className={styles.text}>Диалог с пользователем {messages[chat_id].name}</h3>
        </div>
    );
};

export default HeaderText;