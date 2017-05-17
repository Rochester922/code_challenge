import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Article.css';

const Article = ({ article, deleteArticle, history }) => (
  article ?
    <div className="Article">
      <Link className="Article__back" to="/">Back</Link>
      <h2 className="Article__title">{article.title}</h2>
      <h3 className="Article__author">by {article.author}</h3>
      <div className="Article__content">{article.content}</div>
      <div className="Article__published"><strong>Published:</strong> {article.published ? 'Yes' : 'No'}</div>
      <div className="Article__tags"><strong>Tags:</strong> {article.tags && article.tags.join(', ')}</div>
      <div className="Article__actions">
        <button onClick={() => deleteArticle(article.id, history)}>Delete</button>
      </div>
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
  deleteArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Article;
