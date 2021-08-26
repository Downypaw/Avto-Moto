import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getComments} from '../../store/selectors';
import {setPopupStatus} from '../../store/action';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {onEscKeyDown} from '../../util';

export default function ReviewsTab({onEscKeyDown}) {
  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  return (
    <div className="reviews">
      <a
        className="reviews__button"
        onClick={() => {
          dispatch(setPopupStatus(true));
          document.addEventListener('keydown', onEscKeyDown);
        }}
      >
        Оставить отзыв
      </a>
      <ul className="reviews__list">
        {comments.map((comment) => <Review key={comment.id} review={comment}/>)}
      </ul>
    </div>
  );
}

ReviewsTab.propTypes = {
  onEscKeyDown: PropTypes.func.isRequired,
}
