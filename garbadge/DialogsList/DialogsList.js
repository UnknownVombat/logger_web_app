import React from "react";
import styles from './DialogsList.module.css'
import {chats} from "../../Array";
import DialogCard from "./DialogCard/DialogCard";
import TopPanel from "./TopPanel/TopPanel";


const DialogsList = () => {
    return(
        <div className={styles.dialogsList}>
            <TopPanel />
            {chats.map((item) => {return DialogCard(item)})}
        </div>
    )
}

export default DialogsList