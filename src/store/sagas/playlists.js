import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as PlaylistsActions } from '../ducks/playlists';

export default function* playlistsSaga() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
