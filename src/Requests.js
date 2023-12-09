export async function getChats({user_id}) {
    const url = 'https://logger.sunrise-dev.online/api/dev/chats?botId=' + user_id;
    try {
        const response = await fetch(url, {method: 'GET'});
        if (!response.ok){
            throw new Error('Ошибка получения данных: чаты аккаунта' + user_id);
        }
        const result_array = await response.json();
        // const parsedResult = result_array.map((result) => ({chat_id: result.telegramId, name: result.name, username: result.username,
        //     chat_key: result.id, last_time: result.lastMessage, photo: result.avatar}));
        return result_array
    } catch (error) {
        console.error('Ошибка получения данных: чаты аккаунта' + user_id, error)
    }
}

export async function getMessages(user_id, chat_id) {
    const url = `https://logger.sunrise-dev.online/api/dev/messages?botId=${user_id}&chatId=${chat_id}`;
    try {
        const response = await fetch(url, {method: 'GET'});
        console.log(response);
        if (!response.ok){
            throw new Error('Ошибка получения данных: сообщения аккаунта' + user_id + 'c пользователем' + chat_id);
        }
        const result_array = await response.json();
        // const parsedResult = result_array.map((result) => ({text: result.text, img: result.img, mes_time: result.time,
        //     from_id: (result.senderId === user_id ? 'user': 'opponent'), mes_id: result.id}));
        return result_array;
    } catch (error) {
        console.error('Ошибка получения данных: чаты аккаунта' + user_id + 'c пользователем' + chat_id, error)
    }
}

export async function sendPhone(phone, user_id) {
    const baseUrl = 'http://127.0.0.1:8000'
    const point = '/send_phone'
    const url = baseUrl + point
    const data = {'phone': phone, 'user_id': user_id}
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8'}
    try {
        const response = await fetch(url, {headers: headers, method: 'POST', body: JSON.stringify(data)})
        if (!response.ok){
            throw new Error('Ошибка отправки номера телефона: ' + response.statusCode)
        }
        const result_array = await response.json()
        return result_array
    } catch (error) {
        console.error('Ошибка отправки номера телефона: ', error)
    }
}

export async function sendCode(code, user_id) {
    const baseUrl = 'http://127.0.0.1:8000'
    const point = '/send_code'
    const url = baseUrl + point
    const data = {'code': code, 'user_id': user_id}
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8'}
    try {
        const response = await fetch(url, {headers: headers, method: 'POST', body: JSON.stringify(data)})
        if (!response.ok){
            throw new Error('Ошибка отправки кода: ' + response.statusCode)
        }
        const result_array = await response.json()
        return result_array
    } catch (error) {
        console.error('Ошибка отправки кода: ', error)
    }
}

export async function sendPassword(password, user_id) {
    const baseUrl = 'http://127.0.0.1:8000'
    const point = '/send_password'
    const url = baseUrl + point
    const data = {'password': password, 'user_id': user_id}
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8'}
    try {
        const response = await fetch(url, {headers: headers, method: 'POST', body: JSON.stringify(data)})
        if (!response.ok){
            throw new Error('Ошибка отправки кода: ' + response.statusCode)
        }
        const result_array = await response.json()
        return result_array
    } catch (error) {
        console.error('Ошибка отправки кода: ', error)
    }
}
