const initialCards = [
  {
    name: 'Лондон',
    link: 'https://images.unsplash.com/photo-1656800773829-a059959bfacf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Милан',
    link: 'https://images.unsplash.com/photo-1660061260870-e379b650825b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1659960636248-d64f5dfa6f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Стамбул',
    link: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80'
  },
  {
    name: 'Барселона',
    link: 'https://images.unsplash.com/photo-1561407531-2b7ccd6b66b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
  },
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1545209743-87a2a2a6fdad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80'
  }
];


const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');//попап имя
let jobInput = document.querySelector('.popup__field_type_job');//попап job
let textName = document.querySelector('.profile__name');//стр имя
let jobName = document.querySelector('.profile__profession');//стр job
const buttonAddCard = document.querySelector('.profile__add-button');
const templateCard = document.querySelector('.templateCard');
const popupPlace = document.querySelector('.popup_place');
const popupPlaceClose = popupPlace.querySelector('.popup__close_place');
const imageInputPlace = document.querySelector('.popup__field_type_address');//попап место ссылка
const titleInputPlace = document.querySelector('.popup__field_type_title');//попап место название
const formPlace = document.querySelector('.popup__form_place');
let likeList = document.querySelectorAll('.element__like');
const popupBigImg = document.querySelector('.popup_bigImage');
const popupImage = popupBigImg.querySelector('.popup__image');
const popupImageText = popupBigImg.querySelector('.popup__image-text');
const popupBigImgClose = popupBigImg.querySelector('.popup__close_image');
const elements = document.querySelector('.elements');
const cardPhoto = document.querySelector('.element__photo');



//открытие-закрытие попап
function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
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

//попап с увелич картинкой
const popupBig = function(link, title) {
  popupImage.src = link;
  popupImage.alt = title;
  popupImageText.textContent = title;
  addPopupImg(popupImage);
  openPopup(popupBigImg);
}

//открытие-закрытие попап картинка
let addPopupImg = function() {
  openPopup(popupBigImg);
};

let closePopupImg = function () {
  closePopup(popupBigImg);
}

//попап профиль с заполн полями
let addPopup = function () {
  popup.classList.add('popup_opened');
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

//занесение инф с попапа профиля на стр
function editPopupProfile(evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup ();
}

//открытие-закрытие попап место
let openPopupPlace = function () {
  popupPlace.classList.add('popup_opened');
}

let closePopupPlace = function () {
  popupPlace.classList.remove('popup_opened');
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

function test(){
  console.log('click')
}


openButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', closePopup);
buttonAddCard.addEventListener('click', openPopupPlace);
popupPlaceClose.addEventListener('click', closePopupPlace);

form.addEventListener('submit', editPopupProfile);
formPlace.addEventListener('submit', addCard);
popupBigImgClose.addEventListener('click', closePopupImg);
cardPhoto.addEventListener('click', test);















