import React from 'react';
import {sendPhone} from "../../../Requests";
import {authStorage} from "../../../storages/AuthStorage";

const PhoneInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const phonePH = authStorage((state) => state.phonePH)
    const resetStep = authStorage((state) => state.resetStep)
    const resetPhone = authStorage((state) => state.resetPhone)
    async function validateNumber(number){
        if (number.toString().includes('+')) {
            number.toString().replace('+', '')
        }
        if (number.isInteger(number)){
            const result = await sendPhone(number, user_id)
            if (result.length > 1) {
                resetStep('code')
            } else {
                resetStep('phone')
                resetPhone(number)
                return (
                    <div>
                        <p>Номер телефона неверен!</p>
                        <p>Введите номер телефона: </p>
                        <input type='text' disabled={dis} placeholder={phonePH} onInput={() => validateNumber(this.value)}/>
                    </div>
                );
            }
        }
    }
    return (
        <div>
            <p>Введите номер телефона: </p>
            <input type='text' disabled={dis} placeholder={phonePH} onInput={() => validateNumber(this.value)}/>
        </div>
    );
};

export default PhoneInput;