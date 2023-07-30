import './index.css';

import * as constants from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';

const userInfo = new UserInfo(constants.userInfoData),
      cardFormValidator = new FormValidator(constants.config, constants.formAddCard),
      popupWithImage = new PopupWithImage(constants.popupSelectors.imgPopup),
      profileFormValidator = new FormValidator(constants.config, constants.formEditProfile);

const cardList = new Section({
    data: constants.initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        constants.cardSetting,
        () => { popupWithImage.open(item.link, item.name) }
      );
      const cardElement = card.generateCard();
      cardList.addCard(cardElement)
    }
  }, constants.cardsContainerSelector);

const profilePopup = new PopupWithForm(
    constants.popupSelectors.profilePopup,
    (formData) => {
      userInfo.setUserInfo(formData)
  });

const cardsPopup = new PopupWithForm(
  constants.popupSelectors.cardsPopup,
  (item) => {
    const card = new Card(
      item,
      constants.cardSetting,
      () => { popupWithImage.open(item.link, item.name) }
    );
    const cardElement = card.generateCard();
    cardList.addCard(cardElement);
  }
);

constants.profileEditBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  const {userName, userJob} = userInfo.getUserInfo();
  constants.inputName.value = userName;
  constants.inputJob.value = userJob;

  profileFormValidator.checkInputValidity();

  profilePopup.open();
});

constants.cardsAddBtn.addEventListener('click', () => {
  cardsPopup.open();
});

cardList.renderCards();

profilePopup.setEventListeners();
cardsPopup.setEventListeners();
popupWithImage.setEventListeners();

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
