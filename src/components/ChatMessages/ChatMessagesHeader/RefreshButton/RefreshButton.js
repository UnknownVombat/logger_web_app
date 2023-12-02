import React from 'react';
import styles from "./RefreshButton.module.css";
import {NavLink} from "react-router-dom";


const RefreshButton = ({chat_id}) => {
    window.location.reload()
    return (
        <NavLink to={`/messages/${chat_id[0]}/${chat_id[1]}`} className={styles.CardLink}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </NavLink>
    );
};

export default RefreshButton;