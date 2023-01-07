export default class UserInfo {
    constructor(nameElement, infoElement, avatarElement) {
        this._nameElement = document.querySelector(nameElement);
        this._infoElement = document.querySelector(infoElement);
        this._avatarElement = document.querySelector(avatarElement);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._infoElement.textContent,
        }
    }

    setUserInfo({ name, job, _id, avatar }) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = job;
        this._id = _id;
        this._avatarElement.src = avatar;
        this._avatarElement.alt = name;
    }
    userId() {
        return this._id
    }
}
