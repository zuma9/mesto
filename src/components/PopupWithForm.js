import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, submitHandler) {
        super(selector);
        this._handleSubmit = submitHandler;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__field'));
        this._buttonSave = this._formElement.querySelectorAll('.popup__button');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
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
        });
    }

    getFormElement() {
        return this._formElement;
    }

    close() {
        super.close();
        this._formElement.reset();
    }

    loading(isLoading) {
        this._buttonSave.forEach((_buttonSave) => {
            if (isLoading) {
                _buttonSave.textContent = 'Сохранение...';
            } else {
                _buttonSave.textContent = 'Сохранить';
            }
        })
    }
}
