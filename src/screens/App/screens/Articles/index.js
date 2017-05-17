import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Articles from './Articles';
import Article from './screens/Article';
import ArticleCreate from './screens/Article/components/ArticleCreate';


const ArticlesScreen = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={Articles} />
    <Switch>
      <Route path={`${match.url}new`} component={ArticleCreate} />
      <Route path={`${match.url}:id`} component={Article} />
    </Switch>
  </div>
);

ArticlesScreen.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default ArticlesScreen;
