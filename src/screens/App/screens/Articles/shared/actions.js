import request from '../../../../../shared/request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';

export const getArticles = () => dispatch => {
  request(ARTICLES_QUERY).then(response => (
    dispatch({
      type: 'ARTICLES_SUCCESS',
      articles: response.data.articles,
    })
  ));

  dispatch({
    type: 'ARTICLES_REQUEST',
  });
};

export const getArticle = id => dispatch => {
  request(ARTICLE_QUERY, { id }).then(response => (
    dispatch({
      type: 'ARTICLE_SUCCESS',
      article: response.data.article,
    })
  ));

  dispatch({
    type: 'ARTICLE_REQUEST',
  });
};
