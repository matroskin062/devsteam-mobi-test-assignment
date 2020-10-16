import {
  SET_GALLERY,
  SET_PHOTO,
  FETCH_GALLERY,
  LOAD_PHOTO,
  TOGGLE_LOADING,
} from '../types';

export const setGallery = (photos) => ({
  type: SET_GALLERY,
  payload: photos,
});

export const setPhoto = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});

export const loadGallery = () => ({
  type: FETCH_GALLERY,
});

export const loadPhoto = (payload) => ({
  type: LOAD_PHOTO,
  payload,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});
