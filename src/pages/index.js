import '../pages/index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { validationConfig } from '../utils/constants.js';
import { initialCards } from "../utils/cards.js";
const buttonProfileAdd = document.querySelector('.profile__add-button');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonAvatarEdit = document.querySelector('.profile__avatar-edit');


const api = new Api ({
    baseUrl:"https://mesto.nomoreparties.co/v1/cohort-56",
    headers: {
        authorization: "c582d031-c34e-4ce7-bede-ab8dbf865fbd",
        "Content-Type": "application/json"
    }
});

const popupAvatar = new PopupWithForm ({
    popupSelector: '.popup-avatar',
    submit: (formData) => {
        popupAvatar.loading(true);
        api.editAvatar(formData)
            .then((res) => {
                userInfo.setUserInfo(res)
                console.log(res)
                popupAvatar.close()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupAvatar.loading(false);
            });
    }
});

const userInfo = new UserInfo('.profile__name', '.profile__profession', '.profile__avatar');
const popupWithImage = new PopupWithImage('.popup-big-image');
const popupInfoForm = new PopupWithForm('.popup-profile', ({ name, job }) => {
  userInfo.setUserInfo({ name, job });
});
const popupCardForm = new PopupWithForm('.popup_place', (values) => {
  cardSection.addItem(createCard(values));
});

const cardSection = new Section({
      items: initialCards,
      renderer: (item) => cardSection.addItem(createCard(item)),
    },
    '.elements'
);

function createCard({ name, link }) {
  const card = new Card(
      { name, link },
      '.template',
      popupWithImage.open.bind(popupWithImage))

  return card.generateCard();
}

function openInfoPopup() {
  popupInfoForm.open();
  const userData = userInfo.getUserInfo();
  const { name, job } = userData;
  popupInfoForm.setInputValues({ name, job });
  formValidatorEdit.resetValidation();
}

function openCardPopup() {
  popupCardForm.open();
  formValidatorAdd.resetValidation();
}

function openAvatarPopup() {
    popupAvatar.open();
    formValidatorAvatar.resetValidation();
}



const formValidatorEdit = new FormValidator(validationConfig, popupInfoForm.getFormElement());
const formValidatorAdd = new FormValidator(validationConfig, popupCardForm.getFormElement());
const formValidatorAvatar = new FormValidator(validationConfig,popupAvatar.getFormElement());

buttonProfileEdit.addEventListener('click', openInfoPopup);
buttonProfileAdd.addEventListener('click', openCardPopup);
buttonAvatarEdit.addEventListener('click', openAvatarPopup);


formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
formValidatorAvatar.enableValidation();

popupWithImage.setEventListeners();
popupInfoForm.setEventListeners();
popupCardForm.setEventListeners();
popupAvatar.setEventListeners();
cardSection.renderItems();
