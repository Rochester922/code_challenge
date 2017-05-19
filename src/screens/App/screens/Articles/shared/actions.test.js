import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';


import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_DELETE_REQUEST,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  getArticles,
  getArticle,
  deleteArticle,
  createArticle,
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


axios.defaults.adapter = httpAdapter;

describe('getArticles', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates ARTICLES_* lifecycle actions', () => {
    const articles = [1, 2];
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { articles } });

    const initialState = [];
    const store = mockStore(initialState);

    const expected = [
      { type: ARTICLES_REQUEST },
      { type: ARTICLES_SUCCESS, articles },
    ];

    return store.dispatch(getArticles())
      .then(() => {
        const actual = store.getActions();
        expect(actual).toEqual(expected);
      });
  });
});

describe('getArticle', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates ARTICLE_* lifecycle actions', () => {
    const article = { id: 1 };
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { article } });

    const initialState = [];
    const store = mockStore(initialState);

    const expected = [
      { type: ARTICLE_REQUEST },
      { type: ARTICLE_SUCCESS, article },
    ];

    return store.dispatch(getArticle(1))
      .then(() => {
        const actual = store.getActions();
        expect(actual).toEqual(expected);
      });
  });
});


describe('deleteArticle', () => {
  afterEach(() => {
    nock.cleanAll();
  });


  it('creates ARTICLE_DELETE_* lifecycle actions', () => {
    const articleDelete = { id: 1 };
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { articleDelete } });

    const initialState = [];
    const store = mockStore(initialState);

    const expected = [
      { type: ARTICLE_DELETE_REQUEST, id: 1 },
      { type: ARTICLE_DELETE_SUCCESS, id: 1 },
    ];

    const push = jest.fn();
    const history = { push };

    return store.dispatch(deleteArticle(1, history))
      .then(() => {
        const actual = store.getActions();
        expect(actual).toEqual(expected);
      });
  });

  it('redirects to "/"', () => {
    const articleDelete = { id: 1 };
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { articleDelete } });

    const initialState = [];
    const store = mockStore(initialState);

    const push = jest.fn();
    const history = { push };

    return store.dispatch(deleteArticle(1, history))
      .then(() => {
        expect(push).toBeCalledWith('/');
      });
  });
});


describe('createArticle', () => {
  afterEach(() => {
    nock.cleanAll();
  });


  it('creates ARTICLE_CREATE_* lifecycle actions', () => {
    const article = { id: 1 };
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { article } });

    const initialState = [];
    const store = mockStore(initialState);

    const expected = [
      { type: ARTICLE_CREATE_REQUEST, article },
      { type: ARTICLE_CREATE_SUCCESS, article },
    ];

    const push = jest.fn();
    const history = { push };

    return store.dispatch(createArticle(article, history))
      .then(() => {
        const actual = store.getActions();
        expect(actual).toEqual(expected);
      });
  });

  it('redirects to "/"', () => {
    const article = { id: 1 };
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { article } });

    const initialState = [];
    const store = mockStore(initialState);

    const push = jest.fn();
    const history = { push };

    return store.dispatch(createArticle(1, history))
      .then(() => {
        expect(push).toBeCalledWith('/');
      });
  });
});
