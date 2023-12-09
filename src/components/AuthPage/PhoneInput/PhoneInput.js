import React from 'react';
import {sendPhone} from "../../../Requests";
import {authStorage} from "../../../storages/AuthStorage";

const PhoneInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const phonePH = authStorage((state) => state.phonePH)
    const resetStep = authStorage((state) => state.resetStep)
    const resetPhone = authStorage((state) => state.resetPhone)
    async function validateNumber(){
        const form = document.getElementById('form')
        const elements = form.value
        console.log(elements)
        if (elements.toString().includes('+')) {
            elements.toString().replace('+', '')
        }
        if (parseInt(elements)){
            const result = await sendPhone(elements, user_id)
            if (result.length > 1) {
                resetStep('code')
            } else {
                resetStep('phone')
                resetPhone(elements)
                return (
                    <div>
                        <p>Номер телефона неверен!</p>
                        <p>Введите номер телефона: </p>
                        <form onSubmit={() => validateNumber()}>
                            <input type='text' disabled={dis} placeholder={phonePH} value='phone'/>
                        </form>
                    </div>
                );
            }
        }
    }
    return (
        <div>
            <p>Введите номер телефона: </p>
            <form onSubmit={() => validateNumber()} id='form'>
                <input type='text' disabled={dis} placeholder={phonePH} value='phone'/>
            </form>
        </div>
    );
};

export default PhoneInput;