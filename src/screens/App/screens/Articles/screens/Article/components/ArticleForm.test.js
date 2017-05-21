import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ArticleForm from './ArticleForm';

describe('ArticleForm', () => {
  const article = {
    id: '1',
    author: 'author name',
    title: 'article title',
    content: 'the content',
    published: true,
    tags: ['1', '2'],
  };

  it('renders values from props', () => {
    const wrapper = shallow(
      <ArticleForm
        {...article}
        formTitle={'Form title'}
        onSubmit={jest.fn()}
      />,
    );
    const inputNamed = name => wrapper.find(`[name="${name}"]`);
    const valueOf = name => inputNamed(name).props().value;
    const checkboxValueOf = name => inputNamed(name).props().checked;

    expect(valueOf('author')).toEqual(article.author);
    expect(valueOf('title')).toEqual(article.title);
    expect(valueOf('content')).toEqual(article.content);
    expect(checkboxValueOf('published')).toEqual(article.published);
    expect(valueOf('tags')).toEqual('1, 2');
  });

  it('updates values', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ArticleForm
          {...article}
          formTitle={'Form title'}
          onSubmit={jest.fn()}
        />
      </MemoryRouter>,
    );
    const inputNamed = name => wrapper.find(`[name="${name}"]`);
    const valueOf = name => inputNamed(name).props().value;
    const checkboxValueOf = name => inputNamed(name).props().checked;
    const updateValueOf = (name, value) => {
      const input = inputNamed(name);
      const field = input.node.type === 'checkbox' ? 'checked' : 'value';
      input.node[field] = value;
      input.simulate('change', input);
    };
    updateValueOf('author', 'author updated');
    updateValueOf('title', 'title updated');
    updateValueOf('content', 'content updated');
    updateValueOf('published', false);
    updateValueOf('tags', 'tag one, tag two');
    expect(valueOf('author')).toEqual('author updated');
    expect(valueOf('title')).toEqual('title updated');
    expect(valueOf('content')).toEqual('content updated');
    expect(checkboxValueOf('published')).toEqual(false);
    expect(valueOf('tags')).toEqual('tag one, tag two');
  });

  it('submits the form', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = mount(
      <MemoryRouter>
        <ArticleForm
          {...article}
          formTitle={'Form title'}
          onSubmit={onSubmit}
          history={history}
        />
      </MemoryRouter>,
    );

    const expected = Object.assign({}, article, { excerpt: 'the content' });
    wrapper.find('[data-test="submit"]').simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith(expected, history);
  });

  it('trims excerpt length to 350 chars', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const content = Array(360).join('x');

    const wrapper = mount(
      <MemoryRouter>
        <ArticleForm
          {...article}
          content={content}
          formTitle={'Form title'}
          onSubmit={onSubmit}
          history={history}
        />
      </MemoryRouter>,
    );

    const expected = Object.assign({}, article, { content, excerpt: Array(351).join('x') });
    wrapper.find('[data-test="submit"]').simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith(expected, history);
  });
});
