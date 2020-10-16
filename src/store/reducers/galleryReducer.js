import {SET_GALLERY} from '../types';

const initialState = {
  photos: [],
};

export const galleryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_GALLERY:
      return {
        ...state,
        photos: payload,
      };
    default:
      return state;
  }
};
