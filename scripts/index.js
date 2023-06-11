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

const openPopup = item => {
  item.classList.add('popup_opened');
};

const closePopup = item => {
  item.classList.remove('popup_opened');
};

const removeElement = event => {
  event.target.closest('.element').remove();
};

const toggleLikeBtn = event => {
  event.target.classList.toggle('element__like-btn_active');
};

const dataToPopupImage = ({ name, link }) => {
  popupImageFigcaption.textContent = name;
  popupImageImg.src = link;
  popupImageImg.alt = `${name}`;
};

const createElement = ({ name, link }) => {
  const element = elementTemplate.content.cloneNode(true);
  const elementImg = element.querySelector('.element__img');

  element.querySelector('.element__title').textContent = name;
  elementImg.src = link;
  elementImg.alt = `${name}`;

  elementImg.addEventListener('click', function () {
    dataToPopupImage({ name, link });
    openPopup(popupImage);
  });

  element.querySelector('.element__like-btn').addEventListener('click', toggleLikeBtn);
  element.querySelector('.element__del-btn').addEventListener('click', event => { removeElement(event) });

  return element;
};

const renderElement = (name, link) => {
  elements.append(createElement({ name, link }));
};

const addNewElement = evt => {
  evt.preventDefault();
  renderElement(popupNewElementName.value, popupNewElementLink.value);
  closePopup(popupNewElement);
  popupNewElementForm.reset();
};
//render default cards
initialCards.forEach(item => {
  renderElement(item.name, item.link);
});
//change profile
popupProfileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfileJob.value;
  closePopup(popupProfile);
});
//open popups
addBtn.addEventListener('click', () => { openPopup(popupNewElement); });
editBtn.addEventListener('click', () => {
  popupProfileName.value = profileName.textContent;
  popupProfileJob.value = profileJob.textContent;
  openPopup(popupProfile);
});

//add new element
popupNewElementForm.addEventListener('submit', evt => { addNewElement(evt); });
//close popups
popupImageClose.addEventListener('click', () => { closePopup(popupImage) });
popupProfileClose.addEventListener('click', () => { closePopup(popupProfile) });
popupNewElementClose.addEventListener('click', () => { closePopup(popupNewElement); });
