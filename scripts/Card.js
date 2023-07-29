import { popupImageImg, popupImageFigcaption, popupImage, popupImageClose } from './const.js';

export class Card {
  constructor(name, link, cardSelector, openPopup, closePopup) {
    this._container = document.querySelector(cardSelector);
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeCard() {
    const likeBtn = this._element.querySelector('.element__like-btn');
    likeBtn.classList.toggle('element__like-btn_active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenPopup() {
    popupImageFigcaption.textContent = this._name;
    popupImageImg.src = this._link;
    popupImageImg.alt = `${this._name}`;
    this._openPopup(popupImage);
  }

  _handleClosePopup() {
    popupImageFigcaption.textContent = '';
    popupImageImg.src = '';
    popupImageImg.alt = '';
    this._closePopup(popupImage)
  }

  _setEventListeners() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._handleOpenPopup();
    })

    popupImageClose.addEventListener('click', () => {
      this._handleClosePopup();
    })

    this._element.querySelector('.element__del-btn').addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeCard();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}
