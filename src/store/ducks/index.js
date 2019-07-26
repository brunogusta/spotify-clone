import { combineReducers } from 'redux';

import playlists from './playlists';
import songs from './songs';
import hasError from './error';
import player from './player';

const reducers = combineReducers({
  playlists, songs, hasError, player,
});

export default reducers;
