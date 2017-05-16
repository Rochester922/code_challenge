import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ article }) => (
  article ?
    <div>
      <h2>{article.title}</h2>
      <h3>by {article.author}</h3>
      <div>{article.content}</div>
      <div>Published: {article.published ? 'Yes' : 'No'}</div>
      <div>Tags: {article.tags && article.tags.join(', ')}</div>
      <Link to="/">Back</Link>
    </div> :
    <div>Loading...</div>
);

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    published: PropTypes.boolean,
  }),
};

export default Article;
