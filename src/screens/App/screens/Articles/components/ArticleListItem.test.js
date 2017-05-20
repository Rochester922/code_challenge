import { shallow } from 'enzyme';
import React from 'react';

import ArticleListItem from './ArticleListItem';

describe('ArticleListItem', () => {
  it('shows title, author and excerpt', () => {
    const article = {
      title: 'This is the title',
      author: 'Author name',
      excerpt: 'Lorem ipsum',
    };
    const wrapper = shallow(<ArticleListItem article={article} />);
    expect(wrapper.contains(article.title)).toEqual(true);
    expect(wrapper.contains(article.author)).toEqual(true);
    expect(wrapper.contains(article.excerpt)).toEqual(true);
  });
});
