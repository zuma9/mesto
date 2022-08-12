const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');

let addPopup = function () {
  popup.classList.add('popup_opened');
}

let removePopup = function () {
  popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', removePopup);



let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

let textName = profile.querySelector('.profile__name');
let jobName = profile.querySelector('.profile__profession');

function openPopupProfile() {
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

// formElement.addEventListener('submit', submitFormHandler);

// function formSubmitHandler (evt) {
//   evt.preventDefault();
