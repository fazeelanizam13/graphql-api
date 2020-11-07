const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
