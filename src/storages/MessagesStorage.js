import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const messageStorage = create(persist(
    (set) => ({
        user_id: '0',
        chat_id: '0',
        name: '0',
        messages: [],
        setMessages: (mess) => set(() => ({messages: mess})),
        setUser: (user_id) => set(() => ({user_id: user_id})),
        revokeMessages: (id, name) => set(() => ({chat_id: id, name: name}))
    }),
    {name: 'chat-messages-storage',
        storage: createJSONStorage(() => sessionStorage)}
))