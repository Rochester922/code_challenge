import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateArticle } from '../../../shared/actions';

import ArticleForm from './ArticleForm';

const ArticleUpdate = props => (
  <div>
    <ArticleForm
      {...props}
      formTitle="Update article"
    />
  </div>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onSubmit: updateArticle }, dispatch)
);

export default connect(undefined, mapDispatchToProps)(ArticleUpdate);
