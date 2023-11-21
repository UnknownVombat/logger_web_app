import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {chats} from "../Array";


export const chatStorage = create(
    persist(
        (set) =>
    ({chats: [
                        {'tgID': 'Test1', 'username': '@Test1', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test2', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test3', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test4', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test5', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test6', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test7', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test8', 'username': '@Test2', 'date': '01.11.2023', 'photo': null},
                        {'tgID': 'Test9', 'username': '@Test2', 'date': '01.11.2023', 'photo': null}
                    ],
            searchText: 'Поиск',
        filterChats: () => set((state) => (
            {filteredChats: state.searchText === 'Поиск' ? state.chats: state.chats.filter((chat) => (
                    chat.tgID.toLowerCase().includes(state.searchText) || chat.username.toLowerCase().includes(state.searchText)
                ))})
            )
        ,
            changeText: (text) => set((state) => ({searchText: text})),
            filteredChats: chats
        }
    ),
        {name: 'chat-params-storage',
        storage: createJSONStorage(() => sessionStorage)}
        ))
