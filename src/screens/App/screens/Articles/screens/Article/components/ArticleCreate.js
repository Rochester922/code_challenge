import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
          onSubmit={this.props.createArticle}
          history={this.props.history}
        />
      </div>
    );
  }
}

ArticleCreate.propTypes = {
  createArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ createArticle }, dispatch)
);

export default connect(undefined, mapDispatchToProps)(ArticleCreate);
