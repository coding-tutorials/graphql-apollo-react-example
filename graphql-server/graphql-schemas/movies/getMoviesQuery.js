const { GraphQLList } = require('graphql')
const MovieType = require('graphql-types/movie')

module.exports = {
  type: new GraphQLList(MovieType),
  resolve: (a, b, context, d) => {
    return [{
      id: 1,
      name: 'Catch me if you can'
    }]
  }
}
