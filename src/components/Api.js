export default class Api {
    constructor(data) {
        this._baseUrl = data.baseUrl;
        this._headers = data.headers;
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

    _request(url, options) {
        return fetch(url, options)
            .then((res) => this._checkResponse(res))
    }

//получение данных профиля
    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                authorization: this._headers.authorization,
            },
        })
    }

//получить карточки
    getInitialCards() {
        return this._request(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: {
                authorization: this._headers.authorization,
            },
        })
    }

// обновление профиля
    editProfile(newUserData) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(newUserData),
        })
    }

// обновление аватара
    editAvatar(avatarLink) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink,
            })
        })
    }

// добавление карточек
    addCard(newCardData) {
        return this._request(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(newCardData),
        })
    }

// удаление карточек
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._headers.authorization
            }
        })
    }

//добавление лайка карточки
    setCardLike(cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: this._headers.authorization
            }
        })
    }

//удаление лайка карточки
    removeCardLike(cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: this._headers.authorization,
            }
        })
    }
}

