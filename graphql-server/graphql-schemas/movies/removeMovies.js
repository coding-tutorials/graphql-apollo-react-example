const { GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: async (a, { id }, context, b) => {

    console.log("id", id)
    return true
  }
}
