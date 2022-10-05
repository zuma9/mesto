import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards } from "./dataConfig.js";
export { popupImage, popupImageText, openPopup, popupBigImage };

const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup_place');
const popupBigImage = document.querySelector('.popup-big-image');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonProfileAdd = document.querySelector('.profile__add-button');
const buttonsClose = document.querySelectorAll('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__image-text');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__field_type_name');//попап профиль имя
const jobInput = document.querySelector('.popup__field_type_job');//попап профиль профессия
const formPlace = document.querySelector('.popup__form_place');
const imageInputPlace = document.querySelector('.popup__field_type_address');//попап место ссылка
const titleInputPlace = document.querySelector('.popup__field_type_title');//попап место название
const buttonPlaceSubmit = document.querySelector('.popup__button_place_submit');
const textName = document.querySelector('.profile__name');//профиль на стр имя
const jobName = document.querySelector('.profile__profession');//профиль на стр профессия
//const template = document.querySelector('.template');
const elements = document.querySelector('.elements');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  buttonDisabled: 'popup__button_inactive',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__field_type-error',
  errorClass: 'popup__field-error_active',
  formFieldset: '.popup__form-set'
};

const formValidatorAdd = new FormValidator(validationConfig, popupPlace);
const formValidatorEdit = new FormValidator(validationConfig, popupProfile);
formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();

function handleOpenPopup(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageText.textContent = name;
  openPopup(popupBigImage);
}

function handleClosePopup() {
  popupImage.src = '';
  closePopup(popupBigImage);
}

//попап универсальная откр
function openPopup(element) {
  element.classList.add('popup_opened');
  element.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
}

//попап универсальная закр
function closePopup(element) {
  element.classList.remove('popup_opened');
  element.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
}

//универсальный обработчик крестиков
buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//занесение инф с попапа профиля на стр
function editProfileUser(evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(popupProfile);
}

//попап профиль с заполн полями
const addPopup = function () {
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
  openPopup(popupProfile);
  formValidatorEdit.resetValidation();
}

//попап место
const openPopupPlace = function () {
  formPlace.reset();
  openPopup(popupPlace);
  formValidatorAdd.addButtonDisable();
  //buttonDisable(buttonPlaceSubmit);
}

const insertCard = function (name,link) {
  const newCard = new Card({name,link}, '.template', handleOpenPopup, handleClosePopup);
  return newCard.generateCard();
}

const placeCard = function (card) {
  elements.append(card);
}

//добавление новой карточки на стр
const addCard = function (evt) {
  evt.preventDefault();
  const card = insertCard(titleInputPlace.value, imageInputPlace.value);
  elements.prepend(card);
  closePopup(popupPlace);
}

//создание карточек из массива
initialCards.forEach((el) => {
  const card = insertCard(el.name,el.link);
  placeCard(card);
});

//закрытие попапа на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = evt.target;
    closePopup(popup);
  }
}

//закрытие попап на escape
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

formProfile.addEventListener('submit', editProfileUser);
formPlace.addEventListener('submit', addCard);
buttonProfileEdit.addEventListener('click', addPopup);
buttonProfileAdd.addEventListener('click', openPopupPlace);