import React from 'react';
import { PropTypes } from 'prop-types';

import { ArticleListItemType } from '../shared/types';
import ArticleListItem from './ArticleListItem';

import './ArticleList.css';

const renderArticles = articles => (
  articles.map(article => (
    <div className="ArticleList__item" key={article.id}>
      <ArticleListItem article={article} />
    </div>
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
