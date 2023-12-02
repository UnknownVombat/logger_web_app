import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const messageStorage = create(persist(
    (set) => ({
        messages: [],
        setMessages: (mess) => set(() => ({messages: mess})),
    }),
    {name: 'chat-messages-storage',
        storage: createJSONStorage(() => sessionStorage)}
))