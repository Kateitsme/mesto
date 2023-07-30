import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues = () => {
    const inputValues = {};

    this._inputList.forEach(inputItem => {
      inputValues[inputItem.name] = inputItem.value;
    })

    return inputValues;
  }

  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();

    this._form.reset();
  }
}
