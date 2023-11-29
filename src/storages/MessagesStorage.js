import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const messageStorage = create(persist(
    (set) => ({
        user_id: '0',
        chat_id: '0',
        name: '0',
        messages: [],
        setMessages: (mess) => set((state) => ({messages: mess})),
        setName: (name) => set((state) => ({name: name})),
        setUser: (user_id) => set((state) => ({user_id: user_id})),
        revokeMessages: (id, name) => set((state) => ({chat_id: id, name: name}))
    }),
    {name: 'chat-messages-storage',
        storage: createJSONStorage(() => sessionStorage)}
))