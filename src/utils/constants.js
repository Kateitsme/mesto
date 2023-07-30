export
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

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const cardSetting = {
  cardTemplate: '#template',
  cardSelector: '.element',
  cardImgSelector: '.element__img',
  cardTitleSelector: '.element__title',
  cardDeleteBtnSelector: '.element__del-btn',
  cardLikeBtnSelector: '.element__like-btn',
  activeLikeBtnClass: 'element__like-btn_active'
};

export const userInfoData = {
  userName: '.profile__name',
  userJob: '.profile__job'
};

export const popupSelectors = {
  profilePopup: '.popup_type_profile',
  cardsPopup: '.popup_type_element',
  imgPopup: '.popup_type_image'
}

export
  const popupList = document.querySelectorAll('.popup'),
  profileEditBtn = document.querySelector('.profile__edit-button'),
  formEditProfile = document.forms['edit-form'],
  inputName = formEditProfile.querySelector('.popup__input_type_name'),
  inputJob = formEditProfile.querySelector('.popup__input_type_job'),
  cardsAddBtn = document.querySelector('.profile__add-button'),
  formAddCard = document.forms['card-form'],
  inputCardName = formAddCard.querySelector('.popup__input_type_name'),
  inputCardLink = formAddCard.querySelector('.popup__input_type_link'),
  cardsContainerSelector = '.elements';
