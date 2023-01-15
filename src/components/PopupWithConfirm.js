import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(selector, callBack) {
        super(selector);
        this._callBack = callBack;
        this._removeButton = this._popup.querySelector('.popup__remove-button');
    }

    open(card, cardId) {
        super.open();
        this._card = card
        this._cardId = cardId
    }
    setEventListeners() {
        super.setEventListeners();
        this._removeButton.addEventListener('click', () => {
            this._callBack(this._card, this._cardId);
        });
    }
}