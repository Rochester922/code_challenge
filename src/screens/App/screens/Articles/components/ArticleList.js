import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { ArticleListItemType } from '../shared/types';
import ArticleListItem from './ArticleListItem';

import './ArticleList.css';

const renderArticles = articles => (
  articles.map(article => (
    <Link to={`/${article.id}`} className="ArticleList__item" key={article.id}>
      <ArticleListItem article={article} />
    </Link>
  ))
);

const ArticleList = ({ articles }) => (
  <div className="ArticleList">
    {renderArticles(articles)}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(ArticleListItemType),
};

export default ArticleList;
