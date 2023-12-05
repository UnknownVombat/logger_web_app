import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const chatStorage = create(
    persist(
        (set) =>
    ({chats: [],
            filteredChats: [],
            searchText: 'Поиск',
        filterChats: () => set((state) => (
            {filteredChats: state.searchText === 'Поиск' ? state.chats: state.chats.filter((chat) =>
                    chat.telegramId.toString().includes(state.searchText) || chat.username.toLowerCase().includes(state.searchText)
                    || chat.name.toLowerCase().includes(state.searchText)
                )})
            )
        ,
            changeText: (text) => set(() => ({searchText: text})),
            setChats: (chats) => set(() => ({chats: chats}))
        }
    ),
        {name: 'chat-params-storage',
        storage: createJSONStorage(() => sessionStorage)}
        ))
