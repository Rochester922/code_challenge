const articleList = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES_SUCCESS':
      return action.articles;
    case 'ARTICLE_DELETE_SUCCESS':
      return state.filter(article => article.id !== action.id);

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

    case 'ARTICLE_DELETE_SUCCESS':
      return Object.assign(
        {},
        state,
        { [action.id]: undefined },
      );

    default:
      return state;
  }
};

const loadingArticles = (state = false, action) => {
  switch (action.type) {
    case 'ARTICLES_REQUEST': {
      return true;
    }
    case 'ARTICLES_FAIL':
    case 'ARTICLES_SUCCESS': {
      return false;
    }
    default:
      return state;
  }
};

export {
  articleList,
  articleDetails,
  loadingArticles,
};
