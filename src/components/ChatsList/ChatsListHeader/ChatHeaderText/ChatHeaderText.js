import React from 'react';
import styles from "./ChatHeaderText.module.css";

const ChatHeaderText = () => {
    return (
        <div className={styles.textDiv}>
            <h3 className={styles.text}>Чаты</h3>
        </div>
    );
};

export default ChatHeaderText;