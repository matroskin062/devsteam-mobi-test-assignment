import {SET_PHOTO} from '../types';

const initialState = {
  photo: {},
};

export const photoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PHOTO:
      return {...state, photo: payload};
    default:
      return state;
  }
};
