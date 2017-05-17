import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} from 'graphql';
import db from './db';

const articleFields = {
  author: {
    type: GraphQLString,
  },
  content: {
    type: GraphQLString,
  },
  excerpt: {
    type: GraphQLString,
  },
  published: {
    type: GraphQLBoolean,
  },
  tags: {
    type: new GraphQLList(GraphQLString),
  },
  title: {
    type: GraphQLString,
  },
};

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => Object.assign(
    {},
    articleFields,
    {
      id: {
        type: GraphQLString,
      },
    },
  ),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(post, { id }) {
        return db.Article.findById(id);
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    articleDelete: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(value, { id }) {
        return db.Article.findByIdAndRemove(id).exec();
      },
    },
    articleCreate: {
      type: articleType,
      args: articleFields,
      resolve(value, input) {
        const article = new db.Article(input);
        return article.save();
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
