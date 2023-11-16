import React from "react";
import styles from './DialogCard.module.css'


const DialogCard = (card) => {
    const handleClick = (tgID) => {
        console.log(tgID)
    }
    return(
        <div key={card.tgID} className={styles.card} onClick={() => {handleClick(card.tgID)}}>
            <p>TelegramID: {card.tgID}</p>
            <p>Username: {card.username}</p>
            <p>Last recent message: {card.date}</p>
        </div>
    )
}

export default DialogCard