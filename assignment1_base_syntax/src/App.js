import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    people: [
      { username: "Bill"},
      { username: "Sarah"},
      { username: "Kristen"},
      { username: "Winslow"}
    ]
  };

  showNickNameHandler = (nickName) => {
    this.setState({
      people: [
        { username: "Bill", nickName: "Keep It Trill Bill"},
        { username: "Sarah", nickName: "Sare Bear"},
        { username: "Kristen", nickName: "KK"},
        { username: "Winslow", nickName: "The Detective"}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { username: event.target.value, nickName: "Keep It Trill Bill"},
        { username: "Sarah", nickName: "Sare Bear"},
        { username: "Kristen", nickName: "KK"},
        { username: "Winslow", nickName: "The Detective"}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is Assignment #1</h1>
        <UserInput
          currentName={this.state.people[0].username}
          changed={this.nameChangedHandler}
        />

        <UserOutput
          username={this.state.people[0].username}
          nickName={this.state.people[0].nickName}
          click={this.showNickNameHandler.bind(this)}
          currentName={this.state.people[0].username}
          // changed={this.nameChangedHandler}
        />
        <UserOutput
          username={this.state.people[1].username}
          nickName={this.state.people[1].nickName}
          click={this.showNickNameHandler.bind(this, this.state.people[1].nickName)}
        />
        <UserOutput
          username={this.state.people[2].username}
          nickName={this.state.people[2].nickName}
          click={this.showNickNameHandler.bind(this, this.state.people[2].nickName)}
        />
        <UserOutput
          username={this.state.people[3].username}
          nickName={this.state.people[3].nickName}
          click={this.showNickNameHandler.bind(this, this.state.people[3].nickName)}
        />
      </div>
    );
  }
}

export default App;
