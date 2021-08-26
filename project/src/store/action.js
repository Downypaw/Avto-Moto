import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_COMMENT: '/addComment',
  SET_POPUP_STATUS: '/setPopupStatus',
};

export const addComment = createAction(ActionType.ADD_COMMENT, (comment) => ({
  payload: comment,
}));

export const setPopupStatus = createAction(ActionType.SET_POPUP_STATUS, (status) => ({
  payload: status,
}));
