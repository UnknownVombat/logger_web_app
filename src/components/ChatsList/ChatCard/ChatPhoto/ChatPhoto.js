import React from 'react';
import styles from './ChatPhoto.module.css'

const ChatPhoto = ({chat}) => {
    return (
        <img src={chat.avatar ? `data:image/png;base64, ${chat.avatar}`: 'logo192.png'} className={styles.ChatPhoto} alt='Red dot'/>
    );
};

export default ChatPhoto;