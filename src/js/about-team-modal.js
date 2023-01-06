const refs = {
  openModalLink: document.querySelector('.footer__link'),
  closeModalBtn: document.querySelector('.close-modal__btn'),
  modalTeam: document.querySelector('[data-team-modal]'),
};

refs.openModalLink.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modalTeam.addEventListener('click', onBackdropClick);

function onOpenModal() {
  document.body.style.overflow = 'hidden';
  refs.modalTeam.classList.remove('is-hidden');
}

function onCloseModal() {
  refs.modalTeam.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
  window.addEventListener('keydown', onEscDown);
}
function onBackdropClick(event) {
  //   event.currentTarget це бекдроп, до якого прив'язана подія, event.target це елемент, який викликав подію. Якщо вони співпадають, то користувач натиснув на область накладення, а не у середині модального вікна
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscDown(event) {
  const KEY_CODE = 'Escape';
  if (event.code === KEY_CODE) {
    onCloseModal();
  }
}
