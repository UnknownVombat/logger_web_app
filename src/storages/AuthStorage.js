import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export const authStorage = create(persist(
    (set) => ({
        step: 'phone',
        user: 'Введите ID',
        phonePH: 'Введите номер телефона',
        codePH: 'Введите код',
        resetStep: (newStep) => set(() => ({step: newStep})),
        resetPhone: (phone) => set(() => ({phonePH: phone})),
        resetCode: (code) => set(() => ({codePH: code})),
        resetUser: (user) => set(() => ({user: user}))
    }),
    {name: 'auth-data-storage',
        storage: createJSONStorage(() => sessionStorage)}
))