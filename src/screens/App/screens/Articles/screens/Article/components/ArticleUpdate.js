import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { updateArticle } from '../../../shared/actions';

import ArticleForm from './ArticleForm';

class ArticleUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      author: props.author,
      content: props.content,

      id: props.id,
      published: props.published,
      tags: props.tags ? props.tags.join(", ") : '',
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
    this.props.dispatch(updateArticle(article, this.props.history));
  }

  render() {
    return (
      <div>
        <ArticleForm
          {...this.state}
          formTitle="Update article"
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

ArticleUpdate.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default connect()(ArticleUpdate);
