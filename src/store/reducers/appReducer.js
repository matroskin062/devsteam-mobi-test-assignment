import {TOGGLE_LOADING} from '../types';

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, {type}) => {
  switch (type) {
    case TOGGLE_LOADING:
      return {...state, loading: !state.loading};
    default:
      return state;
  }
};
