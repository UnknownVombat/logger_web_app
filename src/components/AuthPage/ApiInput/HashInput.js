import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";

const HashInput = () => {
    const resetID = authStorage((state) => state.resetID)
    const resetHash = authStorage((state) => state.resetHash)
    const idInput = document.getElementById('id_input')
    const hashInput = document.getElementById('hash_input')
    const apiID = idInput.value
    const apiHash = hashInput.value
    const resetStep = authStorage((state) => state.step)
    function sendAPI (){
        resetID(apiID)
        resetHash(apiHash)
        resetStep('phone')
    }
    return (
        <div>
            <p>Введите API hash приложения</p>
            <input type='text' id='hash_input'/>
            <button onClick={() => sendAPI()}>Отправить данные</button>
        </div>
    );
};

export default HashInput;