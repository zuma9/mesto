const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__field_type_name');//попап имя
const jobInput = document.querySelector('.popup__field_type_job');//попап job
const textName = document.querySelector('.profile__name');//стр имя
const jobName = document.querySelector('.profile__profession');//стр job
const buttonAddCard = document.querySelector('.profile__add-button');
const templateCard = document.querySelector('.templateCard');
const popupPlace = document.querySelector('.popup_place');
const popupPlaceClose = popupPlace.querySelector('.popup__close_place');
const imageInputPlace = document.querySelector('.popup__field_type_address');//попап место ссылка
const titleInputPlace = document.querySelector('.popup__field_type_title');//попап место название
const formPlace = document.querySelector('.popup__form_place');
const likeList = document.querySelectorAll('.element__like');
const popupBigImg = document.querySelector('.popup__image-big');
const popupImage = popupBigImg.querySelector('.popup__image');
const popupImageText = popupBigImg.querySelector('.popup__image-text');
const popupBigImgClose = popupBigImg.querySelector('.popup__close_image');
const elements = document.querySelector('.elements');

//попап
function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

//попап картинка
function openPopupBig() {
  popupBigImg.classList.add('popup_opened');
}

function closePopupBig() {
  popupBigImg.classList.remove('popup_opened');
}

//занесение инф с попапа профиля на стр
function editPopupProfile(evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup ();
}

//попап профиль с заполн полями
let addPopup = function () {
  popup.classList.add('popup_opened');
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

//открытие-закрытие попап место
let openPopupPlace = function () {
  popupPlace.classList.add('popup_opened');
}

let closePopupPlace = function () {
  popupPlace.classList.remove('popup_opened');
}

function makeNewCard(name, link) {
  const newCard = templateCard.content.cloneNode(true);
  const cardPhoto = newCard.querySelector('.element__photo');
  const cardTitle = newCard.querySelector('.element__title');
  const deleteButton = newCard.querySelector('.element__delete');
  const bigImage = cardPhoto;
  const likeButton = newCard.querySelector('.element__like');
  cardPhoto.src = link;
  cardPhoto.alt = name;
  cardTitle.textContent = name;
  bigImage.addEventListener('click', function () {
    popupBig(link, cardTitle.textContent);
  });

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')
  });

  deleteButton.addEventListener('click', function () {
    deleteButton.closest('.element').remove()
  });

  return newCard;
}

//попап с большой картинкой
const popupBig = function(link, title) {
  popupImage.src = link;
  popupImage.alt = title;
  popupImageText.textContent = title;
  openPopupBig();
}

//лайк
likeList.forEach(like => {
  like.addEventListener('click', function () {
    like.classList.toggle('element__like_active');
  });
});

//добавление новой карточки на стр
const addCard = function (evt) {
  evt.preventDefault();
  const card = makeNewCard(titleInputPlace.value, imageInputPlace.value);
  elements.prepend(card);
  closePopupPlace();
}

//создание карточек из массива
initialCards.forEach((el) => {
  elements.append(makeNewCard(el.name, el.link));
});

openButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', closePopup);
buttonAddCard.addEventListener('click', openPopupPlace);
popupPlaceClose.addEventListener('click', closePopupPlace);
form.addEventListener('submit', editPopupProfile);
formPlace.addEventListener('submit', addCard);
popupBigImgClose.addEventListener('click', closePopupBig);