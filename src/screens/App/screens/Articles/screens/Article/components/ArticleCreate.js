import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { createArticle } from '../../../shared/actions';

import ArticleForm from './ArticleForm';

class ArticleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',

      id: null,
      published: false,
      tags: [],
    };
  }

  render() {
    return (
      <div>
        <ArticleForm
          {...this.state}
          formTitle="Create article"
          onSubmit={createArticle}
          dispatch={this.props.dispatch}
          history={this.props.history}
        />
      </div>
    );
  }
}

ArticleCreate.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default connect()(ArticleCreate);
