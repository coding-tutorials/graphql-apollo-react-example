const GraphQL = require('graphql')

const ActorType = new GraphQL.GraphQLObjectType({
  name: 'Actor',
  fields: () => ({
    id: { type: GraphQL.GraphQLString },
    name: { type: GraphQL.GraphQLString }
  })
})

module.exports = ActorType
