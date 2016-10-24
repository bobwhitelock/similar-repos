import React, { Component } from 'react';
import DataDisplayer from './DataDisplayer';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class DataFetcher extends Component {
  render() {
    return (
      <div>
        {this.props.data.loading ? null : <DataDisplayer data={this.props.data}/>}
      </div>
    );
  }
}

const StargazersStarredRepos = gql`
query StargazersStarredRepos {
  repositoryOwner(login: "BurntSushi") {
    repository(name: "ripgrep") {
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
