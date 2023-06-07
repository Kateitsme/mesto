let popup = document.querySelector('.popup');
// Находим форму в DOM
let form = popup.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = form.querySelector('#name');
let jobInput = form.querySelector('#job');

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
  nameInput.value = ''
  jobInput.value = ''

  popup.classList.remove('popup_opened');
}
// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  addName.textContent = nameInput.value;
  addJob.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}
// работа кнопок закрыть-открыть
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler);
