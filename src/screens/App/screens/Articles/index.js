import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Articles from './Articles';
import Article from './screens/Article';


const ArticlesScreen = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={Articles} />
    <Route path={`${match.url}:id`} component={Article} />
  </div>
);

ArticlesScreen.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default ArticlesScreen;
