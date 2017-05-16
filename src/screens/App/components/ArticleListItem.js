import React from 'react';

const ArticleListItem = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <div>{article.excerpt}</div>
  </div>
);

export default ArticleListItem;
