import {createReducer} from '@reduxjs/toolkit';
import {addComment, setPopupStatus} from './action';
import {mockComments} from './mock';

const initialState = {
  comments: [...mockComments],
  isPopupActive: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    })
    .addCase(setPopupStatus, (state, action) => {
      state.isPopupActive = action.payload;
    });
});

export {reducer};
