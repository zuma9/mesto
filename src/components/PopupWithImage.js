import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._popup.querySelector('.popup__image');
        this._imageText = this._popup.querySelector('.popup__image-text');
    }

    open({name, link}) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._imageText.textContent = name;
    }

    close() {
        super.close();
        this._image.src = '';
        this._image.alt = '';
        this._imageText.textContent = '';
    }
}
