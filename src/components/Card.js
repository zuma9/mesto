export default class Card {
    constructor(
        userInfo,
        data,
        templateSelector,
        handleCardClick,
        api,
        popupConfirm,
        putLike,
        removeLike,
    ) {
        this.api = api;
        this.popupConfirm = popupConfirm;
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
            name: this._name,
            link: this._link
        });
    }



    isLiked() {
        return this._likes.some((like) => like._id === this._userId)
    }

    setLikeCounter(res) {
        this._likeNumber.textContent = res.likes.length
    }

    _handleLike() {
        this._likeButton.classList.toggle('element__like_active')
    };

    _handleLikeClick() {
        if (!this._likeButton.classList.contains('element__like_active')) {
            this._handlePutLike(this, this._cardId)
        } else {
            this._handleDeleteLike(this, this._cardId)
        }
    }

    deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    _handleDelete() {
        this.popupConfirm.open(
            this,
            this._cardId
        );
    };

    _setEventListeners() {
        this._likeButton = this._newCard.querySelector('.element__like');
        this._deleteButton = this._newCard.querySelector('.element__delete');
        this._cardPhoto = this._newCard.querySelector('.element__photo');
    this._likeButton.addEventListener('click', () =>
        this._handleLikeClick()
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
        this._cardPhoto = this._newCard.querySelector('.element__photo');
        this._likeNumber = this._newCard.querySelector('.element__like-counter');
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._likeNumber.textContent = this._likes.length;

        this._setEventListeners();

        if (this.isLiked()) {
            this._likeButton.classList.add('element__like_active');

        }

        this._deleteButton.hidden = !this._isMy;

        return this._newCard;
    }
}