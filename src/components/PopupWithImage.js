import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImageImg = this._popup.querySelector('.popup__img');
    this._popupImageFigcaption = this._popup.querySelector('.popup__figcaption');
  }

  open(img, title) {
    super.open();

    this._popupImageImg.src = img;
    this._popupImageImg.alt = `${title}.`;
    this._popupImageFigcaption.textContent = title;
  }
}
