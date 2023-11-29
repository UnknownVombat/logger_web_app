import React from "react";
import styles from './AccountChoose.module.css';


const AccountChoose = () => {
    function accChange(acc) {
        console.log(acc)
    }

    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const username = wa.initDataUnsafe?.user?.username;
    const accs = [username, user_id];

    return(<div className={styles.SelectorDiv}>
        Чаты аккаунта:
        <select className={styles.SelectorSelect} >
            {/*<option key={defaultAcc} onClick={() => {accChange(defaultAcc)}}>{defaultAcc}</option>*/}
            {accs.map((acc) => {return <option key={acc} onClick={() => {accChange(acc)}}>{acc}</option>})}
        </select>
    </div>)
}

export default AccountChoose