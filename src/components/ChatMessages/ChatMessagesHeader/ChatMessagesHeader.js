import React from 'react';
import styles from "./ChatMessagesHeader.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";
import RefreshButton from "./RefreshButton/RefreshButton";

const ChatMessagesHeader = () => {
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText />
            <RefreshButton />
        </div>
    );
};

export default ChatMessagesHeader;