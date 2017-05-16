import { combineReducers } from 'redux';

import { articleList } from '../screens/App/screens/Articles/shared/reducer';

const rootReducer = combineReducers({
  articleList,
});

export default rootReducer;
