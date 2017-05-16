import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArticleList from './components/ArticleList';
import Article from './screens/Article';
import { getArticles } from './shared/actions';


class Articles extends Component {
  componentWillMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} render={() => <ArticleList {...this.props} />} />
        <Route path={`${this.props.match.url}:id`} component={Article} />
      </div>
    );
  }
}

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ articleList }) => ({ articles: articleList });
const mapDispatchToProps = dispatch => (
  bindActionCreators({ getArticles }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
