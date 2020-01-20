import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "Some value"
  };

  switchNameHandler = () => {
    console.log("Was clicked!");
    //Don't try to edit state directly, doesn't work, use set state method
    //this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 29 }
      ]
    }); //Merges with the state, doesn't change otherState
  };

  render() {
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
