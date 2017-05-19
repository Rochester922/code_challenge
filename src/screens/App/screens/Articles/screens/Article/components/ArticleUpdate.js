import React from 'react';
import { connect } from 'react-redux';

import { updateArticle } from '../../../shared/actions';

import ArticleForm from './ArticleForm';

const ArticleUpdate = props => (
  <div>
    <ArticleForm
      {...props}
      formTitle="Update article"
      onSubmit={updateArticle}
    />
  </div>
);

export default connect()(ArticleUpdate);
