import { ApolloServer} from 'apollo-server-express';
import express from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
const app = express();

app.disable('X-powered-by');

const {
    APP_PORT = 5000,
    NODE_ENV = 'development'
} = process.env

const IN_PROD = NODE_ENV === 'production'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: !IN_PROD
})

server.applyMiddleware({ app });


app.listen({port: APP_PORT},()=>console.log(`http:localhost:${APP_PORT}${server.graphqlPath}`))