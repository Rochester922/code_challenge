import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './ArticleForm.css';

const ArticleForm = props => (
  <div className="ArticleForm">
    <h2 className="ArticleForm__title">{props.formTitle}</h2>

    <form onSubmit={props.onSubmit}>
      <div className="ArticleForm__field">
        <label>
          <div className="ArticleForm__label">Title</div> <input className="ArticleForm__text-input" name="title" type="text" value={props.title} onChange={props.onInputChange} />
        </label>
      </div>
      <div className="ArticleForm__field">
        <label>
          <div className="ArticleForm__label">Author</div> <input className="ArticleForm__text-input" name="author" type="text" value={props.author} onChange={props.onInputChange} />
        </label>
      </div>
      <div className="ArticleForm__field">
        <label>
          <div className="ArticleForm__label">Content</div> <textarea name="content" rows="6" className="ArticleForm__text-input" value={props.content} onChange={props.onInputChange} />
        </label>
      </div>
      <div className="ArticleForm__field">
        <label>
          <div className="ArticleForm__label">Tags</div> <input className="ArticleForm__text-input" name="tags" type="text" value={props.tags} onChange={props.onInputChange} />
        </label>
      </div>
      <div className="ArticleForm__field">
        <label>
          <input type="checkbox" name="published" value={props.published} onChange={props.onInputChange} /> Published
        </label>
      </div>
      <div className="ArticleForm__actions">
        <button>Save</button>
        <Link to="/">Cancel</Link>
      </div>
    </form>
  </div>
);

ArticleForm.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  published: PropTypes.bool,
  tags: PropTypes.string,
  title: PropTypes.string,
};

export default ArticleForm;
