import { shallow } from 'enzyme';
import React from 'react';

import Article from './Article';

describe('Article', () => {
  describe('when showing detail screen', () => {
    const match = {
      isExact: true,
    };

    it('shows title, author and content', () => {
      const article = {
        title: 'This is the title',
        author: 'Author name',
        content: 'Lorem ipsum',
      };
      const wrapper = shallow(<Article article={article} match={match} />);
      expect(wrapper.contains(article.title)).toEqual(true);
      expect(wrapper.contains(article.author)).toEqual(true);
      expect(wrapper.contains(article.content)).toEqual(true);
    });

    it('shows when the article is published', () => {
      const article = {
        published: true,
      };
      const wrapper = shallow(<Article article={article} match={match} />);
      const published = wrapper.find('[data-test="article.published"]').first();
      expect(published.text()).toMatch('Published: Yes');
    });

    it('shows when the article is not published', () => {
      const article = {
        published: false,
      };
      const wrapper = shallow(<Article article={article} match={match} />);
      const published = wrapper.find('[data-test="article.published"]').first();
      expect(published.text()).toMatch('Published: No');
    });

    it('shows the tag list joined by commas', () => {
      const article = {
        tags: ['tag 1', 'tag2', 'this is tag 3'],
      };
      const wrapper = shallow(<Article article={article} match={match} />);
      const published = wrapper.find('[data-test="article.tags"]').first();
      expect(published.text()).toMatch('Tags: tag 1, tag2, this is tag 3');
    });


    it('shows the tag label but no tags when the list is empty', () => {
      const article = {
        tags: [],
      };
      const wrapper = shallow(<Article article={article} match={match} />);
      const published = wrapper.find('[data-test="article.tags"]').first();
      expect(published.text()).toMatch('Tags:');
    });

    it('calls deleteArticle with id and history when delete is clicked', () => {
      const history = {};
      const article = { id: 1 };
      const deleteArticle = jest.fn();
      const wrapper = shallow(
        <Article article={article} deleteArticle={deleteArticle} match={match} history={history} />,
      );
      wrapper.find('[data-test="article.delete"]').simulate('click');
      expect(deleteArticle).toHaveBeenCalledWith(1, history);
    });
  });
});
