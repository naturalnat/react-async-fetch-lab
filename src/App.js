// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: [], //array of ppl in space
  };

  render() {
    return <div>{this.state.peopleInSpace.map((person) => person.name)}</div>; //returns ppl in space (from fetch below)
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json") //fetch from api 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ //sets state (above)
          peopleInSpace: data.people,
        });
      });
  }
}

export default App;
