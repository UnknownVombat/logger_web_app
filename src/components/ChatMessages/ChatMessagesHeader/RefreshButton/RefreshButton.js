import React from 'react';
import styles from "./RefreshButton.module.css";
import {NavLink} from "react-router-dom";


const RefreshButton = ({props}) => {
    return (
        <NavLink to={`/messages/${props[0]}/${props[1]}`} className={styles.CardLink}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default RefreshButton;