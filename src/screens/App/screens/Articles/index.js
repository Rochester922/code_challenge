import React, { Component } from 'react';
import request from 'request'; // eslint-disable-line import/no-extraneous-dependencies
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ArticleList from './components/ArticleList';
import Article from './screens/Article';
import { ARTICLES_QUERY } from './shared/queries';


class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} render={() => <ArticleList articles={this.state.articles} />} />
        <Route path={`${this.props.match.url}:id`} render={() => <Article />} />
      </div>
    );
  }
}

Articles.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default Articles;
