import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Article.css';

const Article = ({ article }) => (
  article ?
    <div className="Article">
      <h2 className="Article__title">{article.title}</h2>
      <h3 className="Article__author">by {article.author}</h3>
      <div className="Article__content">{article.content}</div>
      <div className="Article__published"><strong>Published:</strong> {article.published ? 'Yes' : 'No'}</div>
      <div className="Article__tags"><strong>Tags:</strong> {article.tags && article.tags.join(', ')}</div>
      <Link className="Article__back" to="/">Back</Link>
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
