import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const chatStorage = create(
    persist(
        (set) =>
    ({chats: [],
            searchText: 'Поиск',
        filterChats: () => set((state) => (
            {filteredChats: state.searchText === 'Поиск' ? state.chats: state.chats.filter((chat) => (
                    chat.tgID.toLowerCase().includes(state.searchText) || chat.username.toLowerCase().includes(state.searchText)
                ))})
            )
        ,
            changeText: (text) => set(() => ({searchText: text})),
            filteredChats: () => set((state) => state.chats),
            setChats: (chats) => set(() => ({chats: chats}))
        }
    ),
        {name: 'chat-params-storage',
        storage: createJSONStorage(() => sessionStorage)}
        ))