import {createReducer} from '@reduxjs/toolkit';
import {addComment} from './action';
import {mockComments} from './mock';

const initialState = {
  comments: [...mockComments],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    });
});

export {reducer};
