export default class UserInfo {
    constructor(nameElement, infoElement, avatarElement) {
        this._nameElement = document.querySelector(nameElement);
        this._infoElement = document.querySelector(infoElement);
        this._avatarElement = document.querySelector(avatarElement);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._infoElement.textContent,
            _id: this._id,
        }
    }

    setUserInfo({ name, about, _id, avatar }) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = about;
        this._id = _id;
        this._avatarElement.src = avatar;
        this._avatarElement.alt = name;
    }

    setUserInfoPatch({ name, about}) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = about;
    }

    // userId() {
    //     return this._id
    // }

    setAvatar(avatar) {
        this._avatarElement.src = avatar;
    }
}
