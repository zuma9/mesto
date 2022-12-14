export default class UserInfo {
    constructor(nameElement, infoElement) {
        this._nameElement = document.querySelector(nameElement);
        this._infoElement = document.querySelector(infoElement);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent,
        }
    }

    setUserInfo({name, info}) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
    }
}
