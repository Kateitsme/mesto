import {
  popupProfile, editBtn, popupProfileClose, popupProfileForm, popupProfileName, popupProfileJob, profileName,
  profileJob, popupNewElementLink, popupNewElementName, config, elements, popupNewElementForm, popupNewElementClose,
  addBtn, popupImage, popupNewElement, initialCards, popupImageImg, popupImageFigcaption, popupImageClose
} from './const.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
}

function closePopup(popup) {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove('popup_opened');
}

const handleEscUp = (event) => {
  event.preventDefault();
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
};

const closePopupClick = evt => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

function fillInEditProfileFormInputs() {
  popupProfileName.value = profileName.textContent;
  popupProfileJob.value = profileJob.textContent;
}

function submitEditFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfileJob.value;

  closePopup(popupProfile);
}

function renderCard (elements, name, link) {
  elements.prepend(addCard(name, link));
}

/** Функция создает новый элемент карточки по ее содержанию */
function addCard (name, link) {
  const card = new Card(name, link, '.template', openPopup, closePopup, handleOpenPopup);
  return card.generateCard();
}

/** Отобразить исходные карточки при загрузке страницы */
initialCards.forEach(card => renderCard (elements, card.name, card.link));

function handleOpenPopup(name, link) {

  popupImageFigcaption.textContent = name;
  popupImageImg.src = link;
  popupImageImg.alt = `${name}`;
  openPopup(popupImage);
}

function setEventListenersOnPopups() {
  editBtn.addEventListener('click', () => {
    openPopup(popupProfile);
    fillInEditProfileFormInputs();
  });

  addBtn.addEventListener('click', () => {
    openPopup(popupNewElement);
  });

  popupProfileClose.addEventListener('click', () => {
    closePopup(popupProfile);
  });

  popupProfileForm.addEventListener('submit', submitEditFormHandler);

  popupNewElementClose.addEventListener('click', () => {
    closePopup(popupNewElement);
  });

  popupImageClose.addEventListener('click', () => {
    closePopup(popupImage);
  });

  popupProfile.addEventListener('mousedown', closePopupClick);
  popupNewElement.addEventListener('mousedown', closePopupClick);
  popupImage.addEventListener('mousedown', closePopupClick);

  popupNewElementForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    renderCard(elements, popupNewElementName.value, popupNewElementLink.value);
    popupNewElementName.value = '';
    popupNewElementLink.value = '';
    closePopup(popupNewElement);
    popupNewElementFormValidator.toggleButtonState();
  });
}

setEventListenersOnPopups();

const popupProfileFormValidator = new FormValidator(config, popupProfileForm);
popupProfileFormValidator.enableValidation();

const popupNewElementFormValidator = new FormValidator(config, popupNewElementForm);
popupNewElementFormValidator.enableValidation();
