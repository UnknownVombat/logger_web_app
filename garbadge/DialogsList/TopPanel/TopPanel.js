import React from "react";
import styles from './TopPanel.module.css'
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Search from "./Search/Search";


const TopPanel = () => {
    return(
        <div className={styles.mesHeader}>
            <BurgerMenu />
            <Search />
        </div>
    )
}

export default TopPanel