import React, { Component } from 'react';
import request from 'request'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { ARTICLE_QUERY } from './shared/queries';
import Article from './components/Article';

class ArticleWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    request(ARTICLE_QUERY, { id }).then(response => {
      this.setState({ article: response.data.article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <Article article={article} />
    );
  }
}

ArticleWrapper.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default ArticleWrapper;
