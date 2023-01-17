export default class Card {
    constructor(userInfo, data, templateSelector, handleCardClick, putLike, removeLike, handlePopupOpen) {
        this.handlePopupOpen = handlePopupOpen;
        this._isMy = userInfo._id === data.owner._id;
        this._name = data.name;
        this._link = data.link;
        this._handlePutLike = putLike;
        this._handleDeleteLike = removeLike;
        this._userId = userInfo._id;
        this._likes = data.likes;
        this._cardId = data._id;
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
            name: this._name, link: this._link
        });
    }

    isLiked() {
        return this._likes.some((like) => like._id === this._userId)
    }

    setLikeCounter(card) {
        this._likeNumber.textContent = card.likes.length
    }

    handleLike() {
        this._buttonLike.classList.toggle('element__like_active')
    };

    _handleLikeClick() {
        if (!this._buttonLike.classList.contains('element__like_active')) {
            this._handlePutLike(this, this._cardId)
        } else {
            this._handleDeleteLike(this, this._cardId)
        }
    }

    deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    _setEventListeners() {
        this._buttonLike = this._newCard.querySelector('.element__like');
        this._buttonDelete = this._newCard.querySelector('.element__delete');
        this._cardPhoto = this._newCard.querySelector('.element__photo');
        this._buttonLike.addEventListener('click', () => this._handleLikeClick());
        this._buttonDelete.addEventListener("click", () => this.handlePopupOpen(this, this._cardId));
        this._cardPhoto.addEventListener('click', () => this._handleClickImage());
    }

    generateCard() {
        this._newCard = this._getTemplate();
        this._cardTitle = this._newCard.querySelector('.element__title');
        this._cardPhoto = this._newCard.querySelector('.element__photo');
        this._likeNumber = this._newCard.querySelector('.element__like-counter');
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._likeNumber.textContent = this._likes.length;

        this._setEventListeners();

        if (this.isLiked()) {
            this._buttonLike.classList.add('element__like_active');

        }

        this._buttonDelete.hidden = !this._isMy;

        return this._newCard;
    }
}
