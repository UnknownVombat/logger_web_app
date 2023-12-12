import React, {useEffect} from 'react';
import PhoneInput from "./PhoneInput/PhoneInput";
import {authStorage} from "../../storages/AuthStorage";
import CodeInput from "./CodeInput/CodeInput";
import PasswordInput from "./PasswordInput/PasswordInput";
import {NavLink} from "react-router-dom";
import styles from './AuthForm.module.css'
import UserInput from "./UserInput/UserInput";
import IdInput from "./ApiInput/IDInput";
import HashInput from "./ApiInput/HashInput";

const AuthForm = () => {
    const step = authStorage((state) => state.step)
    useEffect(() => {
        console.log(step)
    }, [step]);
    if(step === 'api'){
        return (
            <div className={styles.authDiv}>
                <IdInput />
                <HashInput />
            </div>
        )
    } else if(step === 'phone'){
        return (
            <div className={styles.authDiv}>
                <UserInput dis={false} />
                <PhoneInput dis={false} />
            </div>
        )
    } else if(step === 'code'){
        return (
            <div className={styles.authDiv}>
                <UserInput dis={true} />
                <PhoneInput dis={true} />
                <CodeInput dis={false} />
            </div>
        )
    } else if(step === 'password'){
        return (
            <div className={styles.authDiv}>
                <UserInput dis={true} />
                <PhoneInput dis={true} />
                <CodeInput dis={true} />
                <PasswordInput />
            </div>
        )
    } else if(step === 'ready') {
        return (
            <div className={styles.authDiv}>
                <p>Авторизация успешна.</p>
                <NavLink to={'/'}>
                    Перейти к чатам
                </NavLink>
            </div>
        )
    }
};

export default AuthForm;