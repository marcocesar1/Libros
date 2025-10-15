import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    userId: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }

  input CreateBookInput {
    title: String!
    author: String!
    userId: String!
  }

  input UpdateBookInput {
    title: String
    author: String
  }

  type Query {
    user(id: ID!): User
    users: [User!]!

    userBooks(userId: ID!): [Book]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    deleteUser(id: ID!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!

    createBook(input: CreateBookInput!): Book!
    updateBook(id: ID!, input: UpdateBookInput!): Book!
    deleteBook(id: ID!): Book!
  }
`;

export default typeDefs;
