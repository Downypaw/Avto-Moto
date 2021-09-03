import React from 'react';
import {Link} from "react-router-dom";
import {getPopupStatus} from '../../store/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {getComments} from '../../store/selectors';
import {setPopupStatus} from '../../store/action';
import Review from '../review/review';
import PropTypes from 'prop-types';

export default function ReviewsTab({onEscKeyDown}) {
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const isPopupActive = useSelector(getPopupStatus);

  return (
    <div className="reviews">
      <Link
        className="reviews__button"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(setPopupStatus(true));
          document.addEventListener('keydown', onEscKeyDown);
        }}
        to="/blank"
        tabIndex={isPopupActive ? -1 : 0}
      >
        Оставить отзыв
      </Link>
      <ul className="reviews__list">
        {comments.map((comment) => <Review key={comment.id} review={comment}/>)}
      </ul>
    </div>
  );
}

ReviewsTab.propTypes = {
  onEscKeyDown: PropTypes.func.isRequired,
}
