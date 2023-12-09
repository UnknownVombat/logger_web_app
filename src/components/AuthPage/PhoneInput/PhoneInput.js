import React from 'react';
import {sendPhone} from "../../../Requests";
import {authStorage} from "../../../storages/AuthStorage";

const PhoneInput = ({dis}) => {
    const user_id = window.Telegram.WebApp.initDataUnsafe?.user?.id
    const phonePH = authStorage((state) => state.phonePH)
    const resetStep = authStorage((state) => state.resetStep)
    const resetPhone = authStorage((state) => state.resetPhone)
    async function validateNumber(number){
        console.log(number)
        console.log(number.value())
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
                        <form onSubmit={() => validateNumber(this.value)}>
                            <input type='text' disabled={dis} placeholder={phonePH}/>
                        </form>
                    </div>
                );
            }
        }
    }
    return (
        <div>
            <p>Введите номер телефона: </p>
            <form onSubmit={() => validateNumber(this.value)}>
                <input type='text' disabled={dis} placeholder={phonePH}/>
            </form>
        </div>
    );
};

export default PhoneInput;