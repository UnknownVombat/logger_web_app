import React from "react";
import styles from './AccountChoose.module.css'
import {accs} from "../../../Array";


const AccountChoose = () => {
    function accChange(acc) {
        console.log(acc)
    }

    return(<div className={styles.SelectorDiv}>
        Чаты аккаунта:
        <select className={styles.SelectorSelect} >
            {/*<option key={defaultAcc} onClick={() => {accChange(defaultAcc)}}>{defaultAcc}</option>*/}
            {accs.map((acc) => {return <option key={acc} onClick={() => {accChange(acc)}}>{acc}</option>})}
        </select>
    </div>)
}

export default AccountChoose