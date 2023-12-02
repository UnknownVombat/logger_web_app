import React from 'react';
import styles from "./ChatMessagesHeader.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";
import RefreshButton from "./RefreshButton/RefreshButton";

const ChatMessagesHeader = (name, chat_id) => {
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText name={name}/>
            <RefreshButton chat_id={chat_id}/>
        </div>
    );
};

export default ChatMessagesHeader;