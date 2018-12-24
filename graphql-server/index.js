const express = require('express')
const expressGraphQl = require('express-graphql')
const rootSchema = require('./graphql-schemas/rootSchema')

const app = express()
app.use('/graphql', expressGraphQl({
  graphiql: true,
  schema: rootSchema
}))

app.listen(3000, () => console.log('running on :3000'))
