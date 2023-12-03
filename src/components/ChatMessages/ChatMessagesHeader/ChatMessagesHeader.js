import React from 'react';
import styles from "./ChatMessagesHeader.module.css";
import HeaderText from "./HeaderText/HeaderText";
import HeaderButton from "./HeaderButton/HeaderButton";
import RefreshButton from "./RefreshButton/RefreshButton";

const ChatMessagesHeader = ({props}) => {
    return (
        <div className={styles.headerDiv}>
            <HeaderButton />
            <HeaderText name={props[1]}/>
            <RefreshButton chat_id={props}/>
        </div>
    );
};

export default ChatMessagesHeader;