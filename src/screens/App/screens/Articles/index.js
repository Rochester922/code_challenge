import React, { Component } from 'react';
import request from 'request'; // eslint-disable-line import/no-extraneous-dependencies

import ArticleList from './components/ArticleList';
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
      <ArticleList articles={this.state.articles} />
    );
  }
}

export default Articles;
