import React, {useEffect} from 'react';
import PhoneInput from "./PhoneInput/PhoneInput";
import {authStorage} from "../../storages/AuthStorage";
import CodeInput from "./CodeInput/CodeInput";
import PasswordInput from "./PasswordInput/PasswordInput";
import {NavLink} from "react-router-dom";
import styles from './AuthForm.module.css'

const AuthForm = () => {
    const step = authStorage((state) => state.step)
    useEffect(() => {
        console.log(step)
    }, [step]);
    if(step === 'phone'){
        return (
            <div className={styles.authDiv}>
                <PhoneInput dis={false} />
            </div>
        )
    } else if(step === 'code'){
        return (
            <div className={styles.authDiv}>
                <PhoneInput dis={true} />
                <CodeInput dis={false} />
            </div>
        )
    } else if(step === 'password'){
        return (
            <div className={styles.authDiv}>
                <PhoneInput dis={true} />
                <CodeInput dis={true} />
                <PasswordInput />
            </div>
        )
    } else if(step === 'ready') {
        return (
            <div className={styles.authDiv}>
                <NavLink to={'/'} className={styles.link}>
                    Авторизация успешна. Перейти к чатам
                </NavLink>
            </div>
        )
    }
};

export default AuthForm;