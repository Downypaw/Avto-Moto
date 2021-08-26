import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setPopupStatus, addComment} from '../../store/action';
import {getCommentId} from '../../util.js';

export default function Popup({onKeyDown}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [advantages, setAdvantages] = useState('');
  const [disadvantages, setDisadvantages] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    comment: false,
  });

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addComment({
      id: getCommentId(),
      name,
      advantages,
      disadvantages,
      rating,
      comment,
      time: String(new Date()),
    }));

    dispatch(setPopupStatus(false));

    localStorage.setItem('name', name);
    localStorage.setItem('advantages', advantages);
    localStorage.setItem('disadvantages', disadvantages);
    localStorage.setItem('rating', rating);
    localStorage.setItem('comment', comment);
  }

  const onRequiredFieldFocus = (evt) => {
    if (!evt.target.value) {
      setErrors(Object.assign(
        {},
        errors,
        {[evt.target.id]: true}
      ));
    }
  };

  const checkFields = () => {
    if (!name && !comment) {
      setErrors({
        name: true,
        comment: true,
      });
      return;
    }

    if (!name) {
      setErrors(Object.assign(
        {},
        errors,
        {name: true}
      ));
    }

    if (!comment) {
      setErrors(Object.assign(
        {},
        errors,
        {comment: true}
      ));
    }
  }

  const onOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(setPopupStatus(false));
    }
  }

  return (
    <section className="popup-review" onClick={onOverlayClick}>
      <div className="popup-review__modal">
        <div className="popup-review__wrapper">
          <button
            className="popup-review__close"
            type="button"
            aria-label="Закрыть"
            onClick={
              () => {
                dispatch(setPopupStatus(false));
                document.removeEventListener('keydown', onKeyDown);
              }
            }
          >
          </button>
          <h3 className="popup-review__title">Оставить отзыв</h3>
          <form className="popup-review__form" method="get" name="review-form" onSubmit={onFormSubmit}>
            <div className="popup-review__form-fields">
              <div className="popup-review__required">
                <label className="popup-review__label visually-hidden" htmlFor="name">Имя</label>
                {errors.name && <span className="popup-review__warning">Пожалуйста, заполните поле</span>}
                <input
                  className="popup-review__input popup-review__input--required"
                  type="text"
                  name="name-field"
                  id="name"
                  placeholder="Имя"
                  onChange={(evt) => {
                    setName(evt.target.value);
                    if (evt.target.value) {
                      setErrors(Object.assign(
                        {},
                        errors,
                        {name: false}
                      ));
                    } else {
                      setErrors(Object.assign(
                        {},
                        errors,
                        {name: true}
                      ));
                    }
                  }}
                  onFocus={(evt) => onRequiredFieldFocus(evt)}
                  value={name}
                  required
                  autoFocus
                >
                </input>
              </div>
              <label className="popup-review__label visually-hidden" htmlFor="advantages">Имя</label>
              <input
                className="popup-review__input"
                type="text"
                name="advantages-field"
                id="advantages"
                placeholder="Достоинства"
                onChange={(evt) => setAdvantages(evt.target.value)}
                value={advantages}
              >
              </input>
              <label className="popup-review__label visually-hidden" htmlFor="disadvantages">Имя</label>
              <input
                className="popup-review__input"
                type="text"
                name="disadvantages-field"
                id="disadvantages"
                placeholder="Недостатки"
                onChange={(evt) => setDisadvantages(evt.target.value)}
                value={disadvantages}
              >
              </input>
              <div className="popup-review__rating">
                <span className="popup-review__rating-title">Оцените товар:</span>
                <input
                  className="popup-review__radio-button visually-hidden"
                  name="rating"
                  value="5"
                  id="5-stars"
                  type="radio"
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  checked={rating === 5}
                />
                <label htmlFor="5-stars" className="popup-review__rating-label" title="perfect">
                  <svg className="popup-review__star-image" width="27.14" height="27.56">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input
                  className="popup-review__radio-button visually-hidden"
                  name="rating"
                  value="4"
                  id="4-stars"
                  type="radio"
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  checked={rating === 4}
                />
                <label htmlFor="4-stars" className="popup-review__rating-label" title="perfect">
                  <svg className="popup-review__star-image" width="27.14" height="27.56">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input
                  className="popup-review__radio-button visually-hidden"
                  name="rating"
                  value="3"
                  id="3-stars"
                  type="radio"
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  checked={rating === 3}
                />
                <label htmlFor="3-stars" className="popup-review__rating-label" title="perfect">
                  <svg className="popup-review__star-image" width="27.14" height="27.56">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input
                  className="popup-review__radio-button visually-hidden"
                  name="rating"
                  value="2"
                  id="2-stars"
                  type="radio"
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  checked={rating === 2}
                />
                <label htmlFor="2-stars" className="popup-review__rating-label" title="perfect">
                  <svg className="popup-review__star-image" width="27.14" height="27.56">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input
                  className="popup-review__radio-button visually-hidden"
                  name="rating"
                  value="1"
                  id="1-stars"
                  type="radio"
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  checked={rating === 1}
                />
                <label htmlFor="1-stars" className="popup-review__rating-label" title="perfect">
                  <svg className="popup-review__star-image" width="27.14" height="27.56">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <div className="popup-review__required popup-review__required--comment">
                <label className="popup-review__comment visually-hidden" htmlFor="comment">Текст отзыва</label>
                {errors.comment && <span className="popup-review__warning">Пожалуйста, заполните поле</span>}
                <textarea
                  className="popup-review__comment-field"
                  placeholder="Комментарий"
                  id="comment"
                  onChange={(evt) => {
                    setComment(evt.target.value);
                    if (evt.target.value) {
                      setErrors(Object.assign(
                        {},
                        errors,
                        {comment: false}
                      ));
                    } else {
                      setErrors(Object.assign(
                        {},
                        errors,
                        {comment: true}
                      ));
                    }
                  }}
                  onFocus={(evt) => onRequiredFieldFocus(evt)}
                  value={comment}
                  required
                >
                </textarea>
              </div>
            </div>
            <button
              className="popup-review__button"
              type="submit"
              onClick={() => checkFields()}
            >
              Оставить отзыв
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

Popup.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
}
