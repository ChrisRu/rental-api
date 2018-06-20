import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import { schema } from './schema';

const PORT = 3000;

const app = express()
  .use(cors())
  .use(
    '/graphql',
    bodyParser.json(),
    graphqlHTTP({
      schema
    })
  )
  .use(
    '/graphiql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
  .get('/', (req, res) => {
    res.send('Hello!');
  })
  .listen(
    PORT,
    console.log(`Server is now running on http://localhost:${PORT}`)
  );
