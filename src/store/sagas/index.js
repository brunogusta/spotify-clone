import { all, takeLatest } from 'redux-saga/effects';

import { Types as Playlist } from '../ducks/playlists';
import { Types as Songs } from '../ducks/songs';

import playlistsSaga from './playlists';
import songsSaga from './songs';

export default function* rootSaga() {
  yield all([
    takeLatest(Playlist.GET_REQUEST, playlistsSaga),
    takeLatest(Songs.GET_REQUEST, songsSaga)
  ]);
}
