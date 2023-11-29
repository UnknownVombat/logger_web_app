export async function getChats({user_id}) {
    const url = 'https://logger.sunrise-dev.online/api/dev/chats?botId=' + user_id.toString();
    try {
        const response = await fetch(url, {method: 'GET'});
        if (!response.ok){
            throw new Error('Ошибка получения данных: чаты аккаунта' + user_id);
        }
        const result_array = await response.json();
        const parsedResult = result_array.map((result) => ({chat_id: result.telegramId, name: result.name, username: result.username,
            chat_key: result.id, last_time: result.lastMessage, photo: result.avatar}));
        return parsedResult
    } catch (error) {
        console.error('Ошибка получения данных: чаты аккаунта' + user_id, error)
    }
}

export async function getMessages(user_id, chat_id) {
    const url = 'https://logger.sunrise-dev.online/api/dev/messages?botId=' + user_id.toString() + '&chatId=' + chat_id.toString();
    try {
        const response = await fetch(url, {method: 'GET'});
        if (!response.ok){
            throw new Error('Ошибка получения данных: сообщения аккаунта' + user_id + 'c пользователем' + chat_id);
        }
        const result_array = await response.json();
        const parsedResult = result_array.map((result) => ({text: result.text, img: result.img, mes_time: result.time,
            from_id: (result.senderId === user_id ? 'user': 'opponent'), mes_id: result.id}));
        return parsedResult;
    } catch (error) {
        console.error('Ошибка получения данных: чаты аккаунта' + user_id + 'c пользователем' + chat_id, error)
    }
}