import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArticle, deleteArticle } from '../../shared/actions';

import Article from './components/Article';

export class ArticleWrapper extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getArticle(id);
  }

  render() {
    return (
      <Article {...this.props} />
    );
  }
}

ArticleWrapper.propTypes = {
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = ({ articleDetails }, ownProps) => (
  { article: articleDetails[ownProps.match.params.id] }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getArticle, deleteArticle }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWrapper);
