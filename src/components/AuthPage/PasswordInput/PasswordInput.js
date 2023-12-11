import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";
import {sendPassword} from "../../../Requests";

const PasswordInput = ({dis}) => {
    const resetStep = authStorage((state) => state.resetStep)
    const step = authStorage((state) => state.step)
    const user = authStorage((state) => state.user)
    async function sendPasswd(){
        const form = document.getElementById('password_input')
        const password = form.value
        const result = await sendPassword(password, user)
        console.log(result)
        if (result === true) {
            resetStep('ready')
        } else if (result === false) {
            resetStep('password')
            alert('Неверный пароль!')
            return (
                <div>
                    <p>Введите пароль: </p>
                    <input type='password' disabled={dis} id='password_input'/><br/>
                    <button onClick={() => sendPasswd()}>Проверить пароль</button>
                </div>
            );
        }
    }
    if (step === 'password'){
        return (
            <div>
                <p>Введите пароль: </p>
                <input type='password' disabled={dis} id='password_input'/><br/>
                <button onClick={() => sendPasswd()}>Проверить пароль</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>Введите пароль: </p>
                <input type='password' disabled={dis} id='password_input'/>
            </div>
        );
    }

};

export default PasswordInput;