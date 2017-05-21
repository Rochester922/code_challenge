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

mutation articleCreate($author: String, $content: String, $excerpt: String, $published: Boolean, $tags: [String], $title: String) {
  articleCreate(author: $author, content: $content, excerpt: $excerpt, published: $published, tags: $tags, title: $title) {
    ...ArticleDetail
  }
}`;

export const ARTICLE_UPDATE_MUTATION = `
${ARTICLE_DETAIL_FRAGMENT}

mutation articleUpdate($id: String!, $author: String, $content: String, $excerpt: String, $published: Boolean, $tags: [String], $title: String) {
  articleUpdate(id: $id, author: $author, content: $content, excerpt: $excerpt, published: $published, tags: $tags, title: $title) {
    ...ArticleDetail
  }
}`;
