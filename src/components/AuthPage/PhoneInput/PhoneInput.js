import React from 'react';
import {sendPhone} from "../../../Requests";
import {authStorage} from "../../../storages/AuthStorage";

const PhoneInput = ({dis}) => {
    const phonePH = authStorage((state) => state.phonePH)
    const resetStep = authStorage((state) => state.resetStep)
    const resetPhone = authStorage((state) => state.resetPhone)
    const step = authStorage((state) => state.step)
    const user = authStorage((state) => state.user)
    async function validateNumber(){
        const form = document.getElementById('phone_input')
        const elements = form.value
        if (elements.toString().includes('+')) {
            elements.toString().replace('+', '')
        }
        if (parseInt(elements)){
            const result = await sendPhone(elements, user)
            if (result.length > 1) {
                resetStep('code')
            } else {
                resetStep('phone')
                resetPhone(elements)
                return (
                    <div>
                        <p>Номер телефона неверен!</p>
                        <p>Введите номер телефона: </p>
                        <input type='text' disabled={dis} placeholder={phonePH} id='phone_input'/><br/>
                        <button onClick={() => validateNumber()}>Получить код</button>
                    </div>
                );
            }
        }
    }
    if (!parseInt(user)) {
        alert('ID аккаунта должно быть целым числом!')
        resetStep('phone')
        return (
            <div>
                <p>Номер телефона неверен!</p>
                <p>Введите номер телефона: </p>
                <input type='text' disabled={dis} placeholder={phonePH} id='phone_input'/><br/>
                <button onClick={() => validateNumber()}>Получить код</button>
            </div>)
    }

    if(step === 'phone'){
        return (
            <div>
                <p>Введите номер телефона: </p>
                <input type='text' disabled={dis} placeholder={phonePH} id='phone_input'/><br/>
                <button onClick={() => validateNumber()}>Получить код</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>Введите номер телефона: </p>
                <input type='text' disabled={dis} placeholder={phonePH} id='phone_input'/>
            </div>
        );
    }

};

export default PhoneInput;