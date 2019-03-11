import { ApolloServer} from 'apollo-server-express';
import express from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { APP_PORT, NODE_ENV, DB_USER,  DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, IN_PROD} from './config';   

var mongoose = require('mongoose');
const app = express();

app.disable('X-powered-by');

(async()=>{
    try{
        mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{useNewUrlParser: true});

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: !IN_PROD
        })
        
        server.applyMiddleware({ app });
        
        
        app.listen({port: APP_PORT},()=>console.log(`http:localhost:${APP_PORT}${server.graphqlPath}`))
    }
    catch(e ){console.error(e)}
})()