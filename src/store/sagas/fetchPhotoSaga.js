import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchSinglePhoto} from '../../services/api';
import {setPhoto, toggleLoading} from '../actions/actions';
import {LOAD_PHOTO} from '../types';

export function* fetchPhotoWatcher() {
  yield takeLatest(LOAD_PHOTO, fetchPhotoWorker);
}

function* fetchPhotoWorker(action) {
  yield put(toggleLoading());
  const data = yield call(fetchSinglePhoto, action.payload);
  yield put(setPhoto(data));
  yield put(toggleLoading());
}
