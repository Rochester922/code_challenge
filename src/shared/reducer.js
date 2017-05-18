import { combineReducers } from 'redux';

import { articleList, articleDetails, loadingArticles } from '../screens/App/screens/Articles/shared/reducer';

const rootReducer = combineReducers({
  articleList,
  articleDetails,
  loadingArticles,
});

export default rootReducer;
