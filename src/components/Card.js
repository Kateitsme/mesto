export default class Card {
  constructor(cardElement, cardSetting, handleOpenPopup) {
    this._cardSetting = cardSetting;
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._handleOpenPopup= handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSetting.cardTemplate)
      .content
      .querySelector(this._cardSetting.cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeCard() {
    this._cardLikeBtn.classList.toggle(this._cardSetting.activeLikeBtnClass);
  }

  _handleDeleteCard() {
    this._card.remove();
    this._cardImg = null;
    this._card = null;
  }

  _setEventListeners() {
    const cardDeleteBtn = this._card.querySelector(this._cardSetting.cardDeleteBtnSelector);

    this._cardLikeBtn = this._card.querySelector(this._cardSetting.cardLikeBtnSelector);

    cardDeleteBtn.addEventListener('click', () => {
      this._handleDeleteCard()
    })

    this._cardLikeBtn.addEventListener('click', () => {
      this._handleLikeCard()
    })

    this._cardImg.addEventListener('click', () => {
      this._handleOpenPopup(this._link, this._name);
    })
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImg = this._card.querySelector(this._cardSetting.cardImgSelector);

    this._cardImg.src = this._link;
    this._cardImg.alt = ` ${this._link}.`;
    this._card.querySelector(this._cardSetting.cardTitleSelector).textContent = this._name;

    this._setEventListeners();

    return this._card;
  }
}
