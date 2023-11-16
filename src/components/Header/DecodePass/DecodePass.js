import React from 'react';
import styles from './DecodePass.module.css'

const DecodePass = () => {
    return (
        <div className={styles.PassDiv}>
            <input type='text' placeholder='Пароль дешифровки' className={styles.PassInput}/>
        </div>
    );
};

export default DecodePass;