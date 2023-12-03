import React from 'react';
import HeaderText from "./ChatHeaderText/ChatHeaderText";
import ChatRefreshButton from "./ChatHeaderRefresh/ChatRefreshButton";
import styles from './ChatsListHeader.module.css'

const ChatsListHeader = () => {
    return (
        <div style={styles.headerDiv}>
            <HeaderText />
            <ChatRefreshButton />
        </div>
    );
};

export default ChatsListHeader;