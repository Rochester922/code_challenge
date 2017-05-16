import React from 'react';
import { PropTypes } from 'prop-types';
import { ArticleListItemType } from '../shared/types';


import ArticleListItem from './ArticleListItem';

const renderArticles = articles => (
  articles.map(article => (
    <ArticleListItem key={article.id} article={article} />
  ))
);

const ArticleList = ({ articles }) => (
  <div>
    {renderArticles(articles)}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(ArticleListItemType),
};

export default ArticleList;
