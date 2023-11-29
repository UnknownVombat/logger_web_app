import React from 'react';
import styles from './ChatPhoto.module.css'

const ChatPhoto = ({chat}) => {
    return (
        <img src={chat.avatar ? chat.avatar: 'logo192.png'} className={styles.ChatPhoto} alt=''/>
    );
};

export default ChatPhoto;