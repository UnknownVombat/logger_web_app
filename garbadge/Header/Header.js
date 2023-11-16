import React from "react";
import styles from './Header.module.css'
import BurgerMenu from "../DialogsList/TopPanel/BurgerMenu/BurgerMenu";
import CentralName from "../CentralName/CentralName";
import ProfileMenu from "../ProfileMenu/ProfileMenu";


const Header = () => {
    return(<header className={styles.header}>
        <BurgerMenu />
        <CentralName />
        <ProfileMenu />
    </header>)
}

export default Header