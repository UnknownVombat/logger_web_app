import React from 'react';
import styles from "./HeaderText.module.css";
import {messageStorage} from "../../../../storages/MessagesStorage";

const HeaderText = () => {
    const name = messageStorage((state) => state.name)
    return (
        <div className={styles.textDiv}>
            <h3 className={styles.text}>Диалог с пользователем {name}</h3>
        </div>
    );
};

export default HeaderText;