import React from 'react';
import styles from "./ChatMessagesHeader.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";
import RefreshButton from "./RefreshButton/RefreshButton";

const ChatMessagesHeader = ({props}) => {
    console.log(props)
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText name={props[1]}/>
            <RefreshButton />
        </div>
    );
};

export default ChatMessagesHeader;