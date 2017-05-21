import { shallow } from 'enzyme';
import React from 'react';

import { Articles } from './Articles';
import ArticleList from './components/ArticleList';

describe('Articles', () => {
  it('calls getArticles()', () => {
    const getArticles = jest.fn();
    shallow(<Articles getArticles={getArticles} loading={false} />);
    expect(getArticles).toHaveBeenCalled();
  });

  it('renders ArticleList', () => {
    const getArticles = jest.fn();
    const articles = [{ id: 1 }, { id: 2 }];

    const wrapper = shallow(
      <Articles getArticles={getArticles} loading={false} articles={articles} />,
    );
    const list = wrapper.find(ArticleList);

    const expected = {
      loading: false,
      articles,
    };

    expect(list).toHaveLength(1);
    expect(list.props()).toEqual(expect.objectContaining(expected));
  });
});
