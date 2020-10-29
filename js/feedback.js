'use strict';

(function () {
  const ESC_CODE = 27;
  const buttonMapContacts = document.querySelector(`.button--map-contacts`);
  const feedback = document.querySelector(`.modal-feedback`);
  const feedbackForm = feedback.querySelector(`.modal-feedback__form`);
  const feedbackClose = feedback.querySelector(`.modal-feedback__close`);
  const feedbackName = feedback.querySelector(`.modal-feedback__name`);
  const feedbackEmail = feedback.querySelector(`.modal-feedback__email`);
  const feedbackDiscription = feedback.querySelector(`.modal-feedback__discription`);

  const openPopup = (popup) => {
    popup.classList.add(`modal__show`);
    feedbackName.focus();
    document.addEventListener(`keydown`, onEscClosePopup);
  };

  const closePopup = (popup) => {
    popup.classList.remove(`modal__show`);
    document.removeEventListener(`keydown`, onEscClosePopup);
  };

  const onEscClosePopup = (escEvt) => {
    if (escEvt.keyCode === ESC_CODE) {
      closePopup(feedback);
    }
  }

  const elementStopPropagation = (evt) => {
    if (evt.keyCode === ESC_CODE) {
      evt.stopPropagation();
    }
  }

  buttonMapContacts.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openPopup(feedback);
  });

  feedbackClose.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    closePopup(feedback);
    feedback.classList.remove(`modal__error`);
  });

  // Don't close the popup on esc press if one of the following fields is focuse
  feedbackName.addEventListener(`keydown`, elementStopPropagation);
  feedbackEmail.addEventListener(`keydown`, elementStopPropagation);
  feedbackDiscription.addEventListener(`keydown`, elementStopPropagation);

  // Restart the animation trick
  let restartAnimation = () => feedback.offsetWidth;

  // If the required form fields are not filled in, shake the feedback
  feedbackForm.addEventListener(`submit`, (evt) => {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedback.classList.remove(`modal__error`);
      restartAnimation();
      feedback.classList.add(`modal__error`);
    }
  });
})();
