import React from "react";
import styles from './Search.module.css'


const Search = () => {
    return(<div className={styles.SearchDiv}>
        <input type='text' placeholder='Поиск' className={styles.SearchInput}/>
    </div>)
}

export default Search