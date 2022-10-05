import { popupImage, popupImageText, openPopup, popupBigImage } from "./index.js";

export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
    const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    return cardElement;
}

    _handleOpenPopup() {
        popupImage.src = this.cardPhoto.src;
        popupImage.alt = this.cardPhoto.src;
        popupImageText.textContent = this.cardTitle.textContent;
        openPopup(popupBigImage);
    }

    _handleLike() {
        this.likeButton.classList.toggle('element__like_active')
    };

    _handleDelete() {
        this.newCard.remove();
        this.newCard = null;
    };


    _setEventListeners() {
    this.likeButton.addEventListener('click', () =>
        this._handleLike()
    );
    this.deleteButton.addEventListener("click", () =>
        this._handleDelete()
    );
    this.cardPhoto.addEventListener('click', () =>
        this._handleOpenPopup()
    );
}

    generateCard() {
        this.newCard = this._getTemplate();
        this.cardPhoto = this.newCard.querySelector('.element__photo');
        this.cardTitle = this.newCard.querySelector('.element__title');
        this.deleteButton = this.newCard.querySelector('.element__delete');
        this.likeButton = this.newCard.querySelector('.element__like');
        this.cardPhoto.src = this._link;
        this.cardPhoto.alt = this._name;
        this.cardTitle.textContent = this._name;
        this._setEventListeners();
        return this.newCard;
    }
}