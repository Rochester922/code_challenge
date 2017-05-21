const ARTICLE_SUMMARY_FRAGMENT = `
fragment ArticleSummary on Article {
  author
  excerpt
  id
  title
}
`;

const ARTICLE_DETAIL_FRAGMENT = `
fragment ArticleDetail on Article {
    author
    content
    id
    published
    tags
    title
}
`;
export const ARTICLES_QUERY = `
${ARTICLE_SUMMARY_FRAGMENT}

query {
  articles {
    ...ArticleSummary
  }
}`;

export const ARTICLE_QUERY = `
${ARTICLE_DETAIL_FRAGMENT}

query articleById($id: String!) {
  article(id: $id) {
    ...ArticleDetail
  }
}
`;

export const ARTICLE_DELETE_MUTATION = `
mutation articleDelete($id: String!) {
  articleDelete(id: $id) {
    id
  }
}
`;

export const ARTICLE_CREATE_MUTATION = `
${ARTICLE_DETAIL_FRAGMENT}

mutation articleCreate($input: ArticleInput) {
  articleCreate(input: $input) {
    ...ArticleDetail
  }
}`;

export const ARTICLE_UPDATE_MUTATION = `
${ARTICLE_DETAIL_FRAGMENT}

mutation articleUpdate($input: ArticleUpdateInput) {
  articleUpdate(input: $input) {
    ...ArticleDetail
  }
}`;
