import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_COMMENT: '/addComment',
};

export const addComment = createAction(ActionType.LOAD_RATES, (comment) => ({
  payload: comment,
}));
