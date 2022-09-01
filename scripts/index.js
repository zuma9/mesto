const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup_place');
const popupBigImage = document.querySelector('.popup-big-image');
const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonProfile = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__image-text');
const imageInputPlace = document.querySelector('.popup__field_type_address');//попап место ссылка
const titleInputPlace = document.querySelector('.popup__field_type_title');//попап место название
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__field_type_name');//попап имя
const jobInput = document.querySelector('.popup__field_type_job');//попап job
const textName = document.querySelector('.profile__name');//стр имя
const jobName = document.querySelector('.profile__profession');//стр job
const formPlace = document.querySelector('.popup__form_place');
const templateCard = document.querySelector('.templateCard');
const elements = document.querySelector('.elements');

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
    openPopupImage(link, cardTitle.textContent);
  });

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')
  });

  deleteButton.addEventListener('click', function () {
    deleteButton.closest('.element').remove()
  });

  return newCard;
}

//попап универсальная
function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

//универсальный обработчик крестиков
closeButtons.forEach((button) => {
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
}

//попап место
const openPopupPlace = function () {
  openPopup(popupPlace);
}

//попап с большой картинкой
const openPopupImage = function(link, title) {
  popupImage.src = link;
  popupImage.alt = title;
  popupImageText.textContent = title;
  openPopup(popupBigImage);
}

//добавление новой карточки на стр
const addCard = function (evt) {
  evt.preventDefault();
  const card = makeNewCard(titleInputPlace.value, imageInputPlace.value);
  elements.prepend(card);
  evt.target.reset();
  closePopup(popupPlace);
}

//создание карточек из массива
initialCards.forEach((el) => {
  elements.append(makeNewCard(el.name, el.link));
});

editButtonProfile.addEventListener('click', addPopup);
addButtonProfile.addEventListener('click', openPopupPlace);
formProfile.addEventListener('submit', editProfileUser);
formPlace.addEventListener('submit', addCard);