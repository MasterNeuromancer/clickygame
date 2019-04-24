import React, { Component } from 'react';
import tiles from "./cards.json";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {

  state = {
    tiles,
    randomNumber: 0,
    score: 0,
    tally: 0
  };

  componentDidMount() {
    this.setState({
      randomNumber: this.getRandomNumber(this.state.tiles)
    });
  }

  getRandomNumber = arr => Math.floor(Math.random() * arr.length + 1);

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  handleTileClick = id => {
    this.setState({ tally: this.state.tally + 1 })
    if (id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1,
        randomNumber: this.getRandomNumber(this.state.tiles)
      });
      this.state.tiles.sort(() => Math.random() - 0.5)
          return true; 
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header score={this.state.score} tally={this.state.tally} />
          <div className="row">
            {this.state.tiles.map(tiles => (
              <Card
                key={tiles.id}
                id={tiles.id}
                name={tiles.name}
                image={tiles.image}
                handleTileClick={this.handleTileClick}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }

}

export default App;
