const articleList = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES_SUCCESS':
      return action.articles;

    default:
      return state;
  }
};

const articleDetails = (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_SUCCESS': {
      const { id } = action.article;

      return Object.assign(
        {},
        state,
        { [id]: action.article },
      );
    }

    default:
      return state;
  }
};

export {
  articleList,
  articleDetails,
};
