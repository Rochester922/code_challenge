import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArticleList from './components/ArticleList';
import { getArticles } from './shared/actions';


class Articles extends Component {
  componentWillMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <ArticleList {...this.props} />
    );
  }
}

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articleList }) => ({ articles: articleList });
const mapDispatchToProps = dispatch => (
  bindActionCreators({ getArticles }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
