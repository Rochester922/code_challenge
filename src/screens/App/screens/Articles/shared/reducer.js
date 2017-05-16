const articleList = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES_SUCCESS':
      return action.articles;

    default:
      return state;
  }
};

export {
  articleList,
};
