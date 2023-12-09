import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";
import {sendCode} from "../../../Requests";

const CodeInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const resetStep = authStorage((state) => state.resetStep)
    async function validateCode(code){
        if (code.isInteger(code)){
            const result = await sendCode(code, user_id)
            if (result[0] === true && result[1] === true) {
                resetStep('ready')
            } else if (result[0] === true && result[1] === false) {
                resetStep('password')
            } else {
                resetStep('code')
                return (
                    <div>
                        <p>Код неверен!</p>
                        <p>Введите код: </p>
                        <input type='text' disabled={dis} onSubmit={() => validateCode(this.value)}/>
                    </div>
                );
            }
        }
    }
    return (
        <div>
            <p>Введите код: </p>
            <input type='text' disabled={dis} onSubmit={() => validateCode(this.value)}/>
        </div>
    );
};

export default CodeInput;