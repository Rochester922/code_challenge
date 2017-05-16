import { combineReducers } from 'redux';

import { articleList, articleDetails } from '../screens/App/screens/Articles/shared/reducer';

const rootReducer = combineReducers({
  articleList,
  articleDetails,
});

export default rootReducer;
