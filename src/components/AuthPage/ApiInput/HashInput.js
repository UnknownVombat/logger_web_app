import React from 'react';
import {authStorage} from "../../../storages/AuthStorage";

const HashInput = () => {
    const resetID = authStorage((state) => state.resetID)
    const resetHash = authStorage((state) => state.resetHash)
    const resetStep = authStorage((state) => state.resetStep)
    function sendAPI (){
        const idInput = document.getElementById('id_input')
        console.log(idInput)
        const hashInput = document.getElementById('hash_input')
        console.log(hashInput)
        const apiID = idInput.value
        console.log(apiID)
        const apiHash = hashInput.value
        console.log(apiHash)
        resetID(apiID)
        resetHash(apiHash)
        resetStep('phone')
    }
    return (
        <div>
            <button onClick={() => sendAPI()}>Отправить данные</button>
        </div>
    );
};

export default HashInput;