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
