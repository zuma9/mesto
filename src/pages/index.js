import '../pages/index.css';

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

const userInfo = new UserInfo('.profile__name', '.profile__profession');

const popupWithImage = new PopupWithImage('.popup-big-image');

const popupInfoForm = new PopupWithForm('.popup-profile', ({name, info}) => {
  userInfo.setUserInfo({name, info});
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
  const {name, info} = userData;
  popupInfoForm.setInputValues( {name, info} );

  formValidatorEdit.resetValidation();
}

function openCardPopup() {
  popupCardForm.open();
  formValidatorAdd.resetValidation();
}

const formValidatorEdit = new FormValidator(validationConfig, popupInfoForm.getFormElement());
const formValidatorAdd = new FormValidator(validationConfig, popupCardForm.getFormElement());

buttonProfileEdit.addEventListener('click', openInfoPopup);
buttonProfileAdd.addEventListener('click', openCardPopup);

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();

popupWithImage.setEventListeners();
popupInfoForm.setEventListeners();
popupCardForm.setEventListeners();

cardSection.renderItems();

// const formValidatorAdd = new FormValidator(validationConfig, popupPlace);
// const formValidatorEdit = new FormValidator(validationConfig, popupProfile);
// formValidatorAdd.enableValidation();
// formValidatorEdit.enableValidation();


// export { popupImage, popupImageText, openPopup, popupBigImage };
//const buttonProfileEdit = document.querySelector('.profile__edit-button');

// const popupProfile = document.querySelector('.popup-profile');
// const popupPlace = document.querySelector('.popup_place');
// const popupBigImage = document.querySelector('.popup-big-image');

// // const buttonProfileAdd = document.querySelector('.profile__add-button');
// const buttonsClose = document.querySelectorAll('.popup__close');
// // const popupImage = document.querySelector('.popup__image');
// // const popupImageText = document.querySelector('.popup__image-text');
// const formProfile = document.querySelector('.popup__form_profile');
// const nameInput = document.querySelector('.popup__field_type_name');//попап профиль имя
// const jobInput = document.querySelector('.popup__field_type_job');//попап профиль профессия
// const formPlace = document.querySelector('.popup__form_place');
// const imageInputPlace = document.querySelector('.popup__field_type_address');//попап место ссылка
// const titleInputPlace = document.querySelector('.popup__field_type_title');//попап место название
// const buttonPlaceSubmit = document.querySelector('.popup__button_place_submit');
// const textName = document.querySelector('.profile__name');//профиль на стр имя
// const jobName = document.querySelector('.profile__profession');//профиль на стр профессия
// //const template = document.querySelector('.template');
// const elements = document.querySelector('.elements');



// function handleOpenPopup(name, link) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupImageText.textContent = name;
//   openPopup(popupBigImage);
// }

// function handleClosePopup() {
//   popupImage.src = '';
//   closePopup(popupBigImage);
// }

// //попап универсальная откр
// function openPopup(element) {
//   element.classList.add('popup_opened');
//   element.addEventListener('mousedown', closePopupOverlay);
//   document.addEventListener('keydown', closePopupEsc);
// }

//попап универсальная закр
// function closePopup(element) {
//   element.classList.remove('popup_opened');
//   element.removeEventListener('click', closePopupOverlay);
//   document.removeEventListener('keydown', closePopupEsc);
// }

// //универсальный обработчик крестиков
// buttonsClose.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });
//
// //занесение инф с попапа профиля на стр
// function editProfileUser(evt) {
//   evt.preventDefault();
//   textName.textContent = nameInput.value;
//   jobName.textContent = jobInput.value;
//   closePopup(popupProfile);
// }
//
// //попап профиль с заполн полями
// const addPopup = function () {
//   nameInput.value = textName.textContent;
//   jobInput.value = jobName.textContent;
//   openPopup(popupProfile);
//   formValidatorEdit.resetValidation();
// }
//
// //попап место
// const openPopupPlace = function () {
//   formPlace.reset();
//   openPopup(popupPlace);
//   formValidatorAdd.resetValidation();
//   //buttonDisable(buttonPlaceSubmit);
// }
//
// const insertCard = function (name,link) {
//   const newCard = new Card({name,link}, '.template', handleOpenPopup, handleClosePopup);
//   return newCard.generateCard();
// }
//
// const placeCard = function (card) {
//   elements.append(card);
// }
//
// //добавление новой карточки на стр
// const addCard = function (evt) {
//   evt.preventDefault();
//   const card = insertCard(titleInputPlace.value, imageInputPlace.value);
//   elements.prepend(card);
//   closePopup(popupPlace);
// }
//
// //создание карточек из массива
// initialCards.forEach((el) => {
//   const card = insertCard(el.name,el.link);
//   placeCard(card);
// });
//
// //закрытие попапа на оверлей
// function closePopupOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     const popup = evt.target;
//     closePopup(popup);
//   }
// }
//
// // //закрытие попап на escape
// // function closePopupEsc(evt) {
// //   if (evt.key === 'Escape') {
// //     const popup = document.querySelector('.popup_opened');
// //     closePopup(popup);
// //   }
// // }
//
// formProfile.addEventListener('submit', editProfileUser);
// formPlace.addEventListener('submit', addCard);
