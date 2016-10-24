import React, { Component } from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    // TODO: Bad idea in this class to rely on state always having current,
    // up-to-date state? Use setState callback instead?
    this.state = {
      current: {
        user: 'BurntSushi',
        repo: 'ripgrep',
      },
      next: {
        user: '',
        repo: '',
      }
    }
  }

  render() {
    const {user, repo} = this.state.current

    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleChangeUser.bind(this)}
          />
          <input
            type="text"
            value={this.state.repo}
            onChange={this.handleChangeRepo.bind(this)}
          />
          <button
            type="button"
            onClick={this.handleEnterRepo.bind(this)}
          >
          Go
        </button>
        </form>

        <DataFetcher user={user} repo={repo}/>
      </div>
    );
  }

  handleChangeUser(event) {
    this.handleInput('user', event)
  }

  handleChangeRepo(event) {
    this.handleInput('repo', event)
  }

  handleInput(field, event) {
    this.setState({
      next: {
        ...this.state.next,
        [field]: event.target.value
      }
    })
  }

  handleEnterRepo() {
    this.setState({
      current: this.state.next,
      // TODO: Reset the search state and clear inputs iff result found?
      // next: {
      //   user: '',
      //   repo: '',
      // }
    })
  }
}

export default App;
