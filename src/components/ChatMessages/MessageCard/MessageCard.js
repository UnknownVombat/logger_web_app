import React from 'react';
import styles from './MessageCard.module.css'

const MessageCard = (message) => {
    const from = message.from_id
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    return (
        <div className={cl[from]} key={message.mes_id}>
            {message?.img ? <img src={message.img} alt=''/>: null}
            {message?.text ? <p>{message.mes_time}</p>: null}
        </div>
    );
};

export default MessageCard;