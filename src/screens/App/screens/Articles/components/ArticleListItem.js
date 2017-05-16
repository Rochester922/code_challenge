import React from 'react';
import { ArticleListItemType } from '../shared/types';

import './ArticleListItem.css';

const ArticleListItem = ({ article }) => (
  <div className="ArticleListItem">
    <h2 className="ArticleListItem__title">{article.title}</h2>
    by <h3 className="ArticleListItem__author">{article.author}</h3>
    <div className="ArticleListItem__excerpt">{article.excerpt}</div>
  </div>
);

ArticleListItem.propTypes = {
  article: ArticleListItemType,
};

export default ArticleListItem;
