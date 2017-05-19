import request from '../../../../../shared/request';
import { ARTICLES_QUERY, ARTICLE_QUERY, ARTICLE_DELETE_MUTATION, ARTICLE_CREATE_MUTATION, ARTICLE_UPDATE_MUTATION } from './queries';

export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_REQUEST = 'ARTICLES_REQUEST';
export const ARTICLES_FAILURE = 'ARTICLES_FAILURE';


export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE';

export const ARTICLE_CREATE_SUCCESS = 'ARTICLE_CREATE_SUCCESS';
export const ARTICLE_CREATE_REQUEST = 'ARTICLE_CREATE_REQUEST';
export const ARTICLE_CREATE_FAILURE = 'ARTICLE_CREATE_FAILURE';

export const ARTICLE_UPDATE_SUCCESS = 'ARTICLE_UPDATE_SUCCESS';
export const ARTICLE_UPDATE_REQUEST = 'ARTICLE_UPDATE_REQUEST';
export const ARTICLE_UPDATE_FAILURE = 'ARTICLE_UPDATE_FAILURE';

export const ARTICLE_DELETE_SUCCESS = 'ARTICLE_DELETE_SUCCESS';
export const ARTICLE_DELETE_REQUEST = 'ARTICLE_DELETE_REQUEST';
export const ARTICLE_DELETE_FAILURE = 'ARTICLE_DELETE_FAILURE';

export const getArticles = () => dispatch => {
  dispatch({
    type: ARTICLES_REQUEST,
  });

  return request(ARTICLES_QUERY).then(response => (
    dispatch({
      type: ARTICLES_SUCCESS,
      articles: response.data.articles,
    })
  ));
};

export const getArticle = id => dispatch => {
  dispatch({
    type: ARTICLE_REQUEST,
  });

  return request(ARTICLE_QUERY, { id }).then(response => (
    dispatch({
      type: ARTICLE_SUCCESS,
      article: response.data.article,
    })
  ));
};

export const deleteArticle = (id, history) => dispatch => {
  dispatch({
    type: ARTICLE_DELETE_REQUEST,
    id,
  });

  return request(ARTICLE_DELETE_MUTATION, { id }).then(response => {
    history.push('/');

    return dispatch({
      type: ARTICLE_DELETE_SUCCESS,
      id: response.data.articleDelete.id,
    });
  });
};

export const createArticle = (article, history) => dispatch => {
  dispatch({
    type: ARTICLE_CREATE_REQUEST,
    article,
  });

  return request(ARTICLE_CREATE_MUTATION, article).then(response => {
    history.push('/');

    return dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      article: response.data.article,
    });
  });
};

export const updateArticle = (article, history) => dispatch => {
  dispatch({
    type: ARTICLE_UPDATE_REQUEST,
    article,
  });

  return request(ARTICLE_UPDATE_MUTATION, article).then(response => {
    history.push(`/${response.data.article.id}`);

    return dispatch({
      type: ARTICLE_UPDATE_SUCCESS,
      article: response.data.article,
    });
  });
};

