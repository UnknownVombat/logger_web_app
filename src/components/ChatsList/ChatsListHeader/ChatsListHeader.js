import React from 'react';
import HeaderText from "./ChatHeaderText/HeaderText";
import RefreshButton from "./ChatHeaderRefresh/RefreshButton";
import styles from './ChatsListHeader.module.css'

const ChatsListHeader = () => {
    return (
        <div style={styles.headerDiv}>
            <HeaderText />
            <RefreshButton />
        </div>
    );
};

export default ChatsListHeader;