import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";
import {sendCode} from "../../../Requests";

const CodeInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const resetStep = authStorage((state) => state.resetStep)
    const step = authStorage((state) => state.step)
    async function validateCode(){
        const codeInput = document.getElementById('code_input')
        const code = codeInput.value
        if (parseInt(code)){
            const result = await sendCode(code, user_id)
            if (result[0] === true && result[1] === true) {
                resetStep('ready')
            } else if (result[0] === true && result[1] === false) {
                resetStep('password')
            } else {
                resetStep('code')
                alert('Неверный код!')
                return (
                    <div>
                        <p>Введите код: </p>
                        <input type='text' id='code_input' disabled={dis}/><br/>
                        <button onClick={() => validateCode()}>Проверить код</button>
                    </div>
                );
            }
        }
    }
    if (step === 'code'){
        return (
            <div>
                <p>Введите код: </p>
                <input type='text' id='code_input' disabled={dis}/><br/>
                <button onClick={() => validateCode()}>Проверить код</button>
            </div>
        );
    } else{
        return (
            <div>
                <p>Введите код: </p>
                <input type='text' id='code_input' disabled={dis}/>
            </div>
        );
    }

};

export default CodeInput;