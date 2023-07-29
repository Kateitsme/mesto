import {popupProfile, editBtn, popupProfileClose, popupProfileForm, popupProfileName, popupProfileJob, profileName,
  profileJob, popupNewElementLink, popupNewElementName, config, elements, popupNewElementForm, popupNewElementClose,
  addBtn, popupImage, popupNewElement, initialCards} from './const.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


// функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
}
// функция закрытия попапа
function closePopup (popup) {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove('popup_opened');
}
// обработчик клика по кнопке Escape
const handleEscUp = (event) => {
  event.preventDefault();
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
};
// функция закрытия попапа кликом на оверлей
function closeByOverlayClick (event) {
  const activePopup = document.querySelector('.popup_opened');
  if (event.target.classList.contains('popup')) {
    closePopup(activePopup);
  }
}
// Заносим данные в форму попапа редактирования профиля
function fillInEditProfileFormInputs() {
  popupProfileName.value = profileName.textContent;
  popupProfileJob.value = profileJob.textContent;
}
// Инструкция для обработчика формы попапа редактирования профиля
function submitEditFormHandler (evt) {
  evt.preventDefault();

  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfileJob.value;

  closePopup(popupProfile);
}

// функция добавления карточки на страницу из формы
const addCard = (name, link) => {
  const card = new Card(name, link, '.template', openPopup, closePopup).generateCard();
  elements.prepend(card);
};

// функция загрузки карточек из массива
const renderInitialCards = (array) => {
  array.forEach((item) => {
    addCard(item.name, item.link);
  })
};

// Обработчик кнопки Edit попапа редактирования профиля
editBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  fillInEditProfileFormInputs();
});
// Обработчик кнопки Close попапа редактирования профиля
popupProfileClose.addEventListener('click', () => {
  closePopup(popupProfile);
});
// Обработчик кнопки Submit попапа редактирования профиля
popupProfileForm.addEventListener('submit', submitEditFormHandler);
// листенер кнопки открытия попапа добавления новой карточки
addBtn.addEventListener('click', () => {
  openPopup(popupNewElement);
});
// листенер кнопки закрытия попапа добавления новой карточки
popupNewElementClose.addEventListener('click', () => {
  closePopup(popupNewElement);
});
// закрытие попапов кликом на оверлей
popupProfile.addEventListener('mousedown', closeByOverlayClick);
popupNewElement.addEventListener('mousedown', closeByOverlayClick);
popupImage.addEventListener('mousedown', closeByOverlayClick);

// листенер submit формы создания карточки
popupNewElementForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(popupNewElementName.value, popupNewElementLink.value);
  popupNewElementName.value = '';
  popupNewElementLink.value = '';
  closePopup(popupNewElement);
  popupNewElementFormValidator.toggleButtonState();
});

// автоматическая загрузка карточек на страницу
renderInitialCards(initialCards);

// валидация формы редактирования профиля
const popupProfileFormValidator = new FormValidator(config, popupProfileForm);
popupProfileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const popupNewElementFormValidator = new FormValidator(config, popupNewElementForm);
popupNewElementFormValidator.enableValidation();
