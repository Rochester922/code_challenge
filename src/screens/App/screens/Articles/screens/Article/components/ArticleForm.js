import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './ArticleForm.css';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      author: props.author,
      content: props.content,

      id: props.id,
      published: props.published,
      tags: props.tags ? props.tags.join(', ') : '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const excerptLength = 350;
    const article = Object.assign(
      {},
      this.state,
      {
        tags: this.state.tags.split(',').map(s => s.trim()),
        excerpt: this.state.content.substring(0, excerptLength),
      },
    );
    if (!article.id) { // Remove id property when null
      delete article.id;
    }

    this.props.dispatch(this.props.onSubmit(article, this.props.history));
  }

  render() {
    return (
      <div className="ArticleForm">
        <h2 className="ArticleForm__title">{this.props.formTitle}</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="ArticleForm__field">
            <label>
              <div className="ArticleForm__label">Title</div> <input className="ArticleForm__text-input" name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="ArticleForm__field">
            <label>
              <div className="ArticleForm__label">Author</div> <input className="ArticleForm__text-input" name="author" type="text" value={this.state.author} onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="ArticleForm__field">
            <label>
              <div className="ArticleForm__label">Content</div> <textarea name="content" rows="6" className="ArticleForm__text-input" value={this.state.content} onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="ArticleForm__field">
            <label>
              <div className="ArticleForm__label">Tags</div> <input className="ArticleForm__text-input" name="tags" type="text" value={this.state.tags} onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="ArticleForm__field">
            <label>
              <input type="checkbox" name="published" value={this.state.published} onChange={this.onInputChange} /> Published
            </label>
          </div>
          <div className="ArticleForm__actions">
            <button data-test="submit">Save</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}


ArticleForm.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  id: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  published: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default ArticleForm;
