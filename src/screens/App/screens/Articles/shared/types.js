import { PropTypes } from 'prop-types';

export const ArticleListItemType = PropTypes.shape({
  title: PropTypes.string,
  author: PropTypes.string,
  excerpt: PropTypes.string,
});
