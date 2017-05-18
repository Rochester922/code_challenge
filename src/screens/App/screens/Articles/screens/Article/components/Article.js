import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import ArticleUpdate from './ArticleUpdate';
import Loading from '../../../../../../../shared/components/Loading';

import './Article.css';

const renderArticle = ({ article, deleteArticle, history, match }) => (
  match.isExact
  ?
    <div className="Article">
      <Link className="Article__back" to="/">Back</Link>
      <h2 className="Article__title">{article.title}</h2>
      <h3 className="Article__author">by {article.author}</h3>
      <div className="Article__content">{article.content}</div>
      <div className="Article__published"><strong>Published:</strong> {article.published ? 'Yes' : 'No'}</div>
      <div className="Article__tags"><strong>Tags:</strong> {article.tags && article.tags.join(', ')}</div>
      <div className="Article__actions">
        <button onClick={() => deleteArticle(article.id, history)}>Delete</button>
        <Link to={`/${article.id}/edit`}>Edit</Link>
      </div>
    </div>
  : <Route path={`${match.path}/edit`} render={() => <ArticleUpdate {...article} history={history} />} />
);

const articleType = PropTypes.shape({
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  published: PropTypes.boolean,
});

renderArticle.propTypes = {
  article: articleType,
  deleteArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

const Article = props => (
  props.article
    ? renderArticle(props)
    : <Loading />
);

Article.propTypes = {
  article: articleType,
};


export default Article;
