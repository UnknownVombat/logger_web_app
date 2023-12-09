import React from "react";
import styles from './AccountChoose.module.css';
import {NavLink} from "react-router-dom";


const AccountChoose = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const username = wa.initDataUnsafe?.user?.username;
    const accs = [username, user_id];
    return(<div className={styles.SelectorDiv}>
        Чаты аккаунта:
        <select className={styles.SelectorSelect} >
            {/*<option key={defaultAcc} onClick={() => {accChange(defaultAcc)}}>{defaultAcc}</option>*/}
            {accs.map((acc) => {return <option key={acc}>{acc}</option>})}
            <option key='NewAcc'><NavLink to={'/auth'}>Новый аккаунт</NavLink></option>
        </select>
    </div>)
}

export default AccountChoose