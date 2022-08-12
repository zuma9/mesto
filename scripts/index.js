const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('#nameInput');//попап имя
let jobInput = document.querySelector('#jobInput');//попап job
let textName = document.querySelector('.profile__name');//стр имя
let jobName = document.querySelector('.profile__profession');//стр job

let addPopup = function () {
  popup.classList.add('popup_opened');
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

let removePopup = function () {
  popup.classList.remove('popup_opened');
}

function editPopupProfile(evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
}

openButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', removePopup);
form.addEventListener('submit', editPopupProfile);
