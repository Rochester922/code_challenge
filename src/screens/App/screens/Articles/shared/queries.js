export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = `
query articleById($id: String!) {
  article(id: $id) {
    author
    content
    id
    published
    tags
    title
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
mutation articleCreate($author: String, $content: String, $excerpt: String, $published: Boolean, $tags: [String], $title: String) {
  articleCreate(author: $author, content: $content, excerpt: $excerpt, published: $published, tags: $tags, title: $title) {
    author
    content
    excerpt
    published
    tags
    title
  }
}`;
