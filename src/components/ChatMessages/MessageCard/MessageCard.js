import React from 'react';
import styles from './MessageCard.module.css'

const MessageCard = (message) => {
    const from = message.from_id
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    return (
        <div className={cl[from]} key={message.mes_id}>
            {message.text.length > 0 ? <p>{message.text}</p>: <img src={message.img} alt=''/>}
            <p>{message.mes_time}</p>
        </div>
    );
};

export default MessageCard;