import React from 'react';
import styles from './ChatCard.module.css'
import ChatPhoto from "./ChatPhoto/ChatPhoto";
import ChatInfo from "./ChatInfo/ChatInfo";
import {NavLink} from 'react-router-dom'

const ChatCard = (chat) => {
    return (<NavLink to={`/messages/${chat.telegramId}/${chat.name}`} className={styles.CardLink}>
            <div className={styles.CardDiv} key={chat.telegramId}>
                <ChatPhoto chat={chat}/>
                <ChatInfo chat={chat}/>
            </div>
        </NavLink>
    );
};

export default ChatCard;