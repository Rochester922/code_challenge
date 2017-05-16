import React from 'react';
import { ArticleListItemType } from '../shared/types';

const ArticleListItem = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <div>{article.excerpt}</div>
  </div>
);

ArticleListItem.propTypes = {
  article: ArticleListItemType,
};

export default ArticleListItem;
