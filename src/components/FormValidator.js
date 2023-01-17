export default class FormValidator {
    constructor(config, element) {
        this._formElement = element;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._buttonDisabled = config.buttonDisabled;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    };

_showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
};

_hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
};

_checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
    } else {
        this._hideInputError(inputElement);
    }
};

_hasInvalidInput () {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

disableButtonSubmit () {
    this._buttonElement.classList.add(this._buttonDisabled);
    this._buttonElement.setAttribute('disabled','');
    }

_toggleButtonState () {
    if (this._hasInvalidInput()) {
        this.disableButtonSubmit();
    } else {
        this._buttonElement.removeAttribute("disabled");
        this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
};

resetValidation () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {

        this._hideInputError(inputElement);
    });
};

enableValidation () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
    });
};
};