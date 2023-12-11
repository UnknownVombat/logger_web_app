import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";

const UserInput = ({dis}) => {
    const resetUser = authStorage((state) => state.resetUser)
    const userPH = authStorage((state) => state.user)
    function validateUser() {
        const form = document.getElementById('user_input')
        const user = form.value
        if (!parseInt(user)){
            resetUser('Введите число')
        } else {
            resetUser(user)
        }
    }
    return (
        <div>
            <p>Введите ID подключаемого аккаунта:</p>
            <input type='text' disabled={dis} placeholder={userPH} id='user_input' onChange={() => validateUser()}/><br/>
        </div>
    );
};

export default UserInput;