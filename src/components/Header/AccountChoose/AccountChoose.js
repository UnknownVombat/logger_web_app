import React, {useEffect} from "react";
import styles from './AccountChoose.module.css';
import {getChats} from "../../../Requests";
import {chatStorage} from "../../../storages/ChatSearchStorage";
import {messageStorage} from "../../../storages/MessagesStorage";


const AccountChoose = () => {
    const wa = window.Telegram.WebApp;
    const user_id = wa.initDataUnsafe?.user?.id;
    const username = wa.initDataUnsafe?.user?.username;
    const accs = [username, user_id];
    const setUser = messageStorage((state) => state.setUser);
    const filterChats = chatStorage((state) => state.filterChats)
    const setChats = chatStorage((state) => state.setChats);
    useEffect(() => {
        async function parseChats(user_id){
            setUser({user_id})
            const chatsList = await getChats({user_id});
            setChats(chatsList);
            filterChats()
        }

        parseChats(user_id)
    }, [user_id, setChats, setUser, filterChats]);

    return(<div className={styles.SelectorDiv}>
        Чаты аккаунта:
        <select className={styles.SelectorSelect} >
            {/*<option key={defaultAcc} onClick={() => {accChange(defaultAcc)}}>{defaultAcc}</option>*/}
            {accs.map((acc) => {return <option key={acc}>{acc}</option>})}
        </select>
    </div>)
}

export default AccountChoose