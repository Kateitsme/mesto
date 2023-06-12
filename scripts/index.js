//popups
const popupNewElement = document.querySelector('.popup_type_element');
const popupProfile = document.querySelector('.popup_type_profile');
const popupImage = document.querySelector('.popup_type_image');

//buttons on page
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

// profile edit popup
const popupProfileClose = popupProfile.querySelector('.popup__close-btn');
const popupProfileSave = popupProfile.querySelector('.form__submit-btn');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileName = popupProfile.querySelector('.form__input_type_name');
const popupProfileJob = popupProfile.querySelector('.form__input_type_job');

//profile on page
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

//new element popup
const popupNewElementClose = popupNewElement.querySelector('.popup__close-btn');
const popupNewElementSave = popupNewElement.querySelector('.form__submit-btn');
const popupNewElementForm = popupNewElement.querySelector('.popup__form');
const popupNewElementName = popupNewElement.querySelector('.form__input_type_place');
const popupNewElementLink = popupNewElement.querySelector('.form__input_type_link');

//image popup
const popupImageClose = popupImage.querySelector('.popup__close-btn');
const popupImageFigcaption = popupImage.querySelector('.popup__figcaption');
const popupImageImg = popupImage.querySelector('.popup__img');

const elementTemplate = document.querySelector('#template');
const elements = document.querySelector('.elements');//parent

/**FUNCTIONS */
//open popup
const openPopup = item => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

function openProfilePopup() {
  popupProfileName.value = profileName.textContent;
  popupProfileJob.value = profileJob.textContent;
  resetPopupEditProfile(config, [popupProfileName, popupProfileJob], popupProfileSave);
  openPopup(popupProfile);
}

function openNewElementPopup() {
  popupNewElementForm.reset();
  resetPopupNewElement(config, [popupNewElementName, popupNewElementLink], popupNewElementSave);
  openPopup(popupNewElement);
}

function openImagePopup(title, link) {
  imagePopupTitle.textContent = title;
  imagePopupImage.setAttribute('src', link);
  imagePopupImage.setAttribute('alt', title);
  openPopup(imagePopup);
}

//close popup
const closePopup = item => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
//close by esc
const closePopupEsc = evt => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
//close by click
const closePopupClick = evt => {
  const openedPopup = document.querySelector('.popup_opened');
  const closeBtn = openedPopup.querySelector('.popup__close-btn');
  if (evt.target.contains(closeBtn)) {
    closePopup(openedPopup);
  };
};

const changeUserData = evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfileJob.value;
  closePopup(popupProfile);
}

const addNewElement = evt => {
  evt.preventDefault();
  renderElement(popupNewElementName.value, popupNewElementLink.value);
  closePopup(popupNewElement);
};

//remove element
const removeElement = event => {
  event.target.closest('.element').remove();
};
//press like btn
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
  element.querySelector('.element__del-btn').addEventListener('click', removeElement);

  return element;
};

const renderElement = (name, link) => {
  elements.prepend(createElement({ name, link }));
};

//render default elements
initialCards.forEach(item => renderElement(item.name, item.link));


function setEventListenersOnPopups() {
  editBtn.addEventListener('click', openProfilePopup);
  addBtn.addEventListener('click', openNewElementPopup);

  popupProfileClose.addEventListener('click', closePopup(popupProfile));
  popupNewElementClose.addEventListener('click', closePopup(popupNewElement));
  popupImageClose.addEventListener('click', closePopup(popupImage));

  popupProfileForm.addEventListener('submit', changeUserData);
  popupNewElementForm.addEventListener('submit', addNewElement);

  popupProfile.addEventListener('click', closePopupClick);
  popupNewElement.addEventListener('click', closePopupClick);
  popupImage.addEventListener('click', closePopupClick);

  popupProfile.addEventListener('keydown', closePopupEsc);
  popupNewElement.addEventListener('keydown', closePopupEsc);
  popupImage.addEventListener('keydown', closePopupEsc);
}

setEventListenersOnPopups();
