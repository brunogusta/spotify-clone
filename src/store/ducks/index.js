import { combineReducers } from 'redux';

import playlists from './playlists';
import songs from './songs';

const reducers = combineReducers({ playlists, songs });

export default reducers;
