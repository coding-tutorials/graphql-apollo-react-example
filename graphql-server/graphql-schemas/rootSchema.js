const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const fs = require('fs')
const path = require('path')

const schemas = fs.readdirSync(__dirname)
                  .filter((directory) =>
                    fs.lstatSync(path.join(__dirname, directory)).isDirectory())
                  .map((directory) =>
                    require(`./${directory}/${directory}`))

const queries = schemas.reduce((acc, schema) =>
  Object.assign({}, acc, schema.queries)
, {})

const mutations = schemas.reduce((acc, schema) =>
  Object.assign({}, acc, schema.mutations)
, {})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => (queries)
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => (mutations)
  })
})
