import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArticle } from '../../shared/actions';

import Article from './components/Article';

class ArticleWrapper extends Component {
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
  }),
};

const mapStateToProps = ({ articleDetails }, ownProps) => (
  { article: articleDetails[ownProps.match.params.id] }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getArticle }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWrapper);
