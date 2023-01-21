import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._buttonRemove = this._popup.querySelector('.popup__remove-button');
    }

    open() {
        super.open();
    }

    setCallBack(callBack) {
        this._callBack = callBack;
    };


    setEventListeners() {
        super.setEventListeners();
        this._buttonRemove.addEventListener('click', () => {
            this._callBack();
        });
    }
}