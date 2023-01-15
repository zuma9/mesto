export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
            );
        }
    }

    _request(url, options, body) {
        return fetch(`${this._baseUrl}${url}`, {
            method: options,
            headers: this._headers,
            body: body
        }).then(this._checkResponse)
    }

//получение данных профиля
    getUserInfo() {
        return this._request('/users/me', 'GET')
    }

//получение карточки
    getInitialCards() {
        return this._request('/cards','GET')
    }

// обновление профиля
    editProfile(userInfo) {
        return this._request('/users/me','PATCH', JSON.stringify({
            name: `${userInfo.name}`,
            about: `${userInfo.about}`
        }))
    }


// обновление аватара
    editAvatar(data) {
        return this._request('/users/me/avatar','PATCH', JSON.stringify({
            avatar: data.avatar,
        }))
    }

// добавление карточки
    addCard(data) {
        return this._request('/cards','POST', JSON.stringify(data))
    }

// удаление карточки
    deleteCard(cardId) {
        return this._request('/cards/' + cardId,'DELETE')
    }

//добавление лайка карточки
    addCardLike(cardId){
        return this._request('/cards/' + cardId + '/likes','PUT')
    }

//удаление лайка карточки
    deleteCardLike(cardId){
        return this._request('/cards/' + cardId + '/likes','DELETE')
    }
}

