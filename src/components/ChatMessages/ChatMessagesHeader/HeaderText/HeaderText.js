import React from 'react';
import styles from "./HeaderText.module.css";

const HeaderText = (name) => {
    return (
        <div className={styles.textDiv}>
            <h3 className={styles.text}>Диалог с пользователем {name.name}</h3>
        </div>
    );
};

export default HeaderText;