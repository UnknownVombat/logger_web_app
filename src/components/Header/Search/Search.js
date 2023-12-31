import React, {useEffect} from "react";
import styles from './Search.module.css'
import {chatStorage} from "../../../storages/ChatSearchStorage";


const Search = () => {
    const placeText = chatStorage((state) => state.searchText)
    const changeText = chatStorage((state) => state.changeText)
    const filterChats = chatStorage((state) => state.filterChats)
    useEffect(() => {
        filterChats()
    }, [placeText, filterChats]);
    return(
        <div className={styles.SearchDiv}>
            <input type='text' placeholder={placeText} className={styles.SearchInput} onInput={(event) => changeText(event.target.value.toLowerCase())}/>
        </div>
    )


}

export default Search