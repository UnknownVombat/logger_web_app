import React from "react";
import AccountChoose from './AccountChoose/AccountChoose'
import Search from "./Search/Search";
import DecodePass from "./DecodePass/DecodePass";
import styles from './Header.module.css'
import {Routes, Route} from "react-router-dom";


const Header = ({status = 1}) => {
    return(status > 0 ?
        <header className={styles.HeaderDiv}>
            <AccountChoose />
            <Search />
            <DecodePass />
        </header>:
        <header>
            <AccountChoose />
            <Search />
        </header>)
}

export default Header