import React from 'react';
import styles from './ChatCard.module.css'
import ChatPhoto from "./ChatPhoto/ChatPhoto";
import ChatInfo from "./ChatInfo/ChatInfo";
import {Link} from 'react-router-dom'
import {messageStorage} from "../../../storages/MessagesStorage";

const ChatCard = (chat) => {
    const setName = messageStorage((state) => state.setName);
    setName(chat.name);
    return (<Link to={`/messages/${chat.chat_id}`} className={styles.CardLink}>
            <div className={styles.CardDiv} key={chat.chat_id}>
                <ChatPhoto chat={chat}/>
                <ChatInfo chat={chat}/>
            </div>
        </Link>
    );
};

export default ChatCard;