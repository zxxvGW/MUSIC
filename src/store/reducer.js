import { combineReducers } from 'redux';

import { reducer as recommendReduer } from '../pages/discover/c-pages/recommend/store';

const cReducer = combineReducers({
  recommend: recommendReduer,
})

export default cReducer