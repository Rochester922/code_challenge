import { shallow } from 'enzyme';
import React from 'react';

import { ArticleWrapper } from './';
import Article from './components/Article';

describe('ArticleWrapper', () => {
  it('calls getArticle()', () => {
    const getArticle = jest.fn();
    shallow(<ArticleWrapper getArticle={getArticle} match={{ params: { id: '1' } }} />);
    expect(getArticle).toHaveBeenCalled();
  });

  it('renders Article passing its props', () => {
    const getArticle = jest.fn();
    const props = {
      article: { id: '1' },
      deleteArticle() {},
    };

    const wrapper = shallow(
      <ArticleWrapper getArticle={getArticle} match={{ params: { id: '1' } }} {...props} />,
    );
    const articleComponent = wrapper.find(Article);

    expect(articleComponent).toHaveLength(1);
    expect(articleComponent.props()).toEqual(expect.objectContaining(props));
  });
});
