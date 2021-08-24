import React from 'react';

export default function Popup() {
  return (
    <section class="popup-review">
      <div class="popup-review__modal">
        <div class="popup-review__wrapper">
          <h3 class="popup-review__title">Оставить отзыв</h3>
          <form className="popup-review__form" method="get" name="review-form">
            <div className="popup-review__form-fields">
            <label className="popup-review__label visually-hidden" htmlFor="name">Имя</label>
            <input
              className="popup-review__input"
              type="text"
              name="name-field"
              id="name"
              placeholder="Имя"
            >
            </input>
            <label className="popup-review__label visually-hidden" htmlFor="advantages">Имя</label>
            <input
              className="popup-review__input"
              type="text"
              name="advantages-field"
              id="advantages"
              placeholder="Достоинства"
            >
            </input>
            <label className="popup-review__label visually-hidden" htmlFor="disadvantages">Имя</label>
            <input
              className="popup-review__input"
              type="text"
              name="disadvantages-field"
              id="disadvantages"
              placeholder="Недостатки"
            >
            </input>
            <div className="popup-review__rating">
              <span>Оцените товар:</span>
              <input
                className="popup-review__radio-button visually-hidden" name="rating" value="5" id="5-stars" type="radio"
              />
              <label htmlFor="5-stars" className="popup-review__rating-label" title="perfect">
                <svg className="popup-review__star-image" width="27.14" height="27.56">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input
                className="popup-review__radio-button visually-hidden" name="rating" value="4" id="4-stars" type="radio"
              />
              <label htmlFor="4-stars" className="popup-review__rating-label" title="perfect">
                <svg className="popup-review__star-image" width="27.14" height="27.56">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input
                className="popup-review__radio-button visually-hidden" name="rating" value="3" id="3-stars" type="radio"
              />
              <label htmlFor="3-stars" className="popup-review__rating-label" title="perfect">
                <svg className="popup-review__star-image" width="27.14" height="27.56">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input
                className="popup-review__radio-button visually-hidden" name="rating" value="2" id="2-stars" type="radio"
              />
              <label htmlFor="2-stars" className="popup-review__rating-label" title="perfect">
                <svg className="popup-review__star-image" width="27.14" height="27.56">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>

              <input
                className="popup-review__radio-button visually-hidden" name="rating" value="1" id="1-stars" type="radio"
              />
              <label htmlFor="1-stars" className="popup-review__rating-label" title="perfect">
                <svg className="popup-review__star-image" width="27.14" height="27.56">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </div>
            <label className="popup-review__comment visually-hidden" htmlFor="comment">Текст отзыва</label>
            <textarea
              className="popup-review__comment-field"
              placeholder="Комментарий"
            >
            </textarea>
            </div>
            <button className="popup-review__button" type="submit">Оставить отзыв</button>
          </form>
        </div>
      </div>
    </section>
  );
}
