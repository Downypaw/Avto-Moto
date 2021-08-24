import React from 'react';
import {useSelector} from 'react-redux';
import {getComments} from '../../store/selectors';
import Review from '../review/review';

export default function ReviewsTab() {
  const comments = useSelector(getComments);

  return (
    <div className="reviews">
      <a className="reviews__button">Оставить отзыв</a>
      <ul className="reviews__list">
        {comments.map((comment) => <Review key={comment.id} review={comment}/>)}
      </ul>
    </div>
  );
}
