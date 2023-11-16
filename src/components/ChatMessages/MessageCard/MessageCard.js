import React from 'react';
import styles from './MessageCard.module.css'
import logo from '../../../img/logo192.png'

const MessageCard = (message) => {
    const from = message.from
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    return (
        <div className={cl[from]} key={message.message}>
            {message.type === 'text' ? <p>{message.message}</p>: <img src={logo} alt=''/>}
        </div>
    );
};

export default MessageCard;