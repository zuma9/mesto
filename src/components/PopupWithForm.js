import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, submit) {
        super(selector);
        this._handleSubmit = submit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__field'));
    }

    _getInputValues() {
        const data = {};

        this._inputList.forEach((input) => {
            data[input.name] = input.value;
        });

        return data;
    }

    setInputValues(values) {
        this._inputList.forEach((input) => {
            if (values[input.name]) {
                input.value = values[input.name]
            }
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });
    }

    getFormElement() {
        return this._formElement;
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}
