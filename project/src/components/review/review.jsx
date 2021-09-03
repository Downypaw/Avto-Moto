import React from 'react';
import {useSelector} from 'react-redux';
import {getPopupStatus} from '../../store/selectors';
import {ReviewConclusionType} from '../../const.js';
import {formatCommentDate} from '../../util.js';
import PropTypes from 'prop-types';

export default function Review({review}) {
  const {name, advantages, disadvantages, comment, rating, time} = review;

  const isPopupActive = useSelector(getPopupStatus);

  return (
    <li className="reviews__review">
      <span className="reviews__author">{name}</span>
      <dl className="reviews__properties">
        <dt className="reviews__property reviews__property--advantages">Достоинства</dt>
        <dd className="reviews__value">{advantages}</dd>
        <dt className="reviews__property reviews__property--disadvantages">Недостатки</dt>
        <dd className="reviews__value">{disadvantages}</dd>
      </dl>
      <span className="reviews__comment-title">Комментарий</span>
      <p className="reviews__comment">{comment}</p>
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span className="rating__active" style={{width: `${Math.round(100 / 5 * rating)}%`}}></span>
          <span className="visually-hidden">Рейтинг</span>
        </div>
        <span className="rating__text">{rating >= 3 ? ReviewConclusionType.GOOD : ReviewConclusionType.BAD}</span>
      </div>
      <span className="reviews__time">{time ? formatCommentDate(time) : '1 минуту назад'}</span>
      <button className="reviews__answer-button" name="answer" tabIndex={isPopupActive ? -1 : 0}>Ответить</button>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
      name: PropTypes.string.isRequired,
      advantages: PropTypes.string.isRequired,
      disadvantages: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      time: PropTypes.string,
    }).isRequired,
};
