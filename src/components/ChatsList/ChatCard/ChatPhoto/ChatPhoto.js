import React from 'react';
import styles from './ChatPhoto.module.css'
import photo from '../../../../img/logo192.png'

const ChatPhoto = ({chat}) => {
    return (
        <img src={chat.photo ? chat.photo: photo} className={styles.ChatPhoto} alt=''/>
    );
};

export default ChatPhoto;