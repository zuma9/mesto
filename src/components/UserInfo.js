export default class UserInfo {
    constructor(nameElement, infoElement) {
        this._nameElement = document.querySelector(nameElement);
        this._infoElement = document.querySelector(infoElement);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._infoElement.textContent,
        }
    }

    setUserInfo({ name, job }) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = job;
    }
}
