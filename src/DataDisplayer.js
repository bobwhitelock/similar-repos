import React, { Component } from 'react';
import _ from 'lodash';
import JSONTree from 'react-json-tree';

class DataDisplayer extends Component {
  render() {
    const mainRepo = this.props.data.repositoryOwner.repository
    const stargazers = mainRepo.stargazers.edges

    const starredRepos = _(stargazers)
    .flatMap('node.starredRepositories.edges')
    .map('node')
    .value()
    console.log(starredRepos) // eslint-disable-line no-console

    const mostStarredRepos = _(starredRepos)
    .groupBy('id')
    .orderBy('length', 'desc')
    .map(repoArray => {
      // Every element is the same, so just take the first and merge in count.
      const repo = repoArray[0]
      repo.count = repoArray.length
      return repo
    })
    .filter(repo => !(repo.id === mainRepo.id))
    .value()
    console.log(mostStarredRepos) // eslint-disable-line no-console

    for (let i=0; i<10; i++) {
      const repo = mostStarredRepos[i]
      console.log(repo.name, ' - ', repo.count)
    }

    return (
      <div>
        <JSONTree data={this.props.data}/>
      </div>
    );
  }
}

export default DataDisplayer
