import {fork} from 'redux-saga/effects';
import {fetchGalleryWatcher} from './fetchGallerySaga';
import {fetchPhotoWatcher} from './fetchPhotoSaga';

export function* rootSaga() {
  yield fork(fetchGalleryWatcher);
  yield fork(fetchPhotoWatcher);
}
