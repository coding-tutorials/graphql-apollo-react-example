const { GraphQLList } = require('graphql')
const ActorType = require('graphql-types/actor')

module.exports = {
  type: new GraphQLList(ActorType),
  resolve: (a, b, context, d) => {
    return [{
      id: 1,
      name: 'Leonardo DiCaprio'
    }]
  }
}
