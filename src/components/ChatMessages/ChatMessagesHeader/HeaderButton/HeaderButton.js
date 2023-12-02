import React from 'react';
import 'boxicons'
import styles from './HeaderButton.module.css'
import {NavLink} from "react-router-dom";

const HeaderButton = () => {
    return (
        <NavLink to='/' className={styles.buttonDiv}>
            <box-icon name='left-arrow-alt' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default HeaderButton;