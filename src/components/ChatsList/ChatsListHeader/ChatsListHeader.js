import React from 'react';
import HeaderText from "./ChatHeaderText/ChatHeaderText";
import ChatRefreshButton from "./ChatHeaderRefresh/ChatRefreshButton";
import styles from './ChatsListHeader.module.css'
import HeaderAuth from "./ChatHeaderAuth/HeaderAuth";

const ChatsListHeader = () => {
    return (
        <div className={styles.headerDiv}>
            <HeaderAuth />
            <HeaderText />
            <ChatRefreshButton />
        </div>
    );
};

export default ChatsListHeader;