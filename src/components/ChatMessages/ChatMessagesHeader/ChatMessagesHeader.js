import React from 'react';
import styles from "../ChatMessages.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";

const ChatMessagesHeader = (chat_id) => {
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText chat_id={chat_id}/>
        </div>
    );
};

export default ChatMessagesHeader;