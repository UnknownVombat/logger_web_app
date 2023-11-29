import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const messageStorage = create(persist(
    (set) => ({
        user_id: '0',
        chat_id: '0',
        name: '0',
        messages: null,
        setMessages: (mess) => set(() => ({messages: mess})),
        setName: (name) => set(() => ({name: name})),
        setUser: (user_id) => set(() => ({user_id: user_id})),
        revokeMessages: (id, name, data) => set(() => ({chat_id: id, name: name, messages: data.messages}))
    }),
    {name: 'chat-messages-storage',
        storage: createJSONStorage(() => sessionStorage)}
))