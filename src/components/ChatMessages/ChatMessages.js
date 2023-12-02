import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import styles from './ChatMessages.module.css'
import MessagesDiv from './MessagesDiv/MessagesDiv'
import ChatMessagesHeader from "./ChatMessagesHeader/ChatMessagesHeader";
import {messageStorage} from "../../storages/MessagesStorage";
import {getMessages} from "../../Requests";

const ChatMessages = () => {
    const {chat_id, name} = useParams();
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const setMessages = messageStorage((state) => state.setMessages);
    console.log(`Юзерь айди и чат айди ${user_id} ${chat_id}`)
    useEffect(() => {
        async function parseMess(user_id, chat_id) {
            const mess = await getMessages(user_id, chat_id);
            setMessages(mess);
        }

        parseMess(user_id, chat_id)
    }, [name, setMessages, chat_id, user_id]);
    const messages = messageStorage((state) => state.messages)
    if (messages.length === 0){
        return (<div className={styles.MessagesDiv}>
                    <p>Идет загрузка</p>
                </div>)
    }
    try{return (
        <div className={styles.ChatMessagesDiv}>
            <ChatMessagesHeader chat_id={chat_id} name={name}/>
            <MessagesDiv />
        </div>
    )} catch {return (<div className={styles.h3}>Чат не найден</div>)}

};

export default ChatMessages;