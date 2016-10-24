import React, { Component } from 'react';
import DataDisplayer from './DataDisplayer';
import ErrorDisplayer from './ErrorDisplayer';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class DataFetcher extends Component {
  render() {
    const {data, data: {error}} = this.props
    if (data.loading) {
      return <div>Loading...</div>
    }
    else if (error) {
      return <ErrorDisplayer error={error}/>
    }
    else {
      return <DataDisplayer data={data}/>
    }
  }
}

const StargazersStarredRepos = gql`
query StargazersStarredRepos($user: String!, $repo: String!) {
  repositoryOwner(login: $user) {
    repository(name: $repo) {
      id,
      name,
      description,
      stargazers(last: 30) {
        edges {
          node {
            login,
            starredRepositories(last: 30) {
              edges {
                node {
                  id,
                  name,
                  description
                }
              }
            }
          }
        }
      }
    }
  }
}`

export default graphql(StargazersStarredRepos)(DataFetcher);
