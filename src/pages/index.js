import "../pages/index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {validationConfig} from "../utils/constants.js";
import PopupWithConfirm from "../components/PopupWithConfirm";

const buttonAvatarEdit = document.querySelector(".profile__avatar-edit");
const buttonProfileAdd = document.querySelector(".profile__add-button");
const buttonProfileEdit = document.querySelector(".profile__edit-button");

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
    headers: {
        authorization: "c582d031-c34e-4ce7-bede-ab8dbf865fbd",
        "Content-Type": "application/json",
    },
});

const submitHandlerProfile = ({name, about}) => {
    popupInfoForm.loading(true);
    api
        .editProfile({name, about})
        .then(({name, about}) => {
            userInfo.setUserInfoPatch({name, about});
            popupInfoForm.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            popupInfoForm.loading(false);
        });
};

const submitHandlerPlace = ({name, link}) => {
    popupCardForm.loading(true);
    api
        .addCard({name, link})
        .then((card) => {
            cardSection.addItem(createCard(card));
            popupCardForm.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            popupCardForm.loading(false);
        });
};

const submitHandlerAvatar = (values) => {
    popupAvatar.loading(true);
    api
        .editAvatar({avatar: values.link})
        .then(() => {
            userInfo.setAvatar(values.link);
            popupAvatar.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            popupAvatar.loading(false);
        });
};

const submitHandlerConfirm = (card, cardId) => {
    api
        .deleteCard(cardId)
        .then(() => {
            card.deleteCard();
            popupConfirm.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
};

const popupInfoForm = new PopupWithForm(".popup-profile", submitHandlerProfile);
const popupCardForm = new PopupWithForm(".popup_place", submitHandlerPlace);
const popupAvatar = new PopupWithForm(".popup-avatar", submitHandlerAvatar);
const popupConfirm = new PopupWithConfirm(
    ".popup-confirm"
);
const popupWithImage = new PopupWithImage(".popup-big-image");

const userInfo = new UserInfo(
    ".profile__name",
    ".profile__profession",
    ".profile__avatar"
);

const cardSection = new Section(
    {
        renderer: (item) => cardSection.addItem(createCard(item)),
    },
    ".elements"
);

function handlePopupConfirmOpen(card, cardId) {
    popupConfirm.setCallBack(() => submitHandlerConfirm(card, cardId))
    popupConfirm.open()
}

function createCard(data) {
    const card = new Card(
        userInfo.getUserInfo(),
        data,
        ".template",
        popupWithImage.open.bind(popupWithImage),
        addLike,
        removeLike,
        handlePopupConfirmOpen
    );

    return card.generateCard();
}

function openAvatarPopup() {
    popupAvatar.open();
    formValidatorAvatar.resetValidation();
}

function openInfoPopup() {
    popupInfoForm.open();
    const userData = userInfo.getUserInfo();
    const {name, about} = userData;

    popupInfoForm.setInputValues({name, about});
    formValidatorEdit.resetValidation();
}

function openCardPopup() {
    popupCardForm.open();
    formValidatorAdd.resetValidation();
}

function addLike(card, id) {
    api
        .addCardLike(id)
        .then((res) => {
            card.setLikeCounter(res);
            card.handleLike();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
}

function removeLike(card, id) {
    api
        .deleteCardLike(id)
        .then((res) => {
            card.setLikeCounter(res);
            card.handleLike();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
}

const formValidatorEdit = new FormValidator(
    validationConfig,
    popupInfoForm.getFormElement()
);
const formValidatorAdd = new FormValidator(
    validationConfig,
    popupCardForm.getFormElement()
);
const formValidatorAvatar = new FormValidator(
    validationConfig,
    popupAvatar.getFormElement()
);

// Запрос данных для отрисовки страницы
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData);
        cardSection.renderItems(cards.reverse());
    })
    .catch((err) => console.log(err));

buttonProfileEdit.addEventListener("click", openInfoPopup);
buttonProfileAdd.addEventListener("click", openCardPopup);
buttonAvatarEdit.addEventListener("click", openAvatarPopup);

formValidatorAvatar.enableValidation();
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();

popupAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupInfoForm.setEventListeners();
popupCardForm.setEventListeners();
popupConfirm.setEventListeners();