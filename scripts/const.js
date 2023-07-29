const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//popups
const popupNewElement = document.querySelector('.popup_type_element');
const popupProfile = document.querySelector('.popup_type_profile');
const popupImage = document.querySelector('.popup_type_image');

//buttons on page
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

// profile edit popup
const popupProfileClose = popupProfile.querySelector('.popup__close-btn');
const popupProfileSave = popupProfile.querySelector('.popup__submit-btn');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileJob = popupProfile.querySelector('.popup__input_type_job');

//profile on page
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

//new element popup
const popupNewElementClose = popupNewElement.querySelector('.popup__close-btn');
const popupNewElementSave = popupNewElement.querySelector('.popup__submit-btn');
const popupNewElementForm = popupNewElement.querySelector('.popup__form');
const popupNewElementName = popupNewElement.querySelector('.popup__input_type_name');
const popupNewElementLink = popupNewElement.querySelector('.popup__input_type_link');

//image popup
const popupImageClose = popupImage.querySelector('.popup__close-btn');
const popupImageFigcaption = popupImage.querySelector('.popup__figcaption');
const popupImageImg = popupImage.querySelector('.popup__img');

const elementTemplate = document.querySelector('#template');
const elements = document.querySelector('.elements');//parent


const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {
  config, elements, elementTemplate, popupImageImg, popupImageFigcaption,
  popupImageClose, popupNewElementLink, popupNewElementName, popupNewElementForm,
  popupNewElementSave, popupNewElementClose, profileJob, profileName, popupProfileJob,
  popupProfileName, popupProfileForm, popupProfileSave, popupProfileClose, addBtn, editBtn,
  popupImage, popupProfile, popupNewElement, initialCards
}
