import React from 'react';
import styles from './ChatCard.module.css'
import ChatPhoto from "./ChatPhoto/ChatPhoto";
import ChatInfo from "./ChatInfo/ChatInfo";
import {Link} from 'react-router-dom'

const ChatCard = (chat) => {
    return (<Link to={`/messages/${chat.telegramId}`} className={styles.CardLink}>
            <div className={styles.CardDiv} key={chat.telegramId}>
                <ChatPhoto chat={chat}/>
                <ChatInfo chat={chat}/>
            </div>
        </Link>
    );
};

export default ChatCard;