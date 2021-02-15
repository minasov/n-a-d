const { ApolloServer, gql } = require('apollo-server-express');
import * as express from 'express';

import mySchema from './schema'

const server = new ApolloServer({ schema: mySchema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
