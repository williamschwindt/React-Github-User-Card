import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios
    .get("https://api.github.com/users/williamschwindt")

    .then((res) => {
      console.log(res);
      this.setState({ user:res.data });
    })

    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
