let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__input_type_name');
let jobInput = form.querySelector('.popup__input_type_job');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-btn');
let saveButton = popup.querySelector('.popup__submit-btn');

let addName = document.querySelector('.profile__name');
let addJob = document.querySelector('.profile__job');
//открываем попап и вносим значения
function openPopup() {
  popup.classList.add('popup_opened');

  nameInput.value = addName.textContent;
  jobInput.value = addJob.textContent;
}
//очищаем инпуты и закрываем попап
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  addName.textContent = nameInput.value;
  addJob.textContent = jobInput.value;

  closePopup()
}
// работа кнопок закрыть-открыть
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler);
