import React from 'react';
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

export default ArticleList;
