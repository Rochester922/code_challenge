import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';


import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  getArticles,
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
