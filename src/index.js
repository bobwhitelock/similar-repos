import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import './index.css';

// TODO: Handle token better.
import token from './github-token';
const authHeader = `bearer ${token}`

const networkInterface = createNetworkInterface('https://api.github.com/graphql');

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    req.options.headers.authorization = authHeader;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
