import { shallow } from 'enzyme';
import React from 'react';

import ArticleList from './ArticleList';
import ArticleListItem from './ArticleListItem';
import Loading from '../../../../../shared/components/Loading';

describe('<ArticleList />', () => {
  it('renders Loading when loading and there are no articles', () => {
    const wrapper = shallow(<ArticleList articles={[]} loading />);
    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('renders ArticleListItems when not loading', () => {
    const wrapper = shallow(<ArticleList articles={[{ id: 1 }, { id: 2 }]} loading={false} />);
    expect(wrapper.find(Loading)).toHaveLength(0);
    expect(wrapper.find(ArticleListItem)).toHaveLength(2);
  });

  it('renders ArticleListItems when loading and there are articles', () => {
    const wrapper = shallow(<ArticleList articles={[{ id: 1 }, { id: 2 }]} loading />);
    expect(wrapper.find(Loading)).toHaveLength(0);
    expect(wrapper.find(ArticleListItem)).toHaveLength(2);
  });
});
