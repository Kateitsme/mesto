export class Card {
  constructor(name, link, cardSelector, handleOpenPopup) {
    this._container = document.querySelector(cardSelector);
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleOpenPopup= handleOpenPopup;
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
    this._likeBtn.classList.toggle('element__like-btn_active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._imgCard.addEventListener('click', () =>{
      this._handleOpenPopup(this._name, this._link)
    });

    this._element.querySelector('.element__del-btn').addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._likeBtn.addEventListener('click', () => {
      this._handleLikeCard();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._imgCard = this._element.querySelector('.element__img');
    this._setEventListeners();

    this._imgCard.src = this._link;
    this._imgCard.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}
