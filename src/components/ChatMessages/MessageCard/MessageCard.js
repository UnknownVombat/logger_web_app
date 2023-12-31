import React from 'react';
import styles from './MessageCard.module.css'

const MessageCard = (message) => {
    const from = (message.senderId === message.botId? 'user': 'opponent')
    const cl = {'user': styles.MessageDivUser, 'opponent': styles.MessageDivOpponent}
    const date = new Date(message.time)
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    let hour = date.getHours()
    if (hour < 10) {
        hour = '0' + hour
    }
    let minute = date.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    let seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    let month = date.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    const newDate = hour + ':' + minute + ':' + seconds + ' ' + day +
        '.' + month + '.' + date.getFullYear()
    return (
        <div className={cl[from]} key={message.id}>
            {message?.img ? <img src={`data:image/png;base64, ${message.img}`} alt='Red dot'/>: null}
            {message?.text ? <p>{message.text}</p>: null}
            <p className={styles.time}>{newDate}</p>
        </div>
    );
};

export default MessageCard;