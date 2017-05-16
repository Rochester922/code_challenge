import React from 'react';

const ArticleList = ({ articles }) => (
  <pre>{JSON.stringify(articles, null, 2)}</pre>
);

export default ArticleList;
