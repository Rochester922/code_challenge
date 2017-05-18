import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { ArticleListItemType } from '../shared/types';
import Loading from '../../../../../shared/components/Loading';
import ArticleListItem from './ArticleListItem';

import './ArticleList.css';

const renderArticles = articles => (
  articles.map(article => (
    <Link to={`/${article.id}`} className="ArticleList__item" key={article.id}>
      <ArticleListItem article={article} />
    </Link>
  ))
);

const ArticleList = ({ articles, loading }) => (
  (loading && !articles.length)
    ? <Loading />
    : (
      <div className="ArticleList">
        {renderArticles(articles)}
      </div>
    )
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(ArticleListItemType),
  loading: PropTypes.bool.isRequired,
};

export default ArticleList;
