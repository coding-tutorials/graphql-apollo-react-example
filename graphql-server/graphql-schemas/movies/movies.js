const getMoviesQuery = require('./getMoviesQuery')
const removeMovies = require('./removeMovies')

module.exports = {
  mutations: {
    removeMovies
  },
  queries: {
    getMoviesQuery
  }
}
