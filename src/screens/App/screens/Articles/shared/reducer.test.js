import {
  articleList,
  articleDetails,
  loadingArticles,
} from './reducer';

import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  ARTICLES_FAILURE,
  ARTICLE_SUCCESS,
  ARTICLE_DELETE_SUCCESS,
} from './actions';

describe('articleList', () => {
  it('should be initially empty', () => {
    const state = undefined;
    const actual = articleList(state, {});
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it('should replace articles on ARTICLES_SUCCESS', () => {
    const prevState = [1, 2];
    const expected = [3, 4];
    const action = {
      type: ARTICLES_SUCCESS,
      articles: expected,
    };
    const actual = articleList(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should remove article on ARTICLE_DELETE_SUCCESS', () => {
    const prevState = [{ id: 1 }, { id: 2 }];
    const expected = [prevState[1]];
    const action = {
      type: ARTICLE_DELETE_SUCCESS,
      id: 1,
    };
    const actual = articleList(prevState, action);
    expect(actual).toEqual(expected);
  });
});


describe('articleDetails', () => {
  it('should be initially empty', () => {
    const state = undefined;
    const actual = articleDetails(state, {});
    const expected = {};
    expect(actual).toEqual(expected);
  });

  it('should add article on ARTICLE_SUCESS', () => {
    const state = { 1: { id: 1 } };
    const action = {
      type: ARTICLE_SUCCESS,
      article: {
        id: 3,
      },
    };
    const actual = articleDetails(state, action);
    const expected = { 1: { id: 1 }, 3: action.article };
    expect(actual).toEqual(expected);
  });

  it('should remove article on ARTICLE_DELETE_SUCESS', () => {
    const state = { 1: { id: 1 }, 2: { id: 2 } };
    const action = {
      type: ARTICLE_DELETE_SUCCESS,
      id: 1,
    };
    const actual = articleDetails(state, action);
    const expected = { 2: { id: 2 } };
    expect(actual).toEqual(expected);
  });
});


describe('loadingArticles', () => {
  it('should be initially false', () => {
    const state = undefined;
    const actual = loadingArticles(state, {});
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('should return true on ARTICLES_REQUEST', () => {
    const state = false;
    const action = {
      type: ARTICLES_REQUEST,
    };
    const actual = loadingArticles(state, action);
    const expected = true;
    expect(actual).toEqual(expected);
  });


  it('should return false on ARTICLES_SUCCESS', () => {
    const state = true;
    const action = {
      type: ARTICLES_SUCCESS,
    };
    const actual = loadingArticles(state, action);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('should return false on ARTICLES_FAILURE', () => {
    const state = true;
    const action = {
      type: ARTICLES_FAILURE,
    };
    const actual = loadingArticles(state, action);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});
