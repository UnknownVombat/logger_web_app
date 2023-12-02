import React from 'react';
import styles from "./RefreshButton.module.css";

import ChatMessages from "../../ChatMessages";


function refresh(){
    return (<div>
        <ChatMessages />
    </div>)
}

const RefreshButton = () => {
    return (
        <div className={styles.buttonDiv} onClick={() => refresh()}>
            <box-icon name='refresh' color='var(--tg-theme-text-color)'></box-icon>
        </div>
    );
};

export default RefreshButton;