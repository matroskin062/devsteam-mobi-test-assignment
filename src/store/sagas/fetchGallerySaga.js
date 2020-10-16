import {call, takeEvery, put} from 'redux-saga/effects';
import {fetchGallery} from '../../services/api';
import {setGallery, toggleLoading} from '../actions/actions';
import {FETCH_GALLERY} from '../types';

export function* fetchGalleryWatcher() {
  yield takeEvery(FETCH_GALLERY, fetchGalleryWorker);
}

function* fetchGalleryWorker() {
  yield put(toggleLoading());
  const data = yield call(fetchGallery);
  yield put(setGallery(data));
  yield put(toggleLoading());
}
