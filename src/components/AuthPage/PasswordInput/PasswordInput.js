import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";
import {sendPassword} from "../../../Requests";

const PasswordInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const resetStep = authStorage((state) => state.resetStep)
    async function sendPasswd(password){
        const result = await sendPassword(password, user_id)
        if (result[0] === true) {
            resetStep('ready')
        } else if (result[0] === false) {
            resetStep('password')
            return (
                <div>
                    <p>Пароль неверен!</p>
                    <p>Введите пароль: </p>
                    <form onSubmit={() => sendPasswd(this.value)}>
                        <input type='password' disabled={dis}/>
                    </form>
                </div>
            );
        }
    }
    return (
        <div>
            <p>Введите пароль: </p>
            <form onSubmit={() => sendPasswd(this.value)}>
                <input type='password' disabled={dis}/>
            </form>
        </div>
    );
};

export default PasswordInput;