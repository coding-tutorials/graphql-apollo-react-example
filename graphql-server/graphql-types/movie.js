const GraphQL = require('graphql')

const MovieType = new GraphQL.GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQL.GraphQLString },
    name: { type: GraphQL.GraphQLString }
  })
})

module.exports = MovieType
