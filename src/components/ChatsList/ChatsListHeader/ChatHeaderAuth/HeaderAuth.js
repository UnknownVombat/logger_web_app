import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderAuth.module.css'

const HeaderAuth = () => {
    return (
        <div>
            <NavLink to={'/auth'} className={styles.CardLink}>
                <box-icon type='solid' name='user-plus' color='var(--tg-theme-text-color)'></box-icon>
            </NavLink>
        </div>
    );
};

export default HeaderAuth;