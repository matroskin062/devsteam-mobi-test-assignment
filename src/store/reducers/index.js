import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {galleryReducer} from './galleryReducer';
import {photoReducer} from './photoReducer';

export const rootReducer = combineReducers({
  gallery: galleryReducer,
  photo: photoReducer,
  app: appReducer,
});
