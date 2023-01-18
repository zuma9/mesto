export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._closePopupEsc = this._closePopupEsc.bind(this);
    }

    _closePopupEsc(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._closePopupEsc);
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (
                evt.target === evt.currentTarget ||
                evt.target.classList.contains('popup__close')
            ) {
                this.close();
            }
        });
    }
}
