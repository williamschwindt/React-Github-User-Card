import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios
    .get("https://api.github.com/users/williamschwindt")

    .then((res) => {
      console.log(res);
      this.setState({ user: res.data });
    })

    .catch(err => {
      console.log(err);
    })

    axios
    .get("https://api.github.com/users/williamschwindt/followers")

    .then((res) => {
      console.log(res);
      this.setState({ followers: res.data });
    })

    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <h1 className="followers-title">Followers</h1>
        <FollowersCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
