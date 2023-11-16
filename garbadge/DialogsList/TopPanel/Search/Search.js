import React from "react";
import styles from './Search.module.css'


const Search = () => {
    return(
        <div className={styles.searchDiv}>
            <p className={styles.paragraph}>Поиск</p>
            <input type='text' className={styles.input} placeholder='Введите TgID или Username'/>
        </div>
    )
}

export default Search