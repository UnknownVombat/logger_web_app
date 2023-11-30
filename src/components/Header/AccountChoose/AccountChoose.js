import React, {useEffect} from "react";
import styles from './AccountChoose.module.css';
import {getChats} from "../../../Requests";
import {chatStorage} from "../../../storages/ChatSearchStorage";


const AccountChoose = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const username = wa.initDataUnsafe?.user?.username;
    const accs = [username, user_id];
    const setChats = chatStorage((state) => state.setChats);
    useEffect(() => {
        async function parseChats(user_id){

            const chatsList = await getChats({user_id});
            setChats(chatsList);

        }

        parseChats(user_id)
    }, [user_id, setChats]);

    return(<div className={styles.SelectorDiv}>
        Чаты аккаунта:
        <select className={styles.SelectorSelect} >
            {/*<option key={defaultAcc} onClick={() => {accChange(defaultAcc)}}>{defaultAcc}</option>*/}
            {accs.map((acc) => {return <option key={acc}>{acc}</option>})}
        </select>
    </div>)
}

export default AccountChoose