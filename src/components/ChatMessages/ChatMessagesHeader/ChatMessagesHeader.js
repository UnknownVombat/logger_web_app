import React from 'react';
import styles from "./ChatMessagesHeader.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";
import RefreshButton from "./RefreshButton/RefreshButton";

const ChatMessagesHeader = ({chat_id}) => {
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText chat_id={chat_id}/>
            <RefreshButton chat_id={chat_id}/>
        </div>
    );
};

export default ChatMessagesHeader;