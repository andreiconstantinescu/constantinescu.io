const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const {GraphQLServer} = require('graphql-yoga')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const {renderAndCache} = require('./caching')

app.prepare().then(() => {
  const server = new GraphQLServer({typeDefs: types, resolvers})
  const {express} = server
  const whitelistedEndpoints = ['/graphql']

  if (dev) {
    whitelistedEndpoints.push('/playground')
  }

  express.use((req, res, next) => {
    if (whitelistedEndpoints.includes(req.originalUrl)) {
      return next()
    }

    return renderAndCache({req, res, app})
  })

  server.start(
    {
      port,
      endpoint: '/graphql',
      playground: dev ? '/playground' : false,
      cacheControl: true
    },
    ({port}) => console.log(`Listening on ${port}`)
  )
})
