// import { popupImage, popupImageText, openPopup, popupBigImage } from "../pages";

export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
    const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    return cardElement;
    }

    _handleClickImage() {
        this._handleCardClick({
            name: this._name,
            link: this._link
        });
    }

    // _handleOpenPopup() {
    //     popupImage.src = this.cardPhoto.src;
    //     popupImage.alt = this.cardPhoto.src;
    //     popupImageText.textContent = this.cardTitle.textContent;
    //     openPopup(popupBigImage);
    // }

    _handleLike() {
        this._likeButton.classList.toggle('element__like_active')
    };

    _handleDelete() {
        this._newCard.remove();
        this._newCard = null;
    };

    _setEventListeners() {
        this._likeButton = this._newCard.querySelector('.element__like');
        this._deleteButton = this._newCard.querySelector('.element__delete');
        this._cardPhoto = this._newCard.querySelector('.element__photo');
    this._likeButton.addEventListener('click', () =>
        this._handleLike()
    );
    this._deleteButton.addEventListener("click", () =>
        this._handleDelete()
    );
    this._cardPhoto.addEventListener('click', () =>
        this._handleClickImage()
    );
}

    generateCard() {
        this._newCard = this._getTemplate();
        this._cardTitle = this._newCard.querySelector('.element__title');
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;
        this._setEventListeners();
        return this._newCard;
    }
}