import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as songActions } from '../ducks/songs';

export default function* songsSaga(action) {
  try {
    const { data } = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(songActions.getSongsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
