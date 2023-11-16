import React from "react";
import styles from './Container.module.css'
import DialogsList from "../DialogsList/DialogsList";
import DialogMessages from "../DialogMessages/DialogMessages";


const Container = () => {
    return(
        <div className={styles.main}>
            <DialogsList />
            <DialogMessages />
        </div>
    )
}

export default Container