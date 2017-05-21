import React from 'react';
import ReactDOM from 'react-dom';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { mount } from 'enzyme';

import App from './';

axios.defaults.adapter = httpAdapter;

describe('App', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { articles: [] } });
    ReactDOM.render(<App />, div);
  });

  it('was made with ❤', () => {
    nock('http://localhost:4000')
      .post('/graphql')
      .reply(200, { data: { articles: [] } });
    const wrapper = mount(<App />);
    expect(wrapper.text()).toMatch('♥');
  });
});
