import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export const authStorage = create(persist(
    (set) => ({
        step: 'phone',
        user: 1234567,
        phonePH: 'Введите номер телефона',
        codePH: 'Введите код',
        apiID: '',
        apiHash: '',
        resetStep: (newStep) => set(() => ({step: newStep})),
        resetPhone: (phone) => set(() => ({phonePH: phone})),
        resetUser: (user) => set(() => ({user: user})),
        resetID: (id) => set(() => ({apiID: id})),
        resetHash: (hash) => set(() => ({apiHash: hash}))
    }),
    {name: 'auth-data-storage',
        storage: createJSONStorage(() => sessionStorage)}
))