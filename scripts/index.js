const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');

console.log(`popup`, popup);
console.log(`openButton`, openButton);
console.log(`closeButton`, closeButton);

// openButton.addEventListener('click', function () {
//   console.log('hi callback');
// })


const togglePopup = function () {
  popup.classList.toggle('popup_opened');
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)
