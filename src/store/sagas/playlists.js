import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export default function* playlistsSaga() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível acessar esta playlist.'));
  }
}
