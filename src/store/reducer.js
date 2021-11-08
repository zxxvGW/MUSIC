import { combineReducers } from 'redux-immutable';

import { reducer as recommendReduer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReduer,
  player: playReducer,
})

export default cReducer