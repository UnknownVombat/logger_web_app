import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


export const messageStorage = create(persist(
    (set) => ({
        uid: 'Test1',
        name: 'Testname1',
        messages: [
            {'type': 'text', 'from': 'user', 'message': 'test1', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test2', 'photo': null},
            {'type': 'text', 'from': 'opponent', 'message': 'test3', 'photo': null},
            {'type': 'photo', 'from': 'opponent', 'message': '', 'photo': 'null'},
            {'type': 'text', 'from': 'user', 'message': 'test5', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test6', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
            {'type': 'text', 'from': 'user', 'message': 'test7', 'photo': null},
        ],
        revokeMessages: (id, data) => set(() => ({uid: id, name: data.name, messages: data.messages}))
    }),
    {name: 'chat-messages-storage',
        storage: createJSONStorage(() => sessionStorage)}
))