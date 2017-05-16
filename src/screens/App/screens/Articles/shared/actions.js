import request from '../../../../../shared/request';
import { ARTICLES_QUERY } from './queries';

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
