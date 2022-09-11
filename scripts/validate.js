const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector('.popup__field-error');
    inputElement.classList.add('popup__field_type-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__field-error_active');

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector('.popup__field-error');
    inputElement.classList.remove('popup__field_type-error');
    errorElement.classList.remove('popup__field-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_inactive');
    } else {
        buttonElement.classList.remove('popup__button_inactive');
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};

enableValidation();

