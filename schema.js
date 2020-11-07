const { gql } = require('apollo-server')

const typeDefs = gql`
  type Word {
    id: ID!
    word: String!
    meaning: String
  }
  
  type Group {
    id: ID!
    name: String!
    words: [Word]
  }

  type Query {
    words: [Word!]
    groups: [Group!]
    word (id: ID!): Word
    group (id: ID!): Group
  }

  input WordInput {
    word: String!
    meaning: String
  }
  
  type Mutation {
    addWord(word: String!, meaning: String): Word!
    editWord(id: ID!, word: String!, meaning: String): Word!
    deleteWord(id: ID!): Word!

    addGroup(name: String!, words: [WordInput!]): Group!
    editGroup(id: ID!, name: String!): Group!
    deleteGroup(id: ID!): Group!
  }
`

module.exports = typeDefs