'use strict';

(function () {

  const buttonMapContacts = document.querySelector(`.button--map-contacts`);
  const feedback = document.querySelector(`.modal-feedback`);
  const feedbackForm = feedback.querySelector(`.modal-feedback__form`);
  const feedbackClose = feedback.querySelector(`.modal-feedback__close`);
  const feedbackName = feedback.querySelector(`.modal-feedback__name`);
  const feedbackEmail = feedback.querySelector(`.modal-feedback__email`);

  const openPopup = (popup) => {
    popup.classList.add(`modal__show`);
    feedbackName.focus();
  };

  const closePopup = (popup) => {
    popup.classList.remove(`modal__show`);
  };

  buttonMapContacts.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openPopup(feedback);
  });

  feedbackClose.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    closePopup(feedback);
    feedback.classList.remove(`modal__error`);
  });

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