import React from 'react';

const IdInput = () => {
    return (
        <div>
            <p>Введите API ID приложения</p>
            <input type='text' id='id_input'/>
            <p>Введите API hash приложения</p>
            <input type='text' id='hash_input'/>
        </div>
    );
};

export default IdInput;